
import Image from "next/image";
import  Downloads  from "@/components/Downloads";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reticen8 ",
  description: "This is Product Details Page for Reticen8",
  // other metadata
};
// Static data for each blog
const productData = {
   "marge": {
    // title: "Securing Your Inbox: How Epistle Protects Against Email Threats",
       slug: "marge",
    description: `Marge : Designed to safeguard your network from both known and emerging threats, the Marge - The Next Generation Firewall`,
    content: (
      <>
       <section className="pb-[120px] pt-[150px]">
  <div className="container">
    <div className="-mx-4 flex flex-wrap justify-center">
      <div className="w-full px-4 lg:w-8/12">
        <div>
          <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight center">
            Marge :  The Next Generation Firewall 
          </h2>
          <hr className="my-6 border-gray-300" />
          <div>
            <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
              Designed to safeguard your network from both known and emerging threats, the Marge- The Next Generation Firewall combines advanced threat intelligence with robust security features. This ensures that your sensitive data remains secure and your online activities stay private.            </p>
            <div className="mb-10 w-full overflow-hidden rounded">
              <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                <Image
                  src="/images/product/image1.jpg"
                  alt="image"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
           <ul className="list-disc pl-5">
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Enhances security with dual verification methods, ensuring that only authorized users can access sensitive areas of the network.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Proactively guards against potential threats by identifying and neutralizing intrusions before they can compromise the network.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Controls access to websites and applications, enabling organizations to enforce browsing policies and limit exposure to harmful content.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Ensures continuous uptime for critical systems through high availability and hardware failover, minimizing the risk of service interruptions.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Securely backs up configurations to Google Drive, providing an encrypted and reliable way to restore settings in case of failure.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Supports seamless user authentication and management through integration with Active Directory (AD) and LDAP, simplifying user access controls.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Facilitates easy online and offline updates for security, ensuring that the firewall is equipped with the latest firmware and threat signatures to protect against new vulnerabilities.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Offers a user-friendly interface with a dynamic dashboard for intuitive navigation and streamlined management of security settings.</p></li>
</ul>  
          <h3 className="mb-8 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight center text-center">
           Datasheet Marge
          </h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4 text-center">
  {[
    { title: "Marge-20", url: "/images/datasheets/Datasheet-marge20.pdf" },
    { title: "Marge-25", url: "/images/datasheets/Datasheet-marge25.pdf" },
    { title: "Marge-35", url: "/images/datasheets/Datasheet-marge35.pdf" },
    { title: "Marge-100", url: "/images/datasheets/Datasheet-marge100.pdf" },
    { title: "Marge-160", url: "/images/datasheets/Datasheet-marge160.pdf" },
    { title: "Marge-200", url: "/images/datasheets/Datasheet-marge-200.pdf" },
    { title: "Marge-300", url: "/images/datasheets/Datasheet-marge-300.pdf" },
    { title: "Marge-400", url: "/images/datasheets/Datasheet-marge-400.pdf" },
  ].map((datasheet, index) => (
    <div
      key={index}
      className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-blue-50"
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        {datasheet.title}
      </h3>
      <Downloads datasheetTitle={datasheet.title} datasheetUrl={datasheet.url} />
    </div>
  ))}
</div>
 
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      </>
    ),
  },
  "proprium": {
       slug: "proprium",
    description: `Proprium : End-to-End protection of sensitive data.`,
    content: (
      <>
       <section className="pb-[120px] pt-[150px]">
  <div className="container">
    <div className="-mx-4 flex flex-wrap justify-center">
      <div className="w-full px-4 lg:w-8/12">
        <div>
          <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight center">
           Proprium : End-to-End protection of sensitive data.
          </h2>
          <hr className="my-6 border-gray-300" />
          <div>
            <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
Don't leave your confidential documents vulnerable to cyber threats and unauthorized access. Choose Proprium and experience peace of mind knowing that your most valuable digital assets are safeguarded by industry-leading security measures.
Contact us today to learn more about how Proprium can help protect your sensitive documents and secure your digital fut ure.

           </p>
            <div className="mb-10 w-full overflow-hidden rounded">
              <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                <Image
                  src="/images/product/image2.png"
                  alt="image"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
           <ul className="list-disc pl-5">
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Advanced encryption technologies ensure end-to-end protection of sensitive data.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Granular access controls, dynamic watermarking, and file expiration policies enhance security.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Seamless integration with existing infrastructure and comprehensive auditing capabilities ensure compliance and minimize disruption.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Confidently secure important documents without worrying about unauthorized access or leaks.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Easily manage corporate files with complete control and security.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Maintain control over shared files with features like access revocation and permission changes.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Ensure compliance with local and international regulations like GDPR.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">User-friendly interface without compromising security or functionality.</p></li>
</ul>
               <div className="w-full px-4 flex justify-center">
  <Link href="/requestdemo">
    <button className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-medium shadow-md hover:bg-blue-600 transition-all duration-300">
      Take a Demo
    </button>
  </Link>
</div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      </>
    ),
  },
  "partaking": {
     slug: "partaking",
    description: `Partaking : Protect your sensitive documents`,
    content: (
      <>
       <section className="pb-[120px] pt-[150px]">
  <div className="container">
    <div className="-mx-4 flex flex-wrap justify-center">
      <div className="w-full px-4 lg:w-8/12">
        <div>
          <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight center">
      Partaking : Protect your sensitive documents
          </h2>
          <hr className="my-6 border-gray-300" />
          <div>
            <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
Partaking provides an advanced platform for collaborative file sharing, allowing users to effortlessly access and distribute sensitive data with robust security measures. Whether engaging in project collaboration, sharing confidential files, or exchanging cherished memories, Partaking guarantees that your information remains accessible only to designated recipients, ensuring utmost privacy and confidentiality.
Contact us today to learn more about how Partaking can help protect your sensitive documents and secure your digital future.

           </p>
            <div className="mb-10 w-full overflow-hidden rounded">
              <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                <Image
                  src="/images/product/image3.png"
                  alt="image"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
     <ul className="list-disc pl-5">
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Ensure users have secure access anytime, anywhere.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Storage on public/private cloud to alleviate data loss fears.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Keep everyone on the same page without sifting through multiple emails for the latest document version.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Streamline communication with one-click sharing and commenting for increased ease.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Allow concerned individuals to comment on files and set view permissions for all, thus improving productivity.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Receive alerts for each action, message received, and files shared to stay updated.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Utilize AES 256-bit encryption and secure tunneling for the utmost data transfer security.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Offer secure online browser view with restricted viewing of documents and prevent printing.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Provide controlled download options with password protection and watermarked documents.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Web-based application that requires no specific agent for optimal accessibility.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Set granular permissions for each file/folder, including various access permissions and Active Directory/LDAP integrations.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Admin controls for managing users, permissions, and audit trails with export feature.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Implement policies for various groups, users, and folders based on the sensitive nature of documents and usage.</p></li>
</ul>
 </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </>
    ),
  },
  "epistle": {
     slug: "epistle",
    description: `Epistle - Premier Gateway Email Security solution`,
    content: (
      <>
       <section className="pb-[120px] pt-[150px]">
  <div className="container">
    <div className="-mx-4 flex flex-wrap justify-center">
      <div className="w-full px-4 lg:w-8/12">
        <div>
          <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight center">
   Epistle - Premier Gateway Email Security solution
          </h2>
          <hr className="my-6 border-gray-300" />
          <div>
            <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
Epistle serves as our premier Gateway Email Security solution, engineered to provide robust protection and control over email communications. Combining cutting-edge hardware and sophisticated software, Epistle offers organizations unparalleled defense against email-borne threats and data breaches.



           </p>
            <div className="mb-10 w-full overflow-hidden rounded">
              <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                <Image
                  src="/images/product/image4.jpg"
                  alt="image"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
    <ul className="list-disc pl-5">
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Epistle Gateway Email Security devices are meticulously crafted with high-quality hardware components to ensure reliability and performance.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Designed for seamless integration into existing network infrastructures, Epistle devices offer backward compatibility with SFP or Copper Ports, facilitating easy deployment and management.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Compact form factors and energy-efficient design make Epistle devices ideal for organizations of all sizes, providing comprehensive email security without compromising on space or power requirements.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Epistle Gateway Email Security devices boast advanced software features that enhance their security and efficiency in protecting email communications.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Key software functionalities include comprehensive email filtering, attachment scanning, and can work in conjunction with third-party URL filtering capabilities.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Advanced threat detection mechanisms, including Antivirus with Multiple Signature Channels and Threat Intelligence integration, provide proactive defense against malware, phishing attacks, and other email-borne threats.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">With intuitive management interfaces and customizable policies, Epistle empowers organizations to enforce email security policies effectively while maintaining productivity and compliance.</p></li>
</ul>

 </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </>
    ),
  },
  "x9": {
     slug: "x9",
    description: `X9 - Premier Web Application Firewall (WAF) solution`,
    content: (
      <>
       <section className="pb-[120px] pt-[150px]">
  <div className="container">
    <div className="-mx-4 flex flex-wrap justify-center">
      <div className="w-full px-4 lg:w-8/12">
        <div>
          <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight center">
X9 - Premier Web Application Firewall (WAF) solution
          </h2>
          <hr className="my-6 border-gray-300" />
          <div>
            <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
X9 stands as our premier Web Application Firewall (WAF) solution, engineered to fortify web-facing applications against a myriad of cyber threats. With meticulous attention to both hardware and software components, X9 delivers robust protection, scalability, and performance, safeguarding critical web assets with unparalleled efficiency.

           </p>
            <div className="mb-10 w-full overflow-hidden rounded">
              <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                <Image
                  src="/images/product/image5.png"
                  alt="image"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
     <ul className="list-disc pl-5">
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">X9 WAF appliances are meticulously designed with high-performance hardware components to ensure optimal reliability and throughput.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Our hardware specifications include advanced features such as RDIMM memory modules, SSD storage for fast data access, and provisioned 100G ports for high-speed connectivity.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Additionally, X9 appliances are equipped with backward-compatible SFP or Copper Ports, facilitating seamless integration with diverse network infrastructures.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">With a focus on scalability, our appliances are provisioned with compact 1U form factors, offering flexibility and efficiency in deployment.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Complementing the robust hardware, X9 boasts advanced software features that bolster its security capabilities and effectiveness.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Key software functionalities include comprehensive Web Application Firewall (WAF) capabilities, protection against OWASP Top 10 threats, and granular control over application-layer traffic.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">X9 also offers advanced threat intelligence integration, multi-layered threat detection and prevention mechanisms, and real-time security updates to mitigate emerging threats effectively.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">With support for SSL/TLS decryption and inspection, X9 ensures secure communication channels and protects against encrypted threats.</p></li>
</ul>

 </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </>
    ),
  },
  "equiflo": {
     slug: "equiflo",
    description: `Equiflo - Server Load Balancer solution`,
    content: (
      <>
       <section className="pb-[120px] pt-[150px]">
  <div className="container">
    <div className="-mx-4 flex flex-wrap justify-center">
      <div className="w-full px-4 lg:w-8/12">
        <div>
          <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight center">
     Equiflo - Server Load Balancer solution
          </h2>
          <hr className="my-6 border-gray-300" />
          <div>
            <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
Our Server Load Balancer solution is designed to optimize the performance, reliability, and scalability of mission-critical applications by intelligently distributing incoming network traffic across multiple servers. Combining advanced hardware capabilities with innovative software features, our Server Load Balancer ensures seamless application delivery and enhanced user experience.
           </p>
            <div className="mb-10 w-full overflow-hidden rounded">
              <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                <Image
                  src="/images/product/image6.jpg"
                  alt="image"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
    <ul className="list-disc pl-5">
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Our Server Load Balancer appliances are engineered with high-performance hardware components to deliver exceptional reliability and throughput.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Hardware features include RDIMM memory modules for enhanced stability, SSD storage for fast data access, and provisioned 100G ports for high-speed connectivity.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Additionally, our appliances are equipped with backward-compatible SFP or Copper Ports, allowing for flexible integration with diverse network environments.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">With a compact 1U form factor and scalable design, our appliances offer efficient deployment options to accommodate varying workload demands.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Complementing the robust hardware, our Server Load Balancer solution offers advanced software features to optimize application delivery and performance.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Key software functionalities include intelligent traffic routing algorithms, session persistence mechanisms, and health monitoring capabilities to ensure optimal server utilization and uptime.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Our solution provides comprehensive support for Layer 4 and Layer 7 load balancing, enabling organizations to balance traffic based on various criteria such as IP addresses, HTTP headers, and URL paths.</p></li>
  <li><p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">With built-in SSL termination and acceleration capabilities, our Server Load Balancer enhances security and performance for encrypted application traffic.</p></li>
</ul>
 </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </>
    ),
  },
};


const ProductDetailsPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
   const product = Object.values(productData).find(
    (product) => 'slug' in product && product.slug === slug
  );
//  const blog = Object.values(blogData).find((blog) => blog.slug === slug); // Convert to array and find by slug  // const blog = blogData[slug];
  // console.log(slug);
  console.log(product);
  if (!product) {
    return <div>Blog not found!</div>; // Handle not found case
  }

  return (
    <div>
      <div>{product.content}</div>
    </div>
  );
};

export default ProductDetailsPage;
