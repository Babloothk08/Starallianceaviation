import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
export default function HospitalityAviationManagement() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <div>
            <Helmet>
                <title>Hospitality & Aviation Management Course | Star Alliance Aviation.</title>
                <meta name="description" content="Start your journey in aviation & hospitality with our specialized management course. Get trained by experts and land top industry jobs." />
                <link rel="canonical" href="https://starallianceaviation.com/hospitality-aviation-mangement" />
            </Helmet>
            <section
                style={{
                    backgroundImage: `url(https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/Atl/ATPL-Oral-Viva-banner.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="bg-[#2c3756] text-white flex items-center justify-center p-8 md:h-[600px] h-[190px] relative md:mt-0 mt-[72px]"
            >
                <div className="absolute inset-0 bg-black/25"></div>
                <div className="relative z-10 max-w-6xl w-full mt-4 sm:mt-8">
                    <div className="sm:visible invisible text-white p-4 sm:p-5 max-w-2xl">
                        <h1 className="text-3xl sm:text-5xl font-bold text-white font-heading animate-fade-in-down">
                            Hospitality & Aviation Management
                        </h1>
                        <h2 className="mt-2 text-xs sm:text-sm text-white font-heading">
                            <Link to="/" className="hover:underline text-blue-300">
                                Star Alliance Aviation Academy /
                            </Link>{" "}
                            Hospitality & Aviation Management
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
                            src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/Atl/ATPL%20Oral%20%2C%20Viva.jpg"
                            alt="Pilot"
                            className="w-[70%] object-cover shadow-lg rounded-full"
                        />
                    </div>
                    <div className="flex flex-col justify-start w-full lg:w-1/2">
                        {/* <h2 className="text-primary text-3xl font-bold mt-2">
              Process of Hospitality & Aviation Management
            </h2> */}
                        <p className="text-gray-700 font-sans mt-6 leading-relaxed text-justify">
                            The aviation industry is built on exceptional service and management. Our Hospitality & Aviation Management Course prepares you for an effective management position through customer service, operational dimensions, and professional demeanor—all skills that can be used in the cabin and the ground operations. <ul className="space-y-3 list-disc">
                                <h2 className="text-primary text-xl font-bold my-3"> Course Content

                                </h2>
                                {[
                                    "Introduction to hospitality and excellence in service",
                                    "Airline and airport management approaches",
                                    "Passenger experience and conflict management",
                                    "Management and leadership of teams",
                                    "Airline policies and service standards"



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
                    What You Gain
                </h2>
                <p>
                    Our methodology blends theory with experience. You will learn not just what to do but how to humanely ensure it is done as the best airline professionals can. </p>
            </div>
            <div className="max-w-6xl mx-auto py-12 font-sans text-gray-700 sm:px-0 px-4">
                <h3 className="text-primary text-3xl font-bold my-3">
                    Shape a Meaningful Career in Aviation


                </h3>
                <p>
                    Whether you are looking to work and travel as cabin crew or work in ground operations or management, this program provides you the tools and confidence to develop in the aviation industry internationally.
                </p>
            </div>
        </div>
    );
}
