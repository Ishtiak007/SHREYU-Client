import BasicEleForm from "../BasicEleForm/BasicEleForm";
import FloatingLabel from "../FloatingLabel/FloatingLabel";
import Selectmenu from "../SelectMenu/Selectmenu";


const BasicElements = () => {
    return (
        <div className="space-y-12">
            <BasicEleForm></BasicEleForm>
            <Selectmenu></Selectmenu>
            <FloatingLabel></FloatingLabel>
        </div>
    );
};

export default BasicElements;