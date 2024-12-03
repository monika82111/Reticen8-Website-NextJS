// "use client";

// import { useState, useRef, useEffect } from "react";

// const datasheets = [
//   { name: "Datasheet Marge-200", url: "/images/datasheets/Datasheet-marge-200.pdf" },
//   { name: "Datasheet Marge-300", url: "/images/datasheets/Datasheet-marge-300.pdf" },
//   { name: "Datasheet Marge-400", url: "/images/datasheets/Datasheet-marge-400.pdf" },
//   { name: "Datasheet Marge-20", url: "/images/datasheets/Datasheet-marge20.pdf" },
//   { name: "Datasheet Marge-25", url: "/images/datasheets/Datasheet-marge25.pdf" },
//   { name: "Datasheet Marge-35", url: "/images/datasheets/Datasheet-marge35.pdf" },
//   { name: "Datasheet Marge-100", url: "/images/datasheets/Datasheet-marge100.pdf" },
//   { name: "Datasheet Marge-160", url: "/images/datasheets/Datasheet-marge160.pdf" },
// ];

// const Downloads = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleOutsideClick = (event: MouseEvent) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//       setIsDropdownOpen(false);
//     }
//   };

//   useEffect(() => {
//     // Add event listener to detect outside clicks
//     document.addEventListener("mousedown", handleOutsideClick);
//     return () => {
//       // Cleanup the event listener
//       document.removeEventListener("mousedown", handleOutsideClick);
//     };
//   }, []);

//   return (
//     <div className="relative inline-block text-left" ref={dropdownRef}>
//       {/* Button to toggle the dropdown */}
//       <button
//         className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-800 rounded-lg transition-all duration-300 ease-in-out"
//         onClick={toggleDropdown}
//       >
//         Download Datasheet
//       </button>

//       {/* Dropdown Menu */}
//       {isDropdownOpen && (
//         <ul
//           className="absolute mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-10 overflow-y-auto"
//           style={{ maxHeight: "100px" }} // Dropdown scroll height
//         >
//           {datasheets.map((datasheet, index) => (
//             <li key={index} className="hover:bg-gray-100">
//               <a
//                 href={datasheet.url}
//                 download
//                 className="block px-4 py-2 text-gray-700"
//               >
//                 {datasheet.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Downloads;


"use client";

import { useState } from "react";

const Downloads = ({ datasheetTitle, datasheetUrl }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    organization: "",
    contact: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Include datasheetTitle inside formValues
  const payload = {
    formValues: {
      ...formValues,          // Spread the existing form values
      datasheetTitle,         // Add datasheetTitle to formValues
    }
  };

  try {
    const response = await fetch("/api/salesForm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      console.log("Form submitted successfully!");

      // Download the datasheet
      const anchor = document.createElement("a");
      anchor.href = datasheetUrl; // Use the datasheet URL
      anchor.download = `${datasheetTitle}.pdf`; // Optional: Set the download filename
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);

      // Reset form and close dialog
      setFormValues({
        name: "",
        organization: "",
        contact: "",
        email: "",
      });
      setIsDialogOpen(false);
    } else {
      console.error("Failed to submit form:", await response.json());
    }
  } catch (err) {
    console.error("Error:", err);
  }
};


  return (
    <div className="relative inline-block text-left">
      <button
        className="px-3 py-1 text-white bg-blue-600 hover:bg-blue-800 rounded-lg transition-all duration-300 ease-in-out"
        onClick={() => setIsDialogOpen(true)}
      >
        Download
      </button>

      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg" style={{ width: "500px" }}>
            <h2 className="text-xl font-bold mb-4">Download Datasheet</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formValues.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Organization</label>
                <input
                  type="text"
                  name="organization"
                  value={formValues.organization}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Contact</label>
                <input
                  type="text"
                  name="contact"
                  value={formValues.contact}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800">
                  Download
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 ml-4"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Downloads;
