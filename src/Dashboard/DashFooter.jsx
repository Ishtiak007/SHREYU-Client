import { Link } from "react-router-dom";


const DashFooter = () => {
    return (
        <div className="navbar flex w-full justify-between  items-center h-16 z-10 bg-white bordertext-black">
            <div>
                <p>2024 © Shreyu theme by Coderthemes</p>
            </div>
            <div className="flex gap-6">
                <p>About Us</p>
                <p>Help</p>
                <p>Contact Us</p>
            </div>
        </div>
    );
};

export default DashFooter;