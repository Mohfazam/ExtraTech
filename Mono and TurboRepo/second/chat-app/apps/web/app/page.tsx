"use client"

import {TextInput} from '@repo/ui/Text-input'
import { useRouter } from 'next/navigation'

export default function Home(){
  
  const router = useRouter();

  return(
    <div style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }}>
      <TextInput  placeholder='World' size='big'/>
      <button onClick={() => {
        router.push("/chat/123")
      }}>Join Room</button>
    </div>
  )
}