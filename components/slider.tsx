import Image from 'next/image'

export function Slider({Random1, Random2}) {

    return (
        <div className="mt-6 mb-6">
            
            <p className="title-font text-lg font-bold text-white text-center text-2xl">🔥 top selling 🔥</p>
            <div className="flex place-content-center">

                <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="#17EF97" width="22" className="animate-pulse">
                    <path d="m9 0 2.756 6.244L18 9l-6.244 2.756L9 18l-2.756-6.244L0 9l6.244-2.756L9 0Z"></path>
                </svg>

                <Image className="hover:scale-105 duration-200 rounded-xl aspect-square w-40 m-4" src={Random1} />
                <Image className="hover:scale-105 duration-200 rounded-xl aspect-square w-40 m-4" src={Random2} />

                <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="#17EF97" width="22" className="animate-pulse">
                    <path d="m9 0 2.756 6.244L18 9l-6.244 2.756L9 18l-2.756-6.244L0 9l6.244-2.756L9 0Z"></path>
                </svg>

            </div>
        </div>
        
    );

}