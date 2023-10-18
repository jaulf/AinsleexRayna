"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

// Image Importation
import help2 from "@/public/Images/svg/help2.svg";
import signout from "@/public/Images/svg/signout.svg";
import down2 from "@/public/Images/svg/chevron-down2.svg";
import expand1 from "@/public/Images/svg/expand1.svg";
import heart from "@/public/Images/svg/heart.svg";
import home2 from "@/public/Images/svg/home2.svg";
import modules from "@/public/Images/svg/modules.svg";
import heart8 from "@/public/Images/svg/heart-grey-800.svg";
import up from "@/public/Images/svg/up.svg";
import { usePathname } from "next/navigation";

function LeftSidebar() {
  // toggle active sidebar
  const pathname = usePathname();

  // Only for sidebar - when introducing redux sidebar collapse and
  // and expansion will be handled on redux for consistency on multiple
  // pages for now it is just useEffect
  useEffect(() => {
    // SET ACTIVE STATE OF 'YOUR ASSET' BASED ON NAVIGATION
    if (pathname == "/saved-assets") {
      document.querySelectorAll(".saved").forEach((itme) => {
        itme.classList.add("side2-active");
      });
    }

    const searchModule = "/module-";
    if (pathname.startsWith(searchModule)) {
      document.querySelectorAll(".module").forEach((itme) => {
        itme.classList.add("side2-active");
      });
    }

    document.querySelector(".collapsed").style.display = "none";
  }, []);

  // hiding sidebar
  const sidebarMov = () => {
    if (typeof window !== "undefined") {
      if (document.querySelector(".collapsed").style.display == "none") {
        document.querySelector(".side-expanded").style.display = "none";
        document.querySelector(".collapsed").style.display = "flex";
      } else {
        document.querySelector(".side-expanded").style.display = "flex";
        document.querySelector(".collapsed").style.display = "none";
      }
    }
  };

  // hides modules
  const modulesExpand = () => {
    if (typeof window !== "undefined") {
      // Rotating the dropdown arrow
      document.querySelector(".xcmo").classList.toggle("roshash");
      // hiding the dropdown menu
      document.querySelector(".module-cont").classList.toggle("expanded");
    }
  };

  return (
    <>
      {/* SIDEBAR - collapsed */}
      <section className="scrollabr hidden lg:inline-flex side12 overflow-auto top-[72px] gap-40 py-6 px-3 justify-between h-[calc(100vh_-_72px)] bg-white z-[5] flex-col fixed collapsed">
        {/* TOP OF NAVBAR */}
        <section className="whitespace-nowrap inline-flex flex-col gap-3">
          {/* EXPAND ICON */}
          <article
            onClick={sidebarMov}
            className="s1c-b cursor-pointer inline-flex flex-col items-center gap-3 py-2 px-3 modhov border-b border-[#F0F2F5] justify-between text-[#98a2b3]"
          >
            <div>
              <Image src={expand1} alt="Expand" />
            </div>
          </article>

          {/* dashboard & modules and assets */}
          <section>
            {/*  dashboard and modules */}
            <section className="flex flex-col gap-1">
              {/* Dashboard */}
              <article className="s1c-b inline-flex flex-col items-center gap-3 py-2 px-3 modhov">
                <div>
                  <Image src={home2} alt="Dashboard" />
                </div>
              </article>

              {/* Modules */}
              <div onClick={modulesExpand} className="block">
                <Link
                  href="/module-1/step-1"
                  className="s1c-b inline-flex flex-col items-center gap-3 py-2 px-3 modhov module"
                >
                  <div>
                    <Image src={modules} alt="Modules" />
                  </div>
                </Link>
              </div>
            </section>

            {/* Assets */}
            <div className="pt-2 mt-2 border-t border-[#F0F2F5]">
              <Link
                href="/saved-assets"
                className="saved rounded-[4px] s1c-b inline-flex flex-col items-center gap-3 py-2 px-3 modhov"
              >
                <div>
                  {pathname == "/saved-assets" ? (
                    <Image src={heart8} alt="Your Assets" />
                  ) : (
                    <Image src={heart} alt="Your Assets" />
                  )}
                </div>
              </Link>
            </div>
          </section>
        </section>

        {/* BOTTOM OF NAVBAR */}
        <section className="text-[#344054] inline-flex flex-col btm-nav">
          {/* HELP */}
          <article className="s1c-b inline-flex items-center gap-3 py-2 px-3 modhov">
            <div>
              <Image src={help2} alt="Help" />
            </div>
          </article>

          {/* LOGOUT */}
          <article className="s1c-b inline-flex items-center gap-3 py-2 px-3 modhov">
            <div>
              <Image src={signout} alt="Logout" />
            </div>
          </article>
        </section>
      </section>

      {/* SIDEBAR - EXPANDED */}
      <section className="scrollabr hidden lg:inline-flex side-expanded side12  overflow-auto top-[72px] gap-40 py-6 px-3 justify-between h-[calc(100vh_-_72px)] bg-white z-[5] flex-col fixed">
        {/* TOP OF NAVBAR */}
        <section className="top-nav inline-flex flex-col gap-3 whitespace-nowrap">
          {/* NAV TEXT + EXPAND ICON */}
          <article
            onClick={sidebarMov}
            className="s1a-c flex items-center gap-3 py-3 px-2 modhov justify-between text-[#98a2b3]"
          >
            <h6 className="text-[14px] leading-[145%]">Nav</h6>
            <div className="cursor-point">
              <Image src={expand1} alt="Expand" />
            </div>
          </article>

          {/* DASHBOARD + MODULES + SAVED ASSET */}
          <section>
            {/*  DASHBOARD + MODULES */}
            <section className="flex flex-col gap-1">
              {/* DASHBOARD */}
              <article className="s1a-c flex items-center gap-3 py-3 px-2">
                <div>
                  <Image src={home2} alt="Dashboard" />
                </div>
                <h6 className="text-[14px] leading-[145%]">Dashboard</h6>
              </article>

              {/* MODULES */}
              <section className="inline-flex flex-col gap-2">
                {/* MODULES - DROPDOWN */}
                <div
                  onClick={modulesExpand}
                  className="flex modhov justify-between items-center"
                >
                  <article className="s1a-c flex items-center gap-3 py-3 px-2">
                    <div>
                      <Image src={modules} alt="Modules" />
                    </div>
                    <h6 className="text-[14px] leading-[145%]">Modules</h6>
                  </article>

                  <article className="rotate-effect xcmo">
                    <Image src={up} alt="dropdown" />
                  </article>
                </div>

                {/* MODULES - REVEALED UNDER */}
                <section className="module-cont w-max overflow-hidden inline-flex flex-col cmo">
                  {/* ACTIVE */}
                  <article className="module-item flex gap-20 items-center py-3 pr-2 pl-10 rounded-[4px] active text-[#101928] bg-[#f0f2f5] font-semibold">
                    <h5 className="text-[14px] leading-[145%]">Module 01</h5>
                    <div className="shrink-0 invisible">
                      <Image src={down2} alt="dropdown" />
                    </div>
                  </article>

                  {/* INACTIVE */}
                  <article className="module-item flex gap-20 items-center py-3 pr-2 pl-10 rounded-[4px] text-[#667185]">
                    <h5 className="text-[14px] leading-[145%]">Module 02</h5>
                    <div className="shrink-0 ">
                      <Image src={down2} alt="dropdown" />
                    </div>
                  </article>

                  {/* INACTIVE */}
                  <article className="module-item flex gap-20 items-center py-3 pr-2 pl-10 rounded-[4px] text-[#667185]">
                    <h5 className="text-[14px] leading-[145%]">Module 03</h5>
                    <div className="shrink-0 ">
                      <Image src={down2} alt="dropdown" />
                    </div>
                  </article>

                  {/* INACTIVE */}
                  <article className="module-item flex gap-20 items-center py-3 pr-2 pl-10 rounded-[4px] text-[#667185]">
                    <h5 className="text-[14px] leading-[145%]">Module 04</h5>
                    <div className="shrink-0 ">
                      <Image src={down2} alt="dropdown" />
                    </div>
                  </article>

                  {/* INACTIVE */}
                  <article className="module-item flex gap-20 items-center py-3 pr-2 pl-10 rounded-[4px] text-[#667185]">
                    <h5 className="text-[14px] leading-[145%]">Module 05</h5>
                    <div className="shrink-0 ">
                      <Image src={down2} alt="dropdown" />
                    </div>
                  </article>

                  {/* INACTIVE */}
                  <article className="module-item flex gap-20 items-center py-3 pr-2 pl-10 rounded-[4px] text-[#667185]">
                    <h5 className="text-[14px] leading-[145%]">Module 06</h5>
                    <div className="shrink-0 ">
                      <Image src={down2} alt="dropdown" />
                    </div>
                  </article>

                  {/* INACTIVE */}
                  <article className="module-item flex gap-20 items-center py-3 pr-2 pl-10 rounded-[4px] text-[#667185]">
                    <h5 className="text-[14px] leading-[145%]">Module 07</h5>
                    <div className="shrink-0 ">
                      <Image src={down2} alt="dropdown" />
                    </div>
                  </article>
                </section>
              </section>
            </section>

            {/* ASSETS */}
            <Link
              href="/saved-assets"
              className="pt-2 block modhov mt-4 border-t border-[#F0F2F5]"
            >
              <article className="s1a-c flex items-center gap-3 py-3 px-2 saved rounded-[4px]">
                <div>
                  {pathname == "/saved-assets" ? (
                    <Image src={heart8} alt="Your Assets" />
                  ) : (
                    <Image src={heart} alt="Your Assets" />
                  )}
                </div>
                <h6 className="text-[14px] leading-[145%]">Your Assets</h6>
              </article>
            </Link>
          </section>
        </section>

        {/* BOTTOM OF NAVBAR */}
        <section className="text-[#344054] btm-nav">
          {/* Help */}
          <article className="s1a-c flex items-center gap-3 py-3 px-2">
            <div>
              <Image src={help2} alt="Help" />
            </div>
            <h6 className="text-[14px] leading-[145%]">Help</h6>
          </article>

          {/* Logout */}
          <article className="s1a-c flex items-center gap-3 py-3 px-2">
            <div>
              <Image src={signout} alt="Logout" />
            </div>
            <h6 className="text-[14px] leading-[145%]">Log Out</h6>
          </article>
        </section>
      </section>
    </>
  );
}

export default LeftSidebar;
