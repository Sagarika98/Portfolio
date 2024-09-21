
//import { Profiler } from 'react';
import Profile from '../assets/Profile.jpg';
export default function Hero() {
    return (
      <section
        id="hero"
        className="px-10 w-full flex gap-12 flex-col lg:flex-row 
                   justify-center items-center align-center mt-40 
                   mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]">
        <div className="flex-1 flex flex-col justify-center items-center gap-5">
          <div>
            <h4 className="text-center text-xl font-bold text-white">
                Hi,Welcome to My Portfolio Website
            </h4>
            <h3 className="text-center text-cyan-500 text-5xl font-bold">
              SAGARIKA SINGH
            </h3>
          </div>
          <p className="text-center text-white">
          DOT.NET JAVA Full Stack Developer| ReactJS | UI/UX DESIGNER.
          </p>
          
        </div>
        <div className="flex-1">
          <img src=
  {Profile}
               alt=""
               className="w-full h-full bg-cover"/>
        </div>
      </section>
    );
  }
