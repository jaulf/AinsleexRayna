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

    const searchModule = '/module-';
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
      <section className="xhidden side12 scrollabr overflow-auto top-[72px] gap-40 py-6 px-3 justify-between collapsed">
        {/* Top Navbar */}
        <section className="top-nav whitespace-nowrap">
          {/* nav with expand icon */}
          <article
            onClick={sidebarMov}
            className="s1c-b modhov border-b border-[#F0F2F5] justify-between xgrey-400"
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
              <article className="s1c-b modhov">
                <div>
                  <Image src={home2} alt="Dashboard" />
                </div>
              </article>

              {/* Modules */}
              <section className="inline-flex flex-col gap-2">
                {/* modules - dropdown */}
                <div
                  onClick={modulesExpand}
                  className="flex modhov justify-between items-center"
                >
                  <Link href="/module-1/step-1" className="s1c-b modhov module">
                    <div>
                      <Image src={modules} alt="Modules" />
                    </div>
                  </Link>

                  <article className="rotate-effect xcmo2">
                    <Image src={up} alt="dropdown" />
                  </article>
                </div>
              </section>
            </section>

            {/* Assets */}
            <div className="pt-2 mt-2 border-t border-[#F0F2F5]">
              <Link href="/saved-assets" className="saved rounded-[4px] s1c-b modhov">
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

        {/* Bottom navbar */}
        <section className="xgrey-700 btm-nav">
          {/* Help */}
          <article className="s1c-b modhov">
            <div>
              <Image src={help2} alt="Help" />
            </div>
          </article>

          {/* Logout */}
          <article className="s1c-b modhov">
            <div>
              <Image src={signout} alt="Logout" />
            </div>
          </article>
        </section>
      </section>

      {/* SIDEBAR - expanded */}
      <section className="hidden lg:inline-flex side-expanded side12 scrollabr overflow-auto top-[72px] gap-40 py-6 px-3 justify-between ">
        {/* Top Navbar */}
        <section className="top-nav whitespace-nowrap">
          {/* nav with expand icon */}
          <article
            onClick={sidebarMov}
            className="s1c-a modhov justify-between xgrey-400"
          >
            <h6 className="paragraph-small">Nav</h6>
            <div className="cursor-point">
              <Image src={expand1} alt="Expand" />
            </div>
          </article>

          {/* dashboard & modules and assets */}
          <section>
            {/*  dashboard and modules */}
            <section className="flex flex-col gap-1">
              {/* Dashboard */}
              <article className="s1c-a">
                <div>
                  <Image src={home2} alt="Dashboard" />
                </div>
                <h6 className="paragraph-small">Dashboard</h6>
              </article>

              {/* Modules */}
              <section className="inline-flex flex-col gap-2">
                {/* modules - dropdown */}
                <div
                  onClick={modulesExpand}
                  className="flex modhov justify-between items-center"
                >
                  <article className="s1c-a">
                    <div>
                      <Image src={modules} alt="Modules" />
                    </div>
                    <h6 className="paragraph-small">Modules</h6>
                  </article>

                  <article className="rotate-effect xcmo">
                    <Image src={up} alt="dropdown" />
                  </article>
                </div>

                {/* modules dropdown - reveal */}
                <section className="module-cont cmo">
                  <article className="module-item active">
                    <h5 className="paragraph-small">Module 01</h5>
                    <div className="invisible">
                      <Image src={down2} alt="dropdown" />
                    </div>
                  </article>
                  <article className="module-item">
                    <h5 className="paragraph-small">Module 02</h5>
                    <div className="">
                      <Image src={down2} alt="dropdown" />
                    </div>
                  </article>
                  <article className="module-item">
                    <h5 className="paragraph-small">Module 03</h5>
                    <div className="">
                      <Image src={down2} alt="dropdown" />
                    </div>
                  </article>
                  <article className="module-item">
                    <h5 className="paragraph-small">Module 04</h5>
                    <div className="">
                      <Image src={down2} alt="dropdown" />
                    </div>
                  </article>
                  <article className="module-item">
                    <h5 className="paragraph-small">Module 05</h5>
                    <div className="">
                      <Image src={down2} alt="dropdown" />
                    </div>
                  </article>
                  <article className="module-item">
                    <h5 className="paragraph-small">Module 06</h5>
                    <div className="">
                      <Image src={down2} alt="dropdown" />
                    </div>
                  </article>
                  <article className="module-item">
                    <h5 className="paragraph-small">Module 07</h5>
                    <div className="">
                      <Image src={down2} alt="dropdown" />
                    </div>
                  </article>
                </section>
              </section>
            </section>

            {/* Assets */}
            <Link href="/saved-assets" className="pt-2 block modhov mt-4 border-t border-[#F0F2F5]">
              <article className="s1c-a saved rounded-[4px]">
                <div>
                  {pathname == "/saved-assets" ? (
                    <Image src={heart8} alt="Your Assets" />
                  ) : (
                    <Image src={heart} alt="Your Assets" />
                  )}
                </div>
                <h6 className="paragraph-small">Your Assets</h6>
              </article>
            </Link>
          </section>
        </section>

        {/* Bottom navbar */}
        <section className="xgrey-700 btm-nav">
          {/* Help */}
          <article className="s1c-a">
            <div>
              <Image src={help2} alt="Help" />
            </div>
            <h6 className="paragraph-small">Help</h6>
          </article>

          {/* Logout */}
          <article className="s1c-a">
            <div>
              <Image src={signout} alt="Logout" />
            </div>
            <h6 className="paragraph-small">Log Out</h6>
          </article>
        </section>
      </section>
    </>
  );
}

export default LeftSidebar;
