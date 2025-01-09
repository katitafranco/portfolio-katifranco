const HeroSection = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center  text-white bgBase "
    >
      <h1 className=" text-4xl md:text-6xl font-bold mb-4 bg-green-500">
        I create web and mobile designs
      </h1>
      <button className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
        Get in Touch
      </button>
    </section>
  );
};

export default HeroSection;
