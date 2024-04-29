import BasicEleForm from "../BasicEleForm/BasicEleForm";
import BasicExample from "../BasicExample/BasicExample";
import FloatingLabel from "../FloatingLabel/FloatingLabel";
import Selectmenu from "../SelectMenu/Selectmenu";


const BasicElements = () => {
    return (
        <div className="space-y-12">
            <BasicEleForm></BasicEleForm>
            <Selectmenu></Selectmenu>
            <FloatingLabel></FloatingLabel>
            <BasicExample></BasicExample>
        </div>
    );
};

export default BasicElements;