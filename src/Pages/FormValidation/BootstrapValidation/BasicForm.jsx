import { useForm } from "react-hook-form";
import Button from "../../../Shared/Button";


const BasicForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
    }
    return (
        <div className="space-y-4 my-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="gap-6">
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text font-bold">User Name</span>
                        </label>
                        <input
                            {...register("userNmae", { required: true })}
                            name="userNmae"
                            type="text"
                            placeholder="User Name"
                            className="input input-bordered w-full " />
                        {errors.userNmae && <span className='text-red-500'>This userNmae field is required</span>}
                    </div>

                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text font-bold">Email Address</span>
                        </label>
                        <input
                            {...register("email", { required: true })}
                            name="email"
                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full " />
                        {errors.email && <span className='text-red-500'>This email field is required</span>}
                    </div>
                </div>




                <div className="gap-6">
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
                        {errors.userName && <span className='text-red-500'>This password field is required</span>}
                    </div>

                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text font-bold">Confirm Password</span>
                        </label>
                        <input
                            {...register("password", { required: true })}
                            name="password"
                            type="password"
                            placeholder="confirm password"
                            className="input input-bordered w-full " />
                        {errors.userName && <span className='text-red-500'>This confirm field is required</span>}
                    </div>
                </div>

                <div className="flex gap-3 items-center my-5">
                    <label className="label cursor-pointer">
                        <input type="checkbox" defaultChecked className="checkbox checkbox-sm mx-auto" />
                    </label>
                    <p>Remember Me</p>
                </div>
                <div className="flex justify-end space-x-5">
                    <Button className="p-2 text-white">Submit</Button>
                    <Button className="p-2 text-white bg-orange-500">cancel</Button>
                </div>
            </form>
        </div>
    );
};

export default BasicForm;