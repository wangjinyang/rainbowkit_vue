import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import session from "express-session";
import { randomBytes } from "crypto";
import { doubleCsrf } from "csrf-csrf";
import { SiweMessage } from "siwe";

interface SessionUser {
  address: string; // Adjust according to your user data structure
  nonce: string; // Add other user-related fields if necessary
  chainId: number;
  domain: string;
  uri: string;
  version: string;
}
declare module 'express-session' {
  interface SessionData {
    user: SessionUser; // Define the 'user' property in the session data
    // Add other session-related fields if necessary
  }
}

const app = express();
const CSRF_SECRET = "rainbowkit_siwe_csrf_secret"; /// not ideal for production.
const COOKIES_SECRET = "rainbowkit_siwe_cookie_secret"; /// not ideal for production
const SESSION_SECRET_KEY = "rainbowkit_session_user_secret";  /// not ideal for production
const SESSION_NAME = "rainbowkit-session-user";
const CSRF_COOKIE_NAME = "X-CSRF-TOKEN";
const port = 3001;
const host = 'server.localhost.tld';
const nonces: Record<string,SessionUser> = {};

const {
    generateToken, 
    //doubleCsrfProtection, 
  } = doubleCsrf({
    getSecret:()=> CSRF_SECRET,
    cookieName: CSRF_COOKIE_NAME,
    cookieOptions: { sameSite: 'none', secure: false } /// not ideal for production
});

app.use(cookieParser(COOKIES_SECRET))
app.use(cors({
  origin: 'http://client.localhost:5173',
  credentials: true,
  exposedHeaders: ["set-cookie"],
}))
app.use(session({
  name: SESSION_NAME,
  secret: SESSION_SECRET_KEY, // Use a strong secret key for signing the session ID cookie
  resave: false, // Avoid resaving session if not modified
  saveUninitialized: true, // Save uninitialized sessions
  cookie: { secure: false, sameSite: 'none' } // Set secure: true if using HTTPS
}));

//app.use(doubleCsrfProtection);
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}));


app.get("/auth/get-token",async (req,res)=>{
    ///this generate csrf protection 
    ///generateToken(req,res); 
    ///this generate random get-nonce 
    const nonce = randomBytes(16).toString('hex');
    return res.json({
        token: nonce
    });
});

app.get("/auth/fetch-user", async (req,res)=>{
  //const address = req.body["address"];
  //const user = nonces[address];
  const user = req.session.user;
  console.log("User:", user);
  return res.status(200).json(nonces["0xC9Fd7A218d09392304715C6BB03D8B817f0e884b"]);
})
app.post("/auth/login", async (req,res) =>{
    const { address: signer, nonce, chainId, domain, uri, version } = req.body["message"];
    const signature = req.body["signature"];

    console.log("Request body [Message]:",req.body["message"]);
    console.log("Request body [Signature]:",req.body["signature"]);

    const message = req.body["message"];
    const signedMessage = new SiweMessage(message)

    const response = await signedMessage.verify({ signature });
    console.log("Login:", response.data);
    if(!response.success){
      return res.status(401).send({ error: 'Invalid signature' });
    }

    nonces[signer] = { nonce, address: signer, chainId, domain, uri, version };
    req.session.user = { nonce, address: signer, chainId, domain, uri, version }; 
    req.session.save();
    return res.status(200).json({ user: { nonce, address: signer, chainId, domain, uri, version } });
});
app.post("/auth/logout", (req,res)=>{

    req.session.destroy((err) => {
      if (err) {
        console.error('Failed to destroy session:', err);
        res.status(500).json({ error: 'Failed to destroy session' });
      } else {
        res.clearCookie(SESSION_NAME); // Clear the session cookie
        res.json({ message: 'Session destroyed successfully' });
      }
    });
    //return res.status(200).send({ result: "logout successfully" });
});

app.use((req, res) => {
  console.log("Unhandled request:", req.method, req.url);
  res.status(404).send('Not Found');
});

const start = () => {
    try {
      app.listen(port,host, () => console.log(`Server running at http://${host}:${port}/`));
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };
  
start();