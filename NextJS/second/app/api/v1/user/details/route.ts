import { NextResponse } from "next/server"

export function GET(){
    return NextResponse.json({
        user: "Sarwar Khan",
        email: "mohd.sarwar.code@gmail.com"
    })
}

export function POST(){
    return NextResponse.json({
        user: "Sarwar Khan",
        email: "mohd.sarwar.code@gmail.com"
    })
}

export function PUT(){
    return NextResponse.json({
        user: "Sarwar Khan",
        email: "mohd.sarwar.code@gmail.com"
    })
}
