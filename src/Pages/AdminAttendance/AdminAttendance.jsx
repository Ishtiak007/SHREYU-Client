import Container from "../../Shared/Container";


const AdminAttendance = () => {
    const attendance = [
        {
            "name": "Jon Doe",
            "day1": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day2": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day3": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day4": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day5": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day6": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day7": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day8": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day9": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day10": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day11": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day12": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day13": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day14": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day15": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
        },
        {
            "name": "Bernardo Galaviz",
            "day1": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day2": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day3": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day4": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day5": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day6": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day7": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day8": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day9": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day10": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day11": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day12": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day13": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day14": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day15": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
        },
        {
            "name": "Jeffrey Warden",
            "day1": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day2": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day3": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day4": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day5": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day6": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day7": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day8": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day9": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day10": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day11": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day12": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day13": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day14": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day15": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
        },
        {
            "name": "Bernardo Galaviz",
            "day1": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day2": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day3": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day4": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day5": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day6": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day7": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day8": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day9": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day10": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day11": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day12": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day13": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day14": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day15": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
        },
        {
            "name": "Lesley Gatlin",
            "day1": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day2": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day3": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day4": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day5": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day6": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day7": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day8": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day9": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day10": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day11": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day12": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day13": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day14": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day15": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
        },
        {
            "name": "Bernardo Galaviz",
            "day1": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day2": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day3": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day4": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day5": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day6": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day7": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day8": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day9": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day10": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day11": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day12": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day13": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day14": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day15": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
        },
        {
            "name": "Jeffrey Warden",
            "day1": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day2": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day3": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day4": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day5": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day6": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day7": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day8": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day9": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day10": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day11": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day12": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day13": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day14": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day15": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
        },
        {
            "name": "Lesley Gatlin",
            "day1": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day2": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day3": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day4": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day5": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day6": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day7": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day8": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day9": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
            "day10": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day11": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day12": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day13": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day14": "https://i.ibb.co/dfxY2dg/images-removebg-preview.png",
            "day15": "https://i.ibb.co/RSxBmhW/360-F-340251800-LCw-H7-U3-LFo7-DUn-GNbp-EKX5fr-MJJD8a6-J-removebg-preview.png",
        }

    ]
    return (
        <div>
            <div className="lg:flex items-center justify-between">
                <div>
                    <h1 className="my-6 text-2xl">Admin Attendance</h1>
                    <div className="text-lg breadcrumbs mr-2">
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
                            </tr>
                        </thead>
                        <tbody>
                            {attendance?.map((attendance) => <tr key={attendance.id}>
                                <td className="text-base text-center">
                                    {attendance.name}
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day1} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day2} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day3} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day4} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day5} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day6} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day7} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day8} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day9} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day10} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day11} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day12} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day13} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day14} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-base text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-4 h-4">
                                            <img src={attendance.day15} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
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