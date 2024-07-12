import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import { doubleCsrf } from "csrf-csrf";

const app = express();
const CSRF_SECRET = "rainbowkit_siwe_csrf_secret"; /// not ideal for production.
const COOKIES_SECRET = "rainbowkit_siwe_cookie_secret"; /// not ideal for production
const CSRF_COOKIE_NAME = "X-CSRF-TOKEN";

const {
    generateToken, // Use this in your routes to provide a CSRF hash + token cookie and token.
    doubleCsrfProtection, // This is the default CSRF protection middleware.
  } = doubleCsrf({
    getSecret:()=> CSRF_SECRET,
    cookieName: CSRF_COOKIE_NAME,
    cookieOptions: { sameSite: 'none', secure: true } /// not ideal for production
});

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  exposedHeaders: ["set-cookie"],
}))
app.use(cookieParser(COOKIES_SECRET))
//app.use(doubleCsrfProtection);
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}));

app.get("/get-crsf-token",async (req,res)=>{
    res.setHeader("Access-Control-Allow-Credentials", "true");
    return res.json({
        token: generateToken(req,res)
    });
});

app.post("/auth/login", (req,res)=>{
    console.log("Request body [Message]:",req.body["message"]);
    console.log("Request body [Signature]:",req.body["signature"]);
    return res.status(200).send({ data: { address: req.body["message"]["address"], roles: "wallet_owner" } });
});
app.post("/auth/logout", (_,res)=>{
    return res.status(200).send({ result: "logout successfully" });
});

app.use((req, res) => {
  console.log("Unhandled request:", req.method, req.url);
  res.status(404).send('Not Found');
});

const start = () => {
    try {
      app.listen(3001, () => console.log("Server started on port 3001"));
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };
  
start();