

const DashLink = ({ className = "", ...props }) => {
    return (
        <div
            className={`flex items-center gap-2 ml-4 hover:text-blue-500 focus:outline-none  focus:text-violet-500 ${className}`}
            {...props}
        />
    );
};

export default DashLink;