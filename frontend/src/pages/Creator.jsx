export default function Creator() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">About the Creator</h2>
        
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="flex items-center gap-6 mb-6">
            <img 
              src="/creator-avatar.jpg" 
              alt="Creator" 
              className="w-32 h-32 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold">Dr. Nab Roshyara</h3>
              <p className="text-gray-600">Founder</p>
            </div>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            I work as a programmer and mathematician. Currently I am working on a E-commerce Big data project and REST API calls with plentymarket
          </p>
        </div>
      </div>
    </div>
  );
}