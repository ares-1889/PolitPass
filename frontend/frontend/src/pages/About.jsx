export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About PolitPass</h1>
          <p className="text-xl md:text-2xl">
            A systematic scoring framework aimed at evaluating Public servants, encompassing politicians, judges, police officers, administrators, and bankers,
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Furthermore</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Currently in Inception and Growth. The PolitScore framework, designed to assess alignment with key traits, promotes ethical governance, inclusivity, and professional development. Additionally, visualization tools offer policymakers dynamic methods for transparent, data-driven decision-making. While limitations such as nuanced trait measurement and contextual adaptability are acknowledged, this framework lays the foundation for targeted training and performance improvement in public service.

              </p>
              <p className="text-gray-600 leading-relaxed">
                Public service is the backbone of societal functioning, with public servants entrusted to ensure justice, governance, and welfare. Effective public service influences public trust and institutional legitimacy. However, structured methods to evaluate the core traits underpinning public servant performance are often lacking. This project introduces a comprehensive framework that identifies ten essential traits and their subtraits, offering a nuanced understanding of their societal impact.

              </p>
            </div>
            <img 
              src="/src/assets/images/01.jpg" 
              alt="Our Story" 
              className="rounded-l shadow-lg w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-blue-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">PolitScore Framework</h3>
            <p className="text-gray-600">
              The PolitScore framework, designed to assess alignment with key traits, promotes ethical governance, inclusivity, and professional development. Additionally, visualization tools offer policymakers dynamic methods for transparent, data-driven decision-making. While limitations such as nuanced trait measurement and contextual adaptability are acknowledged, this framework lays the foundation for targeted training and performance improvement in public service. <br className=""></br>
              
              The PolitScore framework utilizes a weighted scoring system to evaluate traits based on role-specific demands. Visualization tools, including dashboards and tier classifications, enable accessible interpretation for stakeholders. These tools are designed to promote transparency, trust, and data-driven decision-making, supporting professional development and targeted training programs.

            </p>
          </div>
          <div className="bg-green-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-green-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
             In an ideal democracy, citizens hold the ultimate authority—the right to create laws, regulations, and constitutions—and choose public servants to serve within the frameworks they establish. Yet, in practice, this ideal is often subverted. Public servants, particularly political leaders, frequently craft rules that benefit themselves, make unrealistic promises during elections, and prioritize personal gains over public welfare. This creates confusion among citizens, leaving them uncertain about whom to trust or hold accountable. By introducing the PolitScore framework, which evaluates public servants based on ten essential traits, this project aims to empower citizens with a transparent, standardized method to assess their leaders. Such a system could strengthen democratic principles by ensuring that only individuals with strong PolitScore evaluations occupy positions of governance and public trust, paving the way for a truly representative and ethical democracy.

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
          <div className="grid md:grid-cols-1 gap-8">
            {[1].map((item) => (
              <div key={item} className="bg-white p-6 rounded-xl shadow-md text-center">
                <img 
                  src={"/src/assets/images/Nabraj_Uncle.png"} 
                  alt="Team member" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Dr.Nab Roshyara</h3>
                <p className="text-gray-600 mb-2">Founder</p>
                <p className="text-sm text-gray-500">
                  I work as a programmer and mathematician. Currently I am working on a E-commerce Big data project and REST API calls with plentymarkets
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      {/* <section className="bg-gray-800 text-white py-16 px-4">
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
      </section> */}
    </div>
  );
}