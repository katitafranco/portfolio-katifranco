const MyExpertise = () => {
  return (
    <section id="expertise" className=" h-screen py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">My Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold">UI/UX Design</h3>
            <p>Creating user-friendly and visually appealing interfaces.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold">Frontend Development</h3>
            <p>Building responsive and dynamic web applications.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold">React & React Native</h3>
            <p>Expertise in modern frameworks for web and mobile.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyExpertise;
