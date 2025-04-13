import {TextInput} from '@repo/ui/Text-input'

export default function Home(){
  return(
    <div style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>

      Hello
      <TextInput placeholder='World'/>
    </div>
  )
}