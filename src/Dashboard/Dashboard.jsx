import { Link, NavLink, Outlet } from "react-router-dom";
import DashNav from "./DashNav";
import logo from '../assets/logoDashboard.png'
import { FaHome } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsChatLeftDots } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { GoProjectSymlink } from "react-icons/go";
import { FaTasks } from "react-icons/fa";
import { FaRegFile } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { GiProcessor } from "react-icons/gi";
import { CiBookmark } from "react-icons/ci";
import { IoStatsChart } from "react-icons/io5";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { TbMapSearch } from "react-icons/tb";
import { MdShare } from "react-icons/md";


const Dashboard = () => {
    const isAdmin = true
    return (
        <div className="flex">
            {/* bashboard sidebar */}
            <div className="w-64 h-screen overflow-y-scroll no-scrollbar bg-white border">
                <ul className="">
                    {
                        isAdmin ? <>
                            <div>
                                <img src={logo} className="w-[100px] ml-3 my-10" alt="Logo" />
                            </div>
                            <li className="mt-6">
                                <Link className="flex items-center gap-2 ml-4 hover:text-blue-500 focus:outline-none  focus:text-violet-500" to='/dashboard'><FaHome></FaHome> Dashboard</Link>
                            </li>
                            <hr className="mt-5" />
                            <div className="space-y-6">
                                <h1 className="mt-3 ml-4 mb-2">APPS</h1>
                                <li>
                                    <Link className="flex items-center gap-2 ml-4 hover:text-blue-500 focus:outline-none  focus:text-violet-500" to='/dashboard/adminHome'><FaRegCalendarAlt></FaRegCalendarAlt> Calendar</Link>
                                </li>
                                <li>
                                    <Link className="flex items-center gap-2 ml-4 hover:text-blue-500 focus:outline-none  focus:text-violet-500" to='/dashboard/adminHome'><BsChatLeftDots></BsChatLeftDots> Chat</Link>
                                </li>
                                <li className="flex">
                                    <Link className="flex items-center gap-2 ml-4 hover:text-blue-500 focus:outline-none  focus:text-violet-500" to='/dashboard/adminHome'><CiMail></CiMail> Email</Link >
                                </li>
                                <li>
                                    <Link className="flex items-center gap-2 ml-4 hover:text-blue-500 focus:outline-none  focus:text-violet-500" to='/dashboard/adminHome'><GoProjectSymlink></GoProjectSymlink> Projects</Link >
                                </li>
                                <li>
                                    <Link className="flex items-center gap-2 ml-4 hover:text-blue-500 focus:outline-none  focus:text-violet-500" to='/dashboard/adminHome'><FaTasks></FaTasks> Tasks</Link >
                                </li>
                                <li>
                                    <Link className="flex items-center gap-2 ml-4 hover:text-blue-500 focus:outline-none  focus:text-violet-500" to='/dashboard/adminHome'><FaRegFile></FaRegFile> File Manager</Link >
                                </li>
                                <hr className="mt-2" />
                                <div className="space-y-5">
                                    <h1 className="mt-3 ml-4 mb-2">CUSTOM</h1>
                                    <li>
                                        <Link className="flex items-center gap-2 ml-4 hover:text-blue-500 focus:outline-none  focus:text-violet-500" to='/dashboard/adminHome'><FaRegFileAlt></FaRegFileAlt> Pages</Link>
                                    </li>
                                </div>
                                <hr className="mt-5" />
                                <div className="space-y-5">
                                    <h1 className="mt-3 ml-4 mb-2">COMPONENTS</h1>
                                    <li>
                                        <Link className="flex items-center gap-2 ml-4 hover:text-blue-500 focus:outline-none  focus:text-violet-500" to='/dashboard/adminHome'><FaRegFileAlt></FaRegFileAlt> UI Elements</Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 ml-4 hover:text-blue-500 focus:outline-none  focus:text-violet-500" to='/dashboard/adminHome'><FaGift></FaGift> Widgets</Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 ml-4 hover:text-blue-500 focus:outline-none  focus:text-violet-500" to='/dashboard/adminHome'><GiProcessor></GiProcessor> Icons</Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 ml-4 hover:text-blue-500 focus:outline-none  focus:text-violet-500" to='/dashboard/adminHome'><CiBookmark></CiBookmark> Forms</Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 ml-4 hover:text-blue-500 focus:outline-none  focus:text-violet-500" to='/dashboard/adminHome'><IoStatsChart></IoStatsChart> Charts</Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 ml-4 hover:text-blue-500 focus:outline-none  focus:text-violet-500" to='/dashboard/adminHome'><HiOutlineSquares2X2></HiOutlineSquares2X2> Tables</Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 ml-4 hover:text-blue-500 focus:outline-none  focus:text-violet-500" to='/dashboard/adminHome'><TbMapSearch></TbMapSearch> Maps</Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 ml-4 hover:text-blue-500 focus:outline-none  focus:text-violet-500 mb-16" to='/dashboard/adminHome'><MdShare></MdShare> Menu Levels</Link>
                                    </li>
                                </div>
                            </div>
                        </> :
                            <>
                                <li>
                                    <NavLink to='/dashboard/history'> Not Fot History</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/cart'> My Cart </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/userHome'> User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/review'> Add Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/paymentHistory'> Real Payment History</NavLink>
                                </li>
                            </>
                    }
                </ul>
            </div>
            {/* dahsboard content */}
            <div className="flex-1 w-full h-screen overflow-y-scroll no-scrollbar bg-[#f3f4f7] border">
                <DashNav></DashNav>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;