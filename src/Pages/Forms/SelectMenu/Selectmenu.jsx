import Container from "../../../Shared/Container";
import Title from "../../../Shared/Title";


const Selectmenu = () => {
    return (
        <div className="flex gap-8">
            <Container className="p-4 bg-white flex-1">
                <Title heading={'SELECT MENU'} subheading={'Custom <select> menus need only a custom class, .form-select to trigger the custom styles.'}></Title>
                <div className="space-y-4 my-5">
                    <div>
                        <select className="select select-bordered w-full">
                            <option disabled selected>Open This Menu</option>
                            <option>One</option>
                            <option>Two</option>
                            <option>Three</option>
                        </select>
                    </div>
                    <div>
                        <select className="select select-bordered w-full">
                            <option disabled selected>Open This Menu</option>
                            <option>One</option>
                            <option>Two</option>
                            <option>Three</option>
                        </select>
                    </div>
                    <div>
                        <select className="select select-bordered w-full">
                            <option disabled selected>Open This Menu</option>
                            <option>One</option>
                            <option>Two</option>
                            <option>Three</option>
                        </select>
                    </div>
                </div>
            </Container>
            <Container className="p-4 bg-white flex-1">
                <Title heading={'SEARCH'} subheading={'A Table allowing search'}></Title>
            </Container>
        </div>
    );
};

export default Selectmenu;