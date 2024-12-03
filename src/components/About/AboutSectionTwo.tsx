import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-sec1.png"
                alt="about-sec"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-sec1.png"
                alt="about-sec"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
    ROBUST PRODUCT PORTFOLIO
  </h3>
  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
    Reticen8 offers a diverse portfolio of cyber security solutions, including:
  </p>
  <ul className="list-disc pl-5 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
    <li>Gateway Email Security: Epistle</li>
    <li>Web Application Firewall (WAF): X9</li>
    <li>Server Load Balancer</li>
    <li>Digital Rights Management (DRM): Proprium</li>
    <li>Secured File Sharing: Partaking</li>
  </ul>
</div>

              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Continuous Innovation
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Our roadmap is designed to offer customers a holistic and integrated approach to cyber security. By expanding our product portfolio and incorporating new technologies, we aim to provide customers with a one-stop solution for all their cyber security needs. This comprehensive approach ensures seamless integration, simplified management, and enhanced security posture for our clients, enabling them to effectively mitigate risks and protect their digital assets.


                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Reliable Support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  "Our dedicated support team is committed to providing timely assistance and resolving any issues to ensure
              seamless operations for your business."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
