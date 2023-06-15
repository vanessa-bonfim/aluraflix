import React from "react";
import styled from "styled-components";
import banner__image from ""

const StyleBanner = styled.section`
    width: 100%;
`;

const StyleDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;
const Img = styled.img`
    height: 179px;
    width: 100%;
    margin-bottom: 8px;
    opacity: 0.3;
`;
const StyleTitle= styled.h3`
    color: var(--color-gray-light);
    font-size: var(--medium-body-size);
    font-weight: var(--weight-300);
    position: relative;
    bottom: 45px;
    background-color:transparent;
`;
const StyleButton = styled.button`
    background-color: var(--color-gray-light);
    color: var(--color-dark-dark);
    font-size: var(--small-body-size);
    font-weight: var(--weight-300);
    position: relative;
    bottom: 21px;
    height: 30px;
    width: 98px;
    border: none;
    border-radius: 4px;
`;
const Banner = () => {
    return (
        <>
        <StyleBanner>
            <StyleDiv>
                <Img src={banner__image} alt="Imagem do video Transformação Digital"/>
                <StyleTitle>SEO com React</StyleTitle>
                <StyleButton>Assistir</StyleButton>
            </StyleDiv>
        </StyleBanner>
        </>
    )
};

export default Banner;