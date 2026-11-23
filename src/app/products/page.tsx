// export default async function Products(){
//     "use cache"
//     const response = await fetch('https://dummyjson.com/products');
//     const data = await response.json();
//     console.log(data);

import Fetch from "@/component/fetching";
import { Suspense } from "react";
//     return <div>
       
//         <h1>PRODUCTS</h1>
//         {data.products.map((product:any)=>{
//            return <p key={product.id}>{product.title}</p>
//         })}

//     </div>
 
// }
            
 async function Products(){

    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
 
    
    return <div>
       
        <h1>PRODUCTS</h1>

        {data.products.map((product:any)=>{
           return <Fetch key={product.id} product={product} />
        })}

    </div>
 
}

export default function App () {
    return <>
        <Suspense fallback={<div>loading....</div>}>
             <Products />
         </Suspense>
    </>
 
}