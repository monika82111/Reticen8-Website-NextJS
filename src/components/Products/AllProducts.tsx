import Link from "next/link";
import { useState } from "react";


  
const allProductDetails: { [key: string]: JSX.Element } = {
  Marge: (
    <>
      <h2 className="mb-5 text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300 ease-in-out hover:text-blue-600">
        Marge
      </h2>
      <p className="text-lg sm:text-xl font-medium leading-relaxed text-gray-700 dark:text-gray-300 mb-8 text-justify transition-all duration-300 ease-in-out">
        Designed to safeguard your network from both known and emerging threats, the Marge - The Next Generation Firewall combines advanced threat intelligence with robust security features. This ensures that your sensitive data remains secure and your online activities stay private.
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 sm:text-lg transition-all duration-300 ease-in-out">
        <li className="hover:text-blue-600">Enhances security with dual verification methods, ensuring that only authorized users can access sensitive areas of the network.</li>
        <li className="hover:text-blue-600">Proactively guards against potential threats by identifying and neutralizing intrusions before they can compromise the network.</li>
        <li className="hover:text-blue-600">Controls access to websites and applications, enabling organizations to enforce browsing policies and limit exposure to harmful content.</li>
        <li className="hover:text-blue-600">Ensures continuous uptime for critical systems through high availability and hardware failover, minimizing the risk of service interruptions.</li>
        <li className="hover:text-blue-600">Securely backs up configurations to Google Drive, providing an encrypted and reliable way to restore settings in case of failure.</li>
        <li className="hover:text-blue-600">Supports seamless user authentication and management through integration with Active Directory (AD) and LDAP, simplifying user access controls.</li>
        <li className="hover:text-blue-600">Facilitates easy online and offline updates for security, ensuring that the firewall is equipped with the latest firmware and threat signatures to protect against new vulnerabilities.</li>
        <li className="hover:text-blue-600">Offers a user-friendly interface with a dynamic dashboard for intuitive navigation and streamlined management of security settings.</li>
      </ul>


       <button
        className="mt-8 px-6 py-3 text-white bg-blue-600 hover:bg-blue-800 dark:bg-primary dark:hover:bg-primary-hover rounded-lg transition-all duration-300 ease-in-out"
          onClick={() => window.open("/images/datasheets/Datasheet-marge-200.pdf", "_blank")}
      >
        Download Datasheet
      </button>
      
    </>
  ),
  Proprium: (
    <>
      <h2 className="mb-5 text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300 ease-in-out hover:text-blue-600">
        Proprium
      </h2>
      <p className="text-lg sm:text-xl font-medium leading-relaxed text-gray-700 dark:text-gray-300 mb-8 text-justify transition-all duration-300 ease-in-out">
        Don't leave your confidential documents vulnerable to cyber threats and unauthorized access. Choose Proprium and experience peace of mind knowing that your most valuable digital assets are safeguarded by industry-leading security measures.
        Contact us today to learn more about how Proprium can help protect your sensitive documents and secure your digital future.
      </p>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 sm:text-lg transition-all duration-300 ease-in-out">
        <li className="hover:text-blue-600">Advanced encryption technologies ensure end-to-end protection of sensitive data.</li>
        <li className="hover:text-blue-600">Granular access controls, dynamic watermarking, and file expiration policies enhance security.</li>
        <li className="hover:text-blue-600">Seamless integration with existing infrastructure and comprehensive auditing capabilities ensure compliance and minimize disruption.</li>
        <li className="hover:text-blue-600">Confidently secure important documents without worrying about unauthorized access or leaks.</li>
        <li className="hover:text-blue-600">Easily manage corporate files with complete control and security.</li>
        <li className="hover:text-blue-600">Maintain control over shared files with features like access revocation and permission changes.</li>
        <li className="hover:text-blue-600">Facilitates easy online and offline updates for security, ensuring that the firewall is equipped with the latest firmware and threat signatures to protect against new vulnerabilities.</li>
        <li className="hover:text-blue-600">Ensure compliance with local and international regulations like GDPR.</li>
        <li className="hover:text-blue-600">User-friendly interface without compromising security or functionality.</li>
      </ul>
        <button
        className="mt-8 px-6 py-3 text-white bg-blue-600 hover:bg-blue-800 dark:bg-primary dark:hover:bg-primary-hover rounded-lg transition-all duration-300 ease-in-out"
        onClick={() => window.open("/datasheets/marge.pdf", "_blank")}
      >
        Download Datasheet
      </button>
      <Link
        href={`/contact`}
        className="mt-8 block text-lg font-medium text-blue-600 hover:text-blue-800 dark:text-white dark:hover:text-primary text-right transition-all duration-300 ease-in-out"
      >
        Learn More
      </Link>
    </>
  ),
  // Partaking: (
  //   <>
  //     <h2 className="mb-5 text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300 ease-in-out hover:text-blue-600">
  //       Partaking
  //     </h2>
  //     <p className="text-lg sm:text-xl font-medium leading-relaxed text-gray-700 dark:text-gray-300 mb-8 text-justify transition-all duration-300 ease-in-out">
  //       Partaking provides an advanced platform for collaborative file sharing, allowing users to effortlessly access and distribute sensitive data with robust security measures. Whether engaging in project collaboration, sharing confidential files, or exchanging cherished memories, Partaking guarantees that your information remains accessible only to designated recipients, ensuring utmost privacy and confidentiality.
  //       Contact us today to learn more about how Partaking can help protect your sensitive documents and secure your digital future.
  //     </p>

  //     <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 sm:text-lg transition-all duration-300 ease-in-out">
  //       <li className="hover:text-blue-600">Ensure users have secure access anytime, anywhere.</li>
  //       <li className="hover:text-blue-600">Storage on public/private cloud to alleviate data loss fears.</li>
  //       <li className="hover:text-blue-600">Keep everyone on the same page without sifting through multiple emails for the latest document version.</li>
  //       <li className="hover:text-blue-600">Streamline communication with one-click sharing and commenting for increased ease.</li>
  //       <li className="hover:text-blue-600">Allow concerned individuals to comment on files and set view permissions for all, thus improving productivity.</li>
  //       <li className="hover:text-blue-600">Receive alerts for each action, message received, and files shared to stay updated.</li>
  //       <li className="hover:text-blue-600">Utilize AES 256-bit encryption and secure tunneling for the utmost data transfer security.</li>
  //       <li className="hover:text-blue-600">Offer secure online browser view with restricted viewing of documents and prevent printing.</li>
  //       <li className="hover:text-blue-600">Provide controlled download options with password protection and watermarked documents.</li>
  //       <li className="hover:text-blue-600">Web-based application that requires no specific agent for optimal accessibility.</li>
  //       <li className="hover:text-blue-600">Set granular permissions for each file/folder, including various access permissions and Active Directory/LDAP integrations.</li>
  //       <li className="hover:text-blue-600">Admin controls for managing users, permissions, and audit trails with export feature.</li>
  //       <li className="hover:text-blue-600">Implement policies for various groups, users, and folders based on the sensitive nature of documents and usage.</li>
  //     </ul>
  //      <button
  //       className="mt-8 px-6 py-3 text-white bg-blue-600 hover:bg-blue-800 dark:bg-primary dark:hover:bg-primary-hover rounded-lg transition-all duration-300 ease-in-out"
  //       onClick={() => window.open("/datasheets/marge.pdf", "_blank")}
  //     >
  //       Download Datasheet
  //     </button>
  //   </>
  // ),
  Epistle: (
    <>
      <h2 className="mb-5 text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300 ease-in-out hover:text-blue-600">
        Epistle
      </h2>
      <p className="text-lg sm:text-xl font-medium leading-relaxed text-gray-700 dark:text-gray-300 mb-8 text-justify transition-all duration-300 ease-in-out">
        Epistle serves as our premier Gateway Email Security solution, engineered to provide robust protection and control over email communications. Combining cutting-edge hardware and sophisticated software, Epistle offers organizations unparalleled defense against email-borne threats and data breaches.
      </p>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 sm:text-lg transition-all duration-300 ease-in-out">
        <li className="hover:text-blue-600">Epistle Gateway Email Security devices are meticulously crafted with high-quality hardware components to ensure reliability and performance.</li>
        <li className="hover:text-blue-600">Designed for seamless integration into existing network infrastructures, Epistle devices offer backward compatibility with SFP or Copper Ports, facilitating easy deployment and management.</li>
        <li className="hover:text-blue-600">Compact form factors and energy-efficient design make Epistle devices ideal for organizations of all sizes, providing comprehensive email security without compromising on space or power requirements.</li>
        <li className="hover:text-blue-600">Epistle Gateway Email Security devices boast advanced software features that enhance their security and efficiency in protecting email communications.</li>
        <li className="hover:text-blue-600">Key software functionalities include comprehensive email filtering, attachment scanning, and can work in conjunction with third-party URL filtering capabilities.</li>
        <li className="hover:text-blue-600">Automatic threat detection and mitigation techniques offer continuous protection against evolving email-borne threats.</li>
        <li className="hover:text-blue-600">Data Loss Prevention (DLP) ensures sensitive information remains secure by scanning email content for critical data and preventing unauthorized transmission.</li>
        <li className="hover:text-blue-600">Advanced encryption protocols, including TLS and S/MIME, ensure that email communications are kept private and secure at all times.</li>
        <li className="hover:text-blue-600">Epistle seamlessly integrates with existing enterprise email platforms, including Microsoft Exchange and Office 365, providing enhanced protection against phishing, malware, and spam.</li>
      </ul>
       <button
        className="mt-8 px-6 py-3 text-white bg-blue-600 hover:bg-blue-800 dark:bg-primary dark:hover:bg-primary-hover rounded-lg transition-all duration-300 ease-in-out"
        onClick={() => window.open("/datasheets/marge.pdf", "_blank")}
      >
        Download Datasheet
      </button>
    </>
  ),
};

export default allProductDetails;
