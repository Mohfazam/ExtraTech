import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { NextResponse } from "next/server";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
          name: "Login With Email",
          credentials: {
            username: { label: "Username", type: "text", placeholder: "username" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            const username = credentials?.username;
            const password = credentials?.password;
      
            const user = {
                name: "sarwar",
                id: "1",
                username: "sarwar@email.com"
            }

            if(user){
                return user;
            } else{
                return null;
            }
          }
        })
      ]
})

export {handler as GET, handler as POST}
