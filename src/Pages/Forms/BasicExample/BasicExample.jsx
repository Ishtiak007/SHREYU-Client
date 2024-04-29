
import Button from '../../../Shared/Button';
import Container from '../../../Shared/Container';
import FormInput from '../../../Shared/FormInput';
import Title from '../../../Shared/Title';

const BasicExample = () => {
    return (
        <div className="flex gap-8">
            <Container className="p-4 bg-white flex-1">
                <Title heading={'BASIC EXAMPLE'}></Title>
                <div className="space-y-4 my-5">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="flex items-center gap-3">
                            <label className="label cursor-pointer">
                                <input type="checkbox" defaultChecked className="checkbox checkbox-sm" />
                            </label>
                            <p>Check me out !</p>
                        </div>
                        <div className="form-control mt-6 w-1/6">
                            <Button className="p-2 text-white">Submit</Button>
                        </div>
                    </form>
                </div>
            </Container>
            <Container className="p-4 bg-white flex-1">
                <Title heading={'HORIZONTAL FORM'}></Title>
                <div className="my-5">
                    <Title heading={'FLOATING SELECTS'}></Title>
                    <div className='space-y-4'>
                        <div className="flex flex-1 items-center justify-between">
                            <label className="label">
                                <span className="label-text text-[#4c4e60] font-bold text-sm">Email :</span>
                            </label>
                            <FormInput type="email" placeholder="email" className="input w-[65%]" required />
                        </div>
                        <div className="flex flex-1 items-center  justify-between">
                            <label className="label">
                                <span className="label-text text-[#4c4e60] font-bold text-sm">Password :</span>
                            </label>
                            <FormInput type="password" placeholder="password" className="input w-[65%]" required />
                        </div>
                        <div className="flex flex-1 items-center  justify-between">
                            <label className="label">
                                <span className="label-text text-[#4c4e60] font-bold text-sm">Re Password :</span>
                            </label>
                            <FormInput type="password" placeholder="Re password" className="input w-[65%]" required />
                        </div>
                        <div className="flex items-center gap-3 justify-center">
                            <label className="label cursor-pointer">
                                <input type="checkbox" defaultChecked className="checkbox checkbox-sm mx-auto" />
                            </label>
                            <p>Check me out !</p>
                        </div>
                        <div className="form-control mt-6">
                            <Button className='p-2 text-white w-36 mx-auto'>Submit</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BasicExample;