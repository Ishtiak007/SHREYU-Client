
import Container from '../../../Shared/Container';
import Title from '../../../Shared/Title';
import Pagination from '../../../Shared/Pagination';

const PaginationSortComp = () => {
    const userData = [
        {
            "name": "Sarah",
            "phoneNumber": "+880 10XX XXXXXX",
            "age": "25",
            "company": "MarcuricIT"
        },
        {
            "name": "John",
            "phoneNumber": "+880 14XX XXXXXX",
            "age": "42",
            "company": "McAfee Security,"
        },
        {
            "name": "David",
            "phoneNumber": "+880 13XX XXXXXX",
            "age": "63",
            "company": "Norton Antivirus"
        },
        {
            "name": "Smith",
            "phoneNumber": "0176736724687",
            "age": "55",
            "company": "Netgear Switch"
        },
        {
            "name": "Patel",
            "phoneNumber": "01769999999",
            "age": "45",
            "company": "Internet of Things (IoT)"
        },
        {
            "name": "Garcia",
            "phoneNumber": "+880 11XX XXXXXX",
            "age": "33",
            "company": "Blockchain"
        },
        {
            "name": "Jack",
            "phoneNumber": "0176736724687",
            "age": "54",
            "company": "Microsoft Azure"
        },
        {
            "name": "Lizzie",
            "phoneNumber": "+880 11XX XXXXXX",
            "age": "50",
            "company": "TP-Link Access Point"
        },
        {
            "name": "Davey",
            "phoneNumber": "0176736724687",
            "age": "47",
            "company": "Kaspersky Total Security"
        },
        {
            "name": "Marie",
            "phoneNumber": "+880 14XX XXXXXX",
            "age": "21",
            "company": "Google LLC"
        },
        {
            "name": "Alexander",
            "phoneNumber": "0176736724687",
            "age": "45",
            "company": "Samsung SSD"
        },
        {
            "name": "Taylor-Smith",
            "phoneNumber": "+880 16XX XXXXXX",
            "age": "24",
            "company": "Google Chrome"
        },
    ];
    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="my-6 text-xl">Advanced Tables</h1>
                <div className="text-lg breadcrumbs mr-2">
                    <ul>
                        <li><a>Shreyu</a></li>
                        <li><a>Tables</a></li>
                        <li>Advanced Tables</li>
                    </ul>
                </div>
            </div>
            <Container className="p-4 bg-white">
                <Title heading={'PAGINATION & SORT'} subheading={'A simple example of table with pagination and column sorting'}></Title>
                <div className="h-[50vh] overflow-y-scroll no-scrollbar">
                    <div className="overflow-x-auto my-10 bg-white">
                        <table className="table table-zebra ">
                            <thead className="bg-[#42453d]">
                                <tr>
                                    <th className="text-base text-white text-center">Index</th>
                                    <th className="text-base text-white text-center">Name</th>
                                    <th className="text-base text-white text-center">Phone Number</th>
                                    <th className="text-base text-white text-center">Age</th>
                                    <th className="text-base text-white text-center">Company</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData?.map((userData, index) => <tr key={userData._id}>
                                    <th className="text-base text-center">{index + 1}</th>
                                    <td className="text-base text-center">{userData.name}</td>
                                    <td className="text-base text-center">{userData.phoneNumber}</td>
                                    <td className="text-base text-center">{userData.age}</td>
                                    <td className="text-base text-center">{userData.company}</td>
                                </tr>)}
                            </tbody>
                        </table>
                    </div>
                    <Pagination></Pagination>
                </div>
            </Container>
        </div>
    );
};

export default PaginationSortComp;