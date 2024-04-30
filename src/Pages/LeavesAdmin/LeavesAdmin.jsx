
import Button from "../../Shared/Button";
import Container from "../../Shared/Container";
import OutlineInput from "../../Shared/OutlineInput";


const LeavesAdmin = () => {
    const leaveAdmin = [
        {
            "id": "1",
            "leaveType": "Medical Leave",
            "from": "27 Feb 2023",
            "to": "27 Feb 2023",
            "days": "1 days",
            "reason": "Family Problem",
            "status": "Approved",
            "photo": "https://i.ibb.co/h2NWkS0/user1.jpg"
        },
        {
            "id": "2",
            "leaveType": "Hospitalisation",
            "from": "15 Jan 2023",
            "to": "25 Jan 2023",
            "days": "10 days",
            "reason": "Going to Hospital",
            "status": "Approved",
            "photo": "https://i.ibb.co/cCWB1HM/user2.jpg"
        },
        {
            "id": "3",
            "leaveType": "Maternity Leave",
            "from": "5 Jan 2023",
            "to": "15 Jan 2023",
            "days": "5 days",
            "reason": "Family problem",
            "status": "Approved",
            "photo": "https://i.ibb.co/TL3TTQw/user3.jpg"
        },
        {
            "id": "4",
            "leaveType": "Casual Leave",
            "from": "10 Jan 2023",
            "to": "11 Jan 2023",
            "days": "1 days",
            "reason": "Going to Hospital",
            "status": "Approved",
            "photo": "https://i.ibb.co/GQRp4Rv/user4.jpg"
        },
        {
            "id": "5",
            "leaveType": "LOP",
            "from": "9 Jan 2023",
            "to": "10 Jan 2023",
            "days": "1 day",
            "reason": "Family problem",
            "status": "Approved",
            "photo": "https://i.ibb.co/Fm3NXcQ/user5.jpg"
        },
        {
            "id": "6",
            "leaveType": "Casual Leave",
            "from": "24 Feb 2023",
            "to": "25 Feb 2023",
            "days": "10 days",
            "reason": "Going to Hospital",
            "status": "Declined",
            "photo": "https://i.ibb.co/9qWGHvD/user6.jpg"
        },
        {
            "id": "7",
            "leaveType": "Paternity Leave",
            "from": "13 Jan 2023",
            "to": "14 Jan 2023",
            "days": "2 days",
            "reason": "Going to Hospital",
            "status": "Approved",
            "photo": "https://i.ibb.co/4PPXkj0/user7.jpg"
        },
        {
            "id": "8",
            "leaveType": "Casual Leave",
            "from": "13 Feb 2023",
            "to": "17 Feb 2023",
            "days": "5 days",
            "reason": "Personal",
            "status": "Declined",
            "photo": "https://i.ibb.co/f8f5Srf/user9.jpg"
        },
    ]
    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="my-6 text-2xl">Admin Leaves</h1>
                    <div className="text-lg breadcrumbs mr-2">
                        <ul>
                            <li><a>Dashboard</a></li>
                            <li><a>Admin Leaves</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center gap-7">
                    <div className="flex items-center gap-7 ">
                        <button onClick={() => document.getElementById('my_modal_4').showModal()} className='px-4 py-2 rounded-[18px] font-bold bg-[#FF902F] text-white'>+ Add Leave</button>

                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <dialog id="my_modal_4" className="modal ">
                            <div className="modal-box ">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <div className="m-7 space-y-8">
                                    <div>
                                        <p className="text-[17px]">Leave Type*</p>
                                        <select className="select select-bordered w-full my-2">
                                            <option className="text-base" disabled selected>Select Leave Type</option>
                                            <option className="text-base">Casual leave 12 days</option>
                                            <option className="text-base">Medical Leave</option>
                                            <option className="text-base">Lose of pay</option>
                                        </select>
                                    </div>
                                    <div>
                                        <p className="text-[17px]">From *</p>
                                        <OutlineInput type="date" placeholder="from" className="input w-[350px] my-2" required ></OutlineInput>
                                    </div>
                                    <div>
                                        <p className="text-[17px]">To *</p>
                                        <OutlineInput type="date" placeholder="To" className="input w-[350px] my-2" required ></OutlineInput>
                                    </div>
                                    <div>
                                        <p className="text-[17px]">Number of Days</p>
                                        <OutlineInput className="input w-[350px] my-2 bg-[#E9E9EA] " disabled ></OutlineInput>
                                    </div>
                                    <div>
                                        <p className="text-[17px]">Remaining Leaves</p>
                                        <OutlineInput placeholder='12' className="input w-[350px] my-2 bg-[#E9E9EA]" ></OutlineInput>
                                    </div>
                                    <div>
                                        <p className="text-[17px]">Leave Reason</p>
                                        <OutlineInput className="input w-[350px] h-32 my-2" ></OutlineInput>
                                    </div>
                                    <div className="flex justify-center">
                                        <button className='px-11 py-2 flex rounded-[18px] font-bold bg-[#FF902F] text-white'>Submit</button>
                                    </div>
                                </div>

                            </div>
                        </dialog>
                    </div>
                </div>
            </div>

            <div className="flex justify-around gap-6 mt-4">
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <p>Today Presents</p>
                            <h2 className="card-title mx-auto">5/8</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <p>Planned Leaves</p>
                            <h2 className="card-title mx-auto">9 days</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <p>Unplanned Leaves</p>
                            <h2 className="card-title mx-auto">0 days</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <p>Pending Requests</p>
                            <h2 className="card-title mx-auto">12</h2>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex justify-around mt-10 items-center">
                <div> <label className="input input-bordered flex items-center gap-2">
                    Name
                    <input type="text" className="grow" placeholder="Daisy" />
                </label>
                </div>
                <div> <label className="input input-bordered flex items-center gap-2">
                    Name
                    <input type="text" className="grow" placeholder="Daisy" />
                </label>
                </div>
                <div> <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Who shot first?</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
                </div>
                <div> <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Who shot first?</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
                </div>
                <div>
                    <Button className='p-2 text-white'>Search</Button>
                </div>
            </div>
            <Container className="p-4">
                <div className="overflow-x-auto my-10 bg-white h-[68vh]">
                    <table className="table table-zebra ">
                        <thead className="bg-[#42453d]">
                            <tr>
                                <th className="text-base text-white text-center">Employee</th>
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
                            {leaveAdmin?.map((leaveAdmin) => <tr key={leaveAdmin.id}>
                                <th className="text-base text-center"> <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={leaveAdmin.photo} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div></th>
                                <td className="text-base text-center">{leaveAdmin.leaveType}</td>
                                <td className="text-base text-center">{leaveAdmin.from}</td>
                                <td className="text-base text-center">{leaveAdmin.to}</td>
                                <td className="text-base text-center">{leaveAdmin.days}</td>
                                <td className="text-base text-center">{leaveAdmin.reason}</td>
                                <td className="text-base mt-6 text-center badge badge-accent badge-outline">{leaveAdmin.status}</td>
                                <td className="text-base text-center cursor-pointer">Cancel</td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    );
};

export default LeavesAdmin;









