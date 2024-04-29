import Container from "../../Shared/Container";
import Title from "../../Shared/Title";



const PaginationSort = () => {
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
            </Container>
        </div>
    );
};

export default PaginationSort;