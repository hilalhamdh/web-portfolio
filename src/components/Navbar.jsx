import { useState } from "react";
import { Link } from "react-router-dom";
import { TfiAlignJustify, TfiClose } from "react-icons/tfi";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h1 className="text-[32px] md:text-[48px] font-extrabold tracking-tight">
            <span className="text-black">H</span>
            <span className="text-purple-600">L</span>
          </h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex items-center flex-row gap-4 font-semibold">
            <li className="mr-4 transition-all ease-in-out hover:scale-110">
              <a href="home">Home</a>
            </li>
            <li className="mr-4 transition-all ease-in-out hover:scale-110">
              <a href="about">About Me</a>
            </li>

            <li className="mr-4 transition-all ease-in-out hover:scale-110">
              <a href="skills">Skills</a>
            </li>
            <li className="mr-4 transition-all ease-in-out hover:scale-110">
              <a href="">Portfolio</a>
            </li>
            <li className="mr-4 transition-all ease-in-out hover:scale-110">
              <a href="contact">Contact Me</a>
            </li>
            <li className="mr-4 transition-all ease-in-out hover:scale-110">
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </div>

        <div className="md:hidden absolute right-4 top-4 z-50">
          {!toggle ? (
            <TfiAlignJustify
              onClick={() => setToggle(true)}
              className="w-6 h-6 cursor-pointer float-right"
            />
          ) : (
            <TfiClose
              onClick={() => setToggle(false)}
              className="w-6 h-6 cursor-pointer float-right"
            />
          )}

          {toggle && (
            <ul className="flex flex-col bg-gray-300 mt-8 p-2 rounded-sm shadow-lg">
              <li className="p-3 transition-all ease-in-out hover:scale-110">
                <a href="#home" onClick={() => setToggle(false)}>
                  Home
                </a>
              </li>
              <li className="p-3 transition-all ease-in-out hover:scale-110">
                <a href="#about" onClick={() => setToggle(false)}>
                  About Me
                </a>
              </li>
              <li className="p-3 transition-all ease-in-out hover:scale-110">
                <a href="#skills" onClick={() => setToggle(false)}>
                  Skills
                </a>
              </li>
              <li className="p-3 transition-all ease-in-out hover:scale-110">
                <a href="#portfolio" onClick={() => setToggle(false)}>
                  Portfolio
                </a>
              </li>
              <li className="p-3 transition-all ease-in-out hover:scale-110">
                <a href="#contact" onClick={() => setToggle(false)}>
                  Contact Me
                </a>
              </li>
              <li className="p-3 transition-all ease-in-out hover:scale-110">
                <a href="/" onClick={() => setToggle(false)}>
                  Logout
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
