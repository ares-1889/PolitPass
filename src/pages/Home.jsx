export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to PolitScore
          </h1>
          <p className="text-xl mb-8">
            A holistic and dynamic approach to evaluating public servants’ effectiveness. By integrating ethical governance principles with data-driven methodologies.
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
            Get Involved
          </button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Mission
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Reliability</h3>
              <p className="text-gray-600">
                Making Reliability a synonym for Public Service
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Ethical Governance</h3>
              <p className="text-gray-600">
                Ethics is a vague word, but the lack of Definition or a rough Framework does more harm than a vague one.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Inclusivity</h3>
              <p className="text-gray-600">
                Highlighting the "By the people" in "The government of the people, by the people, for the people,"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Make a Difference</h2>
          <p className="mb-8 text-gray-300">
            Join us in creating lasting change in our community
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Donate Now
            </button>
            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-800 transition-colors">
              Volunteer
            </button>
          </div>
        </div>
      </section>

      {/* Recent Projects/News */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Recent Updates
          </h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img 
                src="/src/assets/images/Abstract.jpg" 
                alt="Project" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Paper Publication**</h3>
                <p className="text-gray-600">
                  The Paper formulates and presents a Framework that utilizes a weighted scoring system to evaluate traits based on role-specific demands. Visualization tools, including dashboards and tier classifications, enable accessible interpretation for stakeholders. These tools are designed to promote transparency, trust, and data-driven decision-making, supporting professional development and targeted training programs.

                </p>
              </div>
            </div>
            {/* Project Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img 
                src="/src/assets/images/Website.jpg" 
                alt="Project" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Website Formation**</h3>
                <p className="text-gray-600">
                  Like Every Superhero needs his Theme music, every good Project needs its own Website.

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}