
import Button from "../../Shared/Button";
import Container from "../../Shared/Container";


const Holidays = () => {
    const holiday = [
        {
            "title": "New Year",
            "holiday": "1 Jan 2023",
            "day": "Wednesday"
        },
        {
            "title": "Good Friday",
            "holiday": "14 Apr 2023",
            "day": "Monday"
        },
        {
            "title": "May",
            "holiday": "1 May 2023",
            "day": "Sunday"
        },
        {
            "title": "Memorial",
            "holiday": "	28 May 2023",
            "day": "Wednesday"
        },
        {
            "title": "Ramzon",
            "holiday": "	26 Jun 2023",
            "day": "Wednesday"
        },
        {
            "title": "Bakrid",
            "holiday": "2 Sep 2023",
            "day": "Sunday"
        },
        {
            "title": "Deepavali",
            "holiday": "18 Oct 2023",
            "day": "Wednesday"
        },
        {
            "title": "Christmas",
            "holiday": "25 Dec 2023",
            "day": "Friday"
        },
    ]
    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="my-6 text-2xl">Holidays</h1>
                    <div className="text-lg breadcrumbs mr-2">
                        <ul>
                            <li><a>Dashboard</a></li>
                            <li><a>Holidays</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center gap-7">
                    <Button className='p-2 text-white'>Add Holiday</Button>
                </div>
            </div>
            <Container className="p-4">
                <div className="overflow-x-auto my-10 bg-white">
                    <table className="table table-zebra ">
                        <thead className="bg-[#42453d]">
                            <tr>
                                <th className="text-base text-white text-center">Index</th>
                                <th className="text-base text-white text-center">Title</th>
                                <th className="text-base text-white text-center">Holiday</th>
                                <th className="text-base text-white text-center">Day</th>
                                <th className="text-base text-white text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {holiday?.map((holiday, index) => <tr key={holiday._id}>
                                <th className="text-base text-center">{index + 1}</th>
                                <td className="text-base text-center">{holiday.title}</td>
                                <td className="text-base text-center">{holiday.holiday}</td>
                                <td className="text-base text-center">{holiday.day}</td>
                                <td className="text-base text-center mx-auto cursor-pointer">Delete</td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    );
};

export default Holidays;