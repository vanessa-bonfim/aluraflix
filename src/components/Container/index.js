import Title from "components/TitleCategory";
import Card from "components/VideoCard";
import styled from "styled-components";

const StyleContainer = styled.main`
    padding-left: 17px;
`;
const StyleSection = styled.section`
    max-width: 360px;
    width: 100%;
    margin: 20px 0 190px 0;
`;

const StyleDiv = styled.div`
    overflow-x: scroll;
    margin-bottom: 25px;
    width: 100%;
    max-width: 360px;
    height: 177px;
`;

const StyleList = styled.ul`
    display: flex;
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