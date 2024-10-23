const Experience = () => {
    return (
      <section className="bg-black-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">My Experience</h2>
          <p className="text-lg text-gray-500 mb-8">
           Iam learning GENAI in GIAIC and also getting experience in building and designing websites. 
            I love to creating dynamic user experiences with modern frameworks like Next.js, 
            and enjoy working with responsive designs.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
              <p className="text-gray-400">Learning  Next.js, and Tailwind CSS to create responsive and dynamic UI components.</p>
            </div>
  
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
              <p className="text-gray-400">Learning Photoshop, Illustrator, and Figma to design visually appealing user interfaces.</p>
            </div>
  
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p className="text-gray-400">Infuture learn Node.js and Express, for making my self comfortable for working with databases like MongoDB.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Experience;
  