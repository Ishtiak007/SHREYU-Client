import { useForm } from "react-hook-form";


const BootstrapNormal = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
    }
    return (
        <div className="space-y-4 my-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" gap-6">
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




                <div className=" gap-6">
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
                            <span className="label-text font-bold">City Name</span>
                        </label>
                        <input
                            {...register("city", { required: true })}
                            name="city"
                            type="text"
                            placeholder="City Name"
                            className="input input-bordered w-full " />
                        {errors.city && <span className='text-red-500'>This city field is required</span>}
                    </div>
                </div>



                <div className=" gap-6">
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text font-bold">State</span>
                        </label>
                        <input
                            {...register("state", { required: true })}
                            name="state"
                            type="text"
                            placeholder="state"
                            className="input input-bordered w-full " />
                        {errors.state && <span className='text-red-500'>This state field is required</span>}
                    </div>


                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text font-bold">ZIP</span>
                        </label>
                        <input
                            {...register("zip", { required: true })}
                            name="zip"
                            type="text"
                            placeholder="state"
                            className="input input-bordered w-full " />
                        {errors.zip && <span className='text-red-500'>This zip field is required</span>}
                    </div>

                </div>
                <div className="flex items-center gap-3 my-5">
                    <label className="label cursor-pointer">
                        <input type="checkbox" className="checkbox checkbox-sm mx-auto" />
                    </label>
                    <p>Agree to terms and conditions</p>
                </div>
                <div>
                    <button className="p-2 bg-blue-600 rounded-md text-white">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default BootstrapNormal;