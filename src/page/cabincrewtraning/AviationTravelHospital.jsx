import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function AviationTravelHospital() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans text-gray-800">
            {/* SEO */}
            {/* <Helmet>
        <title>Certificate Course in Aviation, Hospitality and Travel Management | Star Alliance Aviation Academy</title>
        <meta
          name="description"
          content="Learn aviation operations, hospitality management, and travel coordination with our comprehensive 11-month course at Star Alliance Aviation Academy."
        />
        <link
          rel="canonical"
          href="https://www.starallianceaviation.com/aviation-hospitality-travel-management"
        />
      </Helmet> */}

            {/* Hero Section */}
            <section
                style={{
                    backgroundImage: `url(https://i.postimg.cc/4xvr5316/Aviation-Hospitality-and-Travel-Management.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="bg-[#2c3756] text-white flex items-center justify-center p-8 md:h-[600px] h-[190px] relative md:mt-0 mt-[72px]"
            >
                <div className="absolute inset-0 bg-black/25"></div>
                <div className="relative z-10 max-w-6xl w-full mt-4 sm:mt-8">
                    <div className="sm:visible invisible text-white p-4 sm:p-5 max-w-2xl">
                        <h1 className="text-3xl sm:text-5xl font-bold text-white font-heading animate-fade-in-down">
                            Aviation, Hospitality & Travel Management Course
                        </h1>
                        <h2 className="mt-2 text-xs sm:text-sm text-white font-heading">
                            <Link to="/" className="hover:underline text-blue-300">
                                Star Alliance Aviation Academy /
                            </Link>{" "}
                            Aviation, Hospitality & Travel Management Course
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

            {/* About Section */}
            <section className="flex justify-center px-6 py-16 border-b border-gray-200">
                <div className="flex flex-col lg:flex-row max-w-6xl w-full gap-10 items-center">
                    <div className="w-full lg:w-1/2">
                        <img
                            src="https://i.postimg.cc/HkJcyGLy/Aviation-Hospitality-Management.webp"
                            alt="Aviation Hospitality Travel Management"
                            className="w-full max-w-md mx-auto rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                        />
                    </div>

                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl font-bold text-primary mb-4">
                            About the Course
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            The <strong>Certificate Course in Aviation, Hospitality and Travel Management</strong> offered at
                            <strong> Star Alliance Aviation Academy</strong> provides students with a
                            solid foundation to start a professional journey in the aviation
                            and travel industry. The course covers essential topics like
                            aviation operations, ground handling, air traffic awareness, flight
                            safety, and passenger management.
                            <br />
                            <br />
                            Students are guided by experienced instructors and industry
                            professionals who help them understand the workings of the aviation
                            ecosystem — from airport coordination to flight dispatching and
                            compliance with DGCA standards.
                            <br />
                            <br />
                            At Star Alliance, our practical, industry-based approach sets us
                            apart from traditional teaching methods. Students engage in aviation
                            simulations, airport handling exercises, and real-world airline
                            procedures to prepare for effective operational delivery.
                            <br />
                            <br />
                            The course also builds communication, self-discipline, and
                            professional etiquette — essential for success in domestic and
                            international airlines.
                            <br />
                            <br />
                            By the end of the program, students are fully prepared to begin
                            careers as ground staff executives, airline coordinators, or travel
                            consultants — equipped with technical expertise and people skills.
                        </p>
                    </div>
                </div>
            </section>

            {/* Modules Section */}
            <section className="max-w-6xl mx-auto px-6 py-14">
                <h2 className="text-3xl font-bold text-primary mb-6">Modules Covered</h2>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                    {[
                        {
                            title: "Aviation Operations",
                            desc: "Gain an understanding of flight, airport roles, and ground operational procedures.",
                        },
                        {
                            title: "Hospitality & Guest Services",
                            desc: "Learn professional etiquette, guest service skills, and presentation standards.",
                        },
                        {
                            title: "Travel & Tourism Management",
                            desc: "Master ticketing systems, itinerary creation, and global travel coordination.",
                        },
                        {
                            title: "Customer Service Excellence",
                            desc: "Develop skills to handle passengers and clients with care and professionalism.",
                        },
                        {
                            title: "Communication & Personality Development",
                            desc: "Enhance fluency, teamwork, and interpersonal confidence for the aviation environment.",
                        },
                    ].map((module, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-2xl shadow-sm p-5 hover:shadow-md transition-all"
                        >
                            <h3 className="font-semibold text-lg mb-2 text-primary">
                                {module.title}
                            </h3>
                            <p className="text-sm leading-relaxed">{module.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Course Overview */}
            <section className="max-w-6xl mx-auto px-6 py-14 border-t border-gray-200">
                <h2 className="text-3xl font-bold text-primary mb-6">Course Overview</h2>
                <ul className="space-y-3 text-gray-700">
                    <li>
                        <strong>Duration:</strong> 11 Months
                    </li>
                    <li>
                        <strong>Schedule:</strong> 5 Days/Week (2 Hours/Day)
                    </li>
                    <li>
                        <strong>Eligibility:</strong> 12th Pass
                    </li>
                    <li>
                        <strong>Age Limit:</strong> 17–24 Years
                    </li>
                </ul>
                <p className="mt-4 text-gray-700 leading-relaxed">
                    This comprehensive program provides the theoretical and practical
                    foundation needed for aspiring professionals in aviation, tourism, and
                    hospitality sectors.
                </p>
            </section>

            {/* Course Objectives */}
            <section className="max-w-6xl mx-auto px-6 py-14 border-t border-gray-200">
                <h2 className="text-3xl font-bold text-primary mb-6">Course Objectives</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                        Gain a strong understanding of airline operations, tourism management,
                        and hospitality standards.
                    </li>
                    <li>
                        Develop exceptional interpersonal, communication, and customer service
                        skills.
                    </li>
                    <li>
                        Prepare students to become adaptable, confident professionals capable
                        of thriving in dynamic airline environments.
                    </li>
                </ul>
            </section>

            {/* Career Opportunities */}
            <section className="max-w-6xl mx-auto px-6 py-14 border-t border-gray-200">
                <h2 className="text-3xl font-bold text-primary mb-6">
                    Career Opportunities
                </h2>
                <div className="grid md:grid-cols-2 gap-3 text-gray-700">
                    {[
                        "Ground Staff Executive",
                        "Travel Consultant",
                        "Cabin Crew Assistant",
                        "Customer Relationship Officer",
                        "Airline Service Agent",
                    ].map((career, i) => (
                        <div
                            key={i}
                            className="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
                        >
                            {career}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
