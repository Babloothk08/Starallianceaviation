import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
export default function SafetyEmergencyTraining() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <div>
            {/* <Helmet>
                <title>Safety & Emergency Procedures Training</title>
                <meta name="description" content="" />
                <link rel="canonical" href="https://www.starallianceaviation.com/diploma-in-cabin-crew-Training/" />
            </Helmet> */}
            <section
                style={{
                    backgroundImage: `url(https://i.postimg.cc/jq9MfTxc/Hero-Safety-Emergency-Training.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="bg-[#2c3756] text-white flex items-center justify-center p-8 md:h-[600px] h-[190px] relative md:mt-0 mt-[72px]"
            >
                <div className="absolute inset-0 bg-black/25"></div>
                <div className="relative z-10 max-w-6xl w-full mt-4 sm:mt-8">
                    <div className="sm:visible invisible text-white p-4 sm:p-5 max-w-2xl">
                        <h1 className="text-3xl sm:text-5xl font-bold text-white font-heading animate-fade-in-down">
                            Safety & Emergency Procedures Training
                        </h1>
                        <h2 className="mt-2 text-xs sm:text-sm text-white font-heading">
                            <Link to="/" className="hover:underline text-blue-300">
                                Star Alliance Aviation Academy /
                            </Link>{" "}
                            Safety & Emergency Procedures Training
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
                            src="https://proflight.com/media/07/9c/6a/1724694465/PF_IMG_Kurzstrecke_1.webp?ts=1724695137"
                            alt="Pilot"
                            className="w-[70%] object-cover shadow-lg rounded-full"
                        />
                    </div>
                    <div className="flex flex-col justify-start w-full lg:w-1/2">
                        {/* <h2 className="text-primary text-3xl font-bold mt-2">
              Process of Safety & Emergency Procedures Training
            </h2> */}
                        <p className="text-gray-700 font-sans mt-6 leading-relaxed text-justify">
                            The importance of safety in aviation cannot be overstated, and each cabin crew member must always be ready for unexpected events. The Safety & Emergency Procedures Course provides valuable information and the opportunity for simulated training to help you handle things safely and efficiently when something emergency-related occurs  <br />

                            <ul className="space-y-3 list-disc">
                                <h2 className="text-primary text-xl font-bold my-3">Highlights of the Course Will Include:

                                </h2>
                                {[
                                    "In - flight emergency management simulations",
                                    "Passenger safety and evacuation",
                                    "Fire and first - aid demonstrations",
                                    "Safety equipment usage and communication procedures"

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
                <h3 className="text-primary text-3xl font-bold my-3">
                    Build Your Confidence In The Air
                </h3>
                <p>
                    It is through active experiential training that you will be best equipped to safely and effectively handle things calmly and efficiently under pressure, an important skill all professional cabin crew members should possess.

                </p>
            </div>
        </div>
    );
}
