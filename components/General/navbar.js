"use client"
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
import search3 from "@/public/Images/svg/search-300.svg";
import logout4 from "@/public/Images/svg/logout-400.svg";

import help3 from "@/public/Images/svg/help-300.svg";
import setting3 from "@/public/Images/svg/setting-300.svg";
import close from "@/public/Images/svg/close.svg";

function Navbar() {

  // Function to display mobile popup when onclick hamburger menu
  const hamburgerExpand = () => {
  document.getElementById("mobile-navbar").classList.toggle('active')
  }

  return (
    <>
      {/* MOBILE */}

      {/* OVERLAY */}
      <section id="mobile-navbar" className="bg-[rgba(52,64,84,0.60)] hidden grid-cols-[56px_1fr] z-[140] fixed top-0 bottom-0 left-0 right-0">
        {/* Close */}
        <div className="flex justify-center items-start">
          <div onClick={() => hamburgerExpand()} className="p-2 block">
            <Image src={close} alt="close" />
          </div>
        </div>

        {/* MODAL */}
        <div className="bg-[#000B33] flex flex-col justify-between py-8 px-2">
          {/* TOP */}
          <div className="px-2">
            {/* Image */}
            <div className="shrink-0 w-full h-auto max-w-[112px]">
              <Image
                class="w-full h-auto"
                src={logo}
                alt="Full main logo dark"
              />
            </div>
            {/* SEARCH */}
            <div className="mt-8 rounded-[8px] px-[14px] py-[10px] flex gap-2 bg-[#101E4F] border-[#101E4F]">
              <Image src={search3} alt="Search" />
              <input
                className="bg-transparent w-full py-0 border-0 h-6 placeholder:text-[#D0D5DD]"
                type="text"
                placeholder="Search"
              />
            </div>
            {/* LIST */}
            <nav className="mt-5">
              <ul className="flex gap-2 flex-col">
                <li className="block rounded-[8px] leading-6 py-2 px-3 text-[#F2F4F7] font-semibold">
                  Home
                </li>
                {/* ACTIVE */}
                <li className="block rounded-[8px] leading-6 py-3 px-3 text-[#F2F4F7] font-semibold active - bg-[rgba(255,255,255,0.10)]">
                  Experience Product Masterclass
                </li>
                <li className="block rounded-[8px] leading-6 py-2 px-3 text-[#F2F4F7] font-semibold">
                  Momentum
                </li>
                <li className="block rounded-[8px] leading-6 py-2 px-3 text-[#F2F4F7] font-semibold">
                  LYM Lab
                </li>
              </ul>
            </nav>
          </div>

          {/* BOTTOM */}
          <div>
            {/* SETTINGS + HELP */}
            <div className="text-[#F2F4F7] mb-5">
              {/* HELP */}
              <Link
                href="#"
                className="flex gap-3 text-[16px] font-semibold rounded-[8px] leading-6 py-2 px-3"
              >
                <Image className="shrink-0" src={help3} alt="" />
                <p>Help</p>
              </Link>

              {/* Setting */}
              <Link
                href="#"
                className="flex gap-3 text-[16px] font-semibold rounded-[8px] leading-6 py-2 px-3"
              >
                <Image className="shrink-0" src={setting3} alt="" />
                <p>Settings</p>
              </Link>
            </div>

            {/* USER PROFILE + LOGOUT */}
            <div className="flex items-center justify-between border-t pt-6 border-[#101E4F]">
              {/* user profile  */}
              <div className="flex gap-4 items-center">
                <div className="flex gap-2 items-center">
                  <div className="w-8 h-8 relative inline-flex justify-center items-center">
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
              {/* LOGOUT */}
              <div className="p-2">
                <Image src={logout4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOP Navbar Container */}
      {/* USE THIS NAVBAR COMPONENT */}
      <header className="bg-[#000B33] sticky z-[60] top-0 border-[#1D2739] border">
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
                className="px-5 active - py-2 bg-[rgba(255,255,255,0.1)] rounded-md text-[#F7F9FC]"
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
              <div onClick={() => hamburgerExpand()} className="p-2 block lg:hidden">
                <Image src={hamburgerMenu} alt="" />
              </div>
            </div>

            {/* user profile  */}
            <div className="hidden lg:flex gap-4 items-center">
              <div className="flex gap-2 items-center">
                <div className="w-8 h-8 relative inline-flex justify-center items-center">
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
