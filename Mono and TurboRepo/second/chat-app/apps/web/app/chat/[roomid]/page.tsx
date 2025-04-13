import { TextInput } from "@repo/ui/Text-input";

export default function ChatRoom() {
    return(
        <div style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent:"space-between",
            flexDirection:"column"
        }}>
        <div>
        Chatroom
        </div>

        <div>
            <TextInput placeholder="Enter your Msg" size="big"/>
        </div>
        </div>
    )
}