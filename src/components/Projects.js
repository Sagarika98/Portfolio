
import Freelance from "../assets/Freelance.png"
import mern from "../assets/mern.png"
export default function Projects() {
    return (
        <section id="projects"
                 className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">
            <h2 className="text-5xl  font-bold text-cyan-500 text-center">
                PROJECTS
            </h2>
            <div className="p-10 bg-cyan-950 flex flex-col justify-center items-center
                            gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href=
"https://github.com/Sagarika98"
                        className="w-full h-full">
                        <img src=
{Freelance}
                             alt="Project 1"
                             className="w-full h-full 
                                        bg-cover rounded"/>
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center text-white">
                        <a className="hover:underline"
                            href=
"https://github.com/Sagarika98">

                            Freelance Job Portal Application
                        </a>
                    </h2>
                    <p className="text-white">
                    The Freelance Job Portal is a modern, scalable platform built with React,
Spring Boot, and MySQL to connect freelancers with clients. It features
robust job matching algorithms, seamless communication tools, and easy
profile management.
                    </p>
                </div>
            </div>
            <div className="p-10 bg-cyan-950 flex flex-col justify-center items-center gap-5 
                            lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
                            hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href=
"https://github.com/Sagarika98"
                       className="w-full h-full">
                        <img src=
{mern}
                             alt="Project 2"
                             className="w-full h-full bg-cover rounded" />
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center text-white">
                        <a className="hover:underline" href=
"https://github.com/Sagarika98">
                            We Share Application 
                        </a>
                    </h2>
                    <p className="text-white">
                    This project helps the users to interact with their
friends which is based on MERN STACK.Our project can limit into college where we think the alumni portal
of college should replace with these social media where users (student) can
interact in such a way that they can share the projects, ideas, notes when
needed and jobs referral too.

                    </p>
                </div>
            </div>
        </section>
    );
}
