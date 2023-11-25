"use client"

import Lottie from "react-lottie-player";
import loader from '@/../public/animation';

export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <div className=" static backdrop-blur-sm min-h-screen flex items-center justify-center flex-col">
            <div className=" bg-white opacity-75 h-[38h] w-[38vh] rounded-lg">
                <Lottie loop animationData={loader} play className="h-[40vh]" />
            </div>
            <div className=" font-xl text-white font-semibold p-2">Refactoring...</div>
            <div className=" font-xl text-white font-semibold p-2">It might take upto a minute, so please be patient</div>
        </div>
    )
}