import Image from "next/image";

import praying from "@/public/images/people-praying.jpg"

export default function About() {
    return (
        <div className="w-10/12 mx-auto my-10 text-center">
            <h3 className="text-sm">WELCOME TO OUR COMMUNITY</h3>
            <h1 className="text-2xl font-semibold my-5">GROW AND BEAR FRUITS TOGETHER</h1>
            <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>

            <div className="my-10 flex flex-col">
                <Image src={praying} alt='ppl' width={200} height={300} className="my-2 rounded-xl"/>
                <Image src={praying} alt='ppl' width={200} height={300} className="my-2 rounded-xl"/>
                <Image src={praying} alt='ppl' width={200} height={300} className="my-2 rounded-xl"/>
            </div>
        </div>
    )
}