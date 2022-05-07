import Link from "next/link"
import Image from 'next/image'
import { Inft } from "../interfaces/Inft"


export function NftCard({nft}) {

  const thisNFT: Inft = {
    name: nft.name,
    price: nft.price,  
    link_img: nft.link_img,
    description: nft.description,
    attributes: nft.attributes,
  };

    return (
      <Link as="/nft" href={{ pathname: "/nft", query: thisNFT, }}>
        <div className="hover:scale-105 px-3 py-3 duration-200 container text-white">      
            <div className="p-4 -m-4">
              <div className="rounded-xl overflow-hidden bg-[#0b1a4a]">
              <Image className="w-full aspect-square object-cover object-center" src={thisNFT.link_img} />

                <div className="p-6">
                  <h1 className="title-font text-lg font-medium mb-3 whitespace-nowrap shrink ">{thisNFT.name}</h1>
                  <button className="font-medium bg-[#172a66] px-4 py-1 rounded-lg hover:bg-[#1b3fae] whitespace-nowrap">
                    {thisNFT.price} sol
                  </button>                   
                </div>

              </div>
            </div>        
        </div>
        </Link>
    );

}