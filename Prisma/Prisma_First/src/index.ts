import { PrismaClient } from "@prisma/client";

const client  = new PrismaClient();

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

FindUser();
