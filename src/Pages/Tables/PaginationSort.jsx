import Container from "../../Shared/Container";
import Pagination from "../../Shared/Pagination";
import Title from "../../Shared/Title";



const PaginationSort = () => {
    const userData = [
        {
            "name": "Ataur Rahman",
            "phoneNumber": "0176736724687",
            "age": "45",
            "company": "MarcuricIT"
        },
        {
            "name": "Ataur Rahman",
            "phoneNumber": "0176736724687",
            "age": "45",
            "company": "MarcuricIT"
        },
        {
            "name": "Ataur Rahman",
            "phoneNumber": "0176736724687",
            "age": "45",
            "company": "MarcuricIT"
        },
        {
            "name": "Ataur Rahman",
            "phoneNumber": "0176736724687",
            "age": "45",
            "company": "MarcuricIT"
        },
        {
            "name": "Ataur Rahman",
            "phoneNumber": "0176736724687",
            "age": "45",
            "company": "MarcuricIT"
        },
        {
            "name": "Ataur Rahman",
            "phoneNumber": "0176736724687",
            "age": "45",
            "company": "MarcuricIT"
        },
        {
            "name": "Ataur Rahman",
            "phoneNumber": "0176736724687",
            "age": "45",
            "company": "MarcuricIT"
        },
        {
            "name": "Ataur Rahman",
            "phoneNumber": "0176736724687",
            "age": "45",
            "company": "MarcuricIT"
        },
        {
            "name": "Ataur Rahman",
            "phoneNumber": "0176736724687",
            "age": "45",
            "company": "MarcuricIT"
        },
        {
            "name": "Ataur Rahman",
            "phoneNumber": "0176736724687",
            "age": "45",
            "company": "MarcuricIT"
        },
        {
            "name": "Ataur Rahman",
            "phoneNumber": "0176736724687",
            "age": "45",
            "company": "MarcuricIT"
        },
        {
            "name": "Ataur Rahman",
            "phoneNumber": "0176736724687",
            "age": "45",
            "company": "MarcuricIT"
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

export default PaginationSort;