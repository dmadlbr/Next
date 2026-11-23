"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

export const Header = () =>{
    const router = useRouter();
    return <header>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <button onClick={()=>router.push("/contact")}>Contact</button>
        <button onClick={()=>router.push("/products")}>Products</button>
    </header>
}