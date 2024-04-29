import img1 from '../../assets/loginDashboard.jpg'
import img2 from '../../assets/dashBanner.jpg'

const FAQ = () => {
    return (
        <div className="p-5">
            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 space-y-5 p-4'>
                        <h2 className="text-2xl font-bold text-black text-center">
                            Frequently Asked Questions
                        </h2>
                        <div className="join join-vertical w-full my-20">
                            <div className="collapse collapse-arrow join-item border border-[#ececec]">
                                <input type="radio" name="my-accordion-4" checked="checked" />
                                <div className="collapse-title font-bold text[#333]">
                                    How do I register as a user on the website?
                                </div>
                                <div className="collapse-content">
                                    <p className="text-sm">
                                        A: To register as a user, click on the Sign Up or Register button on the homepage. You will be prompted to fill in your details such as your name, email address, and password. Once you submit this information, youll receive a verification email to activate your account.
                                    </p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-[#ececec]">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title font-bold text[#333]">
                                    How can I mark my attendance on the website?
                                </div>
                                <div className="collapse-content">
                                    <p className="text-sm">
                                        To mark your attendance, log in to your account and navigate to the Attendance section. Here, youll find an option to mark your attendance for the current day. Simply click on the Mark Attendance button, and your attendance will be recorded.
                                    </p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-[#ececec]">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title font-bold text[#333]">
                                    Can I manage forms through this website?
                                </div>
                                <div className="collapse-content">
                                    <p className="text-sm">
                                        Yes, you can manage forms through our website. Under the Forms tab, youll find options to create new forms, edit existing ones, and view form submissions. You can customize forms according to your requirements and gather data efficiently.
                                    </p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-[#ececec]">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title font-bold text[#333]">
                                    How do I create a new user account for an employee?
                                </div>
                                <div className="collapse-content">
                                    <p className="text-sm">
                                        As an admin, you have the authority to create new user accounts for employees. Simply log in to your admin account and navigate to the User Management section. Here, youll find an option to add a new user. Fill in the necessary details such as name, email, and role, and the new account will be created.
                                    </p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-[#ececec]">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title font-bold text[#333]">
                                    Where can I find contact details of other users or employees?
                                </div>
                                <div className="collapse-content">
                                    <p className="text-sm">
                                        You can find contact details of other users or employees under the Contacts section. Here, youll see a list of all registered users along with their contact information. You can search for specific users by name or filter by department or role.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/2 relative'>
                        <img src={img1} className="w-3/4 rounded-lg shadow-2xl border-8  border-white " />
                        <img src={img2} className='w-1/2 absolute right-5 top-1/2 rounded-lg shadow-2xl' alt="" />
                    </div>
                </div>
            </div>





        </div>
    );
};

export default FAQ;