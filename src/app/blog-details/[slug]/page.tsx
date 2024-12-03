import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reticen8 ",
  description: "This is Blog Details Page for Reticen8",
  // other metadata
};


// Static data for each blog
const blogData = {
   "securing-your-inbox-how-epistle-protects-against-email-threats": {
    // title: "Securing Your Inbox: How Epistle Protects Against Email Threats",
       slug: "securing-your-inbox-how-epistle-protects-against-email-threats",
    description: `In an era where cyber threats are becoming increasingly sophisticated, email security remains a critical concern for businesses worldwide. As recent incidents in India have demonstrated, the threat of email spoofing and other malicious activities can cause significant damage to an organization's reputation and operations. Understanding these threats and implementing robust security measures is essential to safeguarding digital communications.`,
    content: (
      <>
       <section className="pb-[120px] pt-[150px]">
  <div className="container">
    <div className="-mx-4 flex flex-wrap justify-center">
      <div className="w-full px-4 lg:w-8/12">
        <div>
          <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
            Securing Your Inbox: How Epistle Protects Against Email Threats
          </h2>
          <hr className="my-6 border-gray-300" />
          <div>
            <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
              In an era where cyber threats are becoming increasingly sophisticated, email security remains a critical concern for businesses worldwide. As recent incidents in India have demonstrated, the threat of email spoofing and other malicious activities can cause significant damage to an organization's reputation and operations. Understanding these threats and implementing robust security measures is essential to safeguarding digital communications.
            </p>
            <div className="mb-10 w-full overflow-hidden rounded">
              <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                <Image
                  src="/images/blog/image7.jpg"
                  alt="image"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
            <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
              <strong className="text-primary dark:text-white">The Rising Threat of Email Spoofing : - </strong> Email spoofing is a common tactic used by cybercriminals to impersonate legitimate email addresses, thereby tricking recipients into believing they are communicating with a trusted source. This can lead to a variety of malicious activities, including phishing attacks, ransomware, and fraudulent transactions.
              <br /><strong className="text-primary dark:text-white"> Real-World Examples :- </strong>
              Just last month, two significant incidents in India highlighted the pervasive nature of email threats:
              <br />
              Incident 1: This case demonstrated how vulnerable organizations could be to email-based attacks, leading to severe reputational damage and financial loss.
              <br />
              Incident 2: Another case where malicious actors exploited weak email security to perpetrate fraud, further emphasizing the need for robust protective measures.
              <br />
              These incidents underscore the urgent need for businesses to enhance their email security protocols to prevent similar occurrences.
            </p>
            <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
              A Five-Year-Old Incident and Its Lessons
            </h3>
            <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
              Five years ago, during a sales call, a learned technocrat demonstrated the ease with which email spoofing could be conducted. By using a spoofing website, he showed how simple it was to send emails that appeared to come from legitimate addresses like someone@xyz.com. This incident highlighted the potential for significant harm if such vulnerabilities were exploited by malicious actors.
            </p>

            <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
              The Role of Email Gateway Security
            </h3>
            <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
              To address these threats, businesses can deploy email gateway security solutions. Epistle, Reticen8's advanced email gateway security product, offers comprehensive protection against email spoofing and other email-based threats.
            </p>

            <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
              Key Features of Epistle
            </h3>
            <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
              By implementing these protocols, Epistle ensures that emails from domains that have not set up SPF, DKIM, and DMARC correctly are either quarantined as spam or not delivered at all, thereby significantly reducing the risk of email spoofing.
            </p>
            <ul className="mb-10 list-inside list-disc text-body-color">
              <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                <span className="text-black">DKIM (Domain Keys Identified Mail):</span> This protocol uses public key cryptography to authenticate email messages, ensuring that emails are not forged. DKIM provides a set of keys that confirm the original sender's identity and prevent fraudulent interception of emails.
              </li>
              <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                <span className="text-black">SPF (Sender Policy Framework):</span> SPF is a whitelist of authorized senders for a particular domain. It helps in preventing spoofed emails from being delivered by verifying the sender's IP address against the list of authorized senders.
              </li>
              <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                <span className="text-black">DMARC (Domain-based Message Authentication, Reporting & Conformance):</span> DMARC builds on DKIM and SPF by instructing mail servers on what to do when an email fails these checks. It allows organizations to specify whether to mark failing emails as spam, deliver them anyway, or reject them outright.
              </li>
            </ul>
            <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
              Addressing Different Scenarios
            </h3>
            <ul className="mb-10 list-inside list-disc text-body-color">
              <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                <span className="text-black">On-Premise Email Solutions:</span> For organizations managing their email in-house with solutions like MS Exchange or Zimbra, Epistle provides robust gateway security to protect against email threats. This ensures that all incoming and outgoing emails are thoroughly checked and authenticated, reducing the risk of spoofing and other malicious activities.
              </li>
              <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                <span className="text-black">Cloud-Based Email Solutions:</span> For businesses using cloud-based email services like GSuite or O365, Reticen8 is developing a roadmap for integrating Cloud Access Security Broker (CASB) solutions to enhance email security further. This future-proof approach ensures that even outsourced email solutions can benefit from advanced protection measures.
              </li>
            </ul>
            <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
              <p className="text-center text-base font-medium italic text-body-color">
                Email security is crucial not only to prevent immediate threats like ransomware attacks but also to guard against Trojans and malware that can gather intelligence about target organizations. Implementing comprehensive email security measures like those offered by Epistle is essential for maintaining the integrity and confidentiality of digital communications.
              </p>
              <span className="absolute left-0 top-0 z-[-1]">
                <svg
                  width="132"
                  height="109"
                  viewBox="0 0 132 109"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z"
                    fill="url(#paint0_linear_111:606)"
                  />
                  <path
                    opacity="0.5"
                    d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -14 104.337V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.3654 85.0768Z"
                    fill="url(#paint1_linear_111:606)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_111:606"
                      x1="0"
                      x2="1"
                      y1="0"
                      y2="1"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#5A63F2" />
                      <stop offset="1" stopColor="#5A63F2" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_111:606"
                      x1="0"
                      x2="1"
                      y1="0"
                      y2="1"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#5A63F2" />
                      <stop offset="1" stopColor="#5A63F2" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </div>
            <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
              Conclusion
            </h3>
            <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
              Email security is a top priority for organizations looking to protect their reputation and sensitive information. By leveraging advanced email gateway security solutions like Epistle, businesses can safeguard their communications and mitigate the risk of email-based threats. The incidents in India and the lessons learned from previous cases highlight the importance of staying vigilant against evolving cyber threats. Investing in robust email security measures is not just an option; it’s a necessity in today’s digital landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      </>
    ),
  },
  "safeguard-your-digital-assets-with-proprium-the-ultimate-drm-solution": {
    slug: "safeguard-your-digital-assets-with-proprium-the-ultimate-drm-solution",
    // title: "Safeguard Your Digital Assets with Proprium: The Ultimate DRM Solution",
    description: "Proprium is a cutting-edge Digital Rights Management (DRM) solution that empowers organizations to protect their digital assets effectively.",
    content: (
      <>
        <section className="pb-[120px] pt-[150px]">
  <div className="container">
    <div className="-mx-4 flex flex-wrap justify-center">
      <div className="w-full px-4 lg:w-8/12">
        <div>
          <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
            Safeguard Your Digital Assets with Proprium: The Ultimate DRM Solution
          </h2>
          <hr className="my-6 border-gray-300" />
          <div>
            <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
In the rapidly evolving digital landscape, protecting intellectual property and ensuring secure distribution of digital content are paramount. As digital piracy and unauthorized distribution become increasingly sophisticated, businesses and content creators need robust solutions to safeguard their digital assets. Enter Proprium, a cutting-edge Digital Rights Management (DRM) solution from Reticen8 designed to offer unparalleled protection and control over your digital content.            </p>
            <div className="mb-10 w-full overflow-hidden rounded">
              <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                <Image
                  src="/images/blog/image8.jpg"
                  alt="image"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>


            <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
             What is Proprium?
            </h3>
            <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
Proprium is a comprehensive DRM solution that provides businesses with the tools necessary to manage and protect digital rights across various media types. Whether you are a content creator, publisher, or distributor, Proprium ensures that your digital assets are secure from unauthorized access and distribution. This advanced DRM solution is equipped with features that address the most pressing security challenges in the digital content industry, making it an indispensable tool for safeguarding intellectual property.            </p>
            

            <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
              Key Features of Proprium
            </h3>
            <ul className="mb-10 list-inside list-disc text-body-color">
              <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                <span className="text-black">Advanced Encryption: </span>  Proprium employs state-of-the-art encryption techniques to ensure that your digital content is protected from unauthorized access. This means that only authorized users can access and use the content, significantly reducing the risk of piracy.
              </li>
              <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                <span className="text-black">Access Control:</span> With Proprium, you can define and enforce access policies for your digital content. This includes setting permissions for different user roles, such as viewing, editing, and sharing content. By controlling who can access your content and what they can do with it, you can better manage and protect your digital assets.
              </li>
              <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                <span className="text-black">Usage Tracking:</span> Proprium includes robust tracking and analytics features that allow you to monitor how your digital content is being used. This helps in identifying any unauthorized usage and taking necessary actions to mitigate potential risks.
              </li>
              <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                <span className="text-black">Seamless Integration:</span> Proprium is designed to integrate seamlessly with your existing systems and workflows. Whether you are using Apache or Nginx, Proprium can be easily configured to provide comprehensive DRM protection without disrupting your current operations.
              </li>
              <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                <span className="text-black">Scalability: </span> As your business grows, Proprium scales with you. It can handle a large number of users and a vast amount of digital content, ensuring that your DRM needs are met regardless of your business size.
              </li>
            </ul>



            <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
              Why Choose Proprium?
            </h3>
            <ul className="mb-10 list-inside list-disc text-body-color">
              <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                <span className="text-black">Comprehensive Protection:</span> Proprium covers all aspects of digital rights management, from encryption and access control to usage tracking and reporting. This ensures that your digital assets are fully protected at all times.
              </li>
              <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                <span className="text-black">Ease of Use:</span> Despite its advanced features, Proprium is user-friendly and easy to implement. Its intuitive interface and seamless integration capabilities make it accessible to businesses of all sizes.
              </li>
              <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                <span className="text-black">Proven Track Record:</span> Reticen8, the company behind Proprium, has a proven track record of delivering reliable and effective security solutions. You can trust Proprium to provide the level of protection your digital assets need.
              </li>
            </ul>
            <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
              <p className="text-center text-base font-medium italic text-body-color">
Reticen8, the company behind Proprium, has a strong history of delivering reliable and effective security solutions. Trust Proprium to safeguard your digital assets with the protection they deserve. Experience peace of mind with proven security expertise.              </p>
              <span className="absolute left-0 top-0 z-[-1]">
                <svg
                  width="132"
                  height="109"
                  viewBox="0 0 132 109"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z"
                    fill="url(#paint0_linear_111:606)"
                  />
                  <path
                    opacity="0.5"
                    d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -14 104.337V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.3654 85.0768Z"
                    fill="url(#paint1_linear_111:606)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_111:606"
                      x1="0"
                      x2="1"
                      y1="0"
                      y2="1"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#5A63F2" />
                      <stop offset="1" stopColor="#5A63F2" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_111:606"
                      x1="0"
                      x2="1"
                      y1="0"
                      y2="1"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#5A63F2" />
                      <stop offset="1" stopColor="#5A63F2" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
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
  "elevate-your-file-sharing-with-partaking-the-ultimate-secure-sharing-solution": {
    slug: "elevate-your-file-sharing-with-partaking-the-ultimate-secure-sharing-solution",
    // title: "Elevate Your File Sharing with Partaking: The Ultimate Secure Sharing Solution",
    description: "Partaking is a state-of-the-art secure file-sharing solution designed to enhance collaboration while ensuring data protection.",
    content: (
      <>
      <section className="pb-[120px] pt-[150px]">
  <div className="container">
    <div className="-mx-4 flex flex-wrap justify-center">
      <div className="w-full px-4 lg:w-8/12">
        <div>
          <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
            Elevate Your File Sharing with Partaking: The Ultimate Secure Sharing Solution
          </h2>
          <hr className="my-6 border-gray-300" />
          <div>
            <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
In today’s digital age, the ability to share files securely and efficiently is paramount. Whether you’re collaborating on a project, sharing confidential business documents, or simply exchanging personal files, ensuring that your data is protected from unauthorized access is crucial. Reticen8 introduces Partaking, an advanced platform for secure and collaborative file sharing that combines robust security measures with unparalleled ease of use.            </p>
            <div className="mb-10 w-full overflow-hidden rounded">
              <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                <Image
                  src="/images/blog/image9.jpg"
                  alt="image"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
           
            <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
              Why Secure File Sharing Matters
            </h3>
            <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
The need for secure file sharing solutions has never been greater. With increasing cyber threats and data breaches, protecting sensitive information during transfer and storage is critical. Partaking addresses these concerns by providing a secure environment where users can effortlessly share and access files while maintaining the highest standards of privacy and confidentiality.            </p>

            <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
              Key Features of Partaking
            </h3>
            <ul className="mb-10 list-inside list-disc text-body-color">
              <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                <span className="text-black">Cloud Storage Options:</span> Store your files on public or private clouds to eliminate fears of data loss. Partaking ensures your data is always backed up and accessible.
              </li>
              <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                <span className="text-black">Universal Access: </span> Access your files from anywhere, at any time, ensuring you stay connected and productive.
              </li>
              <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                <span className="text-black">One-Click Sharing and Commenting:</span> Enhance collaboration with easy sharing and commenting features. Keep everyone on the same page without the need to sift through multiple emails to find the latest document version.
              </li>
              <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                <span className="text-black">Action Alerts:</span> Receive alerts for every action, message, and file shared, ensuring you never miss an important update.
              </li>
              <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                <span className="text-black">AES 256-Bit Encryption:</span>  Protect your data with industry-leading encryption, ensuring that your files are safe during transfer and storage.
              </li>
              <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                <span className="text-black">Secure Tunneling:</span> Secure tunneling protocols add an extra layer of protection to your data transfers.
              </li>
              <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                <span className="text-black">Browser-Based Viewing: </span> View documents securely online with restricted viewing options. Prevent unauthorized printing or downloading directly from the browser.
              </li>
              <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                <span className="text-black">Watermarked Documents: </span> Add watermarks to sensitive documents to deter unauthorized distribution and maintain control over your content.
              </li>
              <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                <span className="text-black">Granular Permissions:</span> Set detailed permissions for each file and folder, controlling who can view, edit, or download your documents.
              </li>
              <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                <span className="text-black">Password-Controlled Downloads:</span> Ensure that only authorized recipients can download files by requiring password access.
              </li>
            </ul>
            <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
             Enhancing Productivity and Security
            </h3>
            <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
Partaking is designed with the user in mind, offering a smooth and intuitive file-sharing experience without compromising on security. Its user-friendly interface, combined with powerful security features, ensures that you can share and collaborate on files with confidence.
</p>
            <ul className="mb-10 list-inside list-disc text-body-color">
              <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                <span className="text-black">End-to-End Encryption:</span> From the moment you upload your files to the moment they are downloaded by the recipient, your data is encrypted, ensuring it remains private and secure.
              </li>
              <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                <span className="text-black">Strong Authentication Protocols:</span> Implementing strong authentication protocols, Partaking ensures that only authorized users have access to your files.
              </li>
              <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                <span className="text-black">User-Friendly Interface:</span>A simple and intuitive interface makes it easy for users to navigate and manage their files without a steep learning curve.
              </li>
            </ul>
            <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
              <p className="text-center text-base font-medium italic text-body-color">

In today's digital world, secure and efficient file sharing is essential, whether for business or personal use. Reticen8's Partaking platform offers a powerful solution for secure, collaborative file sharing, combining advanced security with a user-friendly experience to protect your data from unauthorized access.              </p>
              <span className="absolute left-0 top-0 z-[-1]">
                <svg
                  width="132"
                  height="109"
                  viewBox="0 0 132 109"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z"
                    fill="url(#paint0_linear_111:606)"
                  />
                  <path
                    opacity="0.5"
                    d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -14 104.337V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.3654 85.0768Z"
                    fill="url(#paint1_linear_111:606)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_111:606"
                      x1="0"
                      x2="1"
                      y1="0"
                      y2="1"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#5A63F2" />
                      <stop offset="1" stopColor="#5A63F2" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_111:606"
                      x1="0"
                      x2="1"
                      y1="0"
                      y2="1"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#5A63F2" />
                      <stop offset="1" stopColor="#5A63F2" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
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
};


const BlogDetailsPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
   const blog = Object.values(blogData).find(
    (blog) => 'slug' in blog && blog.slug === slug
  );
//  const blog = Object.values(blogData).find((blog) => blog.slug === slug); // Convert to array and find by slug  // const blog = blogData[slug];
  // console.log(slug);
  console.log(blog);
  if (!blog) {
    return <div>Blog not found!</div>; // Handle not found case
  }

  return (
    <div>
      <div>{blog.content}</div>
    </div>
  );
};

export default BlogDetailsPage;
