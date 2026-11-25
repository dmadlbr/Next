import { NextResponse } from "next/server"

export async function GET(){
    // return new Response("helo")
    return  NextResponse.json(
    [
        {id:1,name:"Nicholas"},
        {id:2,name:"Marker"}
    ])
}
