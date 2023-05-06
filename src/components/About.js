import React from 'react'

function About() {
    return (
        <div
            name="about"
            id="about"
            className="w-full h-screen bg-slate-200 text-gray-300 flex justify-center items-center"
    >
            {/* <div className="flex flex-col justify-center items-center w-11/12 h-11/12 border-solid border-2 border-black"> */}
                <div className=" py-14 rounded-md bg-blue-900 flex flex-col justify-center items-center w-4/6 h-5/6 md">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
                    <div className="sm:text-right pb-8 pl-4">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-500">
                        About
                    </p>
                </div>
                </div>

                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold">
                    <p>
                        Hi. I'm Marvelous Ejiogu. You're welcome to my portfolio. 
                    </p>
                    </div>
                <div>
                    <p>
                        {" "}
                        As a Frontend Developer. I specialize in creating responsive web designs and frontend web applications using HTML, CSS, and JavaScript. I am passionate about creating beautiful and intuitive user experiences, and strive to make sure that my designs are optimized for both mobile and desktop environments. I love sharing my knowledge through technical writing, simplifying technical concepts and topics.
                    </p>
                </div>
                </div>
                </div>
            </div>
        // </div>
    )
}

export default About