export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl">
            Committed to creating lasting change in our communities
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded in 2010, [NGO Name] began as a small community initiative 
                aimed at addressing educational disparities. What started as a 
                weekend tutoring program has now grown into a multi-faceted 
                organization impacting thousands of lives annually.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our journey has been marked by collaborative efforts with local 
                communities, government bodies, and international partners to 
                create sustainable development solutions.
              </p>
            </div>
            <img 
              src="/about-story.jpg" 
              alt="Our Story" 
              className="rounded-xl shadow-lg w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-blue-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To empower underprivileged communities through education, healthcare, 
              and sustainable development initiatives that create long-term, 
              positive change.
            </p>
          </div>
          <div className="bg-green-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-green-600 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              A world where every individual has access to basic necessities, 
              quality education, and opportunities to reach their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-xl shadow-md text-center">
                <img 
                  src={`/team-${item}.jpg`} 
                  alt="Team member" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                <p className="text-gray-600 mb-2">Position Title</p>
                <p className="text-sm text-gray-500">
                  Expertise in community development and project management
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-gray-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-gray-300">Lives Impacted</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-gray-300">Communities Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-gray-300">Awards Won</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-gray-300">Volunteers</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}