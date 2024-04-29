

const Container = ({ children, className }) => {
    return (
        <div className={` w-[100%] mx-auto max-w-[1440px] ${className}`}>
            {children}
        </div>
    );
};

export default Container;