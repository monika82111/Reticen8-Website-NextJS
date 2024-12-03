

const Careers = () => {


  return (
    <section id="partners" className="overflow-hidden py-16 md:py-20 lg:py-28 bg-blue-50 pl-20 pr-20">
      
      <div className="container">
      <img 
          src="/images/Logo/career.png" 
          alt="Career Opportunities" 
          className="w-full h-auto mb-10 pb-10"
        />
      </div>
      
      <div className="container">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-sky-800 dark:text-black sm:text-4xl text-center mb-10 ">
            LIFE AT RETICEN8<u />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {[
            {

              title: "Innovative Environment",
              description:
                "Be part of a dynamic team driving innovation in the cybersecurity sector.",
            },
            {

              title: "Collaborative Culture",
              description:
                "Join a supportive and collaborative work environment where your voice is heard.",
            },
            {

              title: "Continuous Learning",
              description:
                "We encourage continuous learning and provide opportunities for personal and professional growth.",
            },
            {

              title: "Work-Life Balance",
              description:
                "We value work-life balance and offer flexible working hours to ensure our team members can achieve their best.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="flex flex-col bg-white overflow-hidden h-full bg-slate-50"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold mb-2 text-sky-950">
                 {/* // <a href="#" className="stretched-link"> */}
                    {service.title}
                  {/* //</a> */}
                </h3>
                <p className="text-gray-600 text-justify">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>



      <div className="container">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-sky-800 dark:text-black sm:text-4xl text-center mb-10 pt-20 ">
          BENEFITS OF BEING AT A STARTUP<u />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {[
            {

              title: "Ownership and Impact",
              description:
                "Experience a sense of ownership and see the direct impact of your work on the company's success.",
            },
            {

              title: "Career Growth",
              description:
                "Opportunities for rapid career growth and development due to the dynamic nature of startup environments.",
            },
            {

              title: "Diverse Experience",
              description:
                "Gain diverse experience by working on various projects and wearing multiple hats within the organization.",
            },
            {

              title: "Innovative Environment",
              description:
                "Be part of an innovative environment where creativity and out-of-the-box thinking are encouraged.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="flex flex-col bg-white overflow-hidden h-full bg-slate-50"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold mb-2 text-sky-950">
                  {/* <a href="#" className="stretched-link"> */}
                    {service.title}
                  {/* </a> */}
                </h3>
                <p className="text-gray-600 text-justify">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container dark:text-black">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-sky-800 dark:text-black sm:text-4xl text-center mb-10 pt-20 ">
          JOIN US<u />
          </h2>
        </div>
        <div>
          <p>
          If you are ready to take on new challenges and contribute to our mission of making the digital world a safer place, we would love to hear from you. Please send your resume and cover letter to <b className="text-blue-500">hr@reticen8.com </b>.
          </p>
        </div>

        
      </div>


    </section>

  );
};

export default Careers;
