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
const csrf_csrf_1 = require("csrf-csrf");
const app = (0, express_1.default)();
const CSRF_SECRET = "rainbowkit_siwe_csrf_secret"; /// not ideal for production.
const COOKIES_SECRET = "rainbowkit_siwe_cookie_secret"; /// not ideal for production
const CSRF_COOKIE_NAME = "X-CSRF-TOKEN";
const { generateToken, // Use this in your routes to provide a CSRF hash + token cookie and token.
doubleCsrfProtection, // This is the default CSRF protection middleware.
 } = (0, csrf_csrf_1.doubleCsrf)({
    getSecret: () => CSRF_SECRET,
    //cookieName: CSRF_COOKIE_NAME,
    cookieOptions: { sameSite: false, secure: false } /// not ideal for production
});
app.use((0, cors_1.default)({
    origin: 'http://localhost:3001',
    credentials: true,
    exposedHeaders: ["set-cookie"],
}));
app.use((0, cookie_parser_1.default)(COOKIES_SECRET));
app.use(doubleCsrfProtection);
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.get("/get-crsf-token", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Calling get csrf token");
    return res.json({
        token: generateToken(req, res)
    });
}));
app.use((req, res) => {
    console.log("Unhandled request:", req.method, req.url);
    res.status(404).send('Not Found');
});
///Already csrf protected. 
app.post("/auth/login", (req, res) => {
    console.log("Request body:", JSON.parse(req.body));
    return res.status(200).send({ result: "login successfully" });
});
app.post("/auth/logout", (_, res) => {
    return res.status(200).send({ result: "logout successfully" });
});
const start = () => {
    try {
        app.listen(3001, () => console.log("Server started on port 3001"));
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
};
start();
