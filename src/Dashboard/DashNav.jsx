import { FaBars, FaSearch, FaUser } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Input from "../Components/Input";
import { RiFullscreenFill } from "react-icons/ri";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { RiGlobalLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { CgWorkAlt } from "react-icons/cg";
import { FiUserPlus } from "react-icons/fi";
import { TbClockMinus } from "react-icons/tb";
import { FaRegQuestionCircle } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";


const DashNav = () => {
    const { user } = useAuth()

    return (
        <>
            <div className="flex w-full justify-between items-center h-16 fixed z-10 bg-white bordertext-black">
                <div className="navbar-start ml-7">
                    <div className="flex items-center gap-8">
                        <FaBars className="text-2xl"></FaBars>
                        <div className="dropdown dropdown-bottom">
                            <div tabIndex={0} role="">
                                <div>
                                    <h1 className="flex items-center gap-2">
                                        Create New <MdOutlineKeyboardArrowDown className="text-2xl"></MdOutlineKeyboardArrowDown></h1>
                                </div>
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-xl bg-base-100 w-52">
                                <li><a><CgWorkAlt></CgWorkAlt>New Projects</a></li>
                                <li><a><FiUserPlus></FiUserPlus>Create Users</a></li>
                                <li><a><TbClockMinus></TbClockMinus>Revenue Report</a></li>
                                <li><a><IoSettingsOutline></IoSettingsOutline>Settings</a></li>
                                <div className="divider"></div>
                                <li><a><FaRegQuestionCircle></FaRegQuestionCircle>Help & Suppor</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center gap-6">
                        <div className="w-1/5 relative">
                            <Input type="text" className="py-[7px]" placeholder="Search..." /> <FaSearch className="absolute right-2 bottom-2 text-[#d2d9dd]" ></FaSearch>
                        </div>
                        <div className="flex gap-5 mt-3">
                            <RiFullscreenFill className="text-2xl font-bold"></RiFullscreenFill>
                            <HiOutlineSquares2X2 className="text-2xl font-bold"></HiOutlineSquares2X2>
                            <RiGlobalLine className="text-2xl font-bold"></RiGlobalLine>
                            <IoMdNotificationsOutline className="text-2xl font-bold"></IoMdNotificationsOutline>
                            <div className="flex items-center">
                                <div>
                                    <label tabIndex={0} className="m-5">
                                        <div className="avatar">
                                            <div className="w-[32px] rounded-full ">
                                                {
                                                    user ? <div><img className="mr-3 w-[32px] rounded-full" src={user.photoURL} alt="" /></div> : <FaUser className='mx-auto text-2xl'></FaUser>
                                                }

                                            </div>
                                        </div>
                                    </label>
                                </div>
                                <div className="dropdown dropdown-bottom">
                                    <div tabIndex={0} role="button" className="flex items-center gap-3">
                                        {
                                            user ? <div>{user?.displayName}</div> : <></>
                                        }
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-52">
                                        <li><a>New Projects</a></li>
                                        <li><a>Create Users</a></li>
                                        <li><a>Revenue Report</a></li>
                                        <li><a>Settings</a></li>
                                        <div className="divider"></div>
                                        <li><a>Help & Suppor</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <IoSettingsOutline className="text-2xl font-bold"></IoSettingsOutline>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashNav;