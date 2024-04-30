

const OutlineInput = ({ className = "", ...props }) => {
    return (
        <input
            className={`w-full pl-2 text-gray-500 border border-slate-200 rounded-md relative flex justify-between items-center focus:outline-none ${className}`}
            {...props}
        />
    );
};

export default OutlineInput;