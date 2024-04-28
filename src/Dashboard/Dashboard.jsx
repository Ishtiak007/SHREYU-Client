import { NavLink, Outlet } from "react-router-dom";
import DashNav from "./DashNav";


const Dashboard = () => {
    const isAdmin = true
    return (
        <div className="flex">
            {/* bashboard sidebar */}
            <div className="w-64 h-screen overflow-y-scroll no-scrollbar bg-white border">
                <ul className="menu">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to='/dashboard/adminHome'> Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/addItems'> Add Item</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageItems'>Manage Items</NavLink>
                            </li>

                            <li>
                                <NavLink to='/dashboard/bookings'> Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/users'> All User</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/users'> All User</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/users'> All User</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/users'> All User</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/users'> All User</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/users'> All User</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/users'> All User</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/users'> All User</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/users'> All User</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/users'> All User</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/users'> All User</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/users'> All User</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/users'> All User</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/users'> All User</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/users'> All User</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/users'> All User</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/users'> All User</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/users'> All User</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/users'> All User</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/users'> All User</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/users'> All User</NavLink>
                            </li>
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



                    {/* common dashboard */}

                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'> Order</NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu'> Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'> Contact</NavLink>
                    </li>
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