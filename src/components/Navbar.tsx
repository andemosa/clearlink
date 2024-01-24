import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";

import Button from "./Button";
import { ClearLinkIcon } from "./Logos";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-grey-100 border border-grey-300 rounded-full relative">
      {/* Desktop Navigation */}
      <div className="lg:flex justify-between items-center w-[95%] mx-auto hidden py-2 flex-wrap">
        <div className="flex items-center gap-1 hover:scale-105 cursor-pointer">
          <ClearLinkIcon />
          <p className="text-grey-900 font-semibold text-lg">
            ClearLink
            <span className="text-clear-400 font-semibold text-2xl">.</span>
          </p>
        </div>
        <ul className="text-grey-500 flex gap-8 items-center cursor-pointer">
          <li className="hover:scale-105">Products</li>
          <li className="hover:scale-105">Solutions</li>
          <li className="hover:scale-105">Resources</li>
          <li className="hover:scale-105">Pricing</li>
        </ul>
        <div className="flex items-center gap-4">
          <Button
            text="Talk to sales"
            className="text-grey-900 bg-white border border-grey-400 w-full hover:text-white hover:bg-grey-900 hover:border-grey-900"
          />
          <Button
            text="Sign up for free"
            className="text-white bg-clear-700 border border-clear-700 hover:text-clear-700 hover:bg-white"
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex justify-between items-center p-4">
        <div className="flex items-center gap-1">
          <ClearLinkIcon />
          <p className="text-grey-900 font-semibold text-lg">ClearLink</p>
        </div>
        {isMobileMenuOpen ? (
          <CgClose
            onClick={toggleMobileMenu}
            className="text-grey-500 text-2xl cursor-pointer transition-all duration-300 transform hover:scale-110"
          />
        ) : (
          <FiMenu
            onClick={toggleMobileMenu}
            className="text-grey-500 text-2xl cursor-pointer transition-all duration-300 transform hover:scale-110"
          />
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-grey-100 px-6 py-8 absolute top-20 left-0 right-0 z-50 w-full rounded-md ">
          <ul className="text-grey-500  cursor-pointer">
            <li className="py-2">Products</li>
            <li className="py-2">Solutions</li>
            <li className="py-2">Resources</li>
            <li className="py-2">Pricing</li>
          </ul>
          <div className="flex  flex-col gap-4  mt-4">
            <Button
              text="Talk to sales"
              className="text-grey-900 bg-white border border-grey-400"
            />
            <Button
              text="Sign up for free"
              className="text-white bg-clear-700 border border-clear-700"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
