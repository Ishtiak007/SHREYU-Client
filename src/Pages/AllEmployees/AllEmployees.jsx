import { FaBars } from "react-icons/fa";
import { LuGanttChartSquare } from "react-icons/lu";
import Container from "../../Shared/Container";
import EmployeeCard from "./EmployeeCard";
import { useForm } from "react-hook-form";


const AllEmployees = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
    }
    const employees = [
        {
            "id": "1",
            "name": "John Doe",
            "work": "Web Designer",
            "photo": "https://i.ibb.co/h2NWkS0/user1.jpg"
        },
        {
            "id": "2",
            "name": "Richard Miles",
            "work": "Web Developer",
            "photo": "https://i.ibb.co/cCWB1HM/user2.jpg"
        },
        {
            "id": "3",
            "name": "John Smith",
            "work": "Android Developer",
            "photo": "https://i.ibb.co/TL3TTQw/user3.jpg"
        },
        {
            "id": "4",
            "name": "Mike Litorus",
            "work": "IOS Developer",
            "photo": "https://i.ibb.co/GQRp4Rv/user4.jpg"
        },
        {
            "id": "5",
            "name": "Wilmer Deluna",
            "work": "Team Leader",
            "photo": "https://i.ibb.co/Fm3NXcQ/user5.jpg"
        },
        {
            "id": "6",
            "name": "Jeffrey Warden",
            "work": "Web Developer",
            "photo": "https://i.ibb.co/9qWGHvD/user6.jpg"
        },
        {
            "id": "7",
            "name": "Bernardo Galaviz",
            "work": "Web Developer",
            "photo": "https://i.ibb.co/4PPXkj0/user7.jpg"
        },
        {
            "id": "8",
            "name": "Lesley Gatlin",
            "work": "Android Developer",
            "photo": "https://i.ibb.co/8NGPhjQ/user8.jpg"
        },
        {
            "id": "9",
            "name": "Lesley Gatlin",
            "work": "Android Developer",
            "photo": "https://i.ibb.co/f8f5Srf/user9.jpg"
        },
        {
            "id": "10",
            "name": "Bernardo Galaviz",
            "work": "Android Developer",
            "photo": "https://i.ibb.co/w6LcXr7/user10.jpg"
        },
        {
            "id": "11",
            "name": "Jeffrey Warden",
            "work": "Web Developer",
            "photo": "https://i.ibb.co/9qWGHvD/user6.jpg"
        },
        {
            "id": "12",
            "name": "Bernardo Galaviz",
            "work": "Web Developer",
            "photo": "https://i.ibb.co/4PPXkj0/user7.jpg"
        }
    ]
    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="my-6 text-2xl">Employee</h1>
                    <div className="text-lg breadcrumbs mr-2">
                        <ul>
                            <li><a>Dashboard</a></li>
                            <li><a>Employee</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center gap-7">
                    <LuGanttChartSquare className="text-2xl cursor-pointer"></LuGanttChartSquare>
                    <FaBars className="text-2xl cursor-pointer hover:text-[#FF902F]"></FaBars>
                    <div>
                        <button onClick={() => document.getElementById('my_modal_9').showModal()} className="p-2 w-36 bg-[#FF902F] text-white rounded-3xl">Add Employee</button>
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <dialog id="my_modal_9" className="modal">
                            <div className="modal-box w-11/12 max-w-5xl">
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button, it will close the modal */}
                                        <button className="btn">X</button>
                                    </form>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="flex gap-6">
                                        <div className="form-control w-full my-6">
                                            <label className="label">
                                                <span className="label-text font-bold">First Name</span>
                                            </label>
                                            <input
                                                {...register("firstName", { required: true })}
                                                defaultValue={"Jhon"}
                                                name="firstName"
                                                type="text"
                                                placeholder="First Name"
                                                className="input input-bordered w-full " />
                                            {errors.firstName && <span className='text-red-500'>This First Name field is required</span>}
                                        </div>

                                        <div className="form-control w-full my-6">
                                            <label className="label">
                                                <span className="label-text font-bold">Last Name</span>
                                            </label>
                                            <input
                                                {...register("lastName", { required: true })}
                                                defaultValue={"Doe"}
                                                name="lastName"
                                                type="text"
                                                placeholder="Last Name"
                                                className="input input-bordered w-full " />
                                            {errors.lastName && <span className='text-red-500'>This lastName field is required</span>}
                                        </div>
                                    </div>




                                    <div className=" flex gap-6">
                                        <div className="form-control w-full my-6">
                                            <label className="label">
                                                <span className="label-text font-bold">User Name</span>
                                            </label>
                                            <input
                                                {...register("userName", { required: true })}
                                                name="userName"
                                                type="text"
                                                placeholder="User Name"
                                                className="input input-bordered w-full " />
                                            {errors.userName && <span className='text-red-500'>This userName field is required</span>}
                                        </div>

                                        <div className="form-control w-full my-6">
                                            <label className="label">
                                                <span className="label-text font-bold">Email</span>
                                            </label>
                                            <input
                                                {...register("email", { required: true })}
                                                name="email"
                                                type="email"
                                                placeholder="email"
                                                className="input input-bordered w-full " />
                                            {errors.email && <span className='text-red-500'>This email field is required</span>}
                                        </div>
                                    </div>



                                    <div className=" flex gap-6">
                                        <div className="form-control w-full my-6">
                                            <label className="label">
                                                <span className="label-text font-bold">Password</span>
                                            </label>
                                            <input
                                                {...register("password", { required: true })}
                                                name="password"
                                                type="password"
                                                placeholder="password"
                                                className="input input-bordered w-full " />
                                            {errors.password && <span className='text-red-500'>This password field is required</span>}
                                        </div>


                                        <div className="form-control w-full my-6">
                                            <label className="label">
                                                <span className="label-text font-bold">Confirm Password</span>
                                            </label>
                                            <input
                                                {...register("confirmPassword", { required: true })}
                                                name="confirmPassword"
                                                type="password"
                                                placeholder="confirm Password"
                                                className="input input-bordered w-full " />
                                            {errors.confirmPassword && <span className='text-red-500'>This confirmPassword field is required</span>}
                                        </div>

                                    </div>


                                    <div className=" flex gap-6">
                                        <div className="form-control w-full my-6">
                                            <label className="label">
                                                <span className="label-text font-bold">Employee ID</span>
                                            </label>
                                            <input
                                                {...register("employeeID", { required: true })}
                                                name="employeeID"
                                                type="text"
                                                placeholder="employeeID"
                                                className="input input-bordered w-full " />
                                            {errors.employeeID && <span className='text-red-500'>This employeeID field is required</span>}
                                        </div>


                                        <div className="form-control w-full my-6">
                                            <label className="label">
                                                <span className="label-text font-bold">Joining Date</span>
                                            </label>
                                            <input
                                                {...register("joiningDate", { required: true })}
                                                name="joiningDate"
                                                type="date"
                                                placeholder="joiningDate"
                                                className="input input-bordered w-full " />
                                            {errors.joiningDate && <span className='text-red-500'>This joiningDate field is required</span>}
                                        </div>
                                    </div>

                                    <div className=" flex gap-6">
                                        <div className="form-control w-full my-6">
                                            <label className="label">
                                                <span className="label-text font-bold">Phone Number</span>
                                            </label>
                                            <input
                                                {...register("phoneNumber", { required: true })}
                                                name="phoneNumber"
                                                type="number"
                                                placeholder="phoneNumber"
                                                className="input input-bordered w-full " />
                                            {errors.phoneNumber && <span className='text-red-500'>This phoneNumber field is required</span>}
                                        </div>


                                        <div className="form-control w-full my-6">
                                            <label className="label">
                                                <span className="label-text font-bold">company</span>
                                            </label>
                                            <select defaultValue='default' {...register("company", { required: true })}
                                                className="select select-bordered w-full">
                                                <option value="default" disabled>Select a company</option>
                                                <option value={'globalTecnology'}>Global Tecnology</option>
                                                <option value={'techInfo'}>tech info</option>
                                            </select>
                                            {errors.company && <span className='text-red-500'>This company field is required</span>}
                                        </div>
                                    </div>

                                    <div className=" flex gap-6">
                                        <div className="form-control w-full my-6">
                                            <label className="label">
                                                <span className="label-text font-bold">Department</span>
                                            </label>
                                            <select defaultValue='default' {...register("department", { required: true })}
                                                className="select select-bordered w-full">
                                                <option value="default" disabled>Select a company</option>
                                                <option value={'frontendWeb'}>Frontend web</option>
                                                <option value={'backendweb'}>Backend Web</option>
                                                <option value={'fullStack'}>Full stack</option>
                                            </select>
                                            {errors.department && <span className='text-red-500'>This department field is required</span>}
                                        </div>


                                        <div className="form-control w-full my-6">
                                            <label className="label">
                                                <span className="label-text font-bold">Designation</span>
                                            </label>
                                            <select defaultValue='default' {...register("designation", { required: true })}
                                                className="select select-bordered w-full">
                                                <option value="default" disabled>Select a company</option>
                                                <option value={'frontendWeb'}>Frontend web</option>
                                                <option value={'backendweb'}>Backend Web</option>
                                                <option value={'fullStack'}>Full stack</option>
                                            </select>
                                            {errors.designation && <span className='text-red-500'>This designation field is required</span>}
                                        </div>
                                    </div>





                                    <div className=" text-center my-7">
                                        <button className="py-3 px-12 font-bold bg-[#ff9b44] rounded-[25px] text-white">Submit</button>
                                    </div>
                                </form>

                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
            <div className="lg:grid grid-cols-4 gap-5 my-3">
                <input type="text" placeholder="Employee ID" className="input input-bordered w-[270px]" />
                <input type="text" placeholder="Employee Name" className="input input-bordered w-[270px]" />
                <select className="select select-bordered w-[270px]">
                    <option className="font-bold text-base" disabled selected>Designation</option>
                    <option className="font-bold">Jon doe</option>
                    <option className="font-bold">Greedo</option>
                    <option className="font-bold">John Smith</option>
                </select>
                <button className='p-[10px] bg-[#36BA45] rounded-md w-[270px] text-white'>Search employee</button>
            </div>
            <Container>
                <div className="lg:grid grid-cols-4 gap-5">
                    {
                        employees?.map(employees => <EmployeeCard key={employees.id} employees={employees}></EmployeeCard>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default AllEmployees;