import Image from "next/image";
import { type Metadata } from "next";

export const metadata:Metadata = {
    title:"IMAGE ",
    description:"this is an image"
}



export default function Contact(){
    return <div>
        <Image 
        src="/image.png"
        alt="flower"
        height={500}
        width={500}
        loading="lazy" 
        
        />

        <Image 
        src="/window.svg"
        alt="flower"
        height={500}
        width={500}
        loading="lazy"  
        />
    </div>
}