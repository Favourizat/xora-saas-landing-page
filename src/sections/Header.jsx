import { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import clsx from "clsx";


const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        setHasScrolled( window.scrollY > 32)
    }

    window.addEventListener('scroll', handleScroll) 

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const NavLink = ({ title, onClick }) => (
  <LinkScroll
    to={title}
    smooth={true}
    duration={500}
    offset={-80}
    spy={true}
    onClick={() => setIsOpen(false)}
    activeClass="nav-active" 
    className="base-bold uppercase text-p4 transition-colors duration-500 cursor-pointer hover:text-p3"
  >
    {title}
  </LinkScroll>
);


  const closeMenu = () => setIsOpen(false);

  return (
    <header
          className={clsx(
  "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
  hasScrolled && "py-2 bg-black-100 backdrop-blur-[8px]",
)}
    >
      <div className="container h-14 flex items-center justify-between">

        {/* Mobile Logo */}
        <LinkScroll
          to="hero"
          smooth
          duration={500}  
          className="lg:hidden cursor-pointer" 
          onClick={closeMenu}
        >
          <img src="/images/xora.svg" alt="logo" className="w-28" /> 
        </LinkScroll>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex w-full">
          <ul className="flex items-center w-full">
            <li className="nav-li">
              <NavLink title="features" />
              <span className="dot" />
            </li>

            <li className="nav-li">
              <NavLink title="pricing" />
              <span className="dot" />
            </li>

            <li className="nav-logo">
              <LinkScroll
                to="hero"
                smooth
                duration={500}
                offset={-250}
                className="cursor-pointer"
              >
                <img
                  src="/images/xora.svg"
                  alt="logo"
                  className="w-28"
                />
              </LinkScroll>
            </li>

            <li className="nav-li">
              <span className="dot" />
              <NavLink title="faq" />
            </li>

            <li className="nav-li">
              <span className="dot" />
              <NavLink title="download" />
            </li>
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white text-3xl z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-20 left-0 w-full h-[calc(100vh-5rem)]
            bg-s1
            sidebar-before
            transition-all duration-500
            lg:hidden
            ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0 pointer-events-none"
            }`}
        >
          <ul className="flex flex-col items-start gap-8 px-8 pt-12 relative z-10">
            <li>
              <NavLink title="features" onClick={closeMenu} />
            </li>

            <li>
              <NavLink title="pricing" onClick={closeMenu} />
            </li>

            <li>
              <NavLink title="faq" onClick={closeMenu} />
            </li>

            <li>
              <NavLink title="download" onClick={closeMenu} />
            </li>
          </ul>

          {/* Background Decoration */}
          <div className="pointer-events-none absolute top-1/2 left-0 w-[960px] h-[380px] -translate-y-1/2 -translate-x-[290px] rotate-90 -z-10">
            <img
              src="/images/bg-outlines.svg"
              alt="outline"
              className="relative"
            />

            <img
              src="/images/bg-outlines-fill.png"
              alt="outline fill"
              className="absolute inset-0 mix-blend-soft-light opacity-5"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;