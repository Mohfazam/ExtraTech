"use client"
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <RealHome />
    </SessionProvider>
  );
}

export function RealHome() {
  const session = useSession();

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Hello from landing page</h1>
      
      <div className="flex justify-center items-center">
        {session.status === "authenticated" ? (
          <div className="mt-6">
            <button 
              onClick={() => signOut()}
              className="px-6 py-3 bg-red-500 text-white font-medium rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="mt-6">
            <button 
              onClick={() => signIn()}
              className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
}