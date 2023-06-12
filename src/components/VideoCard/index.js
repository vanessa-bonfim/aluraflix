import styled from "styled-components";

const StyleAncor = styled.a`
border-radius: 4px;
border:solid 1px var(--course-color-frontend);
width: 335px;
height: 177px;
`;

const StyledImg = styled.img`
background-size: cover;
`;

const Card = () => {
    return (
        <>
            <StyleAncor href="#">
                <StyledImg src="../../assets/imgs/trans-digital.png" alt="Image" />
            </StyleAncor>
            <StyleAncor href="#">
                <StyledImg src="../../assets/imgs/trans-digital.png" alt="image"/>
            </StyleAncor>
            <StyleAncor href="#">
                <StyledImg src="../../assets/imgs/trans-digital.png" alt="image"/>
            </StyleAncor>
            <StyleAncor href="#">
                <StyledImg src="../../assets/imgs/trans-digital.png" alt="image"/>
            </StyleAncor>
        </>
    )
}

export default Card;