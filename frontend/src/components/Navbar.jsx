import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-lg">
            <div className='max-w-6xl mx-auto px-4'>
                <div className="flex justify-between items-center h-16"> 
                    {/* Logo Placeholder */}
                    <Link to="/" className="text-2xl font-bold text-blue-900">
                    PolitScore</Link>

                    {/* {Navigation Links} */}
                    <div className="hidden md:flex space-x-8 ">
                      <Link to="/about" className='text-gray-700 hover:text-blue-600 transition-colors'>
                      About</Link>
                       <Link 
                        to="/contact" 
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            Contact
                        </Link>
                        <Link 
                        to="/creator" 
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                        >
                        Creator
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}