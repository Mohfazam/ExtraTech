import { Navbar } from "../components/Navbar";
//@ts-ignore
export default function AuthLayout({children}){
    return(
        <div>
            <Navbar />
            {children}
        </div>
    )
}