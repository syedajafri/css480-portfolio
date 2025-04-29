
import React from "react";
import { Link } from "react-router-dom";
import { Home, Book } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100" role="navigation">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-4">
            <Link 
              to="/"
              className="flex items-center px-4 py-2 text-gray-700 hover:text-purple-dark focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 rounded-md"
              aria-label="Home"
            >
              <Home className="h-5 w-5 mr-2" />
              <span>Home</span>
            </Link>
            <Link 
              to="/things-to-read"
              className="flex items-center px-4 py-2 text-gray-700 hover:text-purple-dark focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 rounded-md"
              aria-label="Things to Read"
            >
              <Book className="h-5 w-5 mr-2" />
              <span>Things to Read</span>
            </Link>
          </div>
          <div className="flex items-center">
            {/* Empty div for potential future elements like theme toggle, etc. */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
