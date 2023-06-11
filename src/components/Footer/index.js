import Brand from "components/Brand";
import styled from "styled-components";

const StyleFooter = styled.section`
    width:100%;
    height: 110px;
    padding: 0 17px;
    border-top: 2px solid var(--primary-color);
    display: flex;
    flex-direction: column;
    
`;

const StyleBoxBrand = styled.div`

`;
const StyleBoxParagraph = styled.div`
`;

const StyleParagraph = styled.p`
font-size: var(--medium-body-size);
font-weight: var(--weight-300);
color: var(--color-gray-light);
`;

const StyleProgram = styled.a`
font-weight: var(--weight-700);
`;

const StyleAlura = styled.a`
font-weight: var(--weight-700);
color: var(--primary-color);
`;

const Footer = () => {
    return (
        <>
            <StyleFooter>
                <StyleBoxBrand>
                    <Brand />
                </StyleBoxBrand>
                <StyleBoxParagraph>
                    <StyleParagraph>
                        Site feito no <StyleProgram>#ProgramaONE</StyleProgram> da <StyleAlura>Alura</StyleAlura>
                    </StyleParagraph>
                </StyleBoxParagraph>
            </StyleFooter>
        </>
        
        )
}

export default Footer;