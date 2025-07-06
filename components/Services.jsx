"use client"
import Image from "next/image"

const Services = () => {
    const Services = [
        {
            img: '/images/relationship.webp',
            name: 'Relationship issues',
            desc: 'I will address the issue the couple is going through and try to resolve the conflict in the best way!'
        },
        {
            img: '/images/depression.webp',
            name: 'Overcoming depression',
            desc: 'People going through depression or feeling lost, feel free to join, it it will feel like a hug!'
        },
        {
            img: '/images/stress.webp',
            name: 'Resolving mental stress',
            desc: 'Mental health is really important, so in case you are not in your best mental health please do join!'
        }
    ]
    return (
        <>
            <div className="service-container my-10">
                <h1 className="text-lg sm:text-2xl text-center font-semibold pb-3">My specialities</h1>
                <div className="services flex flex-col lg:flex-row w-full sm:w-[85%] mx-auto justify-center items-center gap-4">
                    {Services.map((s) => (
                        <div key={s.name} className="service-card min-w-[250px] min-h-80 border-[1px] rounded-lg flex flex-col gap-3 px-4 py-2 items-center justify-center">
                            <img src={s.img} className="object-fit" alt="service" />
                            <h3><strong>{s.name}</strong></h3>
                            <p className="text-center max-sm:text-sm">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Services
