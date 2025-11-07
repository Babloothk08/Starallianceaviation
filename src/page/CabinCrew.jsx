import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
const CabinCrew = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="bg-white text-gray-800 font-sans">

      <Helmet>
        <title>
          Cabin Crew Course in Delhi | Star Alliance Aviation Academy
        </title>
        <meta
          name="description"
          content="Join India’s leading cabin crew course in Delhi—Star Alliance Aviation. Learn aviation hospitality, grooming, and airline interview skills with expert mentors."
        />
        <link
          rel="canonical"
          href="https://www.starallianceaviation.com/cabin-crew-training"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Cabin Crew Training Program ‒ Star Alliance Aviation Academy",
            description:
              "Comprehensive cabin crew training covering safety procedures, in-flight service, grooming, customer handling, and aviation regulations by Star Alliance Aviation Academy in New Delhi.",
            url: "https://www.starallianceaviation.com/cabin-crew-training",
            provider: {
              "@type": "EducationalOrganization",
              name: "Star Alliance Aviation Academy",
              url: "https://www.starallianceaviation.com",
              logo: "https://i.postimg.cc/FKqwPS2B/white-logo-1.png",
            },
            offers: {
              "@type": "Offer",
              price: "Request Quote",
              priceCurrency: "INR",
              url: "https://www.starallianceaviation.com/cabin-crew-training",
              availability: "https://schema.org/InStock",
            },
            inLanguage: "English",
            audience: {
              "@type": "Audience",
              audienceType: "Aspiring Cabin Crew Students",
            },
            timeRequired: "P4W",
            educationalCredentialAwarded: "Certificate of Completion",
          })}
        </script>
      </Helmet>


      {/* Section: Job-Oriented Training */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/CabinCrew/3.jpg"
            alt="Job Oriented"
            className="rounded-2xl shadow-2xl border-4 border-blue-100"
          />
          <div>
            <h2 className="text-4xl font-bold mb-5 text-Secondary">
              Job-Oriented CC Training
            </h2>
            <p className="text-lg">
              Star Alliance Aviation Academy stands apart for its dedication to
              excellence, industry relevance, and personalized support to help
              you join top airlines as a cabin crew professional.
            </p>
            <Link
              to="/job-oriented-cc-training"
              className="inline-block mt-6 text-Secondary font-semibold underline hover:text-Lightcolor transition"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-blue-800">
            Course Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 text-left">
            <ul className="space-y-4 list-disc list-inside text-lg">
              <li>Duration: 6 Months (Flexible Timings Available)</li>
              <li>100% Placement Assistance</li>
              <li>Airport Visits & Industry Exposure</li>
            </ul>
            <ul className="space-y-4 list-disc list-inside text-lg">
              <li>Interactive Practical Training</li>
              <li>Mock Interviews & Grooming Support</li>
              <li>Global Airline Interview Preparation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-5 text-Secondary">
              Who Can Apply?
            </h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-3 text-lg">
              <li>Students who have completed 10+2 or equivalent</li>
              <li>Individuals aged 18 to 27</li>
              <li>Good communication & pleasing personality</li>
              <li>Passionate about working in the airline industry</li>
            </ul>
          </div>
          <img
            src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/CabinCrew/4.jpg"
            alt="Apply Cabin Crew"
            className="rounded-2xl shadow-2xl border-4 border-blue-100"
          />
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-8">
            Career Opportunities After Training
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-disc list-inside text-left mx-auto text-lg">
            <li>Flight Attendant / Air Hostess</li>
            <li>Ground Staff Executive</li>
            <li>Passenger Service Agent</li>
            <li>Crew Scheduling Coordinator</li>
          </ul>
        </div>
      </section>

      {/* Why Cabin Crew */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-Secondary">
          Why Cabin Crew Is a Great Career Choice?
        </h2>
        <p className="text-xl text-center max-w-3xl mx-auto text-gray-700 mb-12">
          Being a cabin crew member means more than serving passengers—it’s
          about ensuring safety, creating memorable experiences, and
          representing the airline with professionalism.
        </p>
        <img
          src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/CabinCrew/5.jpg"
          alt="Cabin Team"
          className="rounded-2xl shadow-2xl mx-auto border-4 border-blue-100"
        />
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-20 text-center">
        <h2 className="text-4xl font-extrabold mb-6">
          Join Star Alliance Aviation Academy Today
        </h2>
        <p className="mb-8 max-w-2xl mx-auto text-lg">
          Our mission is to build confident, capable, and charming cabin crew
          professionals who will shine in the aviation industry. Your dream
          career begins here.
        </p>
        <button className="bg-Secondary text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-Lightcolor transition text-lg">
          <Link to="/contact-us"> Enroll Now </Link>
        </button>
      </section>
    </div>
  );
};

export default CabinCrew;
