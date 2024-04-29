import Container from "../../../Shared/Container";
import Title from "../../../Shared/Title";


const Selectmenu = () => {
    return (
        <div className="flex gap-8">
            <Container className="p-4 bg-white flex-1">
                <Title heading={'SELECT MENU'} subheading={'Custom <select> menus need only a custom class, .form-select to trigger the custom styles.'}></Title>
                <div className="space-y-4 my-5">
                    <div>
                        <select className="select select-bordered w-full">
                            <option disabled selected>Open This Menu</option>
                            <option>One</option>
                            <option>Two</option>
                            <option>Three</option>
                        </select>
                    </div>
                    <div>
                        <select className="select select-bordered w-full">
                            <option disabled selected>Open This Menu</option>
                            <option>One</option>
                            <option>Two</option>
                            <option>Three</option>
                        </select>
                    </div>
                    <div>
                        <select className="select select-bordered w-full">
                            <option disabled selected>Open This Menu</option>
                            <option>One</option>
                            <option>Two</option>
                            <option>Three</option>
                        </select>
                    </div>
                </div>
                <Title heading={'SWITCHES'} subheading={'A switch has the markup of a custom checkbox but uses the .form-switch class to render a toggle switch. Switches also support the disabled attribute.'}></Title>

                <div>
                    <div className="flex items-center gap-4 my-7">
                        <input type="checkbox" className="toggle toggle-primary" />
                        <p>Toggle this switch element</p>
                    </div>
                    <div className="flex items-center gap-4 my-3">
                        <input type="checkbox" className="toggle toggle-primary" disabled />
                        <p>Disabled switch element</p>
                    </div>
                </div>
            </Container>
            <Container className="p-4 bg-white flex-1">
                <Title heading={'CHECKBOXES'}></Title>
                <div>
                    <div className="flex items-center gap-3">
                        <label className="label cursor-pointer">
                            <input type="checkbox" defaultChecked className="checkbox checkbox-primary checkbox-sm" />
                        </label>
                        <p>Check this custom checkbox</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <label className="label cursor-pointer">
                            <input type="checkbox" defaultChecked className="checkbox checkbox-primary checkbox-sm" />
                        </label>
                        <p>Check this custom checkbox</p>
                    </div>
                </div>
                <div className="my-5">
                    <Title heading={'RADIOS'}></Title>
                    <div className="flex items-center gap-3">
                        <label className="label cursor-pointer">
                            <input type="checkbox" defaultChecked className="checkbox checkbox-accent checkbox-sm" />
                        </label>
                        <p>Toggle this custom radio</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <label className="label cursor-pointer">
                            <input type="checkbox" defaultChecked className="checkbox checkbox-accent checkbox-sm" />
                        </label>
                        <p>Or toggle this other custom radio</p>
                    </div>
                </div>
                <div className="my-5">
                    <Title heading={'DISABLED'}></Title>
                    <div className="flex items-center gap-3">
                        <label className="label cursor-pointer">
                            <input type="checkbox" defaultChecked className="checkbox checkbox-sm" disabled />
                        </label>
                        <p>Check this custom checkbox</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <label className="label cursor-pointer">
                            <input type="checkbox" defaultChecked className="checkbox checkbox-sm" disabled />
                        </label>
                        <p>Toggle this custom radio</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Selectmenu;