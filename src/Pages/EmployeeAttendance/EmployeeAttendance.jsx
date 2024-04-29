
import Button from '../../Shared/Button';
import Container from '../../Shared/Container';
import img1 from '../../assets/employee.jpg'

const EmployeeAttendance = () => {
    return (
        <div>
            <div className="lg:flex items-center justify-between">
                <div>
                    <h1 className="my-6 text-2xl">Employee Attendance</h1>
                    <div className="text-lg breadcrumbs mr-2">
                        <ul>
                            <li><a>Dashboard</a></li>
                            <li><a>Employee Attendance</a></li>
                        </ul>
                    </div>
                </div>
            </div>



            <Container className="p-4">

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
            </Container>
        </div>
    );
};

export default EmployeeAttendance;