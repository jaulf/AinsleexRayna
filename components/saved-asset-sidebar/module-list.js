"use client";
import Image from "next/image";
import Link from "next/link";

//Image importation
import heartFill500 from "@/public/Images/svg/heart-fill-500.svg";
import arrowUp from "@/public/Images/svg/arrow-up-400.svg";
import lock from "@/public/Images/svg/lock-500.svg";
import refresh from "@/public/Images/svg/refresh-400.svg";

export default function SidebarModuleListSaved({ sasExpand }) {
  // display module 1 step 2 - module item
  // hide text - display below
  const displays3mit = (id) => {
    if (typeof window !== "undefined") {
      // Activating this will hide the paragraph text, fields and save asset CTA
      document.getElementById(`s3mit` + id).classList.toggle("active");
    }
  };

  return (
    <>
      <section className="flex flex-col pt-4 gap-4 pb-20">
        {/* Module 1 */}
        <section id={"s3mit" + 9} className="xbgrey-100 s3mit">
          {/* head */}
          <article className="s2mit-sub first">
            {/* Result header and body plus dropdown arrow */}
            <article
              onClick={() => displays3mit(9)}
              className=" cursor-pointer"
            >
              <h6 className="text-[14px] leading-[145%] font-semibold text-[#344054]">
                Weight loss idea 1
              </h6>
              <p className="s2mit-text paragraph-xsmall xgrey-500 pt-1 max-w-[266px] overflow-hidden clipText">
                Lose weight, post-preganancy, membership for instance
              </p>
            </article>

            {/* clicking this will hide the body and save asset */}
            <article
              onClick={() => displays3mit(9)}
              className="shrink-0 s2mit-rotate xcmo rotate-effect cursor-pointer"
            >
              <Image src={arrowUp} alt="dropdown" />
            </article>
          </article>

          {/* body of 4 */}
          <article className="flex flex-col gap-2 w-full second ">
            {/* field with lock */}
            <article className="field-result-lock2">
              {/* result */}
              <article>
                <label className="">Micro Niche</label>
                <input className="" value="Weight Loss" />
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh2">
              {/* result */}
              <article>
                <label className="">Core Solution</label>
                <p>Lose weight using a ketogenic diet</p>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh2">
              {/* result */}
              <article>
                <label className="">Audience Sta...</label>
                <p>Post-pregnancy moms</p>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh2">
              {/* result */}
              <article>
                <label className="">Product type</label>
                <p>Membership</p>
              </article>
            </article>
          </article>

          {/* save asset */}
          <article
            className="paragraph-xsmall xgrey-500 flex items-center third"
            onClick={sasExpand}
          >
            <p>Saved From Module 1: Product Idea Generator</p>
          </article>
        </section>
        {/* Module 2 */}
        <section id={"s3mit" + 10} className="xbgrey-100 s3mit">
          {/* head */}
          <article className="s2mit-sub first">
            {/* Result header and body plus dropdown arrow */}
            <article
              onClick={() => displays3mit(10)}
              className=" cursor-pointer"
            >
              <h6 className="text-[14px] leading-[145%] font-semibold text-[#344054]">
                Idea 1
              </h6>
              <p className="s2mit-text paragraph-xsmall xgrey-500 pt-1 max-w-[266px] overflow-hidden clipText">
                SEEK is an Australian human resource
              </p>
            </article>

            {/* clicking this will hide the body and save asset */}
            <article
              onClick={() => displays3mit(10)}
              className="shrink-0 s2mit-rotate xcmo rotate-effect cursor-pointer"
            >
              <Image src={arrowUp} alt="dropdown" />
            </article>
          </article>

          {/* body of 4 */}
          <article className="flex flex-col gap-2 w-full second ">
            {/* field with lock */}
            <article className="field-result-lock2">
              {/* result */}
              <article>
                <label className="">Micro Niche</label>
                <input className="" value="Weight Loss" />
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh2">
              {/* result */}
              <article>
                <label className="">Core Solution</label>
                <p>Lose weight using a ketogenic diet</p>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh2">
              {/* result */}
              <article>
                <label className="">Audience Sta...</label>
                <p>Post-pregnancy moms</p>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh2">
              {/* result */}
              <article>
                <label className="">Product type</label>
                <p>Membership</p>
              </article>
            </article>
          </article>

          {/* save asset */}
          <article
            className="paragraph-xsmall xgrey-500 flex items-center third"
            onClick={sasExpand}
          >
            <p>Saved From Module 1: Product Idea Generator</p>
          </article>
        </section>
        {/* Module 3 */}
        <section id={"s3mit" + 11} className="xbgrey-100 s3mit">
          {/* head */}
          <article className="s2mit-sub first">
            {/* Result header and body plus dropdown arrow */}
            <article
              onClick={() => displays3mit(11)}
              className=" cursor-pointer"
            >
              <h6 className="text-[14px] leading-[145%] font-semibold text-[#344054]">
                Idea 1
              </h6>
              <p className="s2mit-text paragraph-xsmall xgrey-500 pt-1 max-w-[266px] overflow-hidden clipText">
                SEEK is an Australian human resource
              </p>
            </article>

            {/* clicking this will hide the body and save asset */}
            <article
              onClick={() => displays3mit(11)}
              className="shrink-0 s2mit-rotate xcmo rotate-effect cursor-pointer"
            >
              <Image src={arrowUp} alt="dropdown" />
            </article>
          </article>

          {/* body of 4 */}
          <article className="flex flex-col gap-2 w-full second ">
            {/* field with lock */}
            <article className="field-result-lock2">
              {/* result */}
              <article>
                <label className="">Micro Niche</label>
                <input className="" value="Weight Loss" />
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh2">
              {/* result */}
              <article>
                <label className="">Core Solution</label>
                <p>Lose weight using a ketogenic diet</p>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh2">
              {/* result */}
              <article>
                <label className="">Audience Sta...</label>
                <p>Post-pregnancy moms</p>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh2">
              {/* result */}
              <article>
                <label className="">Product type</label>
                <p>Membership</p>
              </article>
            </article>
          </article>

          {/* save asset */}
          <article
            className="paragraph-xsmall xgrey-500 flex items-center third"
            onClick={sasExpand}
          >
            <p>Saved From Module 1: Product Idea Generator</p>
          </article>
        </section>
        {/* Module 4 */}
        <section id={"s3mit" + 12} className="xbgrey-100 s3mit">
          {/* head */}
          <article className="s2mit-sub first">
            {/* Result header and body plus dropdown arrow */}
            <article
              onClick={() => displays3mit(12)}
              className=" cursor-pointer"
            >
              <h6 className="text-[14px] leading-[145%] font-semibold text-[#344054]">
                Idea 1
              </h6>
              <p className="s2mit-text paragraph-xsmall xgrey-500 pt-1 max-w-[266px] overflow-hidden clipText">
                SEEK is an Australian human resource
              </p>
            </article>

            {/* clicking this will hide the body and save asset */}
            <article
              onClick={() => displays3mit(12)}
              className="shrink-0 s2mit-rotate xcmo rotate-effect cursor-pointer"
            >
              <Image src={arrowUp} alt="dropdown" />
            </article>
          </article>

          {/* body of 4 */}
          <article className="flex flex-col gap-2 w-full second ">
            {/* field with lock */}
            <article className="field-result-lock2">
              {/* result */}
              <article>
                <label className="">Micro Niche</label>
                <input className="" value="Weight Loss" />
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh2">
              {/* result */}
              <article>
                <label className="">Core Solution</label>
                <p>Lose weight using a ketogenic diet</p>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh2">
              {/* result */}
              <article>
                <label className="">Audience Sta...</label>
                <p>Post-pregnancy moms</p>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh2">
              {/* result */}
              <article>
                <label className="">Product type</label>
                <p>Membership</p>
              </article>
            </article>
          </article>

          {/* save asset */}
          <article
            className="paragraph-xsmall xgrey-500 flex items-center third"
            onClick={sasExpand}
          >
            <p>Saved From Module 1: Product Idea Generator</p>
          </article>
        </section>
        {/* Module 5 */}
        <section id={"s3mit" + 13} className="xbgrey-100 s3mit">
          {/* head */}
          <article className="s2mit-sub first">
            {/* Result header and body plus dropdown arrow */}
            <article
              onClick={() => displays3mit(13)}
              className=" cursor-pointer"
            >
              <h6 className="text-[14px] leading-[145%] font-semibold text-[#344054]">
                Idea 1
              </h6>
              <p className="s2mit-text paragraph-xsmall xgrey-500 pt-1 max-w-[266px] overflow-hidden clipText">
                SEEK is an Australian human resource
              </p>
            </article>

            {/* clicking this will hide the body and save asset */}
            <article
              onClick={() => displays3mit(13)}
              className="shrink-0 s2mit-rotate xcmo rotate-effect cursor-pointer"
            >
              <Image src={arrowUp} alt="dropdown" />
            </article>
          </article>

          {/* body of 4 */}
          <article className="flex flex-col gap-2 w-full second ">
            {/* field with lock */}
            <article className="field-result-lock2">
              {/* result */}
              <article>
                <label className="">Micro Niche</label>
                <input className="" value="Weight Loss" />
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh2">
              {/* result */}
              <article>
                <label className="">Core Solution</label>
                <p>Lose weight using a ketogenic diet</p>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh2">
              {/* result */}
              <article>
                <label className="">Audience Sta...</label>
                <p>Post-pregnancy moms</p>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh2">
              {/* result */}
              <article>
                <label className="">Product type</label>
                <p>Membership</p>
              </article>
            </article>
          </article>

          {/* save asset */}
          <article
            className="paragraph-xsmall xgrey-500 flex items-center third"
            onClick={sasExpand}
          >
            <p>Saved From Module 1: Product Idea Generator</p>
          </article>
        </section>
        {/* Module 6 */}
        <section id={"s3mit" + 14} className="xbgrey-100 s3mit">
          {/* head */}
          <article className="s2mit-sub first">
            {/* Result header and body plus dropdown arrow */}
            <article
              onClick={() => displays3mit(14)}
              className=" cursor-pointer"
            >
              <h6 className="text-[14px] leading-[145%] font-semibold text-[#344054]">
                Idea 1
              </h6>
              <p className="s2mit-text paragraph-xsmall xgrey-500 pt-1 max-w-[266px] overflow-hidden clipText">
                SEEK is an Australian human resource
              </p>
            </article>

            {/* clicking this will hide the body and save asset */}
            <article
              onClick={() => displays3mit(14)}
              className="shrink-0 s2mit-rotate xcmo rotate-effect cursor-pointer"
            >
              <Image src={arrowUp} alt="dropdown" />
            </article>
          </article>

          {/* body of 4 */}
          <article className="flex flex-col gap-2 w-full second ">
            {/* field with lock */}
            <article className="field-result-lock2">
              {/* result */}
              <article>
                <label className="">Micro Niche</label>
                <input className="" value="Weight Loss" />
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh2">
              {/* result */}
              <article>
                <label className="">Core Solution</label>
                <p>Lose weight using a ketogenic diet</p>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh2">
              {/* result */}
              <article>
                <label className="">Audience Sta...</label>
                <p>Post-pregnancy moms</p>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh2">
              {/* result */}
              <article>
                <label className="">Product type</label>
                <p>Membership</p>
              </article>
            </article>
          </article>

          {/* save asset */}
          <article
            className="paragraph-xsmall xgrey-500 flex items-center third"
            onClick={sasExpand}
          >
            <p>Saved From Module 1: Product Idea Generator</p>
          </article>
        </section>
        {/* Module 7 */}
        <section id={"s3mit" + 15} className="xbgrey-100 s3mit">
          {/* head */}
          <article className="s2mit-sub first">
            {/* Result header and body plus dropdown arrow */}
            <article
              onClick={() => displays3mit(15)}
              className=" cursor-pointer"
            >
              <h6 className="text-[14px] leading-[145%] font-semibold text-[#344054]">
                Idea 1
              </h6>
              <p className="s2mit-text paragraph-xsmall xgrey-500 pt-1 max-w-[266px] overflow-hidden clipText">
                SEEK is an Australian human resource
              </p>
            </article>

            {/* clicking this will hide the body and save asset */}
            <article
              onClick={() => displays3mit(15)}
              className="shrink-0 s2mit-rotate xcmo rotate-effect cursor-pointer"
            >
              <Image src={arrowUp} alt="dropdown" />
            </article>
          </article>

          {/* body of 4 */}
          <article className="flex flex-col gap-2 w-full second ">
            {/* field with lock */}
            <article className="field-result-lock2">
              {/* result */}
              <article>
                <label className="">Micro Niche</label>
                <input className="" value="Weight Loss" />
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh2">
              {/* result */}
              <article>
                <label className="">Core Solution</label>
                <p>Lose weight using a ketogenic diet</p>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh2">
              {/* result */}
              <article>
                <label className="">Audience Sta...</label>
                <p>Post-pregnancy moms</p>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh2">
              {/* result */}
              <article>
                <label className="">Product type</label>
                <p>Membership</p>
              </article>
            </article>
          </article>

          {/* save asset */}
          <article
            className="paragraph-xsmall xgrey-500 flex items-center third"
            onClick={sasExpand}
          >
            <p>Saved From Module 1: Product Idea Generator</p>
          </article>
        </section>
      </section>
    </>
  );
}
