import styled from "styled-components";

const StyledButton = styled.button`
    width: 180px;
    height: 54px;
    border-radius: 4px;
    font-family: 'Source Sans Pro';
    font-weight: var(--weight-600);
    font-size: 21px;
    line-height: 24px;

`;

const Button = ({text}) => {
    return (
        <StyledButton>
            {text}
        </StyledButton>
    )
}

export default Button;