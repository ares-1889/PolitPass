export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to PolitScore
          </h1>
          <p className="text-xl mb-8">
            Empowering communities through sustainable change
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
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
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <p className="text-gray-600">
                Providing quality education to underprivileged children
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Healthcare</h3>
              <p className="text-gray-600">
                Ensuring access to basic healthcare facilities
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Environment</h3>
              <p className="text-gray-600">
                Promoting sustainable environmental practices
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
            Recent Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img 
                src="/placeholder-project.jpg" 
                alt="Project" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">School Renovation</h3>
                <p className="text-gray-600">
                  Renovated 5 schools in rural areas this year
                </p>
              </div>
            </div>
            {/* Add more project cards similarly */}
          </div>
        </div>
      </section>
    </div>
  );
}