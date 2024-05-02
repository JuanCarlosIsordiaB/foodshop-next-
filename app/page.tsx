import Image from "next/image";

export default function Home() {
  return (
    <div className="md:flex ">
      <div className="w-1/3 items-center">
        <h1 className="text-gray-500 font-bold text-4xl text-center  md:text-9xl mt-9">
        Start Ordering your{" "}
        <span className="block text-center text-blue-500">Favorite Food</span>
      </h1>
      </div>
      
      <div className="w-2/3">
        <Image className="rounded-xl ml-8 mb-4" src="/productsImages/donas_11.jpg" alt="food" width={400} height={400} />
        <Image className="rounded-xl ml-80" src="/productsImages/pizzas_02.jpg" alt="food" width={500} height={500} />
      </div>
    </div>
  );
}
