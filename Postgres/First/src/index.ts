import { Client, Query } from "pg";

const pgClient = new Client("postgresql://neondb_owner:npg_RTzw5X1mglJV@ep-calm-fire-a1l4vgj7-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require");

// const pgClient = new Client({
//     user: "neondb_owner",
//     password: "npg_RTzw5X1mglJV",
//     port: 5432,
//     host: "ep-calm-fire-a1l4vgj7-pooler.ap-southeast-1.aws.neon.tech",
//     database: "neondb",
//     ssl: true
// });

async function main() {
    await pgClient.connect();

    const response = await pgClient.query("SELECT * FROM users;");
    console.log(response.rows);
}

main()