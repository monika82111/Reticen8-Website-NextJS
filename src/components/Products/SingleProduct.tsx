
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

const SingleProduct = ({ product }: { product: Product }) => {
  const { id, slug ,  title, image } = product;

  return (
    <>
      <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark ">
        {/* Use slug in the Link */}
        <Link
          href={`/product-details/${product.slug}`}  
          className="relative block aspect-[37/22] w-full "
        >
          <Image src={image} alt="image" fill />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href={`/product-details/${product.slug}`} 
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl text-center"
            >
              {title}
            </Link>
          </h3>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
