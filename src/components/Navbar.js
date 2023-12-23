import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* Background Colour */}
      <nav className="bg-gray-950">
        {/* Setting Width */}
        <div className="container mx-auto px-4">
          {/* Setting Nav Item Postion */}
          <div className="relative flex h-16 items-center">
            {/* Title */}
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <Link
                to={`/`}
                className="text-white rounded-md px-3 py-2 text-md font-medium hover:bg-gray-900"
              >
                Sam Downey Portfolio
              </Link>

              <Link
                to={`/projects/personal`}
                className="bg-gray-950 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded"
              >
                Personal Projects
              </Link>

              <Link
                to={`/projects/college`}
                className="bg-gray-950 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded"
              >
                College Projects
              </Link>

              <Link
                to={`/about`}
                className="bg-gray-950 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded"
              >
                About Me
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
