import React from "react";
import Link from "next/link";

const Feature = () => {
  return (
    <>
      <section className="relative" aria-labelledby="Featuretwo" id="features">
        <div className="flex justify-between w-full -z-1 absolute flex-row h-full left-0 lg:h-full lg:max-w-7xl lg:px-0 mx-auto px-6 right-0">
          <div className="w-full h-full border-[#f5f5f510]/5 border-dashed border-x"></div>
          <div className="w-full h-full border-[#f5f5f510]/5 border-dashed border-x"></div>
          <div className="w-full h-full border-[#f5f5f510]/5 border-dashed border-x"></div>
          <div className="w-full h-full border-[#f5f5f510]/5 border-dashed border-x"></div>
          <div className="w-full h-full border-[#f5f5f510]/5 border-dashed border-x"></div>
          <div className="w-full h-full border-[#f5f5f510]/5 border-dashed border-x"></div>
        </div>
        <div className="relative px-8 lg:px-32 md:px-12 mx-auto max-w-7xl py-12 lg:py-24 space-y-24">
          <div className="list-none gap-4 grid grid-cols-1 lg:gap-24 lg:grid-cols-2 mt-6">
            <div>
              <span className="text-xs bg-clip-text bg-gradient-to-r font-medium from-[#6112b5] text-transparent to-green-500 tracking-widest uppercase via-esmerald-600">
                Code Documentation
              </span>
              <h2 className="font-normal text-white mt-8 text-3xl">
                📚 Automated Code Documentation Generation
              </h2>
              <p className="max-w-2xl mt-4 text-slate-400 text-lg">
                DocuWriter.ai uses AI technology to generate accurate
                documentation for your code.
              </p>
              <div className="mt-12 gap-3">
                <ul className="list-none" role="list">
                  <li>
                    <div className="flex relative items-start py-2">
                      <svg
                        className="h-5 text-[#3fff3c] w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        stroke-width="1.5"
                      >
                        <path
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p className="text-sm text-slate-400 leading-6 ml-2">
                        <strong className="font-semibold text-slate-100">
                          Save time
                        </strong>{" "}
                        — Rapid AI-driven generation.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex relative items-start py-2">
                      <svg
                        className="h-5 text-[#3fff3c] w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        stroke-width="1.5"
                      >
                        <path
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p className="text-sm text-slate-400 leading-6 ml-2">
                        <strong className="font-semibold text-slate-100">
                          No Outdates{" "}
                        </strong>
                        — Continuous code documentation refresh.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex relative items-start py-2">
                      <svg
                        className="h-5 text-[#3fff3c] w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        stroke-width="1.5"
                      >
                        <path
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p className="text-sm text-slate-400 leading-6 ml-2">
                        <strong className="font-semibold text-slate-100">
                          Consistency
                        </strong>{" "}
                        — Consistent code documentation
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <Link
                href="/docGen"
                className="items-center relative text-sm bg-gradient-to-br dark:focus:ring-lime-800 dark:hover:text-gray-900 dark:text-white focus:outline-none focus:ring-4 focus:ring-lime-200 font-medium from-[#6112b5] group group-hover:from-[#6112b5] group-hover:to-[#6112b5] inline-flex justify-center overflow-hidden p-0.5 rounded-lg text-gray-900 to-[#6112b5] mb-2 mr-2 w-fit mt-6"
              >
                <span className="flex items-center text-white bg-vulcan-900 duration-75 ease-in group-hover:bg-opacity-0 relative rounded-md transition-all py-2.5 px-8">
                  Get started ✨
                </span>
              </Link>
            </div>
            <div className="h-full lg:mt-0 lg:order-none mt-12 order-1">
              <div
                className="w-full border-white/10 lg:border lg:p-10 lg:rounded-3xl"
                x-data=""
                x-tabs=""
              >
                <div className="vsc-controller"></div>
                <video
                  autoplay=""
                  className="rounded-xl"
                  muted=""
                  loop=""
                  src="/assets/test-docs-pdf.mov"
                ></video>
              </div>
            </div>
          </div>
          <div className="list-none gap-4 grid grid-cols-1 lg:gap-24 lg:grid-cols-2 mt-6">
            <div className="h-full lg:mt-0 lg:order-none mt-12 order-1">
              <div className="w-full border-white/10 lg:border lg:rounded-3xl lg:p-2">
                <img src="https://www.docuwriter.ai/assets/Swagger-Editor.png" />
              </div>
            </div>
            <div>
              <span className="text-xs bg-clip-text bg-gradient-to-r font-medium from-[#9940ed] text-transparent to-green-500 tracking-widest uppercase via-esmerald-600">
                API Documentation
              </span>
              <h2 className="font-normal text-white mt-8 text-3xl">
                📖 Swagger API Documentation
              </h2>
              <p className="max-w-2xl mt-4 text-slate-400 text-lg">
                Automatically generates Swagger-compliant JSON documentation
                directly from your source code files.
              </p>
              <div className="mt-12 gap-3">
                <ul className="list-none" role="list">
                  <li>
                    <div className="flex relative items-start py-2">
                      <svg
                        className="h-5 text-[#3fff3c] w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        stroke-width="1.5"
                      >
                        <path
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p className="text-sm text-slate-400 leading-6 ml-2">
                        <strong className="font-semibold text-slate-100">
                          Swagger-Compliant
                        </strong>{" "}
                        — Compatibility and ease of use.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex relative items-start py-2">
                      <svg
                        className="h-5 text-[#3fff3c] w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        stroke-width="1.5"
                      >
                        <path
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p className="text-sm text-slate-400 leading-6 ml-2">
                        <strong className="font-semibold text-slate-100">
                          Postman compatible{" "}
                        </strong>
                        — Import collection directly to Postman.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <Link
                href="/#"
                className="items-center relative text-sm bg-gradient-to-br dark:focus:ring-lime-800 dark:hover:text-gray-900 dark:text-white focus:outline-none focus:ring-4 focus:ring-lime-200 font-medium from-[#6112b5] group group-hover:from-[#6112b5] group-hover:to-[#6112b5] inline-flex justify-center overflow-hidden p-0.5 rounded-lg text-gray-900 to-[#6112b5] mb-2 mr-2 w-fit mt-6"
              >
                <span className="flex items-center text-white bg-vulcan-900 duration-75 ease-in group-hover:bg-opacity-0 relative rounded-md transition-all py-2.5 px-8">
                  Get started ✨
                </span>
              </Link>
            </div>
          </div>
          <div className="list-none gap-4 grid grid-cols-1 lg:gap-24 lg:grid-cols-2 mt-6">
            <div>
              <span className="text-xs bg-clip-text bg-gradient-to-r font-medium from-[#9940ed] text-transparent to-green-500 tracking-widest uppercase via-esmerald-600">
                TESTS GENERATION
              </span>
              <h2 className="font-normal text-white mt-8 text-3xl">
                ✅ AI-Powered Code Tests Suite Generation
              </h2>
              <p className="max-w-2xl mt-4 text-slate-400 text-lg">
                Generate a comprehensive test suite for your codebase with
                DocuWriter.ai. Our AI-powered test generation tool will help you
                save time and money by automating the process of writing tests.
              </p>
              <div className="mt-12 gap-3">
                <ul className="list-none" role="list">
                  <li>
                    <div className="flex relative items-start py-2">
                      <svg
                        className="h-5 text-[#3fff3c] w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        stroke-width="1.5"
                      >
                        <path
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p className="text-sm text-slate-400 leading-6 ml-2">
                        <strong className="font-semibold text-slate-100">
                          Time Saver
                        </strong>{" "}
                        — Rapid test suite generation
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex relative items-start py-2">
                      <svg
                        className="h-5 text-[#3fff3c] w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        stroke-width="1.5"
                      >
                        <path
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p className="text-sm text-slate-400 leading-6 ml-2">
                        <strong className="font-semibold text-slate-100">
                          Quality Assurance{" "}
                        </strong>
                        — Ensure code reliability
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex relative items-start py-2">
                      <svg
                        className="h-5 text-[#3fff3c] w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        stroke-width="1.5"
                      >
                        <path
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p className="text-sm text-slate-400 leading-6 ml-2">
                        <strong className="font-semibold text-slate-100">
                          Catch Bugs
                        </strong>{" "}
                        — Identify issues faster
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <Link
                href="/testGen"
                className="items-center relative text-sm bg-gradient-to-br dark:focus:ring-lime-800 dark:hover:text-gray-900 dark:text-white focus:outline-none focus:ring-4 focus:ring-lime-200 font-medium from-[#6112b5] group group-hover:from-[#6112b5] group-hover:to-[#6112b5] inline-flex justify-center overflow-hidden p-0.5 rounded-lg text-gray-900 to-[#6112b5] mb-2 mr-2 w-fit mt-6"
              >
                <span className="flex items-center text-white bg-vulcan-900 duration-75 ease-in group-hover:bg-opacity-0 relative rounded-md transition-all py-2.5 px-8">
                  Get started ✨
                </span>
              </Link>
            </div>
            <div className="h-full lg:mt-0 lg:order-none mt-12 order-1">
              <div className="w-full border-white/10 lg:border lg:p-10 lg:rounded-3xl">
                {/* <div className="flex gap-3 -mb-px items-stretch" x-tabs:list="">
                  <button
                    className="font-semibold text-white inline-flex py-2 text-xs border-b border-cyan-500 focus:border-cyan-500 border-b border-cyan-500 focus:border-cyan-500"
                    type="button"
                    x-tabs:tab=""
                    tabindex="0"
                  >
                    Example - Time Elapsed JS
                  </button>{" "}
                  <button
                    className="text-xs inline-flex py-2 text-white font-semibold3 bg-transparent border-b border-cyan-500 focus:border-cyan-500"
                    type="button"
                    x-tabs:tab=""
                    tabindex="-1"
                  >
                    Test Generated - JS
                  </button>
                </div> */}
                {/* <div className="mt-6" x-tabs:panels="">
                  <section
                    className="h-full bg-[#222222] font-mono mt-4 overflowhidden p-4 text-xs hadow-2xl rounded-3xl"
                    x-tabs:panel=""
                    tabindex="0"
                    style=""
                  >
                    <pre
                      className="astro-code slack-dark"
                      style="background-color: rgb(34, 34, 34); overflow-x: auto; position: relative;"
                      tabindex="0"
                    />
                  </section>
                </div> */}
              </div>
            </div>
          </div>
          <div className="list-none gap-4 grid grid-cols-1 lg:gap-24 lg:grid-cols-2 mt-6">
            <div className="h-full lg:mt-0 lg:order-none mt-12 order-1">
              <div
                className="w-full border-white/10 lg:border lg:p-10 lg:rounded-3xl"
                x-data=""
                x-tabs=""
              >
                {/* <div className="flex gap-3 -mb-px items-stretch" x-tabs:list="">
                  <button
                    className="font-semibold text-white inline-flex py-2 text-xs border-b border-cyan-500 focus:border-cyan-500 border-b border-cyan-500 focus:border-cyan-500"
                    type="button"
                    x-tabs:tab=""
                    tabindex="0"
                  >
                    Example - Test Python
                  </button>
                  <button
                    className="text-xs inline-flex py-2 text-white font-semibold3 bg-transparent border-b border-cyan-500 focus:border-cyan-500"
                    type="button"
                    x-tabs:tab=""
                    tabindex="-1"
                  >
                    Refactored / Optimized Code
                  </button>
                </div> */}
                {/* <div className="mt-6" x-tabs:panels="">
                  <section
                    className="h-full bg-[#222222] font-mono mt-4 overflowhidden p-4 text-xs hadow-2xl rounded-3xl"
                    x-tabs:panel=""
                    tabindex="0"
                  ></section>
                </div> */}
              </div>
            </div>
            <div>
              <span className="text-xs bg-clip-text bg-gradient-to-r font-medium from-[#9940ed] text-transparent to-green-500 tracking-widest uppercase via-esmerald-600">
                Code Refactoring / Optimization
              </span>
              <h2 className="font-normal text-white mt-8 text-3xl">
                ⚙️ Intelligent Code Refactoring
              </h2>
              <p className="max-w-2xl mt-4 text-slate-400 text-lg">
                DocuWriter.ai's Code Refactoring tool uses AI to clean up and
                optimize your code, making it easier to read, understand, and
                maintain.
              </p>
              <div className="mt-12 gap-3">
                <ul className="list-none" role="list">
                  <li>
                    <div className="flex relative items-start py-2">
                      <svg
                        className="h-5 text-[#3fff3c] w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        stroke-width="1.5"
                      >
                        <path
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p className="text-sm text-slate-400 leading-6 ml-2">
                        <strong className="font-semibold text-slate-100">
                          Code Simplification
                        </strong>{" "}
                        — Refactor for readability
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex relative items-start py-2">
                      <svg
                        className="h-5 text-[#3fff3c] w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        stroke-width="1.5"
                      >
                        <path
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p className="text-sm text-slate-400 leading-6 ml-2">
                        <strong className="font-semibold text-slate-100">
                          Maintainability Boost{" "}
                        </strong>
                        — Easy code updates
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex relative items-start py-2">
                      <svg
                        className="h-5 text-[#3fff3c] w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        stroke-width="1.5"
                      >
                        <path
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p className="text-sm text-slate-400 leading-6 ml-2">
                        <strong className="font-semibold text-slate-100">
                          Best Practices
                        </strong>{" "}
                        — Adherence to coding standards
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <Link
                href="/refactor"
                className="items-center relative text-sm bg-gradient-to-br dark:focus:ring-lime-800 dark:hover:text-gray-900 dark:text-white focus:outline-none focus:ring-4 focus:ring-lime-200 font-medium from-[#6112b5] group group-hover:from-[#6112b5] group-hover:to-[#6112b5] inline-flex justify-center overflow-hidden p-0.5 rounded-lg text-gray-900 to-[#6112b5] mb-2 mr-2 w-fit mt-6"
              >
                <span className="flex items-center text-white bg-vulcan-900 duration-75 ease-in group-hover:bg-opacity-0 relative rounded-md transition-all py-2.5 px-8">
                  Get started ✨
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
