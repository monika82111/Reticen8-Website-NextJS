// "use client";

// import { useState } from "react";
// import allProductDetails from "./AllProducts";

// const Products = () => {
//   const products = Object.keys(allProductDetails); // Get product names dynamically

//   // Set the initial selected product to "Marge"
//   const [selectedProduct, setSelectedProduct] = useState<string>("Marge");

//   // Handler to update the selected product when a button is clicked
//   const handleProductClick = (product: string) => {
//     setSelectedProduct(product);
//   };

//   return (
//     <section id="product" className="overflow-hidden py-16 md:py-20 lg:py-28 bg-blue-50">
//       <div className="container ">
//         <div className="space-y-6">
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl ">
//             Our Products
//           </h2>
//           <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed mb-10 text-justify pb-12">
//             At Reticen8, our commitment to innovation and excellence extends to both our proprietary software solutions and our hardware-based gateway products. These offerings are meticulously developed and integrated to provide comprehensive cyber security solutions that meet the diverse needs of our clients. While our hardware-based gateway products serve as the frontline defense against cyber threats, it's our proprietary software that enhances their capabilities, ensuring unparalleled robustness, customization, and performance.
//           </p>
//         </div>
//         <div className="-mx-4 flex flex-wrap">
//           {/* Left side: List of Products */}
//           <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
//             <div className="space-y-4">
//               {products.map((product, index) => (
//                 <button
//                   key={index}
//                   className={`w-full py-2 px-4 rounded-md text-left transition-colors duration-300 ease-in-out ${
//                     selectedProduct === product
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-200 hover:bg-blue-200"
//                   }`}
//                   onClick={() => handleProductClick(product)}
//                 >
//                   {product}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Right side: Display selected product content */}
//           <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
//             <div className="rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
//               {allProductDetails[selectedProduct]} {/* Display selected product details */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>

    
    
//   );
// };

// export default Products;




import SectionTitle from "../Common/SectionTitle";
import SingleProduct from "./SingleProduct";
import productData from "./productData";

const Product = () => {
 
  
  return (
    <section
      id="product"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28 border"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Products"
          paragraph="There are many Products by Reticen8 Technology Pvt. ltd ."
          center
        />
          
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3 ">
          {productData.map((product) => (
            <div key={product.slug} className="w-full ">
              <SingleProduct product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
