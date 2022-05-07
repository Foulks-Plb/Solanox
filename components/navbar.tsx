import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js"


export function NavBar() {
    

    
    // let  LAMPORTS_Balance: number | undefined;
    
    // async function getBalance(publicKey: PublicKey, connection: Connection)
    // {
    //   LAMPORTS_Balance = await connection.getBalance(
    //     publicKey,
    //     'confirmed'
    //   );
    //   console.log(LAMPORTS_Balance)
    // }

    //getBalance(publicKey!, connection);

    return (
        <nav className="sticky top-0 z-10 px-2 py-2.5 backdrop-filter backdrop-blur-lg">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a href="/" className="flex items-center">
            <svg className="mr-3 h-6 sm:h-9" viewBox="0 0 1530 1530" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1268.06 793.995C1173.55 966.447 1016.58 1096.16 829.41 1156.47C634.798 1219.81 511.441 1176.48 339.832 1095.91C528.666 1112.93 659.405 1111.43 820.636 985.397C909.923 915.817 982.733 827.37 1033.86 726.379C1115.01 736.396 1194.06 759.218 1268.06 793.995V793.995Z" fill="#D81FFA"/>
                <path d="M866.319 511.225C755.953 536.532 652.532 585.887 563.435 655.766C402.204 781.798 369.254 908.365 340.367 1095.91C303.349 909.755 291.153 779.552 399.425 606.017C503.285 439.182 666.983 318.351 857.013 268.255C872.896 348.249 876.036 430.25 866.319 511.225V511.225Z" fill="#17EF97"/>
                <path d="M765 1473.58C1156.34 1473.58 1473.58 1156.34 1473.58 765C1473.58 373.661 1156.34 56.4181 765 56.4181C373.661 56.4181 56.418 373.661 56.418 765C56.418 1156.34 373.661 1473.58 765 1473.58Z" stroke="white" strokeWidth="111.881" strokeMiterlimit="10"/>
            </svg>
                <span className="self-center text-xl font-bold whitespace-nowrap text-white text-2xl">Solanox</span>
            </a>
            
            <ul className="flex content-center md:flex-row md:space-x-8 md:mt-0 md:text-sm ">
                <li>
                    <a href="/" className="block text-white font-bold text-xl">Home</a>
                </li>         
            </ul>

            <WalletMultiButton />
            
        </div>
    </nav>
    );
  }
  