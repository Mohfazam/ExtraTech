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
        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`
        const response = await pgClient.query(insertQuery, [username,email, password ]);

        const userId = response.rows[0].id;
        console.log(userId);

        const addressInsertQuery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES($1, $2, $3, $4, $5)`
        const addressInsertResponse = await pgClient.query(addressInsertQuery, [city, country, street, pincode, userId])

        res.status(201).json({
            message: "You Have Signed Up!"
        })
    }catch(error){
        res.status(500).json({
            Msg: "Error while signing up"
        })
    }

    
});


app.listen(3000, () => {
    console.log("Server Running at PORT 3000");
});