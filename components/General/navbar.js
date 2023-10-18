import Image from "next/image";
import Link from "next/link";

// Image Importation
import hamburgerMenu from "@/public/Images/svg/hamburger-menu.svg";
import down from "@/public/Images/svg/chevron-down.svg";
import userPic from "@/public/Images/png/Image.png";
import verifiedtick from "@/public/Images/svg/verified-tick.svg";
import logo from "@/public/Images/png/logo.png";
import bell from "@/public/Images/svg/bell.svg";
import search from "@/public/Images/svg/search.svg";

function Navbar() {
  return (
    <>
      {/* TOP Navbar Container */}
      {/* USE THIS NAVBAR COMPONENT */}
      <header className="lg:bg-[#000B33] sticky z-10 top-0 lg:border-[#1D2739] bg-[#101928] border-[#1D2739] border">
        {/* container */}
        <div className="flex p-4 lg:px-6 lg:py-[14px] justify-between items-center">
          {/* Navbar Left Side */}
          <div className="flex gap-6 items-center">
            <div className="shrink-0 w-full h-auto max-w-[97px] lg:max-w-[120px]">
              <Image
                class="w-full h-auto"
                src={logo}
                alt="Full main logo dark"
              />
            </div>
            <nav className="hidden lg:flex shrink-0 gap-6 items-center font-semibold navbar-nav text-[14px] leading-[145%] text-[#98a2b3]">
              <Link className="px-5 " href="#">
                Home
              </Link>
              {/* ACTIVE LINK */}
              <Link
                className="px-5 active - py-2 px-5 bg-[rgba(255,255,255,0.1)] rounded-md text-[#F7F9FC]"
                href="#"
              >
                Experience Product Masterclass
              </Link>
              <Link className="px-5 " href="#">
                Momentum
              </Link>
              <Link className="px-5 " href="#">
                LYM Lab
              </Link>
            </nav>
          </div>

          {/* Navbar Right side */}
          <div className="flex lg:gap-7">
            {/* Bell and Search Icon */}
            <div className="flex gap-2 items-center">
              <div className="p-3">
                <Image src={bell} alt="Bell Icon" />
              </div>
              <div className="p-3">
                <Image src={search} alt="Search Icon" />
              </div>
              {/* Hamburger */}
              <div className="p-2 block lg:hidden">
                <Image src={hamburgerMenu} alt="" />
              </div>
            </div>

            {/* user profile  */}
            <div className="hidden md:flex gap-4 items-center">
              <div className="flex gap-2 items-center">
                <div className="w-8 h-8 relative inline-flex  justify-center items-center">
                  <Image
                    className="w-full h-auto"
                    src={userPic}
                    alt="Profile Picture"
                  />
                  <div className="absolute bottom-[-1.6px] right-[-1.6px]">
                    <Image src={verifiedtick} alt="Verified Tick" />
                  </div>
                </div>
                <article>
                  <h6 className="text-[14px] leading-[145%] font-semibold text-[#f0f2f5]">
                    Coco&apos;s Hub
                  </h6>
                  <p className="text-[14px] leading-[145%] text-[#98a2b3]">
                    alison.e@rayna.ui
                  </p>
                </article>
              </div>
              <div>
                <Image src={down} alt="Chevron Down Icon" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
