import { PrismaClient } from "@prisma/client";
import express from 'express';

const app = express(); 

const client  = new PrismaClient();

app.get("/users", async (req, res) => {
    const users = await client.user.findMany();

    res.status(201).json({
        msg: "All the Users:",
        users: users
    })
})
app.get("/todos/:id", async (req, res) => {

    const id = req.params.id as unknown as number;
    const users = await client.user.findFirst({
        where: {
            id: id
        }, 
        select:{
            todos: true
        }
    });

    res.status(201).json({
        msg: "All the Users:",
        users: users
    })
})

async function createUser() {
    await client.user.update({
        where:{
            id: 1
        },
        data :{
            username: "Mohfazam"
        }

    });
}


async function FindUser() {
    const user = await client.user.findFirst({
        where:{
            id: 1
        }

    });

    console.log(user);
}

async function FindUserTodo() {
    const user = await client.user.findFirst({
        where:{
            id: 1
        }, 
        include: {
            todos: true
        }

    });

    console.log(user);
}

app.listen(3000);