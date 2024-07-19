"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_session_1 = __importDefault(require("express-session"));
const crypto_1 = require("crypto");
const ethers_1 = require("ethers");
const csrf_csrf_1 = require("csrf-csrf");
const app = (0, express_1.default)();
const CSRF_SECRET = "rainbowkit_siwe_csrf_secret"; /// not ideal for production.
const COOKIES_SECRET = "rainbowkit_siwe_cookie_secret"; /// not ideal for production
const SESSION_SECRET_KEY = "rainbowkit_session_user_secret"; /// not ideal for production
const SESSION_NAME = "rainbowkit-session-user";
const CSRF_COOKIE_NAME = "X-CSRF-TOKEN";
const port = 3001;
const host = 'server.localhost.tld';
const nonces = {};
const { generateToken,
//doubleCsrfProtection, 
 } = (0, csrf_csrf_1.doubleCsrf)({
    getSecret: () => CSRF_SECRET,
    cookieName: CSRF_COOKIE_NAME,
    cookieOptions: { sameSite: 'none', secure: false } /// not ideal for production
});
app.use((0, cookie_parser_1.default)(COOKIES_SECRET));
app.use((0, cors_1.default)({
    origin: 'http://client.localhost:5173',
    credentials: true,
    exposedHeaders: ["set-cookie"],
}));
app.use((0, express_session_1.default)({
    name: SESSION_NAME,
    secret: SESSION_SECRET_KEY, // Use a strong secret key for signing the session ID cookie
    resave: false, // Avoid resaving session if not modified
    saveUninitialized: true, // Save uninitialized sessions
    cookie: { secure: false, sameSite: 'none' } // Set secure: true if using HTTPS
}));
//app.use(doubleCsrfProtection);
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.get("/auth/get-token", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    ///this generate csrf protection 
    ///generateToken(req,res); 
    ///this generate random get-nonce 
    const nonce = (0, crypto_1.randomBytes)(16).toString('hex');
    return res.json({
        token: nonce
    });
}));
app.get("/auth/fetch-user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //const address = req.body["address"];
    //const user = nonces[address];
    return res.send(200).json(req.session.user);
}));
app.post("/auth/login", (req, res) => {
    const { address: signer, nonce, chainId, domain, uri, version } = req.body["message"];
    const signature = req.body["signature"];
    console.log("Request body [Message]:", req.body["message"]);
    console.log("Request body [Signature]:", req.body["signature"]);
    const expected = `
      domain: client.localhost:5173
      address: ${signer}
      statement: Sign in with Ethereum to the app.
      uri: 'http://client.localhost:5173'
      version: 1
      chainId: 1
      nonce: ${nonce}
      issuedAt: ${new Date().toISOString()}
      scheme: http
    `;
    const verifiedAddress = ethers_1.ethers.verifyMessage(expected, signature);
    if (verifiedAddress.toLowerCase() !== signer.toLowerCase()) {
        return res.status(401).send({ error: 'Invalid signature' });
    }
    nonce[signer] = { nonce, address: signer, chainId, domain, uri, version };
    req.session.user = { nonce, address: signer, chainId, domain, uri, version };
    req.session.save();
    return res.status(200);
});
app.post("/auth/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            res.status(500).json({ error: 'Failed to destroy session' });
        }
        else {
            res.clearCookie(SESSION_NAME); // Clear the session cookie
            res.json({ message: 'Session destroyed successfully' });
        }
    });
    return res.status(200).send({ result: "logout successfully" });
});
app.use((req, res) => {
    console.log("Unhandled request:", req.method, req.url);
    res.status(404).send('Not Found');
});
const start = () => {
    try {
        app.listen(port, host, () => console.log(`Server running at http://${host}:${port}/`));
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
};
start();
