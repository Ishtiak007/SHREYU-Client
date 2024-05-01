import { useForm } from "react-hook-form";
import { IoPlayForward } from "react-icons/io5";
import { IoPlayBack } from "react-icons/io5";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";


const LeavesSettings = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
    }
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
                <div className="flex items-center gap-7">
                    <div>
                        <button onClick={() => document.getElementById('my_modal_9').showModal()} className="p-2 w-36 bg-[#FF902F] text-white rounded-3xl">Add Employee</button>
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <dialog id="my_modal_9" className="modal">
                            <div className="modal-box w-11/12 max-w-5xl">
                                <div className="modal-action flex justify-between">
                                    <div><h1 className="text-xl font-semibold">Add Custom Policy</h1></div>
                                    <form method="dialog flex">
                                        {/* if there is a button, it will close the modal */}
                                        <button className="btn rounded-full">X</button>
                                    </form>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="gap-6">
                                        <div className="form-control w-full my-6">
                                            <label className="label">
                                                <span className="label-text font-bold">Policy Name*</span>
                                            </label>
                                            <input
                                                {...register("policyName", { required: true })}
                                                name="policyName"
                                                type="text"
                                                className="input input-bordered w-full " />
                                            {errors.policyName && <span className='text-red-500'>This policyName field is required</span>}
                                        </div>

                                        <div className="form-control w-full my-6">
                                            <label className="label">
                                                <span className="label-text font-bold">Days*</span>
                                            </label>
                                            <input
                                                {...register("days", { required: true })}
                                                name="days"
                                                type="text"
                                                placeholder="days"
                                                className="input input-bordered w-full " />
                                            {errors.days && <span className='text-red-500'>This days field is required</span>}
                                        </div>
                                    </div>

                                    <div className="bg-[#f9f9f9] p-4">
                                        <div className=" flex justify-between">
                                            <ul className="menu bg-white w-72 border overflow-x-auto overflow-scroll">
                                                <li className="menu-title">Add employee</li>
                                                <li><a>Bernardo Galaviz</a></li>
                                                <li><a>Jeffrey Warden</a></li>
                                                <li><a>John Doe</a></li>
                                                <li><a>Mike Litorus</a></li>
                                            </ul>
                                            <div className="space-y-3">
                                                <IoPlayForward className="text-2xl w-24 h-9 rounded-md border bg-white"></IoPlayForward>
                                                <MdArrowForwardIos className="text-2xl w-24 h-9 rounded-md border bg-white"></MdArrowForwardIos>
                                                <MdArrowBackIosNew className="text-2xl w-24 h-9 rounded-md border bg-white"></MdArrowBackIosNew>
                                                <IoPlayBack className="text-2xl w-24 h-9 rounded-md border bg-white"></IoPlayBack>
                                            </div>
                                            <ul className="menu bg-white w-72 border overflow-x-auto overflow-scroll">
                                            </ul>
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

        </div>
    );
};

export default LeavesSettings;