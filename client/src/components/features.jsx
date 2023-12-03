import React from "react";
import Link from "next/link";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Editor from '@monaco-editor/react';

const code1 = `
from googlesearch import search
from utils.site_scraper import get_pdf

def google_search(query):
    search_results = search(query, tld="co.in", num=10, stop=10, pause=2)
    for result in search_results:
      print(result)

def search_ipo(ipo_name):
    query = ipo_name + " ipo pdf sebi"
    search_results = search(query, tld="co.in", num=10, stop=1, pause=2)
    for result in search_results:
      get_pdf(result)
`

const code2 = `
from googlesearch import search
from utils.site_scraper import get_site_data, get_pdf

def google_search(query):
    for j in search(query, tld="co.in", num=10, stop=10, pause=2):
        # get_site_data(j)
        print(j)

def search_ipo(ipo_name):
    query = ipo_name + " ipo pdf sebi"
    for j in search(query, tld="co.in", num=10, stop=1, pause=2):
        # print(j)
        get_pdf(j)

`

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
              <span className="text-xs bg-clip-text bg-gradient-to-r font-medium from-[#b278ef] text-transparent to-green-500 tracking-widest uppercase via-esmerald-600">
                Code Documentation
              </span>
              <h2 className="font-normal text-white mt-8 text-3xl">
                📚 Automated Code Documentation Generation
              </h2>
              <p className="max-w-2xl mt-4 text-slate-400 text-lg">
                reDocs.ai uses AI technology to generate accurate
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
                          Entire Codebase
                        </strong>{" "}
                        — reDocs.ai helps in documenting the entire codebase
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
                          Best practices{" "}
                        </strong>
                        — Documentations are generated as per the best
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
                <span className="flex items-center text-white hover:bg-purple-700 duration-75 ease-in relative rounded-md transition-all py-2.5 px-8">
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
                <img src="/redocs.png" />
              </div>
            </div>
          </div>
          <div className="list-none gap-4 grid grid-cols-1 lg:gap-24 lg:grid-cols-2 mt-6">
            <div className="h-full lg:mt-0 lg:order-none mt-12 order-1">
              <div className="w-full border-white/10 lg:border lg:p-10 lg:rounded-3xl">
                <img src="/testgen.png" />
              </div>
            </div>
            <div>
              <span className="text-xs bg-clip-text bg-gradient-to-r font-medium from-[#b278ef] text-transparent to-green-500 tracking-widest uppercase via-esmerald-600">
                TESTS GENERATION
              </span>
              <h2 className="font-normal text-white mt-8 text-3xl">
                AI-Powered Code Tests Generation
              </h2>
              <p className="max-w-2xl mt-4 text-slate-400 text-lg">
                Our AI-driven test generation tool automates the test-writing process, saving you time and resources while ensuring comprehensive test coverage for your codebase.
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
                <span className="flex items-center text-white hover:bg-purple-700 duration-75 ease-in relative rounded-md transition-all py-2.5 px-8">
                  Get started ✨
                </span>
              </Link>
            </div>
          </div>
          <div className="list-none gap-4 grid grid-cols-1 lg:gap-24 lg:grid-cols-2 mt-6">
            <div>
              <span className="text-xs bg-clip-text bg-gradient-to-r font-medium from-[#b278ef] text-transparent to-green-500 tracking-widest uppercase via-emerald-600">
                Code Refactoring / Optimization
              </span>
              <h2 className="font-normal text-white mt-8 text-3xl">
                ⚙️ Intelligent Code Refactoring
              </h2>
              <p className="max-w-2xl mt-4 text-slate-400 text-lg">
                reDocs.ai's Code Refactoring tool leverages artificial intelligence to enhance and streamline your code. It works to clean up and optimize your codebase, resulting in improved readability, understanding, and maintainability.
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
                <span className="flex items-center text-white hover:bg-purple-700 duration-75 ease-in relative rounded-md transition-all py-2.5 px-8">
                  Get started ✨
                </span>
              </Link>
            </div>
            <div className="h-full lg:mt-0 lg:order-none mt-12 order-1">
              <div
                className="w-full border-white/10 lg:border lg:p-10 lg:rounded-3xl"
              >
                <Tabs defaultValue="account" className="w-[400px]">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">code</TabsTrigger>
                    <TabsTrigger value="password">refactored code</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account">
                    <Editor
                      defaultLanguage="python"
                      readOnly="true"
                      theme="vs-dark"
                      value={code2}
                      className=""
                      height="400px"
                      width="400px"
                    />
                  </TabsContent>
                  <TabsContent value="password">
                  <Editor
                      defaultLanguage="python"
                      readOnly="true"
                      theme="vs-dark"
                      value={code1}
                      className=""
                      height="400px"
                      width="400px"
                    />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
