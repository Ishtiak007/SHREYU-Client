

const Title = ({ heading, subheading }) => {
    return (
        <div>
            <h1 className="text-[#1a1918] uppercase text-lg font-bold mb-2">{heading}</h1>
            <p className="text-[#818080] text-base">{subheading}</p>
        </div>
    );
};

export default Title;