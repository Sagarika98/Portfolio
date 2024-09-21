// Contact.js
export default function Contact() {
    return (
        <section id="contact" className="my-20 md:my-40 text-center max-w-5xl mx-auto p-3">
            <h2 className="text-3xl md:text-5xl font-bold text-cyan-500">
                CONTACT
            </h2>
            <div className="flex flex-col md:flex-row gap-5 justify-center items-center my-10">
                {/* GitHub Link */}
                <a rel="noreferrer" target="_blank" className="text-center hover:underline text-white flex items-center gap-2 break-words max-w-xs md:max-w-sm" href="https://github.com/Sagarika98">
                    <svg className="w-6 h-6" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 0C5.371 0 0 5.371 0 12c0 5.304 3.438 9.799 8.207 11.387.6.113.793-.256.793-.572v-2.175c-3.338.726-4.04-1.611-4.04-1.611-.546-1.387-1.332-1.756-1.332-1.756-1.089-.746.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.306 3.492.998.108-.775.418-1.306.762-1.607-2.665-.303-5.467-1.333-5.467-5.93 0-1.31.469-2.381 1.237-3.221-.125-.303-.537-1.523.116-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.986-.4 3.006-.405 1.02.005 2.046.138 3.007.405 2.29-1.552 3.297-1.23 3.297-1.23.654 1.653.243 2.873.119 3.176.77.84 1.236 1.911 1.236 3.221 0 4.61-2.806 5.624-5.479 5.918.429.37.812 1.099.812 2.216v3.292c0 .319.192.691.799.571C20.565 21.796 24 17.301 24 12c0-6.629-5.371-12-12-12z"/>
                    </svg>
                    <span className="font-bold">Github</span>
                </a>
                
                {/* LinkedIn Link */}
                <a rel="noreferrer" target="_blank" className="text-center hover:underline text-white flex items-center gap-2 whitespace-nowrap" href="https://www.linkedin.com/in/sagarika-singh-551b44214/">
                    <svg className="w-6 h-6" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.36 20h-3.197v-10.197h3.197v10.197zm-1.602-11.604c-1.024 0-1.854-.83-1.854-1.854s.83-1.854 1.854-1.854c1.024 0 1.854.83 1.854 1.854s-.83 1.854-1.854 1.854zm13.962 11.604h-3.197v-5.615c0-1.337-.026-3.061-1.865-3.061-1.866 0-2.151 1.459-2.151 2.965v5.711h-3.197v-10.197h3.07v1.394h.043c.427-.807 1.469-1.654 3.025-1.654 3.236 0 3.835 2.13 3.835 4.899v5.558z"/>
                    </svg>
                    <span className="font-bold">LinkedIn</span>
                </a>
            </div>
        </section>
    );
}
