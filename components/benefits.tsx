import Image from "next/image"

import readBible from "@/public/images/read-bible.jpg"

export default function Benefits() {
    const benefits = [
        {id: 1, title: "GROW SPIRITUALLY", desc: "asdf"},
        {id: 2, title: "SHARED VALUES", desc: "asdf"},
        {id: 3, title: "FRIEND IN CHRIST", desc: "asdf"},
        {id: 4, title: "ALL ARE WELCOME", desc: "asdf"},
    ]

    return (
        <div className="bg-orange-50 py-10">
            <div className="w-10/12 mx-auto text-center">
                <h3 className="text-sm my-2">BENEFITS</h3>

                <h1 className="text-2xl font-semibold my-5">THE BENEFITS OF JOINING OUR COMMUNITY</h1>

                <div>
                    {
                        benefits.map((b) => (
                            <div key={b.id} className="my-5">
                                <Image src={readBible} alt="benefits" width={350} height={350} className="rounded-xl"/>

                                <div className="text-left my-3">
                                    <h1 className="text-xl font-semibold">{b.title}</h1>
                                    <p>{b.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}