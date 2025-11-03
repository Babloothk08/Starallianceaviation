import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function HospitalityManagement() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans text-gray-800">
            {/* SEO Meta */}
            {/* <Helmet>
        <title>Certificate Course in Hospitality Management | Star Alliance Aviation Academy</title>
        <meta
          name="description"
          content="Enroll in our Certificate Course in Hospitality Management and gain expertise in front-office, customer service, F&B operations, and aviation hospitality."
        />
        <link
          rel="canonical"
          href="https://www.starallianceaviation.com/hospitality-management"
        />
      </Helmet> */}

            {/* Hero Section */}
            <section
                style={{
                    backgroundImage: `url(https://i.postimg.cc/wBXBX9YQ/Aviatio.jpg)`,
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

            {/* About Section */}
            <section className="flex justify-center px-6 py-16 border-b border-gray-200">
                <div className="flex flex-col lg:flex-row max-w-6xl w-full gap-10 items-center">
                    <div className="w-full lg:w-1/2">
                        <img
                            src="https://i.postimg.cc/HkJcyGLy/Aviation-Hospitality-Management.webp"
                            alt="Hospitality Management"
                            className="w-full max-w-md mx-auto rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                        />
                    </div>

                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl font-bold text-primary mb-4">
                            About the Course
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            The <strong>Certificate Course in Hospitality Management</strong> at
                            Star Alliance Aviation Academy is designed for students aiming for
                            a career in the aviation and hospitality sectors. This{" "}
                            <strong>six-month program</strong> offers an immersive experience
                            covering essential topics like front-office operations, customer
                            service excellence, and hospitality management principles.
                            <br />
                            <br />
                            Students gain an understanding of how the hospitality and aviation
                            industries interconnect—exploring guest relations, flight support
                            coordination, and global service standards under the mentorship of
                            industry experts.
                            <br />
                            <br />
                            The Academy emphasizes practical learning through simulations,
                            real-world case studies, and internship opportunities with reputed
                            airlines and hotels. This structured mix of theory and practical
                            exposure ensures students are job-ready with professional skills
                            that meet industry expectations.
                            <br />
                            <br />
                            Graduates leave equipped to thrive in hospitality and aviation
                            roles—bringing professionalism, confidence, and a passion for
                            service to their future careers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Modules Covered */}
            <section className="max-w-6xl mx-auto px-6 py-14">
                <h2 className="text-3xl font-bold text-primary mb-6">
                    Modules Covered
                </h2>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                    <div className="bg-gray-50 rounded-2xl shadow-sm p-5 hover:shadow-md transition-all">
                        <h3 className="font-semibold text-lg mb-2">
                            Introduction to Hospitality & Tourism
                        </h3>
                        <p className="text-sm">
                            Learn the fundamentals of hospitality and how tourism connects to
                            global aviation and customer experience.
                        </p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl shadow-sm p-5 hover:shadow-md transition-all">
                        <h3 className="font-semibold text-lg mb-2">
                            Front-Office & Reservation Systems
                        </h3>
                        <p className="text-sm">
                            Understand reception, guest management, and reservation
                            technology used in modern airlines and hotels.
                        </p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl shadow-sm p-5 hover:shadow-md transition-all">
                        <h3 className="font-semibold text-lg mb-2">
                            Food & Beverage Service Operations
                        </h3>
                        <p className="text-sm">
                            Explore food service standards, in-flight catering, and
                            guest-dining etiquette.
                        </p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl shadow-sm p-5 hover:shadow-md transition-all">
                        <h3 className="font-semibold text-lg mb-2">
                            Customer Service & Complaint Resolution
                        </h3>
                        <p className="text-sm">
                            Master the art of guest handling, complaint resolution, and
                            communication for a superior customer experience.
                        </p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl shadow-sm p-5 hover:shadow-md transition-all">
                        <h3 className="font-semibold text-lg mb-2">
                            Personality Development & Grooming
                        </h3>
                        <p className="text-sm">
                            Enhance confidence, communication, and professional etiquette to
                            excel in interviews and hospitality roles.
                        </p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl shadow-sm p-5 hover:shadow-md transition-all">
                        <h3 className="font-semibold text-lg mb-2">
                            Internship & Placement Guidance
                        </h3>
                        <p className="text-sm">
                            Hands-on exposure to real-world hospitality operations and
                            assistance with job placements.
                        </p>
                    </div>
                </div>
            </section>

            {/* Course Overview */}
            <section className="max-w-6xl mx-auto px-6 py-14 border-t border-gray-200">
                <h2 className="text-3xl font-bold text-primary mb-6">
                    Course Overview
                </h2>
                <ul className="space-y-3 text-gray-700">
                    <li>
                        <strong>Duration:</strong> 6 Months
                    </li>
                    <li>
                        <strong>Schedule:</strong> 4 Days/Week (2–4 Hours/Day)
                    </li>
                    <li>
                        <strong>Eligibility:</strong> 12th Pass
                    </li>
                    <li>
                        <strong>Age Limit:</strong> 17–24 Years
                    </li>
                </ul>
                <p className="mt-4 text-gray-700 leading-relaxed">
                    This program teaches students how to deliver world-class service in
                    airlines, hotels, and travel companies — ideal for aspiring
                    hospitality professionals and aviation staff.
                </p>
            </section>

            {/* Career Opportunities */}
            <section className="max-w-6xl mx-auto px-6 py-14 border-t border-gray-200">
                <h2 className="text-3xl font-bold text-primary mb-6">
                    Career Opportunities
                </h2>
                <div className="grid md:grid-cols-2 gap-3 text-gray-700">
                    <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
                        Guest Relations Executive
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
                        Front Office Manager
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
                        Airline Hospitality Crew
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
                        Lounge Attendant
                    </div>
                </div>
            </section>
        </div>
    );
}
