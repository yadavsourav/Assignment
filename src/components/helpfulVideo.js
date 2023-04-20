function HelpfulVideos({related}) {
    // console.log(props.related)
 
     const {title, subtitle, coursesCount, thumbnail, language} = related;
     
 
     const { domain, basePath, key, aspectRatio } = thumbnail;
 
      const url = domain + "/" + basePath + "/10/" + key;
 
      const signUrl = language==="english" ? "https://acharyaprashant.org/images/ic_apsignature_english.png" :  "https://acharyaprashant.org/images/ic_apsignature_hindi.png" ;
      
 
 
     return (
 
         <div className="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 lg:rounded-lg lg:hover:shadow">
             <div className="flex flex-row items-start">
                 <div className="flex w-1/3 flex-shrink-0 flex-col items-start space-y-1">
                     <div className="w-full">
                         <div id="stacked-images-wrapper" className="relative aspect-[16/9] w-full overflow-hidden">
                             <div className="absolute inset-0 mx-2 border border-t border-white">
                                 <div className="relative h-full w-full overflow-hidden rounded">
                                     <img className="h-full w-full object-cover" src={url} alt="Thumbnail" />
                                     <div className="absolute left-0 bottom-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white">
                                     </div>
                                     <img className="absolute object-contain right-1 bottom-1" src="/images/ic_apsignature_english.png" alt="AP Name Logo" />
                                 </div>
                             </div>
                             <div className="absolute inset-0 top-1 mx-1 border border-t border-white">
                                 <div className="relative h-full w-full overflow-hidden rounded">
                                     <img className="h-full w-full object-cover" src={url} alt="Thumbnail" />
                                     <div className="absolute left-0 bottom-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white">
                                     </div>
                                 </div>
                             </div>
                             <div className="absolute inset-0 top-2 border border-t border-white">
                                 <div className="relative h-full w-full overflow-hidden rounded">
                                     <img className="h-full w-full object-cover" src={url} alt="Thumbnail" />
                                     <div className="absolute left-0 bottom-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white">
                                     </div>
                                     <img className="absolute object-contain right-1 bottom-1 h-[31px] md:26" src={signUrl} alt="AP Name Logo" />
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="ml-4 flex flex-shrink flex-col">
                     <div className="text-lg font-medium text-gray-800">
                         <span className="font-en">{title}</span>
                     </div>
                     <div className="text-sm leading-normal text-gray-700 lg:text-base">
                         <span className="font-en">{subtitle}</span>
                     </div>
                     <div className="text-sm text-gray-700">
                         <span className="font-en">{coursesCount} Video Series</span>
                     </div>
                 </div>
             </div>
             <div className="pt-2 group-hover:invisible md:pr-4">
                 <div className="h-[0.5px] w-full bg-gray-300">
                 </div>
             </div>
         </div>
 
     )
 };
 
 export default HelpfulVideos;