import { ReactNode } from "react";

export default function({children}:{
    children: ReactNode
}) {
    return <div>
        <div>Header for the Auth</div>
        {children}
        <div>Footer for the Auth</div>
    </div>
}