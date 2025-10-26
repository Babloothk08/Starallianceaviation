import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
export default function AviationEnglishCommunication() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <div>
            <Helmet>
                <title>Aviation English & Communication Skills</title>
                <meta name="description" content="" />
                <link rel="canonical" href="https://www.starallianceaviation.com/diploma-in-cabin-crew-Training/" />
            </Helmet>
            <section
                style={{
                    backgroundImage: `url(https://i.postimg.cc/yd3vQpnJ/9861d29a4a6cd2a72102908c31cdd410b3894f9d.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="bg-[#2c3756] text-white flex items-center justify-center p-8 md:h-[600px] h-[190px] relative md:mt-0 mt-[72px]"
            >
                <div className="absolute inset-0 bg-black/25"></div>
                <div className="relative z-10 max-w-6xl w-full mt-4 sm:mt-8">
                    <div className="sm:visible invisible text-white p-4 sm:p-5 max-w-2xl">
                        <h1 className="text-3xl sm:text-5xl font-bold text-white font-heading animate-fade-in-down">
                            Aviation English & Communication Skills
                        </h1>
                        <h2 className="mt-2 text-xs sm:text-sm text-white font-heading">
                            <Link to="/" className="hover:underline text-blue-300">
                                Star Alliance Aviation Academy /
                            </Link>{" "}
                            Aviation English & Communication Skills
                        </h2>
                        <Link
                            to="/make-appointment"
                            className="inline-block mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-Secondary text-white font-semibold rounded-full shadow hover:bg-gray-100 transition"
                        >
                            Make an Appointment
                        </Link>
                    </div>
                </div>
            </section>
            <section className="flex justify-center px-4 py-12 border-b-2">
                <div className="flex flex-col lg:flex-row max-w-6xl w-full gap-10 items-center">
                    <div className="flex flex-col items-center w-full lg:w-1/2 relative">
                        <img
                            loading="lazy"
                            src="https://i.postimg.cc/Gt1JMLHq/1677130674935-e-2147483647-v-beta-t-s-QNg-TWi-HTd-JEPBCPG0Wj-Xv7MSk-Qlrg-CIq-Tl-QLIGe-Y.jpg"
                            alt="Pilot"
                            className="w-[100%] object-cover shadow-lg rounded-full"
                        />
                    </div>
                    <div className="flex flex-col justify-start w-full lg:w-1/2">
                        {/* <h2 className="text-primary text-3xl font-bold mt-2">
              Process of Aviation English & Communication Skills
            </h2> */}
                        <p className="text-gray-700 font-sans mt-6 leading-relaxed text-justify">
                            Communicating effectively is crucial for high-quality passenger service and working well as a team with other crew. This course will help you improve your fluency in English, pronunciation, and aviation vocabulary so you can speak clearly and confidently, as necessary in any flights.
                            <ul className="space-y-3 list-disc">
                                <h2 className="text-primary text-xl font-bold my-3"> What You Will Learn

                                </h2>
                                {[
                                    "Common aviation vocabulary and in -flight phrases.",
                                    "Practice for announcements and emergency briefings.",
                                    "Engage in role-play scenarios that simulate common cabin situations.",
                                    "Conversational and pronunciation practices for accent neutralization.",
                                    "Communication skills for service interactions."


                                ].map((item, index) => (
                                    <li key={index} className="flex items-center space-x-3 list-disc">

                                        <li className="list-disc" >{item}</li>
                                    </li>
                                ))}
                            </ul>

                        </p>
                    </div>
                </div>
            </section>
            <div className="max-w-6xl mx-auto py-12 font-sans text-gray-700 sm:px-0 px-4">
                <h2 className="text-primary text-3xl font-bold my-3">
                    Why This Course
                </h2>
                <p>
                    Effective communications promote passenger trust and teamwork. Our experts will lead lessons based on specific training and conversations based on real conversations in the airline industry so you will feel comfortable speaking like a real crew member.
                </p>
            </div>
            <div className="max-w-6xl mx-auto py-12 font-sans text-gray-700 sm:px-0 px-4">
                <h3 className="text-primary text-3xl font-bold my-3">
                    Speak Like a Professional Cabin Crew Member.

                </h3>
                <p>
                    Differentiate yourself in your interview and on the flight by speaking clear, confident English, using the same standards that the world's airlines expect.
                </p>
            </div>
        </div>
    );
}
