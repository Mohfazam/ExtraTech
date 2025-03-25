import {Client, Query} from "pg";


const pgClient = new Client("postgresql://neondb_owner:npg_RTzw5X1mglJV@ep-calm-fire-a1l4vgj7-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require");

pgClient.connect();

async function main(){
    const response  = await pgClient.query()
}