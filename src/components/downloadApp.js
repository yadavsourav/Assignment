function DownloadApp() {
    return (

        <div className="fixed bottom-0 left-0 right-0 z-50 w-full bg-orange-100 px-4 py-[13px] lg:hidden">
            <div className="flex items-center justify-between">
                <div className="font-semibold text-slate-700">
                    <span className="font-en">Open in App</span>
                </div> 
                <div className="text-xs font-medium md:text-sm">
                    <button className="flex items-center rounded-3xl bg-orange-600 text-slate-100 hover:bg-orange-700 hover:text-white px-[2rem] py-[0.625rem] h-full svelte-lb7hu2">
                        <div className="flex items-center justify-center whitespace-nowrap">
                            <div className="mr-1.5 h-[14px] w-[14px] text-white md:h-4 md:w-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="fill-current">
                                    <path fill="none" stroke="#FFF"  stroke-width="1.2" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm-2.5-3.258h5M10 8.129l-2 2.065m0 0L6 8.129m2 2.065V4"></path>
                                </svg>
                            </div>
                            <span className="font-en">Download App</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>


    )
}

export default DownloadApp;