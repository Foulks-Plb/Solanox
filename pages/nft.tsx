import { useRouter } from "next/router";
import Image from 'next/image'
import Link from "next/link";


export default function Test () {
    const router = useRouter();
    const query = router.query;

    const AttributesRaw = query.attributes?.toString();
    //const Attributes = AttributesRaw?.split(',')
    
    function present()
    {
        return  (    
          <div className="rounded-xl overflow-hidden mx-auto flex w-96 flex-col justify-center bg-[#0b1a4a]">  
            <Image className="" src={query.link_img} /> 

            <div className="p-5">

                <h1 className="text-2xl font-medium text-white pb-2">{query.name}</h1>
                <p className="text-sm tracking-tight font-light text-white leading-6 my-2">{query.description}</p>
                <small className="text-blue-500 text-xs">{AttributesRaw}</small>
                
                <p className="font-medium bg-[#172a66] my-2 py-2 rounded-lg text-white text-center hover:bg-[#1b3fae] cursor-pointer">
                    {query.price} sol
                </p> 

            </div>
          </div>
    )}

    function notPresent()
    {
        return (<div className="rounded-xl mx-auto flex w-96 justify-center bg-[#0b1a4a]">
                    <p className="p-5 font-medium text-white">Problème pour l'affichage du Nft</p>
                </div>)
        
    }
  
    return (
        <div>        
            {query.link_img ? present() : notPresent()}     
        </div>
    )
  }