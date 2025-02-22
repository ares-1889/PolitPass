export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <p>© 2025 PolitPass. All rights reserved.</p>
          <div className="mt-4 space-x-6">
            <a href="https://github.com/dr-roshyara" className="hover:text-blue-400 transition-colors">Github</a>
            <a href="https://www.linkedin.com/in/dr-nab-raj-roshyara-43420486/" className="hover:text-blue-400 transition-colors">LinkedIn</a>
            {/* <a href="#" className="hover:text-blue-400 transition-colors">Instagram</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}