function Breadcrumb() {
    return (

        <div className="hidden px-4 pt-4 md:block lg:px-8">
            <div className="flex w-full flex-wrap items-baseline justify-start text-gray-600">{/*  */}
                <div className="mr-1 text-sm cursor-pointer hover:text-orange-600">{/*  */}
                    <span className="font-en">Home</span>
                </div>
                <div className="mr-1 px-1 text-gray-700">{/*  */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" className="fill-current">
                        <path  d="M.793 10.207a1 1 0 0 1 0-1.414L4.086 5.5.793 2.207A1 1 0 0 1 2.207.793l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z"></path>
                    </svg>
                </div><div className="mr-1 text-sm font-medium text-gray-700">
                    <span className=" font-hi">संतवाणी</span>
                </div> <div className="mr-1 px-1 text-gray-subtitle hidden"> {/*  */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" className="fill-current">
                        <path  d="M.793 10.207a1 1 0 0 1 0-1.414L4.086 5.5.793 2.207A1 1 0 0 1 2.207.793l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z"></path>
                    </svg>
                </div>
            </div>
        </div>

    )
};

export default Breadcrumb;