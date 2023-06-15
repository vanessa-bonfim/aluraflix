import styled from "styled-components";
// Importação da imagem do logotipo da marca
import brand__image from "assets/images/logo.png";

// Estilização do logotipo da marca
const StyledBrand = styled.img`
    height: 25px;
    width: 105px;    
`;

const Brand = () => {
    return(
        <StyledBrand src={brand__image} alt="Logo AluraFlix." />   
    )
}

export default Brand;