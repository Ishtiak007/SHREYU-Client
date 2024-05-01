
import Container from '../../../Shared/Container';
import Title from '../../../Shared/Title';
import Pagination from '../../../Shared/Pagination';

const SearchTables = () => {
    const userData = [
        {
            "id": "1",
            "name": "Sarah",
            "phoneNumber": "+880 10XX XXXXXX",
            "age": "25",
            "company": "MarcuricIT"
        },
        {
            "id": "2",
            "name": "John",
            "phoneNumber": "+880 14XX XXXXXX",
            "age": "42",
            "company": "McAfee Security,"
        },
        {
            "id": "3",
            "name": "David",
            "phoneNumber": "+880 13XX XXXXXX",
            "age": "63",
            "company": "Norton Antivirus"
        },
        {
            "id": "4",
            "name": "Smith",
            "phoneNumber": "0176736724687",
            "age": "55",
            "company": "Netgear Switch"
        },
        {
            "id": "5",
            "name": "Patel",
            "phoneNumber": "01769999999",
            "age": "45",
            "company": "Internet of Things (IoT)"
        },
        {
            "id": "6",
            "name": "Garcia",
            "phoneNumber": "+880 11XX XXXXXX",
            "age": "33",
            "company": "Blockchain"
        },
        {
            "id": "7",
            "name": "Jack",
            "phoneNumber": "0176736724687",
            "age": "54",
            "company": "Microsoft Azure"
        },
        {
            "id": "8",
            "name": "Lizzie",
            "phoneNumber": "+880 11XX XXXXXX",
            "age": "50",
            "company": "TP-Link Access Point"
        },
        {
            "id": "9",
            "name": "Davey",
            "phoneNumber": "0176736724687",
            "age": "47",
            "company": "Kaspersky Total Security"
        },
        {
            "id": "10",
            "name": "Marie",
            "phoneNumber": "+880 14XX XXXXXX",
            "age": "21",
            "company": "Google LLC"
        },
        {
            "id": "11",
            "name": "Alexander",
            "phoneNumber": "0176736724687",
            "age": "45",
            "company": "Samsung SSD"
        },
        {
            "id": "12",
            "name": "Taylor-Smith",
            "phoneNumber": "+880 16XX XXXXXX",
            "age": "24",
            "company": "Google Chrome"
        },
    ];
    return (
        <div>
            <Container className="p-4 bg-white">
                <Title heading={'SEARCH'} subheading={'A Table allowing search'}></Title>
                <div>
                    <label className="input input-bordered flex items-center gap-2 w-1/5 mt-6">
                        <input type="text" className="grow" placeholder="60 records" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 cursor-pointer h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                </div>
                <div className="h-[50vh] overflow-y-scroll no-scrollbar">
                    <div className="overflow-x-auto my-10 bg-white">
                        <table className="table table-zebra ">
                            <thead className="bg-[#42453d]">
                                <tr>
                                    <th className="text-base text-white text-center">ID</th>
                                    <th className="text-base text-white text-center">Name</th>
                                    <th className="text-base text-white text-center">Phone Number</th>
                                    <th className="text-base text-white text-center">Age</th>
                                    <th className="text-base text-white text-center">Company</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData?.map((userData, index) => <tr key={userData.id}>
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

export default SearchTables;