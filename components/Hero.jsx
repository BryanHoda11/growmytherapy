"use client"
import Image from "next/image"

const Hero = () => {
    return (
        <>
            <div className="relative w-full h-[600px]">
                <Image src="/images/hero-bg.webp" alt="hero-banner" fill className="object-cover" />
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

                <div className="absolute z-20 inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
                    <h1 className="text-3xl font-bold w-1/2 text-center">Psychological help with Mental Stress, Relationship Issues, Depression & more</h1>
                    <h2 className="my-4">Feel free to reach out and ask any queries your facing problems with!</h2>
                    <button className="bg-white w-fit text-black text-center px-4 py-2 rounded-lg cursor-pointer font-bold hover:rounded-xl transition-all ease-in">Book a session</button>
                </div>
            </div>

        </>
    )
}

export default Hero
