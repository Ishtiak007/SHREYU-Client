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
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import DashLink from "../Shared/DashLink";


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
                                    <Link to='/dashboard'><DashLink><FaRegCalendarAlt></FaRegCalendarAlt> Calendar </DashLink></Link>
                                </li>
                                <li>
                                    <Link to='/dashboard'><DashLink><BsChatLeftDots></BsChatLeftDots> Chat</DashLink></Link>
                                </li>
                                <li>
                                    <Link to='/dashboard'><DashLink><CiMail></CiMail> Email</DashLink></Link>
                                </li>
                                <li>
                                    <Link to='/dashboard'><DashLink><GoProjectSymlink></GoProjectSymlink> Projects</DashLink></Link>
                                </li>
                                <li>
                                    <Link to='/dashboard'><DashLink><FaTasks></FaTasks> Tasks</DashLink></Link>
                                </li>
                                <li>
                                    <Link to='/dashboard'><DashLink><FaRegFile></FaRegFile> File Manager</DashLink></Link>
                                </li>
                                <hr className="mt-2" />
                                <div className="space-y-5">
                                    <h1 className="mt-3 ml-4 mb-2">CUSTOM</h1>
                                    <li>
                                        <Link to='/dashboard'><DashLink><FaRegFileAlt></FaRegFileAlt> Pages</DashLink></Link>
                                    </li>
                                </div>
                                <hr className="mt-5" />
                                <div className="space-y-5">
                                    <h1 className="mt-3 ml-4 mb-2">COMPONENTS</h1>
                                    <li>
                                        <Link to='/dashboard'><DashLink><FaRegFileAlt></FaRegFileAlt> UI Elements</DashLink></Link>
                                    </li>
                                    <li>
                                        <Link to='/dashboard'><DashLink><FaGift></FaGift> Widgets</DashLink></Link>
                                    </li>
                                    <li>
                                        <Link to='/dashboard'><DashLink><GiProcessor></GiProcessor> Icons</DashLink></Link>
                                    </li>
                                    <li>
                                        <Link to='/dashboard'><DashLink><CiBookmark></CiBookmark> Forms<span><MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight></span></DashLink></Link>
                                    </li>
                                    <li>
                                        <Link to='/dashboard'><DashLink><IoStatsChart></IoStatsChart> Charts</DashLink></Link>
                                    </li>
                                    <li>
                                        <Link to='/dashboard/advancedTables'><DashLink><HiOutlineSquares2X2></HiOutlineSquares2X2> Tables<span><MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight></span></DashLink></Link>
                                    </li>
                                    <li>
                                        <Link to='/dashboard'><DashLink><TbMapSearch></TbMapSearch> Maps</DashLink></Link>
                                    </li>
                                    <li>
                                        <Link to='/dashboard'><DashLink><MdShare></MdShare> Menu Levels</DashLink></Link>
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
                <div className="p-7 mt-12">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;