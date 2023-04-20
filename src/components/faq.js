function Faq(props) {

    const {question, answer} = props.faq;
    
     return (
                 
                 <div className="w-full md:pl-24 ">
                     <div>
 
                         <div className="flex items-center justify-between md:cursor-pointer">
                             <div className="pr-2 text-gray-600">
                                 <span className="font-hi"> {question} </span>
                             </div>
                             <div className="h-3 w-3 text-slate-400 hover:text-slate-800">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" className="fill-current">
                                     <path  d="M.793.793a1 1 0 0 1 1.414 0L5.5 4.086 8.793.793a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"></path>
                                 </svg>
                             </div>
                         </div>
 
                     </div>
                     <div className="my-4 h-[0.5px] justify-start bg-gray-300"></div>
                     
                 </div>
             
 
     )
 }
 
 export default Faq;