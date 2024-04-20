export default function Blog() {
    const blogs = [
        {id: 1, subject: "RELATIONSHIP", title: "THIS IS THE TITLE", shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", writer: "Imelda Wu", date: "asdf"}
    ]

    return (
        <div className="w-10/12 mx-auto text-center my-10">
            <h3 className="text-sm">READ OUR BLOG</h3>

            <h1 className="text-2xl font-semibold mt-2 mb-4">SHARE, INSPIRE, INNOVATE</h1>

            <div>
                {
                    blogs.map((b) => (
                        <div key={b.id} className="text-left bg-orange-100 px-5 py-10 hover:border-b-4 hover:border-orange-400">
                            <h4 className="text-sm">{b.subject}</h4>
                            <h1 className="mt-2 mb-4 text-2xl font-semibold">{b.title}</h1>
                            <p>{b.shortDesc}</p>

                            <h3 className="mt-12 text-lg">By {b.writer}</h3>
                            <p>{b.date}</p>
                        </div>
                    ))
                    
                }
            </div>
        </div>
    )
}