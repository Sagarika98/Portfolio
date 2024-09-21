import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className="w-full px-5 sm:px-10 py-5 shadow-xl 
                        backdrop-blur-lg fixed top-0 z-10">
            <div className="container flex flex-col lg:flex-row
                            gap-5 justify-between w-full 
                            items-center max-w-5xl mx-auto">
                <h6 className="text-3xl text-cyan-500 font-bold">
                Hello, Developer Minds!!   </h6>
                <ul className="flex gap-3 align-center p-1 flex-wrap">
                    <li>
                        <a className="text-sm sm:text-base px-2 lg:px-5 
                                      py-2 transition rounded hover:text-white 
                                      text-cyan-500"
                           href="#about">
                        ABOUT
                        </a>
                    </li>
                    <li>
                        <a className="text-sm sm:text-base px-2 lg:px-5 py-2 
                                      transition rounded hover:text-white 
                                     text-cyan-500"
                            href="#skills">
                            SKILLS
                        </a>
                    </li>
                    <li>
                        <a className="text-sm sm:text-base px-2 lg:px-5 py-2 
                                      transition rounded hover:text-white 
                                      text-cyan-500"
                            href="#projects">
                            PROJECTS
                        </a>
                    </li>
                    <li>
                        <a className="text-sm sm:text-base px-2 lg:px-5 py-2 
                                      transition rounded hover:text-white 
                                      text-cyan-500"
                            href="#contact">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
