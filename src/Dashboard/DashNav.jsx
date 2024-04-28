import { FaBars, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const DashNav = () => {
    const { user, logOut } = useAuth();
    const navLinks = <>
        <li><Link className='font-semibold text-white' to='/'><FaBars></FaBars></Link></li>
        <li><Link className='font-semibold text-white' to='/whoUse'>Who Can Use</Link></li>
        <li><Link className='font-semibold text-white' to='/faq'>FA questions</Link></li>
        <li><Link className='font-semibold text-white' to='/login'>Login</Link></li>
    </>
    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Logout Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(() => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }
    return (
        <>
            <div className="navbar fixed z-10 bg-white bordertext-black">
                <div className="navbar-start">
                    {/* <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-slate-700 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div> */}
                    <div to='/' className="btn btn-ghost lg:text-xl flex items-center"><FaBars></FaBars></div>
                    <div className="dropdown dropdown-bottom">
                        <div tabIndex={0} role="button" className="flex items-center gap-3">Create New <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-left z-10">
                        <label tabIndex={0} className="m-5">
                            <div className="avatar">
                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    {
                                        user ? <div><img className="mr-3 w-[40px] rounded-full" src={user.photoURL} alt="" /></div> : <FaUser className='mx-auto text-3xl'></FaUser>
                                    }
                                </div>
                            </div>
                        </label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-red-400 rounded-box w-52">
                            <div>
                                <div className='my-5 text-xs text-white'>User Email : <br />{user ? <>{user.email}</> : <span className='text-black font-bold'>You are not Logged in</span>}</div>

                                <li><Link to='/dashboard' className='font-semibold text-gray-200 my-2 mx-auto'><button className='px-3 py-1 rounded-md bg-blue-500 hover:bg-orange-600  w-full'>Dashboard</button></Link></li>

                                <li><Link className='font-semibold text-gray-200 mx-auto' ><button onClick={handleLogOut} className='px-3 py-1 rounded-md bg-blue-500 hover:bg-orange-600 w-full'>Log Out</button></Link></li>
                            </div>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    );
};

export default DashNav;