
// export default function Skills() {
//     const skills = ["C#", "Core Java", "Python", "ASP.NET", "ReactJS", "Bootstrap","MYSQL Database", "MongoDB","Figma", "Adobe XD","GitHub"];
//     return (
//         <section id="skills"
//             className="px-10 w-full my-40 max-w-5xl mx-auto">
//             <h2 className="text-center text-6xl text-cyan-500 font-bold">
//                 SKILLS
//             </h2>
//             <div className="mt-10 flex gap-5 justify-center 
//                             flex-wrap mx-auto max-w-xl">
//                 {skills.map((skill, index) => {
//                     return (
//                         <div key={index}
//                              className="cursor-pointer px-12 py-10 
//                                         rounded bg-indigo-300 text-lg 
//                                         flex items-center justify-center 
//                                         font-bold hover:shadow-xl">
//                             {skill}
//                         </div>
//                     )})}
//             </div>
//         </section>
//     )
// }


// Importing the icons
import html5Icon from "../assets/icons/html5Icon.png"; // Replace with the correct path to the HTML5 icon
import CSharpIcon from "../assets/icons/CSharpIcon.png";
import CoreJavaIcon from "../assets/icons/CoreJavaIcon.png";
import PythonIcon from "../assets/icons/PythonIcon.png";
import ASPNETIcon from "../assets/icons/ASP.NET.png";
import ReactJsIcon from "../assets/icons/ReactJs.jpg";
import BootstrapIcon from "../assets/icons/Bootstrap.jpg";
import MYSQLIcon from "../assets/icons/mysql.svg";
import MongodbIcon from "../assets/icons/Mongodb.png";
import FigmaIcon from "../assets/icons/Figma.webp";
import AdobeXDIcon from "../assets/icons/AdobeXD.png";
import GitHubIcon from "../assets/icons/Github.png";



export default function Skills() {
    const skills = [
        { name: "HTML5", icon: html5Icon }, 
        { name: "C#", icon: CSharpIcon }, 
        { name: "Core Java", icon: CoreJavaIcon},
        { name: "Python", icon: PythonIcon },
        { name: "ASP.NET", icon: ASPNETIcon },
        { name: "ReactJS", icon: ReactJsIcon },
        { name: "Bootstrap", icon: BootstrapIcon },
        { name: "MYSQL Database", icon: MYSQLIcon },
        { name: "MongoDB", icon: MongodbIcon },
        { name: "Figma", icon: FigmaIcon },
        { name: "Adobe XD", icon: AdobeXDIcon },
        { name: "GitHub", icon: GitHubIcon}
    ];

    return (
        <section id="skills" className="px-10 w-full my-40 max-w-5xl mx-auto">
            <h2 className="text-center text-6xl text-cyan-500 font-bold">
                SKILLS
            </h2>
            <div className="mt-10 flex gap-5 justify-center flex-wrap mx-auto max-w-xl">
                {skills.map((skill, index) => (
                    <div key={index} className="cursor-pointer px-12 py-10 rounded text-lg flex items-center justify-center font-bold hover:shadow-xl">
                        {/* Display the icon if available */}
                        <img src={skill.icon} alt="skill" className="w-25 h-20 mr-5" />
                        {/* {skill.name} */}
                    </div>
                ))}
            </div>
        </section>
    );
}
