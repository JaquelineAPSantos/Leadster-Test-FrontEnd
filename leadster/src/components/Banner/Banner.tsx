import Image from 'next/image';

export default function Banner() {
    return (
        <div className={`bg-blue-50 flex flex-1 items-center
        justify-center h-[90vh] flex-col lg:mb-50 relative -z-50`}>
            <div className={`rounded-[0.9rem] rounded-bl-[0.25rem] 
            border-2 border-blue-400 p-1 px-5 mb-5 animate-pulse hover:animate-none`}>
                <p className={`text-blue-500 font-extrabold text-sm`}>
                    WEBINARS EXCLUSIVOS
                </p>
            </div>
            <h2 className={`text-2xl md:text-5xl font-medium text-[#2c3e50]`}>
                Menos Conversinha,
            </h2>
            <div className="relative flex flex-col text-3xl md:text-[5rem] xsm:text-[1.8rem] font-bold">
                <h1 className="text-transparent md:leading-[100px] bg-clip-text bg-gradient-to-r
                from-[#2c83fb] from-70% to-[#1f76f0]">
                    Mais Conversão
                </h1>
            </div>
            <div className="w-[8px] h-[6px] md:w-[49px] md:h-[32px] 
            absolute top-1 right-[-5px] md:top-[247px] md:right-[337px] 
            animate-bounce hover:animate-none">
                <Image
                    src="/images/asset-header.png"
                    alt="header asset"
                    fill={true}
                />
            </div>
            <span className="h-[2px] bg-blue-800 bg-opacity-20 w-1/2 my-4 underline"></span>
            <p className="text-center text-base md:text-[1rem] xsm:text-[0.8rem] font-semibold text-[#2c3e50]">
                Conheça as estratégias que{" "}
                <span className="font-extrabold">
                    mudaram o jogo <br className="md:hidden" />
                </span>
                e como aplicá-las no seu negócio
            </p>
        </div>
    )
}