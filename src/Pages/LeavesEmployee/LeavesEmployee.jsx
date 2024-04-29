import Button from "../../Shared/Button";
import Container from "../../Shared/Container";


const LeavesEmployee = () => {
    const leaveAdmin = [
        {
            "id": "1",
            "leaveType": "Medical Leave",
            "from": "27 Feb 2023",
            "to": "27 Feb 2023",
            "days": "1 days",
            "reason": "Family Problem",
            "status": "Approved",
        },
        {
            "id": "2",
            "leaveType": "Hospitalisation",
            "from": "15 Jan 2023",
            "to": "25 Jan 2023",
            "days": "10 days",
            "reason": "Going to Hospital",
            "status": "Approved",
        },
        {
            "id": "3",
            "leaveType": "Maternity Leave",
            "from": "5 Jan 2023",
            "to": "15 Jan 2023",
            "days": "5 days",
            "reason": "Family problem",
            "status": "Approved",
        },
        {
            "id": "4",
            "leaveType": "Casual Leave",
            "from": "10 Jan 2023",
            "to": "11 Jan 2023",
            "days": "1 days",
            "reason": "Going to Hospital",
            "status": "Approved",
        },
        {
            "id": "5",
            "leaveType": "LOP",
            "from": "9 Jan 2023",
            "to": "10 Jan 2023",
            "days": "1 day",
            "reason": "Family problem",
            "status": "Approved",
        },
        {
            "id": "6",
            "leaveType": "Casual Leave",
            "from": "24 Feb 2023",
            "to": "25 Feb 2023",
            "days": "10 days",
            "reason": "Going to Hospital",
            "status": "Declined",
        },
        {
            "id": "7",
            "leaveType": "Paternity Leave",
            "from": "13 Jan 2023",
            "to": "14 Jan 2023",
            "days": "2 days",
            "reason": "Going to Hospital",
            "status": "Approved",
        },
        {
            "id": "8",
            "leaveType": "Casual Leave",
            "from": "13 Feb 2023",
            "to": "17 Feb 2023",
            "days": "5 days",
            "reason": "Personal",
            "status": "Declined",
        },
        {
            "id": "9",
            "leaveType": "Medical Leave",
            "from": "27 Feb 2023",
            "to": "27 Feb 2023",
            "days": "1 days",
            "reason": "Family Problem",
            "status": "Approved",
        },
        {
            "id": "10",
            "leaveType": "Hospitalisation",
            "from": "15 Jan 2023",
            "to": "25 Jan 2023",
            "days": "10 days",
            "reason": "Going to Hospital",
            "status": "Approved",
        },
        {
            "id": "11",
            "leaveType": "Maternity Leave",
            "from": "5 Jan 2023",
            "to": "15 Jan 2023",
            "days": "5 days",
            "reason": "Family problem",
            "status": "Approved",
        },
        {
            "id": "12",
            "leaveType": "Casual Leave",
            "from": "10 Jan 2023",
            "to": "11 Jan 2023",
            "days": "1 days",
            "reason": "Going to Hospital",
            "status": "Approved",
        },
        {
            "id": "13",
            "leaveType": "LOP",
            "from": "9 Jan 2023",
            "to": "10 Jan 2023",
            "days": "1 day",
            "reason": "Family problem",
            "status": "Approved",
        },
        {
            "id": "14",
            "leaveType": "Casual Leave",
            "from": "24 Feb 2023",
            "to": "25 Feb 2023",
            "days": "10 days",
            "reason": "Going to Hospital",
            "status": "Declined",
        },
        {
            "id": "16",
            "leaveType": "Paternity Leave",
            "from": "13 Jan 2023",
            "to": "14 Jan 2023",
            "days": "2 days",
            "reason": "Going to Hospital",
            "status": "Approved",
        },
        {
            "id": "17",
            "leaveType": "Casual Leave",
            "from": "13 Feb 2023",
            "to": "17 Feb 2023",
            "days": "5 days",
            "reason": "Personal",
            "status": "Declined",
        },
    ]
    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="my-6 text-2xl">Employee Leaves</h1>
                    <div className="text-lg breadcrumbs mr-2">
                        <ul>
                            <li><a>Dashboard</a></li>
                            <li><a>Employees Leaves</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center gap-7">
                    <Button className='p-2 text-white'>Add New</Button>
                </div>
            </div>

            <div className="flex justify-around gap-6 mt-4">
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <p>Other Leave</p>
                            <h2 className="card-title mx-auto">13</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <p>Remaining Leave</p>
                            <h2 className="card-title mx-auto">4</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <p>Medical Leave</p>
                            <h2 className="card-title mx-auto">3</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <p>Annual Leave</p>
                            <h2 className="card-title mx-auto">16</h2>
                        </div>
                    </div>
                </div>
            </div>
            <Container className="p-4">
                <div className="overflow-x-auto my-10 bg-white h-[68vh]">
                    <table className="table table-zebra ">
                        <thead className="bg-[#42453d]">
                            <tr>
                                <th className="text-base text-white text-center">Index</th>
                                <th className="text-base text-white text-center">Leave Type</th>
                                <th className="text-base text-white text-center">From</th>
                                <th className="text-base text-white text-center">To</th>
                                <th className="text-base text-white text-center">Days</th>
                                <th className="text-base text-white text-center">Reason</th>
                                <th className="text-base text-white text-center">Status</th>
                                <th className="text-base text-white text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaveAdmin?.map((leaveAdmin, index) => <tr key={leaveAdmin.id}>
                                <th className="text-base text-center">{index + 1}</th>
                                <td className="text-base text-center">{leaveAdmin.leaveType}</td>
                                <td className="text-base text-center">{leaveAdmin.from}</td>
                                <td className="text-base text-center">{leaveAdmin.to}</td>
                                <td className="text-base text-center">{leaveAdmin.days}</td>
                                <td className="text-base text-center">{leaveAdmin.reason}</td>
                                <td className="text-base mt-3 text-center badge badge-accent badge-outline">{leaveAdmin.status}</td>
                                <td className="text-base text-center cursor-pointer">Cancel</td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    );
};

export default LeavesEmployee;