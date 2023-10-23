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
import close6 from "@/public/Images/svg/close-600.svg";
import homeF from "@/public/Images/svg/home-filled.svg";
import modulesF from "@/public/Images/svg/modules-filled.svg";
import heartF from "@/public/Images/svg/heart-filled.svg";
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

  // Function to display mobile popup when onclick modules on sticky nav
  const modulesMobileExpand = () => {
    document.getElementById("modules-popup").classList.toggle("active");
  };

  return (
    <>
      {/* DESKTOP */}

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
                  <article className="module-item flex gap-20 items-center py-3 px-4 justify-between rounded-[4px] active text-[#101928] bg-[#f0f2f5] font-semibold">
                    <h5 className="text-[14px] leading-[145%]">Module 01</h5>
                    <div className="shrink-0 invisible">
                      <Image src={down2} alt="dropdown" />
                    </div>
                  </article>

                  {/* INACTIVE */}
                  <article className="module-item flex gap-20 items-center py-3 px-4 justify-between rounded-[4px] text-[#667185]">
                    <h5 className="text-[14px] leading-[145%]">Module 02</h5>
                    <div className="shrink-0 ">
                      <Image src={down2} alt="dropdown" />
                    </div>
                  </article>

                  {/* INACTIVE */}
                  <article className="module-item flex gap-20 items-center py-3 px-4 justify-between rounded-[4px] text-[#667185]">
                    <h5 className="text-[14px] leading-[145%]">Module 03</h5>
                    <div className="shrink-0 ">
                      <Image src={down2} alt="dropdown" />
                    </div>
                  </article>

                  {/* INACTIVE */}
                  <article className="module-item flex gap-20 items-center py-3 px-4 justify-between rounded-[4px] text-[#667185]">
                    <h5 className="text-[14px] leading-[145%]">Module 04</h5>
                    <div className="shrink-0 ">
                      <Image src={down2} alt="dropdown" />
                    </div>
                  </article>

                  {/* INACTIVE */}
                  <article className="module-item flex gap-20 items-center py-3 px-4 justify-between rounded-[4px] text-[#667185]">
                    <h5 className="text-[14px] leading-[145%]">Module 05</h5>
                    <div className="shrink-0 ">
                      <Image src={down2} alt="dropdown" />
                    </div>
                  </article>

                  {/* INACTIVE */}
                  <article className="module-item flex gap-20 items-center py-3 px-4 justify-between rounded-[4px] text-[#667185]">
                    <h5 className="text-[14px] leading-[145%]">Module 06</h5>
                    <div className="shrink-0 ">
                      <Image src={down2} alt="dropdown" />
                    </div>
                  </article>

                  {/* INACTIVE */}
                  <article className="module-item flex gap-20 items-center py-3 px-4 justify-between rounded-[4px] text-[#667185]">
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

      </section>

      {/* MOBILE */}

      {/* MODULES POPUP - REVEAL ONCLICK - CHNAGE to FLEX */}
      <section
        id="modules-popup"
        className="z-[20] hidden fixed top-0 left-0 right-0 bottom-0 justify-start bg-[rgba(0,0,0,.25)] lg:hidden"
      >
        {/* CONTAINER */}
        <div className="p-6 flex flex-col gap-4 z-[50] fixed scrollabr overflow-auto top-[77px] right-[40px] left-0 bottom-0 w-auto side12 h-full bg-white">
          {/* MODULES + CLOSE */}
          <div className="flex items-center justify-between">
            {/* MODULES */}
            <div className="flex gap-3 items-center">
              <Image className="shrink-0" src={modules} alt="" />
              <p className="text-[#111827] text-[18px] leading-[28px] font-semibold">
                Modules
              </p>
            </div>

            {/* CLOSE */}
            <div onClick={() => modulesMobileExpand()}>
              <Image src={close6} alt="" />
            </div>
          </div>

          {/* DIVIDER */}
          <div className="divider block w-full h-auto">
            <div className="bg-[#EAECF0] w-full h-[1px]"></div>
          </div>

          {/* MODULES */}
          <section className="inline-flex flex-col gap-2">
            {/* MODULES - REVEALED UNDER */}
            <section className="module-cont overflow-hidden inline-flex flex-col gap-1 py-2 cmo">
              {/* ACTIVE */}
              <article className="module-item flex gap-20 items-center py-3 px-4 justify-between rounded-[4px] active text-[#101928] bg-[#f0f2f5] font-semibold">
                <h5 className="text-[16px] leading-[145%]">Module 01</h5>
                <div className="shrink-0 invisible">
                  <Image src={down2} alt="dropdown" />
                </div>
              </article>

              {/* INACTIVE */}
              <article className="module-item flex gap-20 items-center py-3 px-4 justify-between rounded-[4px] text-[#667185]">
                <h5 className="text-[16px] leading-[145%]">Module 02</h5>
                <div className="shrink-0 ">
                  <Image src={down2} alt="dropdown" />
                </div>
              </article>

              {/* INACTIVE */}
              <article className="module-item flex gap-20 items-center py-3 px-4 justify-between rounded-[4px] text-[#667185]">
                <h5 className="text-[16px] leading-[145%]">Module 03</h5>
                <div className="shrink-0 ">
                  <Image src={down2} alt="dropdown" />
                </div>
              </article>

              {/* INACTIVE */}
              <article className="module-item flex gap-20 items-center py-3 px-4 justify-between rounded-[4px] text-[#667185]">
                <h5 className="text-[16px] leading-[145%]">Module 04</h5>
                <div className="shrink-0 ">
                  <Image src={down2} alt="dropdown" />
                </div>
              </article>

              {/* INACTIVE */}
              <article className="module-item flex gap-20 items-center py-3 px-4 justify-between rounded-[4px] text-[#667185]">
                <h5 className="text-[16px] leading-[145%]">Module 05</h5>
                <div className="shrink-0 ">
                  <Image src={down2} alt="dropdown" />
                </div>
              </article>

              {/* INACTIVE */}
              <article className="module-item flex gap-20 items-center py-3 px-4 justify-between rounded-[4px] text-[#667185]">
                <h5 className="text-[16px] leading-[145%]">Module 06</h5>
                <div className="shrink-0 ">
                  <Image src={down2} alt="dropdown" />
                </div>
              </article>

              {/* INACTIVE */}
              <article className="module-item flex gap-20 items-center py-3 px-4 justify-between rounded-[4px] text-[#667185]">
                <h5 className="text-[16px] leading-[145%]">Module 07</h5>
                <div className="shrink-0 ">
                  <Image src={down2} alt="dropdown" />
                </div>
              </article>
            </section>
          </section>
        </div>
      </section>

      {/* STICKY BOTTOM NAV */}
      <section id="bottom-nav" className="left-6 right-6 bottom-8 fixed bg-[#000B33] rounded-[16px] lg:hidden">
        {/* HOME - active */}
        <nav id="Home" className="hidden grid-cols-[112px_1fr_1fr] p-1 gap-1">
          {/* HOME -active */}
          <Link
            href="#"
            className="flex justify-center gap-2 items-center active - bg-[rgba(255,255,255,0.10)] py-4 rounded-[12px]"
          >
            <Image src={homeF} alt="" />
            <p className="text-[16px] text-[#F2F4F7]">Home</p>
          </Link>
          {/* modules */}
          <Link
            onClick={() => modulesMobileExpand()}
            href="#"
            className="flex justify-center items-center"
          >
            <p className="text-[16px] text-center text-[#F2F4F7]">Modules</p>
          </Link>
          <Link href="#" className="flex justify-center items-center">
            <p className="text-[16px] text-center text-[#F2F4F7]">
              Saved Assets
            </p>
          </Link>
        </nav>

        {/* MODULES -active */}
        <nav
          id="Modules"
          className="grid grid-cols-[1fr_138px_max-content] p-1 gap-1"
        >
          {/* HOME */}
          <Link href="#" className="flex justify-center items-center">
            <p className="text-[16px] text-center text-[#F2F4F7]">Home</p>
          </Link>
          {/* MODULES -active */}
          <Link
            onClick={() => modulesMobileExpand()}
            href="#"
            className="flex justify-center gap-2 items-center active - bg-[rgba(255,255,255,0.10)] py-4 rounded-[12px]"
          >
            <Image src={modulesF} alt="" />
            <p className="text-[16px] text-[#F2F4F7]">Modules</p>
          </Link>
          <Link href="#" className="flex justify-center items-center px-4">
            <p className="text-[16px] text-center text-[#F2F4F7]">
              Saved Assets
            </p>
          </Link>
        </nav>

        {/* SAVED ASSET - active */}
        <nav
          id="saved-assets"
          className="hidden grid-cols-[1fr_1fr_152px] p-1 gap-1"
        >
          {/* HOME */}
          <Link href="#" className="flex justify-center items-center">
            <p className="text-[16px] text-center text-[#F2F4F7]">Home</p>
          </Link>

          {/* modules */}
          <Link
            onClick={() => modulesMobileExpand()}
            href="#"
            className="flex justify-center items-center"
          >
            <p className="text-[16px] text-center text-[#F2F4F7]">Modules</p>
          </Link>
          {/* SAVED ASSETS - active */}
          <Link
            href="#"
            className="flex justify-center gap-2 items-center active - bg-[rgba(255,255,255,0.10)] py-4 rounded-[12px]"
          >
            <Image src={heartF} alt="" />
            <p className="text-[16px] text-[#F2F4F7]">Saved Assets</p>
          </Link>
        </nav>
      </section>
    </>
  );
}

export default LeftSidebar;
