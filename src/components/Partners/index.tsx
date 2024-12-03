
import Link from "next/link";
const Partners = () => {


  return (
    <section
      id="partners"
      className="overflow-hidden bg-blue-50 py-16 pl-20  pr-20 md:py-20  lg:py-28"
    >
      <div className="container">
        <div className="space-y-6">
          <p className="mb-5 flex items-center text-justify text-lg font-medium text-body-color">
            Our exclusive sales channel through Managed System Integration
            Partners ensures focused market penetration. With comprehensive
            solutions, attractive incentives, and robust support, partners drive
            mutual success.Our exclusive sales channel through Managed System
            Integration Partners ensures focused market penetration and optimal
            utilization of partners' expertise. With a comprehensive suite of
            cybersecurity solutions, attractive incentive programs, robust
            channel policies, and extensive knowledge transfer and training
            support, partners are empowered to drive mutual success in the
            market.
          </p>
          <h2 className="mb-10 pb-10 pt-20 text-center text-3xl font-bold text-sky-800 dark:text-black sm:text-4xl">
            PARTNER PROGRAM <u />
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            className="flex h-full flex-col overflow-hidden bg-slate-50 bg-white"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="flex flex-grow flex-col p-6">
              <h3 className="mb-2 text-lg font-bold text-sky-950">
                {/* <a href="#" className="stretched-link"> */}
                  Exclusive Sales Channel
                {/* </a> */}
              </h3>
              <p className="text-justify text-gray-600">
                Reticen8 operates exclusively through Managed System Integration
                Partners, leveraging their industry expertise and networks for
                efficient market reach. This approach ensures focused market
                penetration and optimal utilization of partners' insights,
                enhancing our ability to address cybersecurity needs
                effectively.
              </p>
            </div>
          </div>

          <div
            className="flex h-full flex-col overflow-hidden bg-slate-50 bg-white"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="flex flex-grow flex-col p-6">
              <h3 className="mb-2 text-lg font-bold text-sky-950">
                {/* <a href="#" className="stretched-link"> */}
                  Comprehensive Cybersecurity Solutions
                {/* </a> */}
              </h3>
              <p className="text-justify text-gray-600">
                Our comprehensive suite of cybersecurity products offers a
                one-stop solution for organizations' security needs. By
                partnering with Reticen8, organizations gain access to
                cutting-edge solutions that address a wide range of
                cybersecurity challenges, ensuring robust protection against
                evolving threats.
              </p>
            </div>
          </div>

          <div
            className="flex h-full flex-col overflow-hidden bg-slate-50 bg-white"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="flex flex-grow flex-col p-6">
              <h3 className="mb-2 text-lg font-bold text-sky-950">
                {/* <a href="#" className="stretched-link"> */}
                  Attractive Incentive Programs
                {/* </a> */}
              </h3>
              <p className="text-justify text-gray-600">
                Reticen8 offers lucrative incentive programs for Managed System
                Integration Partners, motivating them to actively promote and
                sell our solutions. These programs include structured business
                plans, regular monitoring, and attractive incentives, aligning
                partners' efforts with revenue targets and driving mutual
                success in the market.
              </p>
            </div>
          </div>

          <div
            className="flex h-full flex-col overflow-hidden bg-slate-50 bg-white"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            <div className="flex flex-grow flex-col p-6">
              <h3 className="mb-2 text-lg font-bold text-sky-950">
                {/* <a href="#" className="stretched-link"> */}
                  Robust Channel Policy
                {/* </a> */}
              </h3>
              <p className="text-justify text-gray-600">
                Reticen8 operates exclusively through Managed System Integration
                Partners, leveraging their industry expertise and networks for
                efficient market reach. This approach ensures focused market
                penetration and optimal utilization of partners' insights,
                enhancing our ability to address cybersecurity needs
                effectively.
              </p>
            </div>
          </div>

          <div
            className="flex h-full flex-col overflow-hidden bg-slate-50 bg-white"
            data-aos="fade-up"
            data-aos-delay={500}
          >
            <div className="flex flex-grow flex-col p-6">
              <h3 className="mb-2 text-lg font-bold text-sky-950">
                {/* <a href="#" className="stretched-link"> */}
                  Knowledge Transfer and Training Support
                {/* </a> */}
              </h3>
              <p className="text-justify text-gray-600">
                Reticen8 prioritizes knowledge transfer through structured
                calendars and review systems. Partners receive comprehensive
                training and certification, empowering them with the skills and
                expertise needed to effectively promote and implement our
                solutions for their clients.
              </p>
            </div>
          </div>

          <div
            className="flex h-full flex-col overflow-hidden bg-slate-50 bg-white"
            data-aos="fade-up"
            data-aos-delay={600}
          >
            <div className="flex flex-grow flex-col p-6">
              <h3 className="mb-2 text-lg font-bold text-sky-950">
                {/* <a href="#" className="stretched-link"> */}
                  Resource and Support Leverage
                {/* </a> */}
              </h3>
              <p className="text-justify text-gray-600">
                Partners have access to demo devices, resources, and technical
                support to enhance their capabilities. Managed Direct Partners
                play a pivotal role in managing relationships with Managed
                Indirect Partners and Distribution Partners, ensuring seamless
                coordination and support throughout the sales process.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="space-y-6">
          <h2 className="mb-10 pb-10 pt-20 text-center text-3xl font-bold text-sky-800 dark:text-black sm:text-4xl">
            PARTNER TYPES
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              image: "/images/Logo/download.jpg",
              title: "Alliance Partners",
              description:
                "These partners, often OEMs, collaborate with Reticen8 to create integrated solutions that offer mutual benefits. By combining their expertise with Reticen8's cybersecurity solutions, Alliance Partners deliver comprehensive offerings to meet customers, evolving needs, driving innovation and providing holistic solutions.",
            },
            {
              image: "/images/Logo/download.jpg",
              title: "Master System Integration Partners",
              description:
                "Major industry partners with extensive experience in integrating complex IT systems collaborate directly with Reticen8 to seamlessly incorporate our cybersecurity solutions into their offerings, ensuring optiml performance for their clients.",
            },
            {
              image: "/images/Logo/download.jpg",
              title: "Managed Direct Partners",
              description:
                "Partners managed directly by Reticen8 have a direct contractual relationship with us, promoting and selling our solutions to end customers. With dedicated support and resources, Managed Direct Partners play a crucial role in expanding Reticen8's market presence and driing customer adoption of our cybersecurity solutions",
            },
            {
              image: "/images/Logo/download.jpg",
              title: "Managed Indirect Partners",
              description:
                "Manged by Manged Direct Partners, these partners extend Reticen8's sales network, leveraging existing relationships and distribution channels to reach a broader audience. Collaborating closely, these partners maximize market coverage and ensure consistent delivery of Reticen8's products and services.",
            },
            {
              image: "/images/Logo/download.jpg",
              title: "Unmanaged Partners",
              description:
                "These partners, often traders or individuals, engage with Reticen8's solutions without formal agreements. While they may not receive dedicated support, Unmanaged Partners drive incremental sales and expand brand awareness, contributing to overall business growth and market expansion.",
            },
            {
              image: "/images/Logo/download.jpg",
              title: "Distribution Partners",
              description:
                "Intermediaries between Reticen8 and resellers, Distribution Partners expand the reach of our cybersecurity solutions. Loading orders directly on Distribution Partners, Managed Direct Partners streamline the procurement process, ensuring efficient delivery and accelerating customer acquisition in target markets.",
            },
          ].map((type, index) => (
            <div
              key={index}
              className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="aspect-w-4 aspect-h-3 flex w-full items-center justify-center">
                <img
                  src={type.image}
                  alt={type.title}
                  className="object-center opacity-25 hover:object-top"
                />
              </div>

              <div className="flex flex-grow flex-col p-6">
                <h1 className="mb-2 text-lg font-bold text-sky-950 ">
                  {/* <a href="#" className="stretched-link"> */}
                    {type.title}
                  {/* </a> */}
                </h1>
                <p className="text-justify text-gray-600">{type.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center py-8">
        <Link href="/becomeapartner">
          <button className="cursor-pointer rounded-lg bg-blue-500 px-8 py-3 text-lg font-semibold text-white transition-all duration-200 hover:bg-blue-700 active:translate-y-1">
            Become a Partner
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Partners;
