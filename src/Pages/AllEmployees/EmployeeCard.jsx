

const EmployeeCard = ({ employees }) => {
    const { name, work, photo } = employees;
    return (
        <div className="card bg-base-100">
            <figure><img src={photo} className="w-40 h-40 rounded-full p-5" alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title mx-auto">
                    {name}
                </h2>
                <p className="text-center">{work}</p>
            </div>
        </div>
    );
};

export default EmployeeCard;