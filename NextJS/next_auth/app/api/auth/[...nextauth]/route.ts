import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

import { NextResponse } from "next/server";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
          name: "Email",
          credentials: {
            username: { label: "Username", type: "text", placeholder: "username" },
            password: { label: "Password", type: "password", placeholder:"password" }
          },
          async authorize(credentials, req) {
            const username = credentials?.username;
            const password = credentials?.password;

            console.log(username);
            console.log(password);
      
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
        }),
        GoogleProvider({
            clientId: "process.env.GOOGLE_CLIENT_ID",
            clientSecret: "process.env.GOOGLE_CLIENT_SECRET"
            
          }),
          GitHubProvider({
            clientId: "process.env.GITHUB_ID",
            clientSecret: "process.env.GITHUB_SECRET"
          })
      ]
})

export {handler as GET, handler as POST}
