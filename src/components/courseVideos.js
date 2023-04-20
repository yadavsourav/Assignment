
function CourseVideos({course}) {
    
    //console.log(props.course)

    const { amount, courseHours, language, originalAmount, title, subtitle, series  } = course;
    const { order } = series;
    const hours = Math.floor(courseHours);
    const minutes = Math.round((courseHours - hours) * 60);

    return (

        <div className="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 lg:rounded-lg lg:hover:shadow">
            <div className="flex flex-col space-y-2">
                <div className="self-start pb-2">
                    <div id="part-pointer" className=" bg-gray-400 text-white px-[0.5rem] text-xs rounded-md py-1">
                        <span className="font-hi">भाग {order.seq}</span>
                    </div>
                </div>
                <div className="flex w-full flex-col text-left">
                    <div><div className="text-lg font-medium leading-normal text-gray-700">
                        <span className="font-hi">{title}</span>
                    </div> <div className="text-sm leading-normal text-gray-500 lg:text-base">
                            <span className="font-hi">{subtitle}</span>
                        </div> <div className="pt-1 text-xs text-gray-700 lg:text-sm">
                            <span className="font-en">{hours} hours {minutes} minutes</span>
                        </div>
                        <div className="pt-1 text-xs text-gray-700 lg:text-sm">
                            <span className="font-en">Contribution: ₹{amount}</span>
                            <del>
                                <span className="pl-1">
                                    <span className="font-hi">{originalAmount}</span>
                                </span>
                            </del>
                        </div>
                    </div>
                    <div className="mt-2 flex flex-wrap text-xs">
                        <div className="mr-1">
                            <div className="flex items-center rounded py-0.5 px-1.5 text-xs text-slate-900 bg-blue-200">
                                <span className="font-en">{language === "hindi" ? "Hindi": "English"}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="inline-flex items-center space-x-3 text-xs font-medium">
                        <div id="main-website-add-to-cart-borderless-button" className="cursor-pointer font-semibold hover:text-orange-700 text-orange-600 rounded-md text-center" >
                            <span className="font-en">ADD TO CART</span>
                        </div>
                        {/* <div id="main-website-add-to-cart-borderless-button" className="cursor-pointer font-semibold rounded-md text-center  transition-colors  duration-150">
                            <span className="font-en">Added to cart</span>
                        </div> */}
                        <div className="py-2">
                            <span className="text-gray-300">|</span>
                        </div>
                        <div id="main-website-enroll-in-course-button" className="cursor-pointer font-semibold hover:text-orange-700 text-orange-600 rounded-md text-center transition-colors duration-150 ">
                            <span className="font-en">ENROL</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-2 group-hover:invisible">
                <div className=" h-[0.5px] w-full bg-gray-separator">
                </div>
            </div>
        </div>
    )
}

export default CourseVideos;