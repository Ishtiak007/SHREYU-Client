
import FormInput from "../../../Shared/FormInput";


const HorizontalForm = () => {
    return (
        <div>
            <div className='space-y-4 mt-7'>
                <div className="flex flex-1 items-center justify-between">
                    <label className="label">
                        <span className="label-text text-[#4c4e60] font-bold text-sm">Email :</span>
                    </label>
                    <FormInput type="email" placeholder="email" className="input w-[350px]" required />
                </div>
                <div className="flex flex-1 items-center  justify-between">
                    <label className="label">
                        <span className="label-text text-[#4c4e60] font-bold text-sm">Password :</span>
                    </label>
                    <FormInput type="password" placeholder="password" className="input w-[350px]" required />
                </div>
                <div className="flex flex-1 items-center  justify-between">
                    <label className="label">
                        <span className="label-text text-[#4c4e60] font-bold text-sm">Re Password :</span>
                    </label>
                    <FormInput type="password" placeholder="Re password" className="input w-[350px]" required />
                </div>
                <div className="flex items-center gap-3 justify-center">
                    <label className="label cursor-pointer">
                        <input type="checkbox" defaultChecked className="checkbox checkbox-sm mx-auto" />
                    </label>
                    <p>Check me out !</p>
                </div>
                <div className="flex justify-center space-x-5">
                    <button className="p-2 bg-blue-600 rounded-md text-white">Submit</button>
                    <button className="p-2 bg-[#5C636A] rounded-md text-white">cancel</button>
                </div>
            </div>
        </div>
    );
};

export default HorizontalForm;