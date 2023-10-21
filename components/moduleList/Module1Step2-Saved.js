"use client";
import Image from "next/image";
import Link from "next/link";

//Image importation
import heartFill500 from "@/public/Images/svg/heart-fill-500.svg";
import arrowUp from "@/public/Images/svg/arrow-up-400.svg";
import lock from "@/public/Images/svg/lock-500.svg";
import refresh from "@/public/Images/svg/refresh-400.svg";

export default function ModuleListSaved({ sasExpand }) {
  // display module 1 step 2 - module item
  // hide text - display below
  const displays2mit = (id) => {
    if (typeof window !== "undefined") {
      // Activating this will hide the paragraph text, fields and save asset CTA
      document.getElementById(`s2mit` + id).classList.toggle("active");
    }
  };

  return (
    <>
      <section className="cont-container bg-white p-6 grid content-start gap-y-6">
        {/* Module 1 - ACTIVE */}
        <section
          id={"s2mit" + 1}
          className="xbgrey-100 s2mit bg-[#f9fafb] active p-4 rounded-[8px] border-[#E4E7EC] border flex flex-col items-center gap-4 w-full"
        >
          {/* HEAD - H6 + P + DROPDOWN IMAGE */}
          <article className="s2mit-sub flex w-full justify-between items-center first">
            {/* Result header and body plus dropdown arrow */}
            <article
              onClick={() => displays2mit(1)}
              className=" cursor-pointer"
            >
              <h6 className="paragraph-15 text-[14px] font-semibold leading-[145%] text-[#344054]">
                Profitable Product Idea Option 1
              </h6>
              <p className="s2mit-text lg:text-[14px] text-[12px] leading-[145%] xgrey-500 text-[#667185]  pt-[2px] lg:pt-2">
                Losing weight using a kletogenic diet
              </p>
            </article>
            {/* clicking this will hide the body below */}
            <article
              onClick={() => displays2mit(1)}
              className="shrink-0 s2mit-rotate xcmo rotate-effect cursor-pointer"
            >
              <Image src={arrowUp} alt="dropdown" />
            </article>
          </article>

          {/* BODY OF 4 */}
          <article className="flex flex-col gap-4 w-full second ">
            {/* field with lock */}
            <article className="field-result-lock flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-[#f0f2f5] flex flex-col lg:flex-row p-3 gap-2 lg:gap-6 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
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
                <label className="shrink-0 text-[#98a2b3] font-medium text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Core Solution
                </label>
                <div className="text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                  Lose weight using a ketogenic diet
                </div>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-white border border-[#e4e7ec] flex flex-col lg:flex-row p-3 gap-2 lg:gap-3 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Audience Sta...
                </label>
                <div className="text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                  Post-pregnancy moms
                </div>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-white border border-[#e4e7ec] flex flex-col lg:flex-row p-3 gap-2 lg:gap-3 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Product type
                </label>

                <div className="text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                  Membership
                </div>
              </article>
            </article>
          </article>

          {/* SAVE ASSET */}
          <article
            className="text-[14px] leading-[145%] text-[#667185] font-semibold flex gap-2 items-center cursor-pointer hovOpacity-80 third"
            onClick={sasExpand}
          >
            <Image src={heartFill500} alt="Empty" />
            <p>Saved Asset</p>
          </article>
        </section>
        {/* INACTIVE - Module 2 */}
        <section
          id={"s2mit" + 2}
          className="xbgrey-100 s2mit bg-[#f9fafb] p-4 rounded-[8px] border-[#f0f2f5] border flex flex-col items-center gap-4 w-full"
        >
          {/* HEAD - H6 + P + DROPDOWN IMAGE */}
          <article className="s2mit-sub flex w-full justify-between items-center first">
            {/* Result header and body plus dropdown arrow */}
            <article
              onClick={() => displays2mit(2)}
              className=" cursor-pointer"
            >
              <h6 className="paragraph-15 text-[14px] font-semibold leading-[145%] text-[#344054]">
                Profitable Product Idea Option 2
              </h6>
              <p className="s2mit-text lg:text-[14px] text-[12px] leading-[145%] xgrey-500 text-[#667185]  pt-[2px] lg:pt-2">
                Losing weight using a kletogenic diet
              </p>
            </article>
            {/* clicking this will hide the body below */}
            <article
              onClick={() => displays2mit(2)}
              className="shrink-0 s2mit-rotate xcmo rotate-effect cursor-pointer"
            >
              <Image src={arrowUp} alt="dropdown" />
            </article>
          </article>

          {/* BODY OF 4 */}
          <article className="flex flex-col gap-4 w-full second ">
            {/* field with lock */}
            <article className="field-result-lock flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-[#f0f2f5] flex flex-col lg:flex-row p-3 gap-2 lg:gap-6 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
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
                <label className="shrink-0 text-[#98a2b3] font-medium text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Core Solution
                </label>
                <div className="text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                  Lose weight using a ketogenic diet
                </div>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-white border border-[#e4e7ec] flex flex-col lg:flex-row p-3 gap-2 lg:gap-3 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Audience Sta...
                </label>
                <div className="text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                  Post-pregnancy moms
                </div>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-white border border-[#e4e7ec] flex flex-col lg:flex-row p-3 gap-2 lg:gap-3 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Product type
                </label>

                <div className="text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                  Membership
                </div>
              </article>
            </article>
          </article>

          {/* SAVE ASSET */}
          <article
            className="text-[14px] leading-[145%] text-[#667185] font-semibold hidden gap-2 items-center cursor-pointer hovOpacity-80 third"
            onClick={sasExpand}
          >
            <Image src={heartFill500} alt="Empty" />
            <p>Saved Asset</p>
          </article>
        </section>

        {/* INACTIVE - Module 3 */}
        <section
          id={"s2mit" + 3}
          className="xbgrey-100 s2mit bg-[#f9fafb] p-4 rounded-[8px] border-[#f0f2f5] border flex flex-col items-center gap-4 w-full"
        >
          {/* HEAD - H6 + P + DROPDOWN IMAGE */}
          <article className="s2mit-sub flex w-full justify-between items-center first">
            {/* Result header and body plus dropdown arrow */}
            <article
              onClick={() => displays2mit(3)}
              className=" cursor-pointer"
            >
              <h6 className="paragraph-15 text-[14px] font-semibold leading-[145%] text-[#344054]">
                Profitable Product Idea Option 3
              </h6>
              <p className="s2mit-text lg:text-[14px] text-[12px] leading-[145%] xgrey-500 text-[#667185]  pt-[2px] lg:pt-2">
                Losing weight using a kletogenic diet
              </p>
            </article>
            {/* clicking this will hide the body below */}
            <article
              onClick={() => displays2mit(3)}
              className="shrink-0 s2mit-rotate xcmo rotate-effect cursor-pointer"
            >
              <Image src={arrowUp} alt="dropdown" />
            </article>
          </article>

          {/* BODY OF 4 */}
          <article className="flex flex-col gap-4 w-full second ">
            {/* field with lock */}
            <article className="field-result-lock flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-[#f0f2f5] flex flex-col lg:flex-row p-3 gap-2 lg:gap-6 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
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
                <label className="shrink-0 text-[#98a2b3] font-medium text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Core Solution
                </label>
                <div className="text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                  Lose weight using a ketogenic diet
                </div>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-white border border-[#e4e7ec] flex flex-col lg:flex-row p-3 gap-2 lg:gap-3 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Audience Sta...
                </label>
                <div className="text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                  Post-pregnancy moms
                </div>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-white border border-[#e4e7ec] flex flex-col lg:flex-row p-3 gap-2 lg:gap-3 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Product type
                </label>

                <div className="text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                  Membership
                </div>
              </article>
            </article>
          </article>

          {/* SAVE ASSET */}
          <article
            className="text-[14px] leading-[145%] text-[#667185] font-semibold hidden gap-2 items-center cursor-pointer hovOpacity-80 third"
            onClick={sasExpand}
          >
            <Image src={heartFill500} alt="Empty" />
            <p>Saved Asset</p>
          </article>
        </section>

        {/* INACTIVE - Module 4 */}
        <section
          id={"s2mit" + 4}
          className="xbgrey-100 s2mit bg-[#f9fafb] p-4 rounded-[8px] border-[#f0f2f5] border flex flex-col items-center gap-4 w-full"
        >
          {/* HEAD - H6 + P + DROPDOWN IMAGE */}
          <article className="s2mit-sub flex w-full justify-between items-center first">
            {/* Result header and body plus dropdown arrow */}
            <article
              onClick={() => displays2mit(4)}
              className=" cursor-pointer"
            >
              <h6 className="paragraph-15 text-[14px] font-semibold leading-[145%] text-[#344054]">
                Profitable Product Idea Option 4
              </h6>
              <p className="s2mit-text lg:text-[14px] text-[12px] leading-[145%] xgrey-500 text-[#667185]  pt-[2px] lg:pt-2">
                Losing weight using a kletogenic diet
              </p>
            </article>
            {/* clicking this will hide the body below */}
            <article
              onClick={() => displays2mit(4)}
              className="shrink-0 s2mit-rotate xcmo rotate-effect cursor-pointer"
            >
              <Image src={arrowUp} alt="dropdown" />
            </article>
          </article>

          {/* BODY OF 4 */}
          <article className="flex flex-col gap-4 w-full second ">
            {/* field with lock */}
            <article className="field-result-lock flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-[#f0f2f5] flex flex-col lg:flex-row p-3 gap-2 lg:gap-6 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
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
                <label className="shrink-0 text-[#98a2b3] font-medium text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Core Solution
                </label>
                <div className="text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                  Lose weight using a ketogenic diet
                </div>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-white border border-[#e4e7ec] flex flex-col lg:flex-row p-3 gap-2 lg:gap-3 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Audience Sta...
                </label>
                <div className="text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                  Post-pregnancy moms
                </div>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-white border border-[#e4e7ec] flex flex-col lg:flex-row p-3 gap-2 lg:gap-3 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Product type
                </label>

                <div className="text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                  Membership
                </div>
              </article>
            </article>
          </article>

          {/* SAVE ASSET */}
          <article
            className="text-[14px] leading-[145%] text-[#667185] font-semibold hidden gap-2 items-center cursor-pointer hovOpacity-80 third"
            onClick={sasExpand}
          >
            <Image src={heartFill500} alt="Empty" />
            <p>Saved Asset</p>
          </article>
        </section>

        {/* INACTIVE - Module 5 */}
        <section
          id={"s2mit" + 5}
          className="xbgrey-100 s2mit bg-[#f9fafb] p-4 rounded-[8px] border-[#f0f2f5] border flex flex-col items-center gap-4 w-full"
        >
          {/* HEAD - H6 + P + DROPDOWN IMAGE */}
          <article className="s2mit-sub flex w-full justify-between items-center first">
            {/* Result header and body plus dropdown arrow */}
            <article
              onClick={() => displays2mit(5)}
              className=" cursor-pointer"
            >
              <h6 className="paragraph-15 text-[14px] font-semibold leading-[145%] text-[#344054]">
                Profitable Product Idea Option 5
              </h6>
              <p className="s2mit-text lg:text-[14px] text-[12px] leading-[145%] xgrey-500 text-[#667185]  pt-[2px] lg:pt-2">
                Losing weight using a kletogenic diet
              </p>
            </article>
            {/* clicking this will hide the body below */}
            <article
              onClick={() => displays2mit(5)}
              className="shrink-0 s2mit-rotate xcmo rotate-effect cursor-pointer"
            >
              <Image src={arrowUp} alt="dropdown" />
            </article>
          </article>

          {/* BODY OF 4 */}
          <article className="flex flex-col gap-4 w-full second ">
            {/* field with lock */}
            <article className="field-result-lock flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-[#f0f2f5] flex flex-col lg:flex-row p-3 gap-2 lg:gap-6 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
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
                <label className="shrink-0 text-[#98a2b3] font-medium text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Core Solution
                </label>
                <div className="text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                  Lose weight using a ketogenic diet
                </div>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-white border border-[#e4e7ec] flex flex-col lg:flex-row p-3 gap-2 lg:gap-3 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Audience Sta...
                </label>
                <div className="text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                  Post-pregnancy moms
                </div>
              </article>
            </article>

            {/* field with refresh */}
            <article className="field-result-refresh flex justify-between items-center gap-4">
              {/* result */}
              <article className="rounded-[6px] bg-white border border-[#e4e7ec] flex flex-col lg:flex-row p-3 gap-2 lg:gap-3 w-full">
                <label className="shrink-0 text-[#98a2b3] font-medium text-[14px] leading-[145%] w-full max-w-[104px] lg:h-5">
                  Product type
                </label>

                <div className="text-[14px] leading-[145%] text-[#101928] bg-transparent w-full outline-none rounded-none">
                  Membership
                </div>
              </article>
            </article>
          </article>

          {/* SAVE ASSET */}
          <article
            className="text-[14px] leading-[145%] text-[#667185] font-semibold hidden gap-2 items-center cursor-pointer hovOpacity-80 third"
            onClick={sasExpand}
          >
            <Image src={heartFill500} alt="Empty" />
            <p>Saved Asset</p>
          </article>
        </section>
      </section>
    </>
  );
}
