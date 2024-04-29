import Button from "../../../Shared/Button";
import Container from "../../../Shared/Container";
import Title from "../../../Shared/Title";


const InlineForm = () => {
    return (
        <div>
            <Container className="p-4 bg-white flex-1">
                <Title heading={'INLINE FORM'} subheading={'Use the grid and utilities to display a series of labels, form controls, and buttons on a single horizontal row. Form controls within inline forms vary slightly from their default states. Controls only appear inline in viewports that are at least 576px wide to account for narrow viewports on mobile devices.'}></Title>
                <div className="space-y-4 my-5">
                    <form className="flex items-center space-x-7">
                        <div className="form-control">
                            <input type="email" placeholder="email" className="input input-bordered w-[200px]" required />
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="password" className="input input-bordered w-[200px]" required />
                        </div>
                        <div className="form-control">
                            <Button className='p-2 text-white'>Submit</Button>
                        </div>
                    </form>
                </div>
                <Title heading={'AUTO SIZING'} ></Title>
                <div className="space-y-4 my-5">
                    <form className="flex items-center space-x-7">
                        <div className="form-control">
                            <input type="email" placeholder="email" className="input input-bordered w-[200px]" required />
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="password" className="input input-bordered w-[200px]" required />
                        </div>
                        <div className="flex items-center gap-3">
                            <label className="label cursor-pointer">
                                <input type="checkbox" defaultChecked className="checkbox checkbox-sm" />
                            </label>
                            <p>Check me out !</p>
                        </div>
                        <div className="form-control">
                            <Button className='p-2 text-white'>Submit</Button>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default InlineForm;