import Container from "../../../Shared/Container";
import Title from "../../../Shared/Title";
import BasicForm from "./BasicForm";
import BootstrapNormal from "./BootstrapNormal";
import BootstrapTooltip from "./BootstrapTooltip";
import HorizontalForm from "./HorizontalForm";


const BootstrapValidation = () => {
    return (
        <div>
            <div className="lg:flex gap-8">
                <Container className="p-4 bg-white lg:flex-1">
                    <Title heading={'BOOTSTRAP VALIDATION - NORMAL'} subheading={'Provide valuable, actionable feedback to your users with HTML5 form validation–available in all our supported browsers.'}></Title>
                    <BootstrapNormal></BootstrapNormal>
                </Container>
                <Container className="p-4 bg-white lg:flex-1">
                    <Title heading={'BOOTSTRAP VALIDATION (TOOLTIPS)'} subheading={'If your form layout allows it, you can swap the .valid | invalid-feedback classes for .valid | invalid-tooltip classes to display validation feedback in a styled tooltip.'}></Title>
                    <BootstrapTooltip></BootstrapTooltip>
                </Container>
            </div>
            <div className="lg:flex gap-8 my-10">
                <Container className="p-4 bg-white lg:flex-1">
                    <Title heading={'BASIC FORM'} subheading={'React validation with react-hook-form library.'}></Title>
                    <BasicForm></BasicForm>
                </Container>
                <Container className="p-4 bg-white lg:flex-1">
                    <Title heading={'HORIZONTAL FORM'} subheading={'React validation with react-hook-form library.'}></Title>
                    <HorizontalForm></HorizontalForm>
                </Container>
            </div>
        </div>
    );
};

export default BootstrapValidation;