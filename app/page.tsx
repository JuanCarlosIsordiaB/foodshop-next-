

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <h1 className="text-white bg-blue-500 rounded-xl shadow-md p-5 font-bold text-4xl text-center md:text-6xl my-9">
        Start Ordering your{" "}
        <span className="block text-center text-blue-900">Favorite Food</span>
      </h1>

      <div className="w-full max-w-lg m-3">
        <img
          className="rounded-xl my-2 md:ml-9"
          src="/productsImages/donas_11.jpg"
          alt="food"
          width={300}
          height={300}
        />
        <img
          className="rounded-xl "
          src="/productsImages/pizzas_02.jpg"
          alt="food"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
