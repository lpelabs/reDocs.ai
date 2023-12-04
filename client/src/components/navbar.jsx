import Link from "next/link"

export default function Navbar() {
    return (
        <section class="w-full backdrop-blur-2xl bg-vulcan-900/20 border-b border-white/5 lg:bg-vulcan-900/0 overflow-hidden z-50" aria-labelledby="navigation" id="navigation">
            <div class="relative mx-auto max-w-7xl w-full">
                <div class="flex relative px-8 flex-col lg:px-32 md:flex-row md:items-center md:justify-between md:px-12 mx-auto py-4 w-full" x-data="{ open: false }">
                    <div class="flex items-center text-white flex-row justify-between lg:justify-start">
                        <Link href="/" class="lg:pr-8">
                            <div class="items-center inline-flex">

                            </div>
                        </Link>
                        <button class="items-center inline-flex focus:outline-none justify-center text-white focus:text-white hover:text-indigo-400 md:hidden p-2 ">
                            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round inline-flex" class="inline-flex" stroke-width="2"></path><path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round inline-flex" class="hidden" stroke-width="2"></path></svg>
                        </button>
                    </div>
                    <nav class="items-center flex-col flex-grow hidden md:flex md:flex-row md:justify-center md:pb-0" >
                        <Link href="/" class="text-sm text-white font-normal hover:text-white/50 lg:px-6 md:px-3 px-2 py-2">Home</Link>
                        <Link href="/#features" class="text-sm text-white font-normal hover:text-white/50 lg:px-6 md:px-3 px-2 py-2">Features</Link>
                        <Link href="#" class="text-sm text-white font-normal hover:text-white/50 lg:px-6 md:px-3 px-2 py-2">Blog</Link>
                        <Link href="https://github.com/ayush4345/reDocs.ai#examples--" class="text-sm text-white font-normal hover:text-white/50 lg:px-6 md:px-3 px-2 py-2">Generation Examples</Link>
                        {/* <Link href="/login" class="items-center relative text-sm bg-gradient-to-br dark:focus:ring-lime-800 dark:hover:text-gray-900 dark:text-white focus:outline-none focus:ring-4 focus:ring-lime-200 font-medium from-green-400 group group-hover:from-green-400 group-hover:to-lime-500 inline-flex justify-center overflow-hidden p-0.5 rounded-lg text-gray-900 to-lime-500 lg:ml-auto">
                            <span class="flex items-center text-white bg-vulcan-900 duration-75 ease-in group-hover:bg-opacity-0 relative rounded-md transition-all px-4 py-1.5 text-sm">
                                <svg class="h-4 w-4 mr-1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="1.5"><path d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                Login
                            </span>
                        </Link> */}
                    </nav >
                </div>
            </div >
        </section >
    )
}