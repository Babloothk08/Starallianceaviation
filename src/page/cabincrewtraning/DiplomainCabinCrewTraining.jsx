import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
export default function DiplomainCabinCrewTraining() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <Helmet>
        <title>Diploma in Cabin Crew Training</title>
        <meta name="description" content="Join our diploma program to build a professional career as a certified cabin crew member." />
        <link rel="canonical" href="https://www.starallianceaviation.com/diploma-in-cabin-crew-Training/" />
      </Helmet>
      <section
        style={{
          backgroundImage: `url(https://i.postimg.cc/sfwHdT69/Gemini-Generated-Image-y3rjjty3rjjty3rj.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-[#2c3756] text-white flex items-center justify-center p-8 md:h-[600px] h-[190px] relative md:mt-0 mt-[72px]"
      >
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="relative z-10 max-w-6xl w-full mt-4 sm:mt-8">
          <div className="sm:visible invisible text-white p-4 sm:p-5 max-w-2xl">
            <h1 className="text-3xl sm:text-5xl font-bold text-white font-heading animate-fade-in-down">
              Diploma in Cabin Crew Training
            </h1>
            <h2 className="mt-2 text-xs sm:text-sm text-white font-heading">
              <Link to="/" className="hover:underline text-blue-300">
                Star Alliance Aviation Academy /
              </Link>{" "}
              Diploma in Cabin Crew Training
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
              src="https://i.postimg.cc/HsrsSw1R/KB38.jpg"
              alt="Pilot"
              className="w-[70%] object-cover shadow-lg rounded-full"
            />
          </div>
          <div className="flex flex-col justify-start w-full lg:w-1/2">
            {/* <h2 className="text-primary text-3xl font-bold mt-2">
              Process of Diploma in Cabin Crew Training
            </h2> */}
            <p className="text-gray-700 font-sans mt-6 leading-relaxed text-justify">
              Are you dreaming of a fast-paced career in the aviation field? The Diploma in Cabin Crew Training will prepare aspiring flight attendants with all of the skills, confidence, and professionalism expected of flight attendants by airline executives. This program covers every component of customer service in the cabin: in-flight safety, communications, customer service, and grooming standards to make you ready to enter the industry and start your career from day one.
              <br />

              <ul className="space-y-3 list-disc">
                <h2 className="text-primary text-xl font-bold my-3">Reasons to Enroll in a Cabin Crew Diploma Program
                </h2>
                {[
                  "Professional modules by aviation experts",
                  "Interactive & scenario-based training",
                  "Industry insights from experienced trainers",
                  "100% employment assistance post-graduation"
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
          Start or Advance Your Aviation Career Today
            </h3>
        <p>
          You can be a confident, well-trained cabin crew professional who's ready to work on domestic and international flights.
          You're ready to take that next step in your aviation career; apply today! 

        </p>
      </div>
    </div>
  );
}
