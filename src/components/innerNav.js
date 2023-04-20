function InnerNav() {
    return (

        <div id="inner-nav-bar" className="sticky top-0 z-20 bg-white shadow">
            <div id="inner-nav-bar" className="mx-auto max-w-screen-2xl select-none">
                <div className="h-12">
                    <div className="flex h-full items-center justify-between">
                        <div className="flex cursor-pointer items-center pl-4 lg:pl-8">
                            <div><img className="h-6 object-contain" src="https://acharyaprashant.org/images/ic_videoseries.png" alt="content home" />
                            </div>
                            <div className="ml-6 hidden w-[36rem] flex-grow md:block">
                                <div className="items-center rounded border border-gray-disabled shadow-sm"> {/*  */}
                                    <div className="relative">
                                        <div className="relative flex w-full flex-row">
                                            <button className="flex flex-row items-center whitespace-nowrap rounded-l border-r pl-2 text-xs font-normal">
                                                <div className="text-xs font-medium text-gray-600">  {/*  */}
                                                    <span className="font-en">All</span></div> <div className="px-3 text-slate-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" className="fill-current">
                                                        <path d="m.354 1.354 3.792 3.792a.5.5 0 0 0 .708 0l3.792-3.792A.5.5 0 0 0 8.293.5H.707a.5.5 0 0 0-.353.854Z"></path>
                                                    </svg>
                                                </div>
                                            </button>
                                            <input type="search" className="h-9 w-full border-0 text-gray-700 caret-gray-600 focus:ring-0" placeholder="    Search for video series" />  {/*  */}
                                            <button id="main-website-search-courses-btn" className="items-end rounded-r bg-orange-200 fill-current py-1 px-2 text-slate-700">  {/*  */}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" >
                                                    <path d="M6.5 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-6 4a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 .5 6Z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex h-10 content-center items-center justify-center space-x-4 pr-4 lg:pr-8">
                            <div ><div className="inline-flex cursor-pointer items-center py-4" id="main-website-main-nav-bar-cart-icon">
                                <div className="flex items-center">
                                    <div className="relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" className="stroke-current">
                                            <path fill="none" d="M1 1h1.556l.31 1.556m1.245 6.222h7.778L15 2.556H2.867M4.11 8.778 2.867 2.556M4.11 8.778 2.328 10.56a.778.778 0 0 0 .55 1.328h9.01m0 0a1.556 1.556 0 1 0 0 3.11 1.556 1.556 0 0 0 0-3.11Zm-6.221 1.555a1.556 1.556 0 1 1-3.111 0 1.556 1.556 0 0 1 3.11 0Z"></path>
                                        </svg>
                                        <div className="absolute bottom-1/2 left-1/2 flex h-4 w-4 items-center justify-center rounded-full text-xs bg-orange text-white cart-dark"></div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="cursor-pointer md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" className="fill-current">
                                    <path d="M6.5 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-6 4a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 .5 6Z"></path>
                                </svg>
                            </div>
                            <div className="whitespace-nowrap py-4 text-sm">
                                <div className="cursor-pointer rounded-md py-[0.12rem] px-2 hover:bg-orange-700 text-center  bg-orange-600 duration-150">
                                    <span className="font-en text-white my-3">My Video Series</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default InnerNav;