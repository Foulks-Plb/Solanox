import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import Head from 'next/head';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image'
import { NftCard } from '../components/nftCard';
import { Slider } from '../components/slider';


export default function Home (allNft: any) {

  return (
    <div>
      <Slider Random1={allNft.data[Math.floor(Math.random() * 50)].link_img} Random2={allNft.data[Math.floor(Math.random() * 50)].link_img}/>
      <div className="grid sm:grid-cols-2 lg:grid-cols-6">          
      {allNft.data.map((e: any) => 
        <NftCard key={e.id} nft={e}/>
      )}
    </div>
    </div>
    
  )
}

export const getServerSideProps = async () => {
  const { data } = await axios.get(`https://api.solanart.io/query_random_nfts`);
  
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};


