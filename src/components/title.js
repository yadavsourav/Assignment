function Title(props) {

    const { title } = props.title;
    return (

        <div className="flex items-center px-4 py-2 md:py-4 md:pt-4 lg:px-8">
            <div className="-ml-4 cursor-pointer rounded fill-current p-4 text-brand-600 hover:text-brand-400 md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13">
                    <path  d="M7.244 12.249a.888.888 0 0 1-1.238 0L.756 7.106a.845.845 0 0 1 0-1.212L6.006.75a.888.888 0 0 1 1.238 0 .845.845 0 0 1 0 1.212l-3.757 3.68h10.138c.483 0 .875.384.875.857a.866.866 0 0 1-.875.857H3.487l3.757 3.68a.845.845 0 0 1 0 1.212Z"></path>
                </svg>
            </div>
            <div className="text-lg fontmedium text-gray-800 md:text-xl lg:text-2xl" id="main-website-header-text">
                <span className="font-hi">{title}</span>
            </div>
        </div>



    )
}

export default Title;