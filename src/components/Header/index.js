import React from "react";
// Importação do módulo 'styled' do 'styled-components'
import styled from "styled-components";
// Importação da imagem do logotipo da marca
import brand__image from "assets/imgs/logo.png";

// Estilização do botão de cabeçalho


// Estilização do cabeçalho
const StyledHeader = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 15vw;
    height: 40px;
    align-items: center;
`;

// Estilização do logotipo da marca
const Brand = styled.img`
    height: 30px;
    width: 50%;    
`;
// Estilização da linha
const Line = styled.hr`
    height: 2px;
    width: 100%;
    background-color: var(--primary-color);
    border-color:var(--primary-color);    
`;

// Componente 'Header'
const Header = () => {
    return (
        <>
            <StyledHeader>
                {/* Renderização do logotipo da marca */}
                <Brand src={brand__image} alt="Logo AluraFlix." />                
            </StyledHeader>
            <Line/>
        </>
    );
};

export default Header;