const Shimmer = () => {
    return (
        <div className="container mx-auto max-w-7xl p-10 text-center">
            <div className="grid grid-cols-4 gap-y-6 gap-x-4">
                {Array(15).fill("").map((e, index) => (
                    <div key={index} className="bg-gray-300 w-full h-40 mt-32"></div>
                ))}
            </div>
        </div>
    )
};


export default Shimmer;