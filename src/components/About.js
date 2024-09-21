// About.js
export default function About() {
    return (
        <section
            id="about"
            className="px-10 w-full flex flex-col lg:flex-row py-20 
                       align-center bg-cyan-950 max-w-5xl mx-auto">
            <div className="flex-1">
                <img src=
"https://media.geeksforgeeks.org/img-practice/Asset1-1641910145.svg"
                    alt="About"
                    className="w-full h-full bg-cover"/>
            </div>
            <div className="flex-1 flex flex-col justify-center
                            items-center gap-5 px-6">
                <div>
                    <h2 className="text-center text-cyan-500
                                   text-5xl font-bold">
                        ABOUT ME
                    </h2>
                </div>
                <p className="text-white">
                    "Actively Seeking as Entry level DevelopmentRole for .NET JAVA Full Stack Developer and UI/UX DESIGNER"!!
                                                             "@CDAC Bangalore 24 PGDAC"
                </p>
                <p className="text-white">
                "A strong Foundation as a fresher with hands-on experience in .NET, Java, and UI/UX design. Proficient in building responsive web applications and designing user-friendly interfaces. Eager to apply my technical and design skills in a dynamic environment to contribute to innovative solutions."
                </p>
            </div>
        </section>
    );
}
