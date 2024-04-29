

const DashLink = ({ children, className, onClick, ...props }) => {
    return (
        <button
            onClick={onClick}
            className={`flex justify-between items-center gap-2 ml-4 hover:text-blue-500 focus:outline-none active:text-violet-500  focus:text-violet-500 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default DashLink;