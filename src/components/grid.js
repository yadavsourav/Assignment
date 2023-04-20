function Grid(props) {
    return (

        <div className="px-4 lg:px-8">
            <div><div className="mt-8 text-lg font-semibold md:mt-12 md:text-xl lg:mt-16">
                <span className="font-en">{props.title}</span>
            </div>
                <div className="mt-1 h-[0.5px] w-full bg-gray-300 md:mt-2">
                </div>
            </div>
        </div>

    )
}

export default Grid;