function LastHelpfulVideo({related}) {
    const { title, subtitle, language, amount, courseHours, thumbnail} = related;
    const { domain, basePath, key } = thumbnail;

    const hours = Math.floor(courseHours);
    const minutes = Math.round((courseHours - hours) * 60);
    
    const url = domain + "/" + basePath + "/10/" + key;

   // console.log(related)

    return (
        <div className="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 lg:rounded-lg lg:hover:shadow">
            <div className="flex flex-row items-start space-x-4">
                <div className="w-1/3 flex-shrink-0">
                    <div className="relative h-full w-full overflow-hidden rounded">
                        <img className="h-full w-full object-cover" src={url} alt="Thumbnail" />
                        <div className="absolute left-0 bottom-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white">
                        </div>
                        <img className="absolute object-contain right-1 bottom-1 h-[31px] md:26 " src="https://acharyaprashant.org/images/ic_apsignature_english.png" alt="AP Name Logo" />
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <div className="flex w-full flex-col text-left">
                        <div>
                            <div className="text-lg font-medium leading-normal text-gray-800">
                                <span className="font-en">{title}</span>
                            </div>
                            <div className="text-sm leading-normal text-gray-700 lg:text-base">
                                <span className="font-en">{subtitle}</span>
                            </div>
                            <div className="pt-1 text-xs text-gray-700 lg:text-sm">
                                <span className="font-en">{hours} hours {minutes} minutes</span>
                            </div>
                            <div className="pt-1 text-xs text-gray-700 lg:text-sm">
                                <span className="font-en">Contribution: {amount}</span>
                            </div>
                        </div>
                        <div className="mt-2 flex flex-wrap text-xs">
                            <div className="mr-1">
                                <div className="flex items-center rounded py-0.5 px-1.5 text-xs text-slate-700 bg-blue-background">
                                    <span className="font-en">{language === "english" ? "English": "Hindi"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="inline-flex items-center space-x-3 text-xs font-medium">
                            <div id="main-website-add-to-cart-borderless-button" className="cursor-pointer font-semibold hover:text-orange-700 text-orange-600 rounded-md text-center  transition-colors  duration-150 ">
                                <span className="font-en">ADD TO CART</span>
                            </div>
                            <div className="py-2">
                                <span className="text-gray-300">|</span>
                            </div>
                            <div id="main-website-enroll-in-course-button" className="cursor-pointer font-semibold hover:text-orange-700 text-orange-600 rounded-md text-center transition-colors duration-150">
                                <span className="font-en">ENROL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-2 group-hover:invisible md:pr-4">
                <div className="h-[0.5px] w-full bg-gray-300"></div>
            </div>
        </div>
    )
}

export default LastHelpfulVideo;