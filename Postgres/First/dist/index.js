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
const pg_1 = require("pg");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const pgClient = new pg_1.Client("postgresql://neondb_owner:npg_RTzw5X1mglJV@ep-calm-fire-a1l4vgj7-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require");
pgClient.connect();
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const city = req.body.city;
    const country = req.body.country;
    const street = req.body.street;
    const pincode = req.body.pincode;
    try {
        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`;
        const addressInsertQuery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES($1, $2, $3, $4, $5)`;
        pgClient.query("BEGIN;");
        const response = yield pgClient.query(insertQuery, [username, email, password]);
        const userId = response.rows[0].id;
        console.log(userId);
        const addressInsertResponse = yield pgClient.query(addressInsertQuery, [city, country, street, pincode, userId]);
        pgClient.query("COMMIT;");
        res.status(201).json({
            message: "You Have Signed Up!"
        });
    }
    catch (error) {
        res.status(500).json({
            Msg: "Error while signing up"
        });
    }
}));
app.get("/metadata", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    try {
        const query1 = `SELECT * FROM users WHERE id=$1`;
        const response1 = yield pgClient.query(query1, [id]);
        const query2 = `SELECT FROM addresses WHERE user_id=$1`;
        const response2 = yield pgClient.query(query2, [id]);
        res.status(201).json({
            user: response1.rows[0],
            addresses: response2.rows[0]
        });
    }
    catch (err) {
        res.status(400).json({
            msg: "error",
            error: err
        });
    }
}));
app.get("/better-metadata", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    const query = `SELECT users.id, users.username, users.email, addresses.city, addresses.city, addresses.country, addresses.street, addresses.pincode 
FROM users JOIN addresses ON users.id = addresses.user_id 
WHERE users.id = $1;`;
    const response = yield pgClient.query(query, [id]);
    res.status(201).json({
        msg: response.rows
    });
}));
app.listen(3000, () => {
    console.log("Server Running at PORT 3000");
});
