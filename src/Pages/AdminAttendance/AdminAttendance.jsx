import Container from "../../Shared/Container";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";
import Button from "../../Shared/Button";
import img1 from '../../assets/employee.jpg'


const AdminAttendance = () => {
    const attendance = [
        {
            "name": "Jon Doe",
            "day1": "present",
            "day2": "present",
            "day3": "present",
            "day4": "present",
            "day5": "present",
            "day6": "present",
            "day7": "absent",
            "day8": "absent",
            "day9": "absent",
            "day10": "present",
            "day11": "present",
            "day12": "present",
            "day13": "present",
            "day14": "present",
            "day15": "absent",
            "day16": "present",
            "day17": "present",
            "day18": "present",
            "day19": "present",
            "day20": "present",
            "day21": "present",
            "day22": "absent",
            "day23": "present",
            "day24": "present",
            "day25": "present",
            "day26": "present",
            "day27": "present",
            "day28": "present",
            "day29": "present",
            "day30": "present",
        },
        {
            "name": "Bernardo Galaviz",
            "day1": "present",
            "day2": "present",
            "day3": "present",
            "day4": "present",
            "day5": "present",
            "day6": "present",
            "day7": "absent",
            "day8": "absent",
            "day9": "absent",
            "day10": "present",
            "day11": "present",
            "day12": "present",
            "day13": "present",
            "day14": "present",
            "day15": "absent",
            "day16": "present",
            "day17": "present",
            "day18": "present",
            "day19": "present",
            "day20": "present",
            "day21": "present",
            "day22": "absent",
            "day23": "present",
            "day24": "present",
            "day25": "present",
            "day26": "present",
            "day27": "present",
            "day28": "present",
            "day29": "present",
            "day30": "present",
        },
        {
            "name": "Jeffrey Warden",
            "day1": "present",
            "day2": "present",
            "day3": "present",
            "day4": "present",
            "day5": "present",
            "day6": "present",
            "day7": "absent",
            "day8": "absent",
            "day9": "absent",
            "day10": "present",
            "day11": "present",
            "day12": "present",
            "day13": "present",
            "day14": "present",
            "day15": "absent",
            "day16": "present",
            "day17": "present",
            "day18": "present",
            "day19": "present",
            "day20": "present",
            "day21": "present",
            "day22": "absent",
            "day23": "present",
            "day24": "present",
            "day25": "present",
            "day26": "present",
            "day27": "present",
            "day28": "present",
            "day29": "present",
            "day30": "present",
        },
        {
            "name": "Bernardo Galaviz",
            "day1": "present",
            "day2": "present",
            "day3": "present",
            "day4": "present",
            "day5": "present",
            "day6": "present",
            "day7": "absent",
            "day8": "absent",
            "day9": "absent",
            "day10": "present",
            "day11": "present",
            "day12": "present",
            "day13": "present",
            "day14": "present",
            "day15": "absent",
            "day16": "present",
            "day17": "present",
            "day18": "present",
            "day19": "present",
            "day20": "present",
            "day21": "present",
            "day22": "absent",
            "day23": "present",
            "day24": "present",
            "day25": "present",
            "day26": "present",
            "day27": "present",
            "day28": "present",
            "day29": "present",
            "day30": "present",
        },
        {
            "name": "Lesley Gatlin",
            "day1": "present",
            "day2": "present",
            "day3": "present",
            "day4": "present",
            "day5": "present",
            "day6": "present",
            "day7": "absent",
            "day8": "absent",
            "day9": "absent",
            "day10": "present",
            "day11": "present",
            "day12": "present",
            "day13": "present",
            "day14": "present",
            "day15": "absent",
            "day16": "present",
            "day17": "present",
            "day18": "present",
            "day19": "present",
            "day20": "present",
            "day21": "present",
            "day22": "absent",
            "day23": "present",
            "day24": "present",
            "day25": "present",
            "day26": "present",
            "day27": "present",
            "day28": "present",
            "day29": "present",
            "day30": "present",
        },
        {
            "name": "Bernardo Galaviz",
            "day1": "present",
            "day2": "present",
            "day3": "present",
            "day4": "present",
            "day5": "present",
            "day6": "present",
            "day7": "absent",
            "day8": "absent",
            "day9": "absent",
            "day10": "present",
            "day11": "present",
            "day12": "present",
            "day13": "present",
            "day14": "present",
            "day15": "absent",
            "day16": "present",
            "day17": "present",
            "day18": "present",
            "day19": "present",
            "day20": "present",
            "day21": "present",
            "day22": "absent",
            "day23": "present",
            "day24": "present",
            "day25": "present",
            "day26": "present",
            "day27": "present",
            "day28": "present",
            "day29": "present",
            "day30": "present",
        },
        {
            "name": "Jeffrey Warden",
            "day1": "present",
            "day2": "present",
            "day3": "present",
            "day4": "present",
            "day5": "present",
            "day6": "present",
            "day7": "absent",
            "day8": "absent",
            "day9": "absent",
            "day10": "present",
            "day11": "present",
            "day12": "present",
            "day13": "present",
            "day14": "present",
            "day15": "absent",
            "day16": "present",
            "day17": "present",
            "day18": "present",
            "day19": "present",
            "day20": "present",
            "day21": "present",
            "day22": "absent",
            "day23": "present",
            "day24": "present",
            "day25": "present",
            "day26": "present",
            "day27": "present",
            "day28": "present",
            "day29": "present",
            "day30": "present",
        },
        {
            "name": "Lesley Gatlin",
            "day1": "present",
            "day2": "present",
            "day3": "present",
            "day4": "present",
            "day5": "present",
            "day6": "present",
            "day7": "absent",
            "day8": "absent",
            "day9": "absent",
            "day10": "present",
            "day11": "present",
            "day12": "present",
            "day13": "present",
            "day14": "present",
            "day15": "absent",
            "day16": "present",
            "day17": "present",
            "day18": "present",
            "day19": "present",
            "day20": "present",
            "day21": "present",
            "day22": "absent",
            "day23": "present",
            "day24": "present",
            "day25": "present",
            "day26": "present",
            "day27": "present",
            "day28": "present",
            "day29": "present",
            "day30": "present",
        }

    ]
    return (
        <div>
            <div className="lg:flex items-center justify-between">
                <div>
                    <h1 className="my-6 text-2xl">Admin Attendance</h1>
                    <div className="text-base font-bold cursor-pointer breadcrumbs mr-2">
                        <ul>
                            <li><a>Dashboard</a></li>
                            <li><a>Admin Attendance</a></li>
                        </ul>
                    </div>
                </div>
            </div>



            <Container className="p-4">
                <div className="overflow-x-auto overflow-auto my-10 bg-white h-[68vh]">
                    <table className="table table-zebra ">
                        <thead className="bg-[#42453d]">
                            <tr>
                                <th className="text-base text-white text-center">Employee</th>
                                <th className="text-base text-white text-center">1</th>
                                <th className="text-base text-white text-center">2</th>
                                <th className="text-base text-white text-center">3</th>
                                <th className="text-base text-white text-center">4</th>
                                <th className="text-base text-white text-center">5</th>
                                <th className="text-base text-white text-center">6</th>
                                <th className="text-base text-white text-center">7</th>
                                <th className="text-base text-white text-center">8</th>
                                <th className="text-base text-white text-center">9</th>
                                <th className="text-base text-white text-center">10</th>
                                <th className="text-base text-white text-center">11</th>
                                <th className="text-base text-white text-center">12</th>
                                <th className="text-base text-white text-center">13</th>
                                <th className="text-base text-white text-center">14</th>
                                <th className="text-base text-white text-center">15</th>
                                <th className="text-base text-white text-center">16</th>
                                <th className="text-base text-white text-center">17</th>
                                <th className="text-base text-white text-center">18</th>
                                <th className="text-base text-white text-center">19</th>
                                <th className="text-base text-white text-center">20</th>
                                <th className="text-base text-white text-center">21</th>
                                <th className="text-base text-white text-center">22</th>
                                <th className="text-base text-white text-center">23</th>
                                <th className="text-base text-white text-center">24</th>
                                <th className="text-base text-white text-center">25</th>
                                <th className="text-base text-white text-center">26</th>
                                <th className="text-base text-white text-center">27</th>
                                <th className="text-base text-white text-center">28</th>
                                <th className="text-base text-white text-center">29</th>
                                <th className="text-base text-white text-center">30</th>
                            </tr>
                        </thead>
                        <tbody>
                            {attendance?.map((attendance) => <tr key={attendance.id}>
                                <td className="text-base text-center">
                                    {attendance.name}
                                </td>
                                <td className="text-base text-center">
                                    {attendance.day1 == "present" ?
                                        <>
                                            <FaCheck onClick={() => document.getElementById('my_modal_339845784').showModal()} className="text-base font-bold cursor-pointer text-green-400"></FaCheck>
                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                            <dialog id="my_modal_339845784" className="modal">
                                                <div className="modal-box w-11/12 max-w-5xl">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <div className="p-4">

                                                        <div className='lg:flex gap-3'>
                                                            <div className='lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl">
                                                                    <h1 className='text-xl my-3 text-center'>Timesheet 11 Mar 2023 </h1>
                                                                    <figure><img src={img1} className='h-40 w-44 rounded-full mx-auto' alt="Shoes" /></figure>
                                                                    <Button className='p-3 text-white mx-auto'>Punch Out</Button>
                                                                    <div className="card-body text-center">
                                                                        <h1 className='text-center'>Punch In at</h1>
                                                                        <p className='text-center'>Wed, 11th Mar 2023 10.00 AM</p>
                                                                        <div className='flex justify-around gap-4'>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Break 1.21 hrs</p>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Overtime 3 hrs</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className='my-8 lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl p-4">
                                                                    <h1 className='text-xl my-3 text-center'>Today Activity</h1>
                                                                    <ul className="timeline timeline-vertical">
                                                                        <li>
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                2.00 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                1.30 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                11.15 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                11.00 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                7.30 PM</div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </>
                                        :
                                        <RxCross2 className="text-base font-bold cursor-pointer text-red-500"></RxCross2>}
                                </td>
                                <td className="text-base text-center">
                                    {attendance.day2 == "present" ?
                                        <>
                                            <FaCheck onClick={() => document.getElementById('my_modal_339845784').showModal()} className="text-base font-bold cursor-pointer text-green-400"></FaCheck>
                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                            <dialog id="my_modal_339845784" className="modal">
                                                <div className="modal-box w-11/12 max-w-5xl">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <div className="p-4">

                                                        <div className='lg:flex gap-3'>
                                                            <div className='lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl">
                                                                    <h1 className='text-xl my-3 text-center'>Timesheet 11 Mar 2023 </h1>
                                                                    <figure><img src={img1} className='h-40 w-44 rounded-full mx-auto' alt="Shoes" /></figure>
                                                                    <Button className='p-3 text-white mx-auto'>Punch Out</Button>
                                                                    <div className="card-body text-center">
                                                                        <h1 className='text-center'>Punch In at</h1>
                                                                        <p className='text-center'>Wed, 11th Mar 2023 10.00 AM</p>
                                                                        <div className='flex justify-around gap-4'>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Break 1.21 hrs</p>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Overtime 3 hrs</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className='my-8 lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl p-4">
                                                                    <h1 className='text-xl my-3 text-center'>Today Activity</h1>
                                                                    <ul className="timeline timeline-vertical">
                                                                        <li>
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                2.00 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                1.30 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                11.15 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                11.00 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                7.30 PM</div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </>
                                        :
                                        <RxCross2 className="text-base font-bold cursor-pointer text-red-500"></RxCross2>}
                                </td>
                                <td className="text-base text-center">
                                    {attendance.day3 == "present" ?
                                        <>
                                            <FaCheck onClick={() => document.getElementById('my_modal_339845784').showModal()} className="text-base font-bold cursor-pointer text-green-400"></FaCheck>
                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                            <dialog id="my_modal_339845784" className="modal">
                                                <div className="modal-box w-11/12 max-w-5xl">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <div className="p-4">

                                                        <div className='lg:flex gap-3'>
                                                            <div className='lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl">
                                                                    <h1 className='text-xl my-3 text-center'>Timesheet 11 Mar 2023 </h1>
                                                                    <figure><img src={img1} className='h-40 w-44 rounded-full mx-auto' alt="Shoes" /></figure>
                                                                    <Button className='p-3 text-white mx-auto'>Punch Out</Button>
                                                                    <div className="card-body text-center">
                                                                        <h1 className='text-center'>Punch In at</h1>
                                                                        <p className='text-center'>Wed, 11th Mar 2023 10.00 AM</p>
                                                                        <div className='flex justify-around gap-4'>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Break 1.21 hrs</p>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Overtime 3 hrs</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className='my-8 lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl p-4">
                                                                    <h1 className='text-xl my-3 text-center'>Today Activity</h1>
                                                                    <ul className="timeline timeline-vertical">
                                                                        <li>
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                2.00 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                1.30 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                11.15 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                11.00 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                7.30 PM</div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </>
                                        :
                                        <RxCross2 className="text-base font-bold cursor-pointer text-red-500"></RxCross2>}
                                </td>
                                <td className="text-base text-center">
                                    {attendance.day4 == "present" ?
                                        <>
                                            <FaCheck onClick={() => document.getElementById('my_modal_339845784').showModal()} className="text-base font-bold cursor-pointer text-green-400"></FaCheck>
                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                            <dialog id="my_modal_339845784" className="modal">
                                                <div className="modal-box w-11/12 max-w-5xl">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <div className="p-4">

                                                        <div className='lg:flex gap-3'>
                                                            <div className='lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl">
                                                                    <h1 className='text-xl my-3 text-center'>Timesheet 11 Mar 2023 </h1>
                                                                    <figure><img src={img1} className='h-40 w-44 rounded-full mx-auto' alt="Shoes" /></figure>
                                                                    <Button className='p-3 text-white mx-auto'>Punch Out</Button>
                                                                    <div className="card-body text-center">
                                                                        <h1 className='text-center'>Punch In at</h1>
                                                                        <p className='text-center'>Wed, 11th Mar 2023 10.00 AM</p>
                                                                        <div className='flex justify-around gap-4'>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Break 1.21 hrs</p>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Overtime 3 hrs</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className='my-8 lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl p-4">
                                                                    <h1 className='text-xl my-3 text-center'>Today Activity</h1>
                                                                    <ul className="timeline timeline-vertical">
                                                                        <li>
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                2.00 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                1.30 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                11.15 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                11.00 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                7.30 PM</div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </>
                                        :
                                        <RxCross2 className="text-base font-bold cursor-pointer text-red-500"></RxCross2>}
                                </td>
                                <td className="text-base text-center">
                                    {attendance.day5 == "present" ?
                                        <>
                                            <FaCheck onClick={() => document.getElementById('my_modal_339845784').showModal()} className="text-base font-bold cursor-pointer text-green-400"></FaCheck>
                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                            <dialog id="my_modal_339845784" className="modal">
                                                <div className="modal-box w-11/12 max-w-5xl">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <div className="p-4">

                                                        <div className='lg:flex gap-3'>
                                                            <div className='lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl">
                                                                    <h1 className='text-xl my-3 text-center'>Timesheet 11 Mar 2023 </h1>
                                                                    <figure><img src={img1} className='h-40 w-44 rounded-full mx-auto' alt="Shoes" /></figure>
                                                                    <Button className='p-3 text-white mx-auto'>Punch Out</Button>
                                                                    <div className="card-body text-center">
                                                                        <h1 className='text-center'>Punch In at</h1>
                                                                        <p className='text-center'>Wed, 11th Mar 2023 10.00 AM</p>
                                                                        <div className='flex justify-around gap-4'>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Break 1.21 hrs</p>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Overtime 3 hrs</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className='my-8 lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl p-4">
                                                                    <h1 className='text-xl my-3 text-center'>Today Activity</h1>
                                                                    <ul className="timeline timeline-vertical">
                                                                        <li>
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                2.00 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                1.30 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                11.15 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                11.00 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                7.30 PM</div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </>
                                        :
                                        <RxCross2 className="text-base font-bold cursor-pointer text-red-500"></RxCross2>}
                                </td>
                                <td className="text-base text-center">
                                    {attendance.day6 == "present" ?
                                        <>
                                            <FaCheck onClick={() => document.getElementById('my_modal_339845784').showModal()} className="text-base font-bold cursor-pointer text-green-400"></FaCheck>
                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                            <dialog id="my_modal_339845784" className="modal">
                                                <div className="modal-box w-11/12 max-w-5xl">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <div className="p-4">

                                                        <div className='lg:flex gap-3'>
                                                            <div className='lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl">
                                                                    <h1 className='text-xl my-3 text-center'>Timesheet 11 Mar 2023 </h1>
                                                                    <figure><img src={img1} className='h-40 w-44 rounded-full mx-auto' alt="Shoes" /></figure>
                                                                    <Button className='p-3 text-white mx-auto'>Punch Out</Button>
                                                                    <div className="card-body text-center">
                                                                        <h1 className='text-center'>Punch In at</h1>
                                                                        <p className='text-center'>Wed, 11th Mar 2023 10.00 AM</p>
                                                                        <div className='flex justify-around gap-4'>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Break 1.21 hrs</p>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Overtime 3 hrs</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className='my-8 lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl p-4">
                                                                    <h1 className='text-xl my-3 text-center'>Today Activity</h1>
                                                                    <ul className="timeline timeline-vertical">
                                                                        <li>
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                2.00 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                1.30 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                11.15 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                11.00 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                7.30 PM</div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </>
                                        :
                                        <RxCross2 className="text-base font-bold cursor-pointer text-red-500"></RxCross2>}
                                </td>
                                <td className="text-base text-center">
                                    {attendance.day7 == "present" ?
                                        <>
                                            <FaCheck onClick={() => document.getElementById('my_modal_339845784').showModal()} className="text-base font-bold cursor-pointer text-green-400"></FaCheck>
                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                            <dialog id="my_modal_339845784" className="modal">
                                                <div className="modal-box w-11/12 max-w-5xl">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <div className="p-4">

                                                        <div className='lg:flex gap-3'>
                                                            <div className='lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl">
                                                                    <h1 className='text-xl my-3 text-center'>Timesheet 11 Mar 2023 </h1>
                                                                    <figure><img src={img1} className='h-40 w-44 rounded-full mx-auto' alt="Shoes" /></figure>
                                                                    <Button className='p-3 text-white mx-auto'>Punch Out</Button>
                                                                    <div className="card-body text-center">
                                                                        <h1 className='text-center'>Punch In at</h1>
                                                                        <p className='text-center'>Wed, 11th Mar 2023 10.00 AM</p>
                                                                        <div className='flex justify-around gap-4'>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Break 1.21 hrs</p>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Overtime 3 hrs</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className='my-8 lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl p-4">
                                                                    <h1 className='text-xl my-3 text-center'>Today Activity</h1>
                                                                    <ul className="timeline timeline-vertical">
                                                                        <li>
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                2.00 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                1.30 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                11.15 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                11.00 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                7.30 PM</div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </>
                                        :
                                        <RxCross2 className="text-base font-bold cursor-pointer text-red-500"></RxCross2>}
                                </td>
                                <td className="text-base text-center">
                                    {attendance.day8 == "present" ?
                                        <>
                                            <FaCheck onClick={() => document.getElementById('my_modal_339845784').showModal()} className="text-base font-bold cursor-pointer text-green-400"></FaCheck>
                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                            <dialog id="my_modal_339845784" className="modal">
                                                <div className="modal-box w-11/12 max-w-5xl">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <div className="p-4">

                                                        <div className='lg:flex gap-3'>
                                                            <div className='lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl">
                                                                    <h1 className='text-xl my-3 text-center'>Timesheet 11 Mar 2023 </h1>
                                                                    <figure><img src={img1} className='h-40 w-44 rounded-full mx-auto' alt="Shoes" /></figure>
                                                                    <Button className='p-3 text-white mx-auto'>Punch Out</Button>
                                                                    <div className="card-body text-center">
                                                                        <h1 className='text-center'>Punch In at</h1>
                                                                        <p className='text-center'>Wed, 11th Mar 2023 10.00 AM</p>
                                                                        <div className='flex justify-around gap-4'>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Break 1.21 hrs</p>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Overtime 3 hrs</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className='my-8 lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl p-4">
                                                                    <h1 className='text-xl my-3 text-center'>Today Activity</h1>
                                                                    <ul className="timeline timeline-vertical">
                                                                        <li>
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                2.00 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                1.30 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                11.15 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                11.00 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                7.30 PM</div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </>
                                        :
                                        <RxCross2 className="text-base font-bold cursor-pointer text-red-500"></RxCross2>}
                                </td>
                                <td className="text-base text-center">
                                    {attendance.day9 == "present" ?
                                        <>
                                            <FaCheck onClick={() => document.getElementById('my_modal_339845784').showModal()} className="text-base font-bold cursor-pointer text-green-400"></FaCheck>
                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                            <dialog id="my_modal_339845784" className="modal">
                                                <div className="modal-box w-11/12 max-w-5xl">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <div className="p-4">

                                                        <div className='lg:flex gap-3'>
                                                            <div className='lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl">
                                                                    <h1 className='text-xl my-3 text-center'>Timesheet 11 Mar 2023 </h1>
                                                                    <figure><img src={img1} className='h-40 w-44 rounded-full mx-auto' alt="Shoes" /></figure>
                                                                    <Button className='p-3 text-white mx-auto'>Punch Out</Button>
                                                                    <div className="card-body text-center">
                                                                        <h1 className='text-center'>Punch In at</h1>
                                                                        <p className='text-center'>Wed, 11th Mar 2023 10.00 AM</p>
                                                                        <div className='flex justify-around gap-4'>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Break 1.21 hrs</p>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Overtime 3 hrs</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className='my-8 lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl p-4">
                                                                    <h1 className='text-xl my-3 text-center'>Today Activity</h1>
                                                                    <ul className="timeline timeline-vertical">
                                                                        <li>
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                2.00 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                1.30 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                11.15 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                11.00 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                7.30 PM</div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </>
                                        :
                                        <RxCross2 className="text-base font-bold cursor-pointer text-red-500"></RxCross2>}
                                </td>
                                <td className="text-base text-center">
                                    {attendance.day10 == "present" ?
                                        <>
                                            <FaCheck onClick={() => document.getElementById('my_modal_339845784').showModal()} className="text-base font-bold cursor-pointer text-green-400"></FaCheck>
                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                            <dialog id="my_modal_339845784" className="modal">
                                                <div className="modal-box w-11/12 max-w-5xl">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <div className="p-4">

                                                        <div className='lg:flex gap-3'>
                                                            <div className='lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl">
                                                                    <h1 className='text-xl my-3 text-center'>Timesheet 11 Mar 2023 </h1>
                                                                    <figure><img src={img1} className='h-40 w-44 rounded-full mx-auto' alt="Shoes" /></figure>
                                                                    <Button className='p-3 text-white mx-auto'>Punch Out</Button>
                                                                    <div className="card-body text-center">
                                                                        <h1 className='text-center'>Punch In at</h1>
                                                                        <p className='text-center'>Wed, 11th Mar 2023 10.00 AM</p>
                                                                        <div className='flex justify-around gap-4'>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Break 1.21 hrs</p>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Overtime 3 hrs</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className='my-8 lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl p-4">
                                                                    <h1 className='text-xl my-3 text-center'>Today Activity</h1>
                                                                    <ul className="timeline timeline-vertical">
                                                                        <li>
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                2.00 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                1.30 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                11.15 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                11.00 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                7.30 PM</div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </>
                                        :
                                        <RxCross2 className="text-base font-bold cursor-pointer text-red-500"></RxCross2>}
                                </td>
                                <td className="text-base text-center">
                                    {attendance.day11 == "present" ?
                                        <>
                                            <FaCheck onClick={() => document.getElementById('my_modal_339845784').showModal()} className="text-base font-bold cursor-pointer text-green-400"></FaCheck>
                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                            <dialog id="my_modal_339845784" className="modal">
                                                <div className="modal-box w-11/12 max-w-5xl">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <div className="p-4">

                                                        <div className='lg:flex gap-3'>
                                                            <div className='lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl">
                                                                    <h1 className='text-xl my-3 text-center'>Timesheet 11 Mar 2023 </h1>
                                                                    <figure><img src={img1} className='h-40 w-44 rounded-full mx-auto' alt="Shoes" /></figure>
                                                                    <Button className='p-3 text-white mx-auto'>Punch Out</Button>
                                                                    <div className="card-body text-center">
                                                                        <h1 className='text-center'>Punch In at</h1>
                                                                        <p className='text-center'>Wed, 11th Mar 2023 10.00 AM</p>
                                                                        <div className='flex justify-around gap-4'>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Break 1.21 hrs</p>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Overtime 3 hrs</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className='my-8 lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl p-4">
                                                                    <h1 className='text-xl my-3 text-center'>Today Activity</h1>
                                                                    <ul className="timeline timeline-vertical">
                                                                        <li>
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                2.00 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                1.30 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                11.15 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                11.00 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                7.30 PM</div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </>
                                        :
                                        <RxCross2 className="text-base font-bold cursor-pointer text-red-500"></RxCross2>}
                                </td>
                                <td className="text-base text-center">
                                    {attendance.day12 == "present" ?
                                        <>
                                            <FaCheck onClick={() => document.getElementById('my_modal_339845784').showModal()} className="text-base font-bold cursor-pointer text-green-400"></FaCheck>
                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                            <dialog id="my_modal_339845784" className="modal">
                                                <div className="modal-box w-11/12 max-w-5xl">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <div className="p-4">

                                                        <div className='lg:flex gap-3'>
                                                            <div className='lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl">
                                                                    <h1 className='text-xl my-3 text-center'>Timesheet 11 Mar 2023 </h1>
                                                                    <figure><img src={img1} className='h-40 w-44 rounded-full mx-auto' alt="Shoes" /></figure>
                                                                    <Button className='p-3 text-white mx-auto'>Punch Out</Button>
                                                                    <div className="card-body text-center">
                                                                        <h1 className='text-center'>Punch In at</h1>
                                                                        <p className='text-center'>Wed, 11th Mar 2023 10.00 AM</p>
                                                                        <div className='flex justify-around gap-4'>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Break 1.21 hrs</p>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Overtime 3 hrs</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className='my-8 lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl p-4">
                                                                    <h1 className='text-xl my-3 text-center'>Today Activity</h1>
                                                                    <ul className="timeline timeline-vertical">
                                                                        <li>
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                2.00 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                1.30 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                11.15 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                11.00 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                7.30 PM</div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </>
                                        :
                                        <RxCross2 className="text-base font-bold cursor-pointer text-red-500"></RxCross2>}
                                </td>
                                <td className="text-base text-center">
                                    {attendance.day13 == "present" ?
                                        <>
                                            <FaCheck onClick={() => document.getElementById('my_modal_339845784').showModal()} className="text-base font-bold cursor-pointer text-green-400"></FaCheck>
                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                            <dialog id="my_modal_339845784" className="modal">
                                                <div className="modal-box w-11/12 max-w-5xl">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <div className="p-4">

                                                        <div className='lg:flex gap-3'>
                                                            <div className='lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl">
                                                                    <h1 className='text-xl my-3 text-center'>Timesheet 11 Mar 2023 </h1>
                                                                    <figure><img src={img1} className='h-40 w-44 rounded-full mx-auto' alt="Shoes" /></figure>
                                                                    <Button className='p-3 text-white mx-auto'>Punch Out</Button>
                                                                    <div className="card-body text-center">
                                                                        <h1 className='text-center'>Punch In at</h1>
                                                                        <p className='text-center'>Wed, 11th Mar 2023 10.00 AM</p>
                                                                        <div className='flex justify-around gap-4'>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Break 1.21 hrs</p>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Overtime 3 hrs</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className='my-8 lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl p-4">
                                                                    <h1 className='text-xl my-3 text-center'>Today Activity</h1>
                                                                    <ul className="timeline timeline-vertical">
                                                                        <li>
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                2.00 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                1.30 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                11.15 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                11.00 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                7.30 PM</div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </>
                                        :
                                        <RxCross2 className="text-base font-bold cursor-pointer text-red-500"></RxCross2>}
                                </td>
                                <td className="text-base text-center">
                                    {attendance.day14 == "present" ?
                                        <>
                                            <FaCheck onClick={() => document.getElementById('my_modal_339845784').showModal()} className="text-base font-bold cursor-pointer text-green-400"></FaCheck>
                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                            <dialog id="my_modal_339845784" className="modal">
                                                <div className="modal-box w-11/12 max-w-5xl">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <div className="p-4">

                                                        <div className='lg:flex gap-3'>
                                                            <div className='lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl">
                                                                    <h1 className='text-xl my-3 text-center'>Timesheet 11 Mar 2023 </h1>
                                                                    <figure><img src={img1} className='h-40 w-44 rounded-full mx-auto' alt="Shoes" /></figure>
                                                                    <Button className='p-3 text-white mx-auto'>Punch Out</Button>
                                                                    <div className="card-body text-center">
                                                                        <h1 className='text-center'>Punch In at</h1>
                                                                        <p className='text-center'>Wed, 11th Mar 2023 10.00 AM</p>
                                                                        <div className='flex justify-around gap-4'>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Break 1.21 hrs</p>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Overtime 3 hrs</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className='my-8 lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl p-4">
                                                                    <h1 className='text-xl my-3 text-center'>Today Activity</h1>
                                                                    <ul className="timeline timeline-vertical">
                                                                        <li>
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                2.00 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                1.30 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                11.15 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                11.00 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                7.30 PM</div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </>
                                        :
                                        <RxCross2 className="text-base font-bold cursor-pointer text-red-500"></RxCross2>}
                                </td>
                                <td className="text-base text-center">
                                    {attendance.day15 == "present" ?
                                        <>
                                            <FaCheck onClick={() => document.getElementById('my_modal_339845784').showModal()} className="text-base font-bold cursor-pointer text-green-400"></FaCheck>
                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                            <dialog id="my_modal_339845784" className="modal">
                                                <div className="modal-box w-11/12 max-w-5xl">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <div className="p-4">

                                                        <div className='lg:flex gap-3'>
                                                            <div className='lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl">
                                                                    <h1 className='text-xl my-3 text-center'>Timesheet 11 Mar 2023 </h1>
                                                                    <figure><img src={img1} className='h-40 w-44 rounded-full mx-auto' alt="Shoes" /></figure>
                                                                    <Button className='p-3 text-white mx-auto'>Punch Out</Button>
                                                                    <div className="card-body text-center">
                                                                        <h1 className='text-center'>Punch In at</h1>
                                                                        <p className='text-center'>Wed, 11th Mar 2023 10.00 AM</p>
                                                                        <div className='flex justify-around gap-4'>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Break 1.21 hrs</p>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Overtime 3 hrs</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className='my-8 lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl p-4">
                                                                    <h1 className='text-xl my-3 text-center'>Today Activity</h1>
                                                                    <ul className="timeline timeline-vertical">
                                                                        <li>
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                2.00 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                1.30 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                11.15 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                11.00 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                7.30 PM</div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </>
                                        :
                                        <RxCross2 className="text-base font-bold cursor-pointer text-red-500"></RxCross2>}
                                </td>
                                <td className="text-base text-center">
                                    {attendance.day16 == "present" ?
                                        <>
                                            <FaCheck onClick={() => document.getElementById('my_modal_339845784').showModal()} className="text-base font-bold cursor-pointer text-green-400"></FaCheck>
                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                            <dialog id="my_modal_339845784" className="modal">
                                                <div className="modal-box w-11/12 max-w-5xl">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <div className="p-4">

                                                        <div className='lg:flex gap-3'>
                                                            <div className='lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl">
                                                                    <h1 className='text-xl my-3 text-center'>Timesheet 11 Mar 2023 </h1>
                                                                    <figure><img src={img1} className='h-40 w-44 rounded-full mx-auto' alt="Shoes" /></figure>
                                                                    <Button className='p-3 text-white mx-auto'>Punch Out</Button>
                                                                    <div className="card-body text-center">
                                                                        <h1 className='text-center'>Punch In at</h1>
                                                                        <p className='text-center'>Wed, 11th Mar 2023 10.00 AM</p>
                                                                        <div className='flex justify-around gap-4'>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Break 1.21 hrs</p>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Overtime 3 hrs</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className='my-8 lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl p-4">
                                                                    <h1 className='text-xl my-3 text-center'>Today Activity</h1>
                                                                    <ul className="timeline timeline-vertical">
                                                                        <li>
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                2.00 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                1.30 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                11.15 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                11.00 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                7.30 PM</div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </>
                                        :
                                        <RxCross2 className="text-base font-bold cursor-pointer text-red-500"></RxCross2>}
                                </td>
                                <td className="text-base text-center">
                                    {attendance.day17 == "present" ?
                                        <>
                                            <FaCheck onClick={() => document.getElementById('my_modal_339845784').showModal()} className="text-base font-bold cursor-pointer text-green-400"></FaCheck>
                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                            <dialog id="my_modal_339845784" className="modal">
                                                <div className="modal-box w-11/12 max-w-5xl">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <div className="p-4">

                                                        <div className='lg:flex gap-3'>
                                                            <div className='lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl">
                                                                    <h1 className='text-xl my-3 text-center'>Timesheet 11 Mar 2023 </h1>
                                                                    <figure><img src={img1} className='h-40 w-44 rounded-full mx-auto' alt="Shoes" /></figure>
                                                                    <Button className='p-3 text-white mx-auto'>Punch Out</Button>
                                                                    <div className="card-body text-center">
                                                                        <h1 className='text-center'>Punch In at</h1>
                                                                        <p className='text-center'>Wed, 11th Mar 2023 10.00 AM</p>
                                                                        <div className='flex justify-around gap-4'>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Break 1.21 hrs</p>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Overtime 3 hrs</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className='my-8 lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl p-4">
                                                                    <h1 className='text-xl my-3 text-center'>Today Activity</h1>
                                                                    <ul className="timeline timeline-vertical">
                                                                        <li>
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                2.00 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                1.30 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                11.15 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                11.00 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                7.30 PM</div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </>
                                        :
                                        <RxCross2 className="text-base font-bold cursor-pointer text-red-500"></RxCross2>}
                                </td>
                                <td className="text-base text-center">
                                    {attendance.day18 == "present" ?
                                        <>
                                            <FaCheck onClick={() => document.getElementById('my_modal_339845784').showModal()} className="text-base font-bold cursor-pointer text-green-400"></FaCheck>
                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                            <dialog id="my_modal_339845784" className="modal">
                                                <div className="modal-box w-11/12 max-w-5xl">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <div className="p-4">

                                                        <div className='lg:flex gap-3'>
                                                            <div className='lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl">
                                                                    <h1 className='text-xl my-3 text-center'>Timesheet 11 Mar 2023 </h1>
                                                                    <figure><img src={img1} className='h-40 w-44 rounded-full mx-auto' alt="Shoes" /></figure>
                                                                    <Button className='p-3 text-white mx-auto'>Punch Out</Button>
                                                                    <div className="card-body text-center">
                                                                        <h1 className='text-center'>Punch In at</h1>
                                                                        <p className='text-center'>Wed, 11th Mar 2023 10.00 AM</p>
                                                                        <div className='flex justify-around gap-4'>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Break 1.21 hrs</p>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Overtime 3 hrs</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className='my-8 lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl p-4">
                                                                    <h1 className='text-xl my-3 text-center'>Today Activity</h1>
                                                                    <ul className="timeline timeline-vertical">
                                                                        <li>
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                2.00 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                1.30 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                11.15 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                11.00 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                7.30 PM</div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </>
                                        :
                                        <RxCross2 className="text-base font-bold cursor-pointer text-red-500"></RxCross2>}
                                </td>
                                <td className="text-base text-center">
                                    {attendance.day19 == "present" ?
                                        <>
                                            <FaCheck onClick={() => document.getElementById('my_modal_339845784').showModal()} className="text-base font-bold cursor-pointer text-green-400"></FaCheck>
                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                            <dialog id="my_modal_339845784" className="modal">
                                                <div className="modal-box w-11/12 max-w-5xl">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <div className="p-4">

                                                        <div className='lg:flex gap-3'>
                                                            <div className='lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl">
                                                                    <h1 className='text-xl my-3 text-center'>Timesheet 11 Mar 2023 </h1>
                                                                    <figure><img src={img1} className='h-40 w-44 rounded-full mx-auto' alt="Shoes" /></figure>
                                                                    <Button className='p-3 text-white mx-auto'>Punch Out</Button>
                                                                    <div className="card-body text-center">
                                                                        <h1 className='text-center'>Punch In at</h1>
                                                                        <p className='text-center'>Wed, 11th Mar 2023 10.00 AM</p>
                                                                        <div className='flex justify-around gap-4'>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Break 1.21 hrs</p>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Overtime 3 hrs</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className='my-8 lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl p-4">
                                                                    <h1 className='text-xl my-3 text-center'>Today Activity</h1>
                                                                    <ul className="timeline timeline-vertical">
                                                                        <li>
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                2.00 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                1.30 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                11.15 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                11.00 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                7.30 PM</div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </>
                                        :
                                        <RxCross2 className="text-base font-bold cursor-pointer text-red-500"></RxCross2>}
                                </td>
                                <td className="text-base text-center">
                                    {attendance.day20 == "present" ?
                                        <>
                                            <FaCheck onClick={() => document.getElementById('my_modal_339845784').showModal()} className="text-base font-bold cursor-pointer text-green-400"></FaCheck>
                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                            <dialog id="my_modal_339845784" className="modal">
                                                <div className="modal-box w-11/12 max-w-5xl">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <div className="p-4">

                                                        <div className='lg:flex gap-3'>
                                                            <div className='lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl">
                                                                    <h1 className='text-xl my-3 text-center'>Timesheet 11 Mar 2023 </h1>
                                                                    <figure><img src={img1} className='h-40 w-44 rounded-full mx-auto' alt="Shoes" /></figure>
                                                                    <Button className='p-3 text-white mx-auto'>Punch Out</Button>
                                                                    <div className="card-body text-center">
                                                                        <h1 className='text-center'>Punch In at</h1>
                                                                        <p className='text-center'>Wed, 11th Mar 2023 10.00 AM</p>
                                                                        <div className='flex justify-around gap-4'>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Break 1.21 hrs</p>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Overtime 3 hrs</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className='my-8 lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl p-4">
                                                                    <h1 className='text-xl my-3 text-center'>Today Activity</h1>
                                                                    <ul className="timeline timeline-vertical">
                                                                        <li>
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                2.00 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                1.30 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                11.15 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                11.00 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                7.30 PM</div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </>
                                        :
                                        <RxCross2 className="text-base font-bold cursor-pointer text-red-500"></RxCross2>}
                                </td>
                                <td className="text-base text-center">
                                    {attendance.day21 == "present" ?
                                        <>
                                            <FaCheck onClick={() => document.getElementById('my_modal_339845784').showModal()} className="text-base font-bold cursor-pointer text-green-400"></FaCheck>
                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                            <dialog id="my_modal_339845784" className="modal">
                                                <div className="modal-box w-11/12 max-w-5xl">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <div className="p-4">

                                                        <div className='lg:flex gap-3'>
                                                            <div className='lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl">
                                                                    <h1 className='text-xl my-3 text-center'>Timesheet 11 Mar 2023 </h1>
                                                                    <figure><img src={img1} className='h-40 w-44 rounded-full mx-auto' alt="Shoes" /></figure>
                                                                    <Button className='p-3 text-white mx-auto'>Punch Out</Button>
                                                                    <div className="card-body text-center">
                                                                        <h1 className='text-center'>Punch In at</h1>
                                                                        <p className='text-center'>Wed, 11th Mar 2023 10.00 AM</p>
                                                                        <div className='flex justify-around gap-4'>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Break 1.21 hrs</p>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Overtime 3 hrs</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className='my-8 lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl p-4">
                                                                    <h1 className='text-xl my-3 text-center'>Today Activity</h1>
                                                                    <ul className="timeline timeline-vertical">
                                                                        <li>
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                2.00 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                1.30 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                11.15 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                11.00 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                7.30 PM</div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </>
                                        :
                                        <RxCross2 className="text-base font-bold cursor-pointer text-red-500"></RxCross2>}
                                </td>
                                <td className="text-base text-center">
                                    {attendance.day22 == "present" ?
                                        <>
                                            <FaCheck onClick={() => document.getElementById('my_modal_339845784').showModal()} className="text-base font-bold cursor-pointer text-green-400"></FaCheck>
                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                            <dialog id="my_modal_339845784" className="modal">
                                                <div className="modal-box w-11/12 max-w-5xl">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <div className="p-4">

                                                        <div className='lg:flex gap-3'>
                                                            <div className='lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl">
                                                                    <h1 className='text-xl my-3 text-center'>Timesheet 11 Mar 2023 </h1>
                                                                    <figure><img src={img1} className='h-40 w-44 rounded-full mx-auto' alt="Shoes" /></figure>
                                                                    <Button className='p-3 text-white mx-auto'>Punch Out</Button>
                                                                    <div className="card-body text-center">
                                                                        <h1 className='text-center'>Punch In at</h1>
                                                                        <p className='text-center'>Wed, 11th Mar 2023 10.00 AM</p>
                                                                        <div className='flex justify-around gap-4'>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Break 1.21 hrs</p>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Overtime 3 hrs</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className='my-8 lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl p-4">
                                                                    <h1 className='text-xl my-3 text-center'>Today Activity</h1>
                                                                    <ul className="timeline timeline-vertical">
                                                                        <li>
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                2.00 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                1.30 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                11.15 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                11.00 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                7.30 PM</div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </>
                                        :
                                        <RxCross2 className="text-base font-bold cursor-pointer text-red-500"></RxCross2>}
                                </td>
                                <td className="text-base text-center">
                                    {attendance.day23 == "present" ?
                                        <>
                                            <FaCheck onClick={() => document.getElementById('my_modal_339845784').showModal()} className="text-base font-bold cursor-pointer text-green-400"></FaCheck>
                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                            <dialog id="my_modal_339845784" className="modal">
                                                <div className="modal-box w-11/12 max-w-5xl">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <div className="p-4">

                                                        <div className='lg:flex gap-3'>
                                                            <div className='lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl">
                                                                    <h1 className='text-xl my-3 text-center'>Timesheet 11 Mar 2023 </h1>
                                                                    <figure><img src={img1} className='h-40 w-44 rounded-full mx-auto' alt="Shoes" /></figure>
                                                                    <Button className='p-3 text-white mx-auto'>Punch Out</Button>
                                                                    <div className="card-body text-center">
                                                                        <h1 className='text-center'>Punch In at</h1>
                                                                        <p className='text-center'>Wed, 11th Mar 2023 10.00 AM</p>
                                                                        <div className='flex justify-around gap-4'>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Break 1.21 hrs</p>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Overtime 3 hrs</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className='my-8 lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl p-4">
                                                                    <h1 className='text-xl my-3 text-center'>Today Activity</h1>
                                                                    <ul className="timeline timeline-vertical">
                                                                        <li>
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                2.00 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                1.30 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                11.15 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                11.00 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                7.30 PM</div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </>
                                        :
                                        <RxCross2 className="text-base font-bold cursor-pointer text-red-500"></RxCross2>}
                                </td>
                                <td className="text-base text-center">
                                    {attendance.day24 == "present" ?
                                        <>
                                            <FaCheck onClick={() => document.getElementById('my_modal_339845784').showModal()} className="text-base font-bold cursor-pointer text-green-400"></FaCheck>
                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                            <dialog id="my_modal_339845784" className="modal">
                                                <div className="modal-box w-11/12 max-w-5xl">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <div className="p-4">

                                                        <div className='lg:flex gap-3'>
                                                            <div className='lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl">
                                                                    <h1 className='text-xl my-3 text-center'>Timesheet 11 Mar 2023 </h1>
                                                                    <figure><img src={img1} className='h-40 w-44 rounded-full mx-auto' alt="Shoes" /></figure>
                                                                    <Button className='p-3 text-white mx-auto'>Punch Out</Button>
                                                                    <div className="card-body text-center">
                                                                        <h1 className='text-center'>Punch In at</h1>
                                                                        <p className='text-center'>Wed, 11th Mar 2023 10.00 AM</p>
                                                                        <div className='flex justify-around gap-4'>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Break 1.21 hrs</p>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Overtime 3 hrs</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className='my-8 lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl p-4">
                                                                    <h1 className='text-xl my-3 text-center'>Today Activity</h1>
                                                                    <ul className="timeline timeline-vertical">
                                                                        <li>
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                2.00 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                1.30 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                11.15 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                11.00 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                7.30 PM</div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </>
                                        :
                                        <RxCross2 className="text-base font-bold cursor-pointer text-red-500"></RxCross2>}
                                </td>
                                <td className="text-base text-center">
                                    {attendance.day25 == "present" ?
                                        <>
                                            <FaCheck onClick={() => document.getElementById('my_modal_339845784').showModal()} className="text-base font-bold cursor-pointer text-green-400"></FaCheck>
                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                            <dialog id="my_modal_339845784" className="modal">
                                                <div className="modal-box w-11/12 max-w-5xl">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <div className="p-4">

                                                        <div className='lg:flex gap-3'>
                                                            <div className='lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl">
                                                                    <h1 className='text-xl my-3 text-center'>Timesheet 11 Mar 2023 </h1>
                                                                    <figure><img src={img1} className='h-40 w-44 rounded-full mx-auto' alt="Shoes" /></figure>
                                                                    <Button className='p-3 text-white mx-auto'>Punch Out</Button>
                                                                    <div className="card-body text-center">
                                                                        <h1 className='text-center'>Punch In at</h1>
                                                                        <p className='text-center'>Wed, 11th Mar 2023 10.00 AM</p>
                                                                        <div className='flex justify-around gap-4'>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Break 1.21 hrs</p>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Overtime 3 hrs</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className='my-8 lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl p-4">
                                                                    <h1 className='text-xl my-3 text-center'>Today Activity</h1>
                                                                    <ul className="timeline timeline-vertical">
                                                                        <li>
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                2.00 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                1.30 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                11.15 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                11.00 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                7.30 PM</div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </>
                                        :
                                        <RxCross2 className="text-base font-bold cursor-pointer text-red-500"></RxCross2>}
                                </td>
                                <td className="text-base text-center">
                                    {attendance.day26 == "present" ?
                                        <>
                                            <FaCheck onClick={() => document.getElementById('my_modal_339845784').showModal()} className="text-base font-bold cursor-pointer text-green-400"></FaCheck>
                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                            <dialog id="my_modal_339845784" className="modal">
                                                <div className="modal-box w-11/12 max-w-5xl">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <div className="p-4">

                                                        <div className='lg:flex gap-3'>
                                                            <div className='lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl">
                                                                    <h1 className='text-xl my-3 text-center'>Timesheet 11 Mar 2023 </h1>
                                                                    <figure><img src={img1} className='h-40 w-44 rounded-full mx-auto' alt="Shoes" /></figure>
                                                                    <Button className='p-3 text-white mx-auto'>Punch Out</Button>
                                                                    <div className="card-body text-center">
                                                                        <h1 className='text-center'>Punch In at</h1>
                                                                        <p className='text-center'>Wed, 11th Mar 2023 10.00 AM</p>
                                                                        <div className='flex justify-around gap-4'>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Break 1.21 hrs</p>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Overtime 3 hrs</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className='my-8 lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl p-4">
                                                                    <h1 className='text-xl my-3 text-center'>Today Activity</h1>
                                                                    <ul className="timeline timeline-vertical">
                                                                        <li>
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                2.00 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                1.30 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                11.15 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                11.00 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                7.30 PM</div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </>
                                        :
                                        <RxCross2 className="text-base font-bold cursor-pointer text-red-500"></RxCross2>}
                                </td>
                                <td className="text-base text-center">
                                    {attendance.day27 == "present" ?
                                        <>
                                            <FaCheck onClick={() => document.getElementById('my_modal_339845784').showModal()} className="text-base font-bold cursor-pointer text-green-400"></FaCheck>
                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                            <dialog id="my_modal_339845784" className="modal">
                                                <div className="modal-box w-11/12 max-w-5xl">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <div className="p-4">

                                                        <div className='lg:flex gap-3'>
                                                            <div className='lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl">
                                                                    <h1 className='text-xl my-3 text-center'>Timesheet 11 Mar 2023 </h1>
                                                                    <figure><img src={img1} className='h-40 w-44 rounded-full mx-auto' alt="Shoes" /></figure>
                                                                    <Button className='p-3 text-white mx-auto'>Punch Out</Button>
                                                                    <div className="card-body text-center">
                                                                        <h1 className='text-center'>Punch In at</h1>
                                                                        <p className='text-center'>Wed, 11th Mar 2023 10.00 AM</p>
                                                                        <div className='flex justify-around gap-4'>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Break 1.21 hrs</p>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Overtime 3 hrs</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className='my-8 lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl p-4">
                                                                    <h1 className='text-xl my-3 text-center'>Today Activity</h1>
                                                                    <ul className="timeline timeline-vertical">
                                                                        <li>
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                2.00 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                1.30 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                11.15 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                11.00 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                7.30 PM</div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </>
                                        :
                                        <RxCross2 className="text-base font-bold cursor-pointer text-red-500"></RxCross2>}
                                </td>
                                <td className="text-base text-center">
                                    {attendance.day28 == "present" ?
                                        <>
                                            <FaCheck onClick={() => document.getElementById('my_modal_339845784').showModal()} className="text-base font-bold cursor-pointer text-green-400"></FaCheck>
                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                            <dialog id="my_modal_339845784" className="modal">
                                                <div className="modal-box w-11/12 max-w-5xl">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <div className="p-4">

                                                        <div className='lg:flex gap-3'>
                                                            <div className='lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl">
                                                                    <h1 className='text-xl my-3 text-center'>Timesheet 11 Mar 2023 </h1>
                                                                    <figure><img src={img1} className='h-40 w-44 rounded-full mx-auto' alt="Shoes" /></figure>
                                                                    <Button className='p-3 text-white mx-auto'>Punch Out</Button>
                                                                    <div className="card-body text-center">
                                                                        <h1 className='text-center'>Punch In at</h1>
                                                                        <p className='text-center'>Wed, 11th Mar 2023 10.00 AM</p>
                                                                        <div className='flex justify-around gap-4'>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Break 1.21 hrs</p>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Overtime 3 hrs</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className='my-8 lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl p-4">
                                                                    <h1 className='text-xl my-3 text-center'>Today Activity</h1>
                                                                    <ul className="timeline timeline-vertical">
                                                                        <li>
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                2.00 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                1.30 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                11.15 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                11.00 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                7.30 PM</div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </>
                                        :
                                        <RxCross2 className="text-base font-bold cursor-pointer text-red-500"></RxCross2>}
                                </td>
                                <td className="text-base text-center">
                                    {attendance.day29 == "present" ?
                                        <>
                                            <FaCheck onClick={() => document.getElementById('my_modal_339845784').showModal()} className="text-base font-bold cursor-pointer text-green-400"></FaCheck>
                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                            <dialog id="my_modal_339845784" className="modal">
                                                <div className="modal-box w-11/12 max-w-5xl">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <div className="p-4">

                                                        <div className='lg:flex gap-3'>
                                                            <div className='lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl">
                                                                    <h1 className='text-xl my-3 text-center'>Timesheet 11 Mar 2023 </h1>
                                                                    <figure><img src={img1} className='h-40 w-44 rounded-full mx-auto' alt="Shoes" /></figure>
                                                                    <Button className='p-3 text-white mx-auto'>Punch Out</Button>
                                                                    <div className="card-body text-center">
                                                                        <h1 className='text-center'>Punch In at</h1>
                                                                        <p className='text-center'>Wed, 11th Mar 2023 10.00 AM</p>
                                                                        <div className='flex justify-around gap-4'>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Break 1.21 hrs</p>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Overtime 3 hrs</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className='my-8 lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl p-4">
                                                                    <h1 className='text-xl my-3 text-center'>Today Activity</h1>
                                                                    <ul className="timeline timeline-vertical">
                                                                        <li>
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                2.00 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                1.30 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                11.15 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                11.00 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                7.30 PM</div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </>
                                        :
                                        <RxCross2 className="text-base font-bold cursor-pointer text-red-500"></RxCross2>}
                                </td>
                                <td className="text-base text-center">
                                    {attendance.day30 == "present" ?
                                        <>
                                            <FaCheck onClick={() => document.getElementById('my_modal_339845784').showModal()} className="text-base font-bold cursor-pointer text-green-400"></FaCheck>
                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                            <dialog id="my_modal_339845784" className="modal">
                                                <div className="modal-box w-11/12 max-w-5xl">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <div className="p-4">

                                                        <div className='lg:flex gap-3'>
                                                            <div className='lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl">
                                                                    <h1 className='text-xl my-3 text-center'>Timesheet 11 Mar 2023 </h1>
                                                                    <figure><img src={img1} className='h-40 w-44 rounded-full mx-auto' alt="Shoes" /></figure>
                                                                    <Button className='p-3 text-white mx-auto'>Punch Out</Button>
                                                                    <div className="card-body text-center">
                                                                        <h1 className='text-center'>Punch In at</h1>
                                                                        <p className='text-center'>Wed, 11th Mar 2023 10.00 AM</p>
                                                                        <div className='flex justify-around gap-4'>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Break 1.21 hrs</p>
                                                                            <p className='bg-slate-500 bg-opacity-15 py-4'>Overtime 3 hrs</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className='my-8 lg:flex-1'>
                                                                <div className="card bg-base-100 shadow-xl p-4">
                                                                    <h1 className='text-xl my-3 text-center'>Today Activity</h1>
                                                                    <ul className="timeline timeline-vertical">
                                                                        <li>
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                2.00 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                1.30 PM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch In at

                                                                                11.15 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                11.00 AM</div>
                                                                            <hr />
                                                                        </li>
                                                                        <li>
                                                                            <hr />
                                                                            <div className="timeline-middle">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                                            </div>
                                                                            <div className="timeline-end timeline-box">Punch Out at

                                                                                7.30 PM</div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </>
                                        :
                                        <RxCross2 className="text-base font-bold cursor-pointer text-red-500"></RxCross2>}
                                </td>



                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    );
};

export default AdminAttendance;