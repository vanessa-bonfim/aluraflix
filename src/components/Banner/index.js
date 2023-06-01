import React from "react";
import styled from "styled-components";
import banner__image from "assets/imgs/tranformacao-digital.png"

const StyledBanner = styled.div`
    height: 230px;
    width: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
`;
const Img = styled.img`
    height: 179px;
    width: 100%;
    position: relative;
    top: 6px;
    opacity: 0.3;
`;
const StyledParagraph= styled.p`
    color: var(--color-gray-light);
    font-size: var(--medium-body-size);
    font-weight: var(--weight-300);
    position: relative;
    bottom: 28px;
    background-color:transparent;
`;
const StyledButton = styled.button`
    background-color: var(--color-gray-light);
    color: var(--color-dark-dark);
    font-size: var(--small-body-size);
    font-weight: var(--weight-300);
    position: relative;
    bottom: 8px;
    height: 30px;
    width: 98px;
    border: none;
    border-radius: 4px;
`;
const Banner = () => {
    return (
        <>
        <StyledBanner>
            <Img src={banner__image} alt="Imagem do video Transformação Digital"/>
            <StyledParagraph>SEO com React</StyledParagraph>
            <StyledButton>Assistir</StyledButton>
        </StyledBanner>
        </>
    )
};

export default Banner;