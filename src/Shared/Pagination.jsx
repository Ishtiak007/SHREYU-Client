

const Pagination = () => {
    return (
        <div className="flex justify-between items-center my-5 gap-6 p-4">
            <div className="flex gap-5">
                <div>
                    <div className="flex items-center gap-4">
                        <h1 className="text-lg font-bold">Display :</h1>
                        <div>
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>5</option>
                                <option>5</option>
                                <option>10</option>
                                <option>15</option>
                                <option>All</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-7">
                    <h1 className="text-lg">Page : <span className=" font-bold">1 to 12</span></h1>
                    <div className="flex items-center gap-2">
                        <h1 className="text-lg font-bold">Go To page: </h1>
                        <input type="number" className="input input-bordered w-[60px]" />
                    </div>
                </div>
            </div>


            <div>
                <div className="space-x-4">
                    <input className="join-item btn rounded-full mx-2 btn-circle" type="radio" name="options" aria-label="1" checked />
                    <input className="join-item btn btn-circle" type="radio" name="options" aria-label="2" />
                    <input className="join-item btn btn-circle" type="radio" name="options" aria-label="3" />
                    <input className="join-item btn btn-circle" type="radio" name="options" aria-label="4" />
                </div>
            </div>
        </div>
    );
};

export default Pagination;