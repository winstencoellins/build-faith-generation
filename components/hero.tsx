import Image from "next/image"
import bible from "@/public/images/bible.jpg"

export default function Hero() {
    return (
        <div className="bg-[url('/images/hero.jpg')] bg-cover bg-no-repeat bg-center">
            <div className="w-10/12 mx-auto">
                <div className="py-10">
                    <h1 className="text-3xl font-bold">Welcome, let&apos;s build our faith together in Him in this generatoin.</h1>

                    <div className="my-5 italic">
                        <h3 className="text-white"><span className="text-xs font-semibold">14</span> &ldquo;You are the light of the world. A town built on a hill cannot be hidden. <span className="text-xs font-semibold">15</span> Neither do people light a lamp and put it under a bowl. Instead they put it on its stand, and it gives light to everyone in the house. <span className="text-xs font-semibold">16</span> In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven.&rdquo;</h3>

                        <h4 className=" text-right">Matthew 5:14-16</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}