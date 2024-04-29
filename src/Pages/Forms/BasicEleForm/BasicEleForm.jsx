import Container from "../../../Shared/Container";
import FormInput from "../../../Shared/FormInput";
import Title from "../../../Shared/Title";


const BasicEleForm = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="my-6 text-xl">Basic Elements</h1>
                <div className="text-lg breadcrumbs mr-2">
                    <ul>
                        <li><a>Shreyu</a></li>
                        <li><a>Tables</a></li>
                        <li>Basic Elements</li>
                    </ul>
                </div>
            </div>
            <Container className="p-4 bg-white">
                <Title heading={'INPUT TYPES'} subheading={'Most common form control, text-based input fields. Includes support for all HTML5 types: text, password, datetime, datetime-local, date, month, time, week, number, email, url, search, tel, and color.'}></Title>
                <div className="space-y-6 my-9">
                    {/* text and Default file input */}
                    <div className="flex items-center justify-between gap-10">
                        <div className="flex flex-1 items-center justify-between">
                            <label className="label">
                                <span className="label-text text-[#4c4e60] font-bold text-base">Text :</span>
                            </label>
                            <FormInput type="text" placeholder="Some text value....." className="input w-[65%]" required />
                        </div>
                        <div className="flex flex-1 items-center  justify-between">
                            <label className="label">
                                <span className="label-text text-[#4c4e60] font-bold text-base">Default File Input :</span>
                            </label>
                            <FormInput type="file" placeholder="Default File Input" className="input w-[65%]" required />
                        </div>
                    </div>
                    {/* email and date */}
                    <div className="flex items-center justify-between gap-10">
                        <div className="flex flex-1 items-center justify-between">
                            <label className="label">
                                <span className="label-text text-[#4c4e60] font-bold text-base">Email :</span>
                            </label>
                            <FormInput type="email" placeholder="email" className="input w-[65%]" required />
                        </div>
                        <div className="flex flex-1 items-center  justify-between">
                            <label className="label">
                                <span className="label-text text-[#4c4e60] font-bold text-base">Date :</span>
                            </label>
                            <FormInput type="date" placeholder="date" className="input w-[65%]" required />
                        </div>
                    </div>
                    {/* password and month */}
                    <div className="flex items-center justify-between gap-10">
                        <div className="flex flex-1 items-center justify-between">
                            <label className="label">
                                <span className="label-text text-[#4c4e60] font-bold text-base">Password :</span>
                            </label>
                            <FormInput type="password" placeholder="password" className="input w-[65%]" required />
                        </div>
                        <div className="flex flex-1 items-center  justify-between">
                            <label className="label">
                                <span className="label-text text-[#4c4e60] font-bold text-base">Month :</span>
                            </label>
                            <FormInput type="month" placeholder="month" className="input w-[65%]" required />
                        </div>
                    </div>
                    {/* placeholder and time */}
                    <div className="flex items-center justify-between gap-10">
                        <div className="flex flex-1 items-center justify-between">
                            <label className="label">
                                <span className="label-text text-[#4c4e60] font-bold text-base">Placeholder :</span>
                            </label>
                            <FormInput type="text" placeholder="placeholder" className="input w-[65%]" required />
                        </div>
                        <div className="flex flex-1 items-center  justify-between">
                            <label className="label">
                                <span className="label-text text-[#4c4e60] font-bold text-base">Time :</span>
                            </label>
                            <FormInput type="time" placeholder="time" className="input w-[65%]" required />
                        </div>
                    </div>
                    {/* placeholder and time */}
                    <div className="flex items-center justify-between gap-10">
                        <div className="flex flex-1 items-center justify-between">
                            <label className="label">
                                <span className="label-text text-[#4c4e60] font-bold text-base">Text Area :</span>
                            </label>
                            <FormInput type="text" placeholder="textarea" className="textarea h-[100px] w-[65%]" required />
                        </div>
                        <div className="flex flex-1 items-center  justify-between">
                            <label className="label">
                                <span className="label-text text-[#4c4e60] font-bold text-base">Week :</span>
                            </label>
                            <FormInput type="week" placeholder="week" className="input w-[65%]" required />
                        </div>
                    </div>
                    {/* readonly value and number */}
                    <div className="flex items-center justify-between gap-10">
                        <div className="flex flex-1 items-center justify-between">
                            <label className="label">
                                <span className="label-text text-[#4c4e60] font-bold text-base">Readonly Value :</span>
                            </label>
                            <FormInput type="text" placeholder="read only value" className="input w-[65%]" required />
                        </div>
                        <div className="flex flex-1 items-center  justify-between">
                            <label className="label">
                                <span className="label-text text-[#4c4e60] font-bold text-base">Numer :</span>
                            </label>
                            <FormInput type="number" placeholder="number" className="input w-[65%]" required />
                        </div>
                    </div>
                    {/* disabled value and url */}
                    <div className="flex items-center justify-between gap-10">
                        <div className="flex flex-1 items-center justify-between">
                            <label className="label">
                                <span className="label-text text-[#4c4e60] font-bold text-base">Disabled :</span>
                            </label>
                            <FormInput type="text" placeholder="disabled value" className="input w-[65%]" required />
                        </div>
                        <div className="flex flex-1 items-center  justify-between">
                            <label className="label">
                                <span className="label-text text-[#4c4e60] font-bold text-base">URL :</span>
                            </label>
                            <FormInput type="url" placeholder="url" className="input w-[65%]" required />
                        </div>
                    </div>
                    {/* specific  and secarh */}
                    <div className="flex items-center justify-between gap-10">
                        <div className="flex flex-1 items-center justify-between">
                            <label className="label">
                                <span className="label-text text-[#4c4e60] font-bold text-base">Specific Control :</span>
                            </label>
                            <FormInput type="text" placeholder="specific control" className="input w-[65%]" required />
                        </div>
                        <div className="flex flex-1 items-center  justify-between">
                            <label className="label">
                                <span className="label-text text-[#4c4e60] font-bold text-base">Search :</span>
                            </label>
                            <FormInput type="secarh" placeholder="search" className="input w-[65%]" required />
                        </div>
                    </div>
                    {/* helping text and tel */}
                    <div className="flex items-center justify-between gap-10">
                        <div className="flex flex-1 items-center justify-between">
                            <label className="label">
                                <span className="label-text text-[#4c4e60] font-bold text-base">Helping Text :</span>
                            </label>
                            <FormInput type="text" placeholder="helping text" className="input w-[65%]" required />
                        </div>
                        <div className="flex flex-1 items-center  justify-between">
                            <label className="label">
                                <span className="label-text text-[#4c4e60] font-bold text-base">Telephone :</span>
                            </label>
                            <FormInput type="tel" placeholder="+880" className="input w-[65%]" required />
                        </div>
                    </div>
                    {/* input select and color */}
                    <div className="flex items-center justify-between gap-10">
                        <div className="flex flex-1 items-center justify-between">
                            <label className="label">
                                <span className="label-text text-[#4c4e60] font-bold text-base">Input Select :</span>
                            </label>
                            <FormInput type="input" placeholder="helping text" className="select w-[65%]" required />
                        </div>
                        <div className="flex flex-1 items-center  justify-between">
                            <label className="label">
                                <span className="label-text text-[#4c4e60] font-bold text-base">Color :</span>
                            </label>
                            <input type="color" className="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700" id="hs-color-input" value="#2563eb" title="Choose your color"></input>
                        </div>
                    </div>

                    <div></div>
                </div>
            </Container>
        </div>
    );
};

export default BasicEleForm;