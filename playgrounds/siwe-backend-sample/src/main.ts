import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import  { randomBytes } from 'crypto';
import { SiweMessage } from "siwe";

interface SessionUser {
  address: string; // Adjust according to your user data structure
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
const CSRF_COOKIE_NAME = "X-CSRF-TOKEN";
const port = 80;
const host = 'example.com';
const nonces: Record<string,SessionUser & { signature: string }> = {};

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}))
app.use(cookieParser())
app.use(express.json())

app.get("/auth/get-nonce",async (req,res)=>{
    const nonce = randomBytes(16).toString('hex');
    res.cookie(CSRF_COOKIE_NAME,nonce,{
      secure: true,
      sameSite: 'none',
    })
    return res.json({
        nonce: nonce
    });
});

app.get("/auth/fetch-user", async (req,res)=>{

  const token = req.cookies[CSRF_COOKIE_NAME];
  const user = nonces[token];

  return res.status(200).json(user ? { 
    user: { 
      address: user.address, 
      chainId: user.chainId, 
      domain: user.domain, 
      uri: user.uri, 
      version: user.version
    }  
  }: null);
})
app.post("/auth/login", async (req,res) =>{
    
    const { address: signer, nonce, chainId, domain, uri, version } = req.body["message"];
    const signature = req.body["signature"];

    console.log("Request body [Message]:",req.body["message"]);
    console.log("Request body [Signature]:",req.body["signature"]);

    const message = req.body["message"];
    const signedMessage = new SiweMessage(message)

    const response = await signedMessage.verify({ signature });
    if(!response.success){
      return res.status(401).send({ error: 'Invalid signature' });
    }

    nonces[nonce] = { 
      address: signer, 
      chainId, 
      domain, 
      uri, 
      version, 
      signature 
    };
    return res.status(201).json({ nonce });
});
app.post("/auth/logout", (req,res)=>{
  res.clearCookie(CSRF_COOKIE_NAME,{ secure: true, sameSite: 'none', httpOnly: true, expires: undefined });// Clear the session cookie
  res.json({ message: 'Session destroyed successfully' }); 
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