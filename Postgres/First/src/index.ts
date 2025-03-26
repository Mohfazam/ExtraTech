import { Client, Query } from "pg";
import  express  from "express";

const app = express();
app.use(express.json())

const pgClient = new Client("postgresql://neondb_owner:npg_RTzw5X1mglJV@ep-calm-fire-a1l4vgj7-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require");
pgClient.connect();


app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const city = req.body.city;
    const country = req.body.country;
    const street = req.body.street;
    const pincode = req.body.pincode;

    try{
        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`;

        const addressInsertQuery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES($1, $2, $3, $4, $5)`;


        pgClient.query("BEGIN;");
        const response = await pgClient.query(insertQuery, [username,email, password ]);

        const userId = response.rows[0].id;
        console.log(userId);

        
        const addressInsertResponse = await pgClient.query(addressInsertQuery, [city, country, street, pincode, userId]);

        pgClient.query("COMMIT;");

        res.status(201).json({
            message: "You Have Signed Up!"
        })
    }catch(error){
        res.status(500).json({
            Msg: "Error while signing up"
        })
    }

    
});

app.get("/metadata", async (req, res) => {
    const id = req.query.id;

    try{
        const query1 = `SELECT * FROM users WHERE id=$1`;
    const response1 = await pgClient.query(query1, [id]);

    const query2 = `SELECT FROM addresses WHERE user_id=$1`;
    const response2 = await pgClient.query(query2, [id]);

    res.status(201).json({
        user: response1.rows[0],
        addresses: response2.rows[0]
    })
    } catch(err){
        res.status(400).json({
            msg: "error",
            error: err
        });
    }
})

app.get("/better-metadata", async (req, res) => {
    const id = req.query.id;
    const query = `SELECT users.id, users.username, users.email, addresses.city, addresses.city, addresses.country, addresses.street, addresses.pincode 
FROM users JOIN addresses ON users.id = addresses.user_id 
WHERE users.id = $1;`

const response = await pgClient.query(query, [id]);

res.status(201).json({
    msg: response.rows
})
});
 

app.listen(3000, () => {
    console.log("Server Running at PORT 3000");
});