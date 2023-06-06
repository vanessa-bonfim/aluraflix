import Brand from "components/Brand";
import styled from "styled-components";

const StyleFooter = styled.section`
    height: 110px;
    border-top: 2px solid var(--primary-color);
`;

const StyleParagraph = styled.p`
`;

const Footer = () => {
    return (
        <>
            <StyleFooter>
                <Brand />
                <StyleParagraph>
                    
                </StyleParagraph>
            </StyleFooter>
        </>
        
        )
}

export default Footer;