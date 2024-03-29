import React from "react";
import Python from '../assets/Python.png';
import Java from '../assets/java.png';
import JavaScript from '../assets/JavaScript.png';
import R from '../assets/R_logo.png';
import PostgreSQL from '../assets/PostgreSQL.png';
import Excel from '../assets/Excel.png';
import JupyterLab from '../assets/JupyterLab.png';
import GitHub from '../assets/GitHub.png';

const Skills = () => {
    return (
        <div name='skills' className="w-full h-screen bg-[#0a192f] text-gray-300">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-[#009867]">Skills</p>
                    <p className="text-xl py-4">Here are a few of the technologies I work with.</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Python} alt="Python" />
                        <p className="my-4">Python</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={R} alt="R" />
                        <p className="my-4">R</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Java} alt="Java" />
                        <p className="my-4">Java</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={JavaScript} alt="JavaScript" />
                        <p className="my-4">JavaScript</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={PostgreSQL} alt="PostgreSQL" />
                        <p className="my-4">PostgreSQL</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Excel} alt="MS Excel" />
                        <p className="my-4">MS Excel</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={JupyterLab} alt="JupyterLab" />
                        <p className="my-4">JupyterLab</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={GitHub} alt="GitHub" />
                        <p className="my-4">GitHub</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
