import Title from "components/TitleCategory";
import Card from "components/VideoCard";
import styled from "styled-components";

const StyleContainer = styled.main`
padding-left: 17px;
`;
const StyleSection = styled.section`
    max-width: 360px;
    width: 100%;
`;

const StyleDiv = styled.div`
overflow-x: scroll;
`;

const StyleList = styled.ul`
    display: flex;
    gap: 10px;
    padding-right: 6px;
`;

const Container = () => {
    return(
        <StyleContainer>
            <StyleSection>
                <Title />
                <StyleDiv>
                    <StyleList>
                        <Card />
                    </StyleList>
                </StyleDiv>
            </StyleSection>
        </StyleContainer>
    )

}

export default Container;