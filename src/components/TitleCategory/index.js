import styled from "styled-components";

const StyleBox = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

const StyleBoxTitle = styled.div`
height: 33px;
width: 85px;
border-radius: 4px;
background-color:var(--course-color-frontend);
padding: 6px;
`;

const StyleBoxParagraph = styled.div`

`;

const StyleParagraph = styled.p`
font-size: var(--small-body-size);
font-weight: var(--weight-300);
color: var(--color-gray-light);
padding: 5px 0;
`;

const StyleTitle = styled.h3`
font-size: var(--small-body-size);
font-weight: var(--weight-300);
text-align: center;
color: var(--color-gray-light);
background-color:var(--course-color-frontend);
`;

const Title = () => {
    return (
        <>
            <StyleBox>
                <StyleBoxTitle>
                    <StyleTitle>
                        Front End
                    </StyleTitle>
                </StyleBoxTitle>        
                <StyleBoxParagraph>
                    <StyleParagraph>
                        Fomação Front End da Alura
                    </StyleParagraph>
                </StyleBoxParagraph>
            </StyleBox>
        </>
    )
}

export default Title;