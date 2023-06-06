import React from "react";
// Importação do módulo 'styled' do 'styled-components'
import styled from "styled-components";
import Brand from "components/Brand";

// Estilização do cabeçalho
const StyledHeader = styled.header`
    height: 40px;
    margin-bottom: 6px;
    border-bottom: 2px solid var(--primary-color);
    
`;
const StyleDiv = styled.div`
    padding: 8px 40px 6px 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
`;

// Componente 'Header'
const Header = () => {
    return (
        <>
            <StyledHeader>
               <StyleDiv>
               <Brand/>
               </StyleDiv>
            </StyledHeader>
        </>
    );
};

export default Header;