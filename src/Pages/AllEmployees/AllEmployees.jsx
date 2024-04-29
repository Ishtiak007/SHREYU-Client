import { FaBars } from "react-icons/fa";
import { LuGanttChartSquare } from "react-icons/lu";
import Container from "../../Shared/Container";
import Button from "../../Shared/Button";
import EmployeeCard from "./EmployeeCard";


const AllEmployees = () => {
    const employees = [
        {
            "id": "1",
            "name": "John Doe",
            "work": "Web Designer",
            "photo": "https://i.ibb.co/h2NWkS0/user1.jpg"
        },
        {
            "id": "2",
            "name": "Richard Miles",
            "work": "Web Developer",
            "photo": "https://i.ibb.co/cCWB1HM/user2.jpg"
        },
        {
            "id": "3",
            "name": "John Smith",
            "work": "Android Developer",
            "photo": "https://i.ibb.co/TL3TTQw/user3.jpg"
        },
        {
            "id": "4",
            "name": "Mike Litorus",
            "work": "IOS Developer",
            "photo": "https://i.ibb.co/GQRp4Rv/user4.jpg"
        },
        {
            "id": "5",
            "name": "Wilmer Deluna",
            "work": "Team Leader",
            "photo": "https://i.ibb.co/Fm3NXcQ/user5.jpg"
        },
        {
            "id": "6",
            "name": "Jeffrey Warden",
            "work": "Web Developer",
            "photo": "https://i.ibb.co/9qWGHvD/user6.jpg"
        },
        {
            "id": "7",
            "name": "Bernardo Galaviz",
            "work": "Web Developer",
            "photo": "https://i.ibb.co/4PPXkj0/user7.jpg"
        },
        {
            "id": "8",
            "name": "Lesley Gatlin",
            "work": "Android Developer",
            "photo": "https://i.ibb.co/8NGPhjQ/user8.jpg"
        },
        {
            "id": "9",
            "name": "Lesley Gatlin",
            "work": "Android Developer",
            "photo": "https://i.ibb.co/f8f5Srf/user9.jpg"
        },
        {
            "id": "10",
            "name": "Bernardo Galaviz",
            "work": "Android Developer",
            "photo": "https://i.ibb.co/w6LcXr7/user10.jpg"
        },
        {
            "id": "11",
            "name": "Jeffrey Warden",
            "work": "Web Developer",
            "photo": "https://i.ibb.co/9qWGHvD/user6.jpg"
        },
        {
            "id": "12",
            "name": "Bernardo Galaviz",
            "work": "Web Developer",
            "photo": "https://i.ibb.co/4PPXkj0/user7.jpg"
        }
    ]
    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="my-6 text-2xl">Employee</h1>
                    <div className="text-lg breadcrumbs mr-2">
                        <ul>
                            <li><a>Dashboard</a></li>
                            <li><a>Employee</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center gap-7">
                    <LuGanttChartSquare className="text-2xl cursor-pointer"></LuGanttChartSquare>
                    <FaBars className="text-2xl cursor-pointer"></FaBars>
                    <Button className='p-2 text-white'>Add Employee</Button>
                </div>
            </div>
            <div className="flex items-center justify-around my-8">
                <input type="text" placeholder="Employee ID" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Employee Name" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="His/Her Work" className="input input-bordered w-full max-w-xs" />
                <Button className='p-2 text-white'>Search employee</Button>
            </div>
            <Container className="p-4">
                <div className=" grid grid-cols-4 gap-5">
                    {
                        employees?.map(employees => <EmployeeCard key={employees.id} employees={employees}></EmployeeCard>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default AllEmployees;