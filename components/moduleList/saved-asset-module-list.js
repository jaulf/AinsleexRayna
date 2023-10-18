"use client";
import Image from "next/image";
import Link from "next/link";

//Image importation
import heartFill500 from "@/public/Images/svg/heart-fill-500.svg";
import arrowUp from "@/public/Images/svg/arrow-up-400.svg";
import editb4 from "@/public/Images/svg/edit-blue-400.svg";
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
        {/* ACTIVE - Module 1 */}
        <section
          id={"s3mit" + 9}
          className="xbgrey-100 active s3mit bg-[#f9fafb] p-3 rounded-[8px] border border-[#f0f2f5] flex flex-col items-center gap-3 w-full"
        >
          {/* HEAD - H6 + P + DROPDOWN IMAGE */}
          <article className="s2mit-sub flex w-full justify-between items-center first">
            {/* Result header and body plus dropdown arrow */}
            <article
              onClick={() => displays3mit(9)}
              className=" cursor-pointer"
            >
              <h6 className="paragraph-15 text-[14px] font-semibold leading-[145%] text-[#0A090B]">
                Profitable Product Idea Option 1
              </h6>
              <p className="s2mit-text block text-[12px] leading-[145%] xgrey-500 text-[#4F4D55] pt-[2px]">
                Losing weight using a kletogenic diet
              </p>
            </article>
            {/* clicking this will hide the body below */}
            <article
              onClick={() => displays3mit(9)}
              className="shrink-0 s2mit-rotate xcmo rotate-effect cursor-pointer"
            >
              <Image src={arrowUp} alt="dropdown" />
            </article>
          </article>

          {/* Divider */}
          <div className="divider3 block w-full h-auto second">
            <div className="bg-[#F0F2F5] w-full h-[1px]"></div>
          </div>

          {/* BODY OF 4 */}
          <article className="flex flex-col gap-4 w-full second ">
            {/* field with lock */}
            <article className="field-result-lock flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-[#f0f2f5] flex flex-col lg:flex-row p-3 gap-2 lg:gap-6 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[12px] lg:text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Micro Niche
                </label>
                <div className="text-[14px] text-left leading-[145%] text-[#98a2b3] bg-transparent w-full outline-none rounded-none">
                  Weight Loss
                </div>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-white border border-[#e4e7ec] flex flex-col lg:flex-row p-3 gap-2 lg:gap-3 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[12px] lg:text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Core Solution
                </label>
                <div className="text-[12px] lg:text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                  Lose weight using a ketogenic diet
                </div>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-white border border-[#e4e7ec] flex flex-col lg:flex-row p-3 gap-2 lg:gap-3 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[12px] lg:text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Audience Sta...
                </label>
                <div className="text-[12px] lg:text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                  Post-pregnancy moms
                </div>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-white border border-[#e4e7ec] flex flex-col lg:flex-row p-3 gap-2 lg:gap-3 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[12px] lg:text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Product type
                </label>

                <div className="text-[12px] lg:text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                  Membership
                </div>
              </article>
            </article>
          </article>

          {/* SAVE ASSET */}
          <article
            className="flex items-center justify-between third w-full"
            onClick={sasExpand}
          >
            {/* TEXT */}
            <p className="text-[12px] text-[#667185] max-w-[184px]">
              Saved From Module 1: Product Idea Generator
            </p>
            {/* EDIT BUTTON */}
            <article className="flex gap-1 items-center shrink-0">
              <Image className="shrink-0" src={editb4} alt="" />
              <p className="text-[#1671D9] text-[14px]">Edit</p>
            </article>
          </article>
        </section>

        {/* INACTIVE - Module 2 */}
        <section
          id={"s3mit" + 10}
          className="xbgrey-100 s3mit bg-[#f9fafb] p-3 rounded-[8px] border border-[#f0f2f5] flex flex-col items-center gap-3 w-full"
        >
          {/* HEAD - H6 + P + DROPDOWN IMAGE */}
          <article className="s2mit-sub flex w-full justify-between items-center first">
            {/* Result header and body plus dropdown arrow */}
            <article
              onClick={() => displays3mit(10)}
              className=" cursor-pointer"
            >
              <h6 className="paragraph-15 text-[14px] font-semibold leading-[145%] text-[#0A090B]">
                Profitable Product Idea Option 1
              </h6>
              <p className="s2mit-text block text-[12px] leading-[145%] xgrey-500 text-[#4F4D55]  pt-[2px]">
                Losing weight using a kletogenic diet
              </p>
            </article>
            {/* clicking this will hide the body below */}
            <article
              onClick={() => displays3mit(10)}
              className="shrink-0 s2mit-rotate xcmo rotate-effect cursor-pointer"
            >
              <Image src={arrowUp} alt="dropdown" />
            </article>
          </article>

          {/* BODY OF 4 */}
          <article className="hidden flex-col gap-4 w-full second ">
            {/* field with lock */}
            <article className="field-result-lock flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-[#f0f2f5] flex flex-col lg:flex-row p-3 gap-2 lg:gap-6 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[12px] lg:text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Micro Niche
                </label>
                <div className="text-[14px] leading-[145%] text-[#98a2b3] bg-transparent w-full outline-none rounded-none">
                  Weight Loss
                </div>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-white border border-[#e4e7ec] flex flex-col lg:flex-row p-3 gap-2 lg:gap-3 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[12px] lg:text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Core Solution
                </label>
                <div className="text-[12px] lg:text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                  Lose weight using a ketogenic diet
                </div>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-white border border-[#e4e7ec] flex flex-col lg:flex-row p-3 gap-2 lg:gap-3 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[12px] lg:text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Audience Sta...
                </label>
                <div className="text-[12px] lg:text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                  Post-pregnancy moms
                </div>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-white border border-[#e4e7ec] flex flex-col lg:flex-row p-3 gap-2 lg:gap-3 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[12px] lg:text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Product type
                </label>

                <div className="text-[12px] lg:text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                  Membership
                </div>
              </article>
            </article>
          </article>

          {/* SAVE ASSET */}
          <article
            className="hidden items-center justify-between third w-full"
            onClick={sasExpand}
          >
            {/* TEXT */}
            <p className="text-[12px] text-[#667185] max-w-[184px]">
              Saved From Module 1: Product Idea Generator
            </p>
            {/* EDIT BUTTON */}
            <article className="flex gap-1 items-center shrink-0">
              <Image className="shrink-0" src={editb4} alt="" />
              <p className="text-[#1671D9] text-[14px]">Edit</p>
            </article>
          </article>
        </section>

        {/* INACTIVE - Module 3 */}
        <section
          id={"s3mit" + 11}
          className="xbgrey-100 s3mit bg-[#f9fafb] p-3 rounded-[8px] border border-[#f0f2f5] flex flex-col items-center gap-3 w-full"
        >
          {/* HEAD - H6 + P + DROPDOWN IMAGE */}
          <article className="s2mit-sub flex w-full justify-between items-center first">
            {/* Result header and body plus dropdown arrow */}
            <article
              onClick={() => displays3mit(11)}
              className=" cursor-pointer"
            >
              <h6 className="paragraph-15 text-[14px] font-semibold leading-[145%] text-[#0A090B]">
                Profitable Product Idea Option 1
              </h6>
              <p className="s2mit-text block text-[12px] leading-[145%] xgrey-500 text-[#4F4D55]  pt-[2px]">
                Losing weight using a kletogenic diet
              </p>
            </article>
            {/* clicking this will hide the body below */}
            <article
              onClick={() => displays3mit(11)}
              className="shrink-0 s2mit-rotate xcmo rotate-effect cursor-pointer"
            >
              <Image src={arrowUp} alt="dropdown" />
            </article>
          </article>

          {/* BODY OF 4 */}
          <article className="hidden flex-col gap-4 w-full second ">
            {/* field with lock */}
            <article className="field-result-lock flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-[#f0f2f5] flex flex-col lg:flex-row p-3 gap-2 lg:gap-6 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[12px] lg:text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Micro Niche
                </label>
                <div className="text-[14px] leading-[145%] text-[#98a2b3] bg-transparent w-full outline-none rounded-none">
                  Weight Loss
                </div>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-white border border-[#e4e7ec] flex flex-col lg:flex-row p-3 gap-2 lg:gap-3 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[12px] lg:text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Core Solution
                </label>
                <div className="text-[12px] lg:text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                  Lose weight using a ketogenic diet
                </div>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-white border border-[#e4e7ec] flex flex-col lg:flex-row p-3 gap-2 lg:gap-3 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[12px] lg:text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Audience Sta...
                </label>
                <div className="text-[12px] lg:text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                  Post-pregnancy moms
                </div>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-white border border-[#e4e7ec] flex flex-col lg:flex-row p-3 gap-2 lg:gap-3 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[12px] lg:text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Product type
                </label>

                <div className="text-[12px] lg:text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                  Membership
                </div>
              </article>
            </article>
          </article>

          {/* SAVE ASSET */}
          <article
            className="hidden items-center justify-between third w-full"
            onClick={sasExpand}
          >
            {/* TEXT */}
            <p className="text-[12px] text-[#667185] max-w-[184px]">
              Saved From Module 1: Product Idea Generator
            </p>
            {/* EDIT BUTTON */}
            <article className="flex gap-1 items-center shrink-0">
              <Image className="shrink-0" src={editb4} alt="" />
              <p className="text-[#1671D9] text-[14px]">Edit</p>
            </article>
          </article>
        </section>

        {/* INACTIVE - Module 4 */}
        <section
          id={"s3mit" + 12}
          className="xbgrey-100 s3mit bg-[#f9fafb] p-3 rounded-[8px] border border-[#f0f2f5] flex flex-col items-center gap-3 w-full"
        >
          {/* HEAD - H6 + P + DROPDOWN IMAGE */}
          <article className="s2mit-sub flex w-full justify-between items-center first">
            {/* Result header and body plus dropdown arrow */}
            <article
              onClick={() => displays3mit(12)}
              className=" cursor-pointer"
            >
              <h6 className="paragraph-15 text-[14px] font-semibold leading-[145%] text-[#0A090B]">
                Profitable Product Idea Option 1
              </h6>
              <p className="s2mit-text block text-[12px] leading-[145%] xgrey-500 text-[#4F4D55]  pt-[2px]">
                Losing weight using a kletogenic diet
              </p>
            </article>
            {/* clicking this will hide the body below */}
            <article
              onClick={() => displays3mit(12)}
              className="shrink-0 s2mit-rotate xcmo rotate-effect cursor-pointer"
            >
              <Image src={arrowUp} alt="dropdown" />
            </article>
          </article>

          {/* BODY OF 4 */}
          <article className="hidden flex-col gap-4 w-full second ">
            {/* field with lock */}
            <article className="field-result-lock flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-[#f0f2f5] flex flex-col lg:flex-row p-3 gap-2 lg:gap-6 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[12px] lg:text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Micro Niche
                </label>
                <div className="text-[14px] leading-[145%] text-[#98a2b3] bg-transparent w-full outline-none rounded-none">
                  Weight Loss
                </div>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-white border border-[#e4e7ec] flex flex-col lg:flex-row p-3 gap-2 lg:gap-3 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[12px] lg:text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Core Solution
                </label>
                <div className="text-[12px] lg:text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                  Lose weight using a ketogenic diet
                </div>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-white border border-[#e4e7ec] flex flex-col lg:flex-row p-3 gap-2 lg:gap-3 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[12px] lg:text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Audience Sta...
                </label>
                <div className="text-[12px] lg:text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                  Post-pregnancy moms
                </div>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-white border border-[#e4e7ec] flex flex-col lg:flex-row p-3 gap-2 lg:gap-3 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[12px] lg:text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Product type
                </label>

                <div className="text-[12px] lg:text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                  Membership
                </div>
              </article>
            </article>
          </article>

          {/* SAVE ASSET */}
          <article
            className="hidden items-center justify-between third w-full"
            onClick={sasExpand}
          >
            {/* TEXT */}
            <p className="text-[12px] text-[#667185] max-w-[184px]">
              Saved From Module 1: Product Idea Generator
            </p>
            {/* EDIT BUTTON */}
            <article className="flex gap-1 items-center shrink-0">
              <Image className="shrink-0" src={editb4} alt="" />
              <p className="text-[#1671D9] text-[14px]">Edit</p>
            </article>
          </article>
        </section>

        {/* INACTIVE - Module 5 */}
        <section
          id={"s3mit" + 13}
          className="xbgrey-100 s3mit bg-[#f9fafb] p-3 rounded-[8px] border border-[#f0f2f5] flex flex-col items-center gap-3 w-full"
        >
          {/* HEAD - H6 + P + DROPDOWN IMAGE */}
          <article className="s2mit-sub flex w-full justify-between items-center first">
            {/* Result header and body plus dropdown arrow */}
            <article
              onClick={() => displays3mit(13)}
              className=" cursor-pointer"
            >
              <h6 className="paragraph-15 text-[14px] font-semibold leading-[145%] text-[#0A090B]">
                Profitable Product Idea Option 1
              </h6>
              <p className="s2mit-text block text-[12px] leading-[145%] xgrey-500 text-[#4F4D55]  pt-[2px]">
                Losing weight using a kletogenic diet
              </p>
            </article>
            {/* clicking this will hide the body below */}
            <article
              onClick={() => displays3mit(13)}
              className="shrink-0 s2mit-rotate xcmo rotate-effect cursor-pointer"
            >
              <Image src={arrowUp} alt="dropdown" />
            </article>
          </article>

          {/* BODY OF 4 */}
          <article className="hidden flex-col gap-4 w-full second ">
            {/* field with lock */}
            <article className="field-result-lock flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-[#f0f2f5] flex flex-col lg:flex-row p-3 gap-2 lg:gap-6 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[12px] lg:text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Micro Niche
                </label>
                <div className="text-[14px] leading-[145%] text-[#98a2b3] bg-transparent w-full outline-none rounded-none">
                  Weight Loss
                </div>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-white border border-[#e4e7ec] flex flex-col lg:flex-row p-3 gap-2 lg:gap-3 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[12px] lg:text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Core Solution
                </label>
                <div className="text-[12px] lg:text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                  Lose weight using a ketogenic diet
                </div>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-white border border-[#e4e7ec] flex flex-col lg:flex-row p-3 gap-2 lg:gap-3 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[12px] lg:text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Audience Sta...
                </label>
                <div className="text-[12px] lg:text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                  Post-pregnancy moms
                </div>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-white border border-[#e4e7ec] flex flex-col lg:flex-row p-3 gap-2 lg:gap-3 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[12px] lg:text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Product type
                </label>

                <div className="text-[12px] lg:text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                  Membership
                </div>
              </article>
            </article>
          </article>

          {/* SAVE ASSET */}
          <article
            className="hidden items-center justify-between third w-full"
            onClick={sasExpand}
          >
            {/* TEXT */}
            <p className="text-[12px] text-[#667185] max-w-[184px]">
              Saved From Module 1: Product Idea Generator
            </p>
            {/* EDIT BUTTON */}
            <article className="flex gap-1 items-center shrink-0">
              <Image className="shrink-0" src={editb4} alt="" />
              <p className="text-[#1671D9] text-[14px]">Edit</p>
            </article>
          </article>
        </section>

        {/* INACTIVE - Module 6 */}
        <section
          id={"s3mit" + 14}
          className="xbgrey-100 s3mit bg-[#f9fafb] p-3 rounded-[8px] border border-[#f0f2f5] flex flex-col items-center gap-3 w-full"
        >
          {/* HEAD - H6 + P + DROPDOWN IMAGE */}
          <article className="s2mit-sub flex w-full justify-between items-center first">
            {/* Result header and body plus dropdown arrow */}
            <article
              onClick={() => displays3mit(14)}
              className=" cursor-pointer"
            >
              <h6 className="paragraph-15 text-[14px] font-semibold leading-[145%] text-[#0A090B]">
                Profitable Product Idea Option 1
              </h6>
              <p className="s2mit-text block text-[12px] leading-[145%] xgrey-500 text-[#4F4D55]  pt-[2px]">
                Losing weight using a kletogenic diet
              </p>
            </article>
            {/* clicking this will hide the body below */}
            <article
              onClick={() => displays3mit(14)}
              className="shrink-0 s2mit-rotate xcmo rotate-effect cursor-pointer"
            >
              <Image src={arrowUp} alt="dropdown" />
            </article>
          </article>

          {/* BODY OF 4 */}
          <article className="hidden flex-col gap-4 w-full second ">
            {/* field with lock */}
            <article className="field-result-lock flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-[#f0f2f5] flex flex-col lg:flex-row p-3 gap-2 lg:gap-6 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[12px] lg:text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Micro Niche
                </label>
                <div className="text-[14px] leading-[145%] text-[#98a2b3] bg-transparent w-full outline-none rounded-none">
                  Weight Loss
                </div>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-white border border-[#e4e7ec] flex flex-col lg:flex-row p-3 gap-2 lg:gap-3 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[12px] lg:text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Core Solution
                </label>
                <div className="text-[12px] lg:text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                  Lose weight using a ketogenic diet
                </div>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-white border border-[#e4e7ec] flex flex-col lg:flex-row p-3 gap-2 lg:gap-3 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[12px] lg:text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Audience Sta...
                </label>
                <div className="text-[12px] lg:text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                  Post-pregnancy moms
                </div>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-white border border-[#e4e7ec] flex flex-col lg:flex-row p-3 gap-2 lg:gap-3 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[12px] lg:text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Product type
                </label>

                <div className="text-[12px] lg:text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                  Membership
                </div>
              </article>
            </article>
          </article>

          {/* SAVE ASSET */}
          <article
            className="hidden items-center justify-between third w-full"
            onClick={sasExpand}
          >
            {/* TEXT */}
            <p className="text-[12px] text-[#667185] max-w-[184px]">
              Saved From Module 1: Product Idea Generator
            </p>
            {/* EDIT BUTTON */}
            <article className="flex gap-1 items-center shrink-0">
              <Image className="shrink-0" src={editb4} alt="" />
              <p className="text-[#1671D9] text-[14px]">Edit</p>
            </article>
          </article>
        </section>
      </section>
    </>
  );
}
