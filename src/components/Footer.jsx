export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <p>© 2025 PolitScore. All rights reserved.</p>
          <div className="mt-4 space-x-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Facebook</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}