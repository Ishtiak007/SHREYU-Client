
import Container from '../../Shared/Container';

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
            </Container>
        </div>
    );
};

export default EmployeeAttendance;