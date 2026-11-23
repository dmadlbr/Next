'use client'

type productType = {
        product: {
            id:number
            title:string
        }
    }


export default function Fetch({product}:productType){

    return <div onClick={()=>alert(product.title)}>{product.title}</div>


}