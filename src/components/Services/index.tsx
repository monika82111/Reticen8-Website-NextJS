

const Services = () => {


  return (
    <section id="services" className="overflow-hidden py-16 md:py-20 lg:py-28 pl-20 pr-20  bg-blue-50">
    <div className="container">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-black sm:text-4xl text-center pb-10">
          Our Services
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service Card Template */}
        {[
          {
            image: "/images/services/installation.svg",
            title: "One-time Installation",
            description:
              "Our one-time installation service ensures a hassle-free deployment tailored to each client's unique environment. Our certified technicians conduct thorough assessments, carefully plan the installation process, and execute it with precision.",
          },
          {
            image: "/images/services/integration.svg",
            title: "Integration services with our Products",
            description:
              "Our integration services go beyond basic connectivity. We offer custom integration solutions tailored to our clients' needs. Whether it's connecting with third-party applications via APIs or building custom connectors, our integration experts ensure smooth data flow and interoperability.",
          },
          {
            image: "/images/services/support.jpg",
            title: "Advanced Product Support (Resolution Time: 10 Hours)",
            description:
              "Our advanced support services provide rapid response and resolution for any issues related to our products. With a guaranteed resolution time of 10 hours, our dedicated support team is available round-the-clock to address technical challenges and provide expert guidance.",
          },
          {
            image: "/images/services/fms.jpg",
            title: "Facility Management Services (FMS)",
            description:
              "Our Facility Management Services (FMS) offer comprehensive oversight and maintenance of our products, ensuring that our products operate at peak performance levels. We monitor key performance indicators, identify areas for improvement, and implement strategic enhancements to enhance efficiency and reliability.",
          },
          {
            image: "/images/services/training.jpg",
            title: "Training & Certification",
            description:
              "We offer specialized training and certification programs to empower users with in-depth understanding and practical skills to leverage our products effectively. Our certified trainers provide hands-on instruction, real-world scenarios, and best practices to ensure that clients are proficient in using our products.",
          },
          {
            image: "/images/services/consulting.svg",
            title: "Consulting Services",
            description:
              "Our consulting services are strategic partnerships aimed at driving tangible business outcomes. We work closely with clients to provide tailored recommendations and implementation strategies to help them maximize the value of our products and stay ahead of the competition.",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden h-full"
            data-aos="fade-up"
            data-aos-delay={100 * (index + 1)}
          >
            <div className="w-full aspect-w-4 aspect-h-3">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-bold mb-2">
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
    </section>

    










    



  );
};

export default Services;
