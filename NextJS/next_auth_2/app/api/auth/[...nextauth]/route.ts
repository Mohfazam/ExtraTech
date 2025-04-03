import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({

    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
              username: { label: "Username", type: "text", placeholder: "Username" },
              password: { label: "Password", type: "password", placeholder: "Password" }
            },
            async authorize(credentials, req) {
              
                return{
                    username: "sarwar",
                    id:"1",
                    email: "Sarwar@email.com"
                }
            }
          })
    ]

});

export const GET = handler;
export const POST = handler;
