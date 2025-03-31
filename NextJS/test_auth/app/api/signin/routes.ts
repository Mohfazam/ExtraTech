import jwt from 'jsonwebtoken'
import { NextRequest } from 'next/server';


export async function POST(req: NextRequest){

    const body = await req.json();

    const userId = 1;
    const token = jwt.sign({
        userId
    }, "SECRET");
}