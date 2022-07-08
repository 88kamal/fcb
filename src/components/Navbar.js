
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="   ">
      <nav className=" nav shadow-2base">
        <div className="max-w-7base mx-auto px-4 base:px-6 lg:px-8">
          <div className="flex justify-center items-center  p-2">
            <div className="flex items-center">
              {/* <div className="flex-shrink-0">
                <img
                  className="h-11 w-12"
                  src="JSR GROUP.png"
                  alt="JSR logo"
                />
              </div> */}
              <div className="hidden md:block  ">
                <div className=" flex items-baseline space-x-3 ">
                  <Link
                    to="/"
                    className=" text  hover:text-black hover:bg-gray-100 text-white px-3 py-2  text-base font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    to="/latestupdate"
                    className="text-white hover:bg-gray-100 hover:text-black  px-3 py-2  text-base font-medium"
                  >
                    Latest Update
                  </Link>

                  <Link
                    to="/latestjob"
                    className=" text-white hover:bg-gray-100 hover:text-black  px-3 py-2  text-base font-medium"
                  >
                    Latest Job
                  </Link>
                  
                  <Link
                    to="/results"
                    className="text-white hover:bg-gray-100 hover:text-black  px-3 py-2  text-base font-medium"
                  >
                    Results
                  </Link>
                  
                  <Link
                    to="/admitcard"
                    className="text-white hover:bg-gray-100 hover:text-black  px-3 py-2  text-base font-medium"
                  >
                    Admit Card
                  </Link>
                  
                  <Link
                    to="universityupdate"
                    className="text-white hover:bg-gray-100 hover:text-black  px-3 py-2  text-base font-medium"
                  >
                    University Update
                  </Link>
                  
                  <Link
                    to="/sarkariyojna"
                    className="text-white hover:bg-gray-100 hover:text-black  px-3 py-2  text-base font-medium"
                  >
                    Sarkari Yojana
                  </Link>
                  {/* <Link
                    to="/syllabus"
                    className="text-white hover:bg-gray-100 hover:text-black  px-3 py-2  text-base font-medium"
                  >
                    Syllabus
                  </Link>
                   */}
                  <Link
                    to="/addmission"
                    className="text-white hover:bg-gray-100 hover:text-black  px-3 py-2  text-base font-medium"
                  >
                    Addmission
                  </Link>
                  
                  <Link
                    to="/scholarship"
                    className="text-white hover:bg-gray-100 hover:text-black  px-3 py-2  text-base font-medium"
                  >
                    Scholarship
                  </Link>
                  
                 
                  
                 
                  
                  {/* <Link
                    to="/allindiajob"
                    className=" text-white hover:bg-gray-100 hover:text-black  px-3 py-2  text-base font-medium"
                  >
                    All India Job
                  </Link> */}
                  <Link
                  to="/onlinticket"
                  className=" text-white hover:bg-gray-100 hover:text-black  px-3 py-2  text-base font-medium"
                >
                   Online Ticket
                </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden  ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="  inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white  "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>

                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 base:px-3">
                <Link
                  to="/"
                  className=" text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>

                <Link
                  to="/latestupdate"
                  className=" text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Latest Update
                </Link>
                <Link
                  to="/latestjob"
                  className=" text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Latest Job
                </Link>
                <Link
                  to="/results"
                  className=" text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Results                </Link>
                <Link
                  to="/admitcard"
                  className=" text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                   Admit Card
                </Link>
                <Link
                  to="/universityupdate"
                  className=" text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                 University Update
                </Link>
                <Link
                  to="/sarkariyojana"
                  className=" text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Sarkari Yojana
                </Link>

                <Link
                  to="/addmission"
                  className=" text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                Addmission
                </Link>

                <Link
                  to="/scholarship"
                  className=" text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                 Scholarship
                </Link>
                
                
                {/* <Link
                  to="/ allindiajob"
                  className=" text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                   All India Job
                </Link> */}
                <Link
                  to="/onlinticket"
                  className=" text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                   Online Ticket
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
     
    </div>
  );
}

export default Navbar;