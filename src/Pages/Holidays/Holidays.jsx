
import { FaEdit, FaTrash } from "react-icons/fa";
import Container from "../../Shared/Container";
import { BsThreeDotsVertical } from "react-icons/bs";
import OutlineInput from "../../Shared/OutlineInput";



const Holidays = () => {
    const holiday = [
        {
            "id": "1",
            "title": "New Year",
            "holiday": "1 Jan 2023",
            "day": "Wednesday"
        },
        {
            "id": "2",
            "title": "Good Friday",
            "holiday": "14 Apr 2023",
            "day": "Monday"
        },
        {
            "id": "3",
            "title": "May",
            "holiday": "1 May 2023",
            "day": "Sunday"
        },
        {
            "id": "4",
            "title": "Memorial",
            "holiday": "	28 May 2023",
            "day": "Wednesday"
        },
        {
            "id": "5",
            "title": "Ramzon",
            "holiday": "	26 Jun 2023",
            "day": "Wednesday"
        },
        {
            "id": "6",
            "title": "Bakrid",
            "holiday": "2 Sep 2023",
            "day": "Sunday"
        },
        {
            "id": "7",
            "title": "Deepavali",
            "holiday": "18 Oct 2023",
            "day": "Wednesday"
        },
        {
            "id": "8",
            "title": "Christmas",
            "holiday": "25 Dec 2023",
            "day": "Friday"
        },
    ]
    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="my-6 text-2xl">Holidays</h1>
                    <div className="text-lg breadcrumbs mr-2">
                        <ul>
                            <li><a>Dashboard</a></li>
                            <li><a>Holidays</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center gap-7">
                    <button onClick={() => document.getElementById('my_modal_3').showModal()} className='px-4 py-2 rounded-[18px] font-bold bg-[#FF902F] text-white'>+ Add Holiday</button>

                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <div className="m-7 space-y-8">
                                <div>
                                    <p className="text-sm">Holiday Name *</p>
                                    <OutlineInput type="email" placeholder="Holiday Name" className="input w-[350px] my-1" required ></OutlineInput>
                                </div>
                                <div>
                                    <p className="text-sm">Holiday *</p>
                                    <OutlineInput type="date" placeholder="Holiday" className="input w-[350px] my-1" required ></OutlineInput>
                                </div>
                                <div className="flex justify-center">
                                    <button className='px-11 py-2 flex rounded-[18px] font-bold bg-[#FF902F] text-white'>Submit</button>
                                </div>
                            </div>

                        </div>
                    </dialog>
                </div>
            </div>
            <Container className="p-4">
                <div className="overflow-x-auto my-10 bg-white">
                    <table className="table table-zebra ">
                        <thead className="bg-[#42453d]">
                            <tr>
                                <th className="text-base text-white text-center">Index</th>
                                <th className="text-base text-white text-center">Title</th>
                                <th className="text-base text-white text-center">Holiday</th>
                                <th className="text-base text-white text-center">Day</th>
                                <th className="text-base text-white text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {holiday?.map((holiday, index) => <tr key={holiday.id}>
                                <th className="text-base text-center">{index + 1}</th>
                                <td className="text-base text-center">{holiday.title}</td>
                                <td className="text-base text-center">{holiday.holiday}</td>
                                <td className="text-base text-center">{holiday.day}</td>
                                <td className="text-base text-center mx-auto cursor-pointer"><div className="dropdown">
                                    <div tabIndex={0} role="button" className="m-4"><BsThreeDotsVertical></BsThreeDotsVertical></div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-28">
                                        <li><a><FaTrash></FaTrash> Delete</a></li>
                                        <li><a><FaEdit></FaEdit> Edit</a></li>
                                    </ul>
                                </div></td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    );
};

export default Holidays;