
import { FaEdit, FaTrash } from "react-icons/fa";
import Container from "../../Shared/Container";
import OutlineInput from "../../Shared/OutlineInput";
import CustomPolicy from "./CustomPolicy";
import { BsThreeDotsVertical } from "react-icons/bs";


const LeavesSettings = () => {
    const employees = [
        {
            "id": "1",
            "name": "John Doe",
            "day": "5",
            "photo": "https://i.ibb.co/h2NWkS0/user1.jpg"
        },
        {
            "id": "2",
            "name": "Richard Miles",
            "day": "7",
            "photo": "https://i.ibb.co/cCWB1HM/user2.jpg"
        },
        {
            "id": "3",
            "name": "John Smith",
            "day": "9",
            "photo": "https://i.ibb.co/TL3TTQw/user3.jpg"
        },
    ]

    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="my-6 text-2xl">Leave Setting</h1>
                    <div className="text-lg breadcrumbs mr-2">
                        <ul>
                            <li><a>Dashboard</a></li>
                            <li><a>Leave Setting</a></li>
                        </ul>
                    </div>
                </div>
                <CustomPolicy></CustomPolicy>
            </div>

            <Container className='bg-white'>
                <div className="p-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-xl">Annual</h1>
                        <input type="checkbox" className="toggle toggle-success" checked />
                    </div>

                    <div className="my-7 flex items-center gap-20">
                        <div>
                            <p className="text-base my-1">Days</p>
                            <OutlineInput type='text' className="p-3 w-[370px]"></OutlineInput>
                        </div>
                        <div className="mt-8">
                            <button className="px-3 py-2 rounded-md border border-gray-200 font-bold">Cancel</button>
                            <button className="px-4 py-2 rounded-md bg-[#FF902F] font-bold text-white ml-3">Save</button>
                        </div>
                    </div>
                    <div className="my-7 flex items-center gap-20">
                        <div>
                            <p className="text-base my-1">Carry forward</p>
                            <div className="flex gap-5">
                                <div className="flex items-center gap-2">
                                    <input type="radio" name="radio-1" className="radio" />
                                    No
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="radio" name="radio-1" className="radio" />
                                    Yes
                                </div>
                                <div>
                                    <label className="input input-bordered flex items-center gap-2">
                                        Max
                                        <input type="text" className="grow" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <button className="px-3 py-2 rounded-md border border-gray-200 font-bold">Cancel</button>
                            <button className="px-4 py-2 rounded-md bg-[#FF902F] font-bold text-white ml-3">Save</button>
                        </div>
                    </div>
                    <div className="my-7 flex items-center gap-20">
                        <div>
                            <p className="text-base my-1">Earned leave</p>
                            <div className="flex gap-5">
                                <div className="flex items-center gap-2">
                                    <input type="radio" name="radio-1" className="radio" />
                                    No
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="radio" name="radio-1" className="radio" />
                                    Yes
                                </div>
                                <div>
                                    <label className="input input-bordered flex items-center gap-2">
                                        Max
                                        <input type="text" className="grow" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <button className="px-3 py-2 rounded-md border border-gray-200 font-bold">Cancel</button>
                            <button className="px-4 py-2 rounded-md bg-[#FF902F] font-bold text-white ml-3">Save</button>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center">
                            <h1 className="text-xl">Custom policy</h1>
                            <CustomPolicy></CustomPolicy>
                        </div>

                        <Container className="p-4">
                            <div className="overflow-x-auto my-10 bg-white">
                                <table className="table table-zebra ">
                                    <thead className="bg-gray-200 ">
                                        <tr>
                                            <th className="text-base text-center">Name</th>
                                            <th className="text-base text-center">Day</th>
                                            <th className="text-base text-center">Assignee</th>
                                            <th className="text-base text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {employees?.map((employees) => <tr key={employees.id}>

                                            <td className="text-center">{employees.name}</td>
                                            <td className="text-center">{employees.day}</td>
                                            <th className="text-center"> <div className="avatar">
                                                <div className="mask mask-squircle w-6 h-6">
                                                    <img src={employees.photo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div></th>
                                            <td className="text-center mx-auto cursor-pointer"><div className="dropdown">
                                                <div tabIndex={0} role="button" className="mx-10"><BsThreeDotsVertical></BsThreeDotsVertical></div>
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
                </div>
            </Container>

            <Container className='bg-white my-5'>
                <div className="p-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-xl">Hospitalisation</h1>
                        <input type="checkbox" className="toggle toggle-success" checked />
                    </div>
                    <div className="my-7 flex items-center gap-20">
                        <div>
                            <p className="text-base my-1">Days</p>
                            <OutlineInput type='text' className="p-3 w-[370px]"></OutlineInput>
                        </div>
                        <div className="mt-8">
                            <button className="px-3 py-2 rounded-md border border-gray-200 font-bold">Cancel</button>
                            <button className="px-4 py-2 rounded-md bg-[#FF902F] font-bold text-white ml-3">Save</button>
                        </div>
                    </div>
                </div>
            </Container>
            <Container className='bg-white my-5'>
                <div className="p-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-xl">Maternity Assigned to female only</h1>
                        <input type="checkbox" className="toggle toggle-success" checked />
                    </div>
                    <div className="my-7 flex items-center gap-20">
                        <div>
                            <p className="text-base my-1">Days</p>
                            <OutlineInput type='text' className="p-3 w-[370px]"></OutlineInput>
                        </div>
                        <div className="mt-8">
                            <button className="px-3 py-2 rounded-md border border-gray-200 font-bold">Cancel</button>
                            <button className="px-4 py-2 rounded-md bg-[#FF902F] font-bold text-white ml-3">Save</button>
                        </div>
                    </div>
                </div>
            </Container>
            <Container className='bg-white my-5'>
                <div className="p-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-xl">Paternity Assigned to male only</h1>
                        <input type="checkbox" className="toggle toggle-success" checked />
                    </div>
                    <div className="my-7 flex items-center gap-20">
                        <div>
                            <p className="text-base my-1">Days</p>
                            <OutlineInput type='text' className="p-3 w-[370px]"></OutlineInput>
                        </div>
                        <div className="mt-8">
                            <button className="px-3 py-2 rounded-md border border-gray-200 font-bold">Cancel</button>
                            <button className="px-4 py-2 rounded-md bg-[#FF902F] font-bold text-white ml-3">Save</button>
                        </div>
                    </div>
                </div>
            </Container>

            <Container>
                <Container className='bg-white'>
                    <div className="p-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <h1 className="text-xl">LOP</h1>
                                <button className="px-3 py-1 text-white font-bold mt-4 bg-red-500 rounded-md">Delete</button>
                            </div>
                            <input type="checkbox" className="toggle toggle-success" checked />
                        </div>

                        <div className="my-7 flex items-center gap-20">
                            <div>
                                <p className="text-base my-1">Days</p>
                                <OutlineInput type='text' className="p-3 w-[370px]"></OutlineInput>
                            </div>
                            <div className="mt-8">
                                <button className="px-3 py-2 rounded-md border border-gray-200 font-bold">Cancel</button>
                                <button className="px-4 py-2 rounded-md bg-[#FF902F] font-bold text-white ml-3">Save</button>
                            </div>
                        </div>
                        <div className="my-7 flex items-center gap-20">
                            <div>
                                <p className="text-base my-1">Carry forward</p>
                                <div className="flex gap-5">
                                    <div className="flex items-center gap-2">
                                        <input type="radio" name="radio-1" className="radio" />
                                        No
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input type="radio" name="radio-1" className="radio" />
                                        Yes
                                    </div>
                                    <div>
                                        <label className="input input-bordered flex items-center gap-2">
                                            Max
                                            <input type="text" className="grow" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <button className="px-3 py-2 rounded-md border border-gray-200 font-bold">Cancel</button>
                                <button className="px-4 py-2 rounded-md bg-[#FF902F] font-bold text-white ml-3">Save</button>
                            </div>
                        </div>
                        <div className="my-7 flex items-center gap-20">
                            <div>
                                <p className="text-base my-1">Earned leave</p>
                                <div className="flex gap-5">
                                    <div className="flex items-center gap-2">
                                        <input type="radio" name="radio-1" className="radio" />
                                        No
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input type="radio" name="radio-1" className="radio" />
                                        Yes
                                    </div>
                                    <div>
                                        <label className="input input-bordered flex items-center gap-2">
                                            Max
                                            <input type="text" className="grow" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <button className="px-3 py-2 rounded-md border border-gray-200 font-bold">Cancel</button>
                                <button className="px-4 py-2 rounded-md bg-[#FF902F] font-bold text-white ml-3">Save</button>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between items-center">
                                <h1 className="text-xl">Custom policy</h1>
                                <CustomPolicy></CustomPolicy>
                            </div>
                        </div>
                        <Container className="p-4">
                            <div className="overflow-x-auto my-10 bg-white">
                                <table className="table table-zebra ">
                                    <thead className="bg-gray-200 ">
                                        <tr>
                                            <th className="text-base text-center">Name</th>
                                            <th className="text-base text-center">Day</th>
                                            <th className="text-base text-center">Assignee</th>
                                            <th className="text-base text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {employees?.map((employees) => <tr key={employees.id}>

                                            <td className="text-center">{employees.name}</td>
                                            <td className="text-center">{employees.day}</td>
                                            <th className="text-center"> <div className="avatar">
                                                <div className="mask mask-squircle w-6 h-6">
                                                    <img src={employees.photo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div></th>
                                            <td className="text-center mx-auto cursor-pointer"><div className="dropdown">
                                                <div tabIndex={0} role="button" className="mx-10"><BsThreeDotsVertical></BsThreeDotsVertical></div>
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
                </Container>
            </Container>

        </div>
    );
};

export default LeavesSettings;