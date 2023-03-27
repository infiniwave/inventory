import styled from "styled-components";
const Background = styled.div`
    background: url("https://images.unsplash.com/photo-1524577912606-4d19b5731a24?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb") center center / cover fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;
const LoginForm = styled.div`
    border-radius: 9px;
    backdrop-filter: blur(5px);
    // opacity: 50%;
    background: rgba(217, 217, 217, 0.5);
    padding: 20px;
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: min-content;
    & > * + * {
        margin-top: 20px; 
    }
    overflow: auto;  
    scrollbar-width: thin;
`;
const Title = styled.h1`
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 0;
`;

const Subtitle = styled.h2`
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 0;
`;

const Label = styled.label`

`;

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
`;

const CompoundTextBox = styled.div`
    background: rgba(255, 255, 255, 0.6);
    border-radius: 5px;
    display: flex;
    width: 100%;
    & > * + * {
        margin-left: 5px; 
    }
    align-items: center;
`;
const GenericInput = styled.input`
    background: transparent;
    border: 0;
    padding-bottom: 10px;
    padding-top: 10px;
    font-family: "Inter";
`;
const AllInput = styled(GenericInput)`
    padding-left: 10px;
    flex-grow: 3;
`;
const TeamNumberInput = styled(GenericInput)`
    width: 35px;
    padding-right: 10px;
`
import logo from "../assets/logo.png";

const SignIn = () => {
    return (
        <Background>
            <LoginForm>
                <img src={logo} alt="Nextflow Inventory" width={100} />
                <Container>
                    <Title>Welcome</Title>
                    <Subtitle>Sign in to continue to Nextflow Inventory</Subtitle>
                </Container>
                <Container>
                    <Label style={{ alignSelf: "flex-start" }}>Username</Label>
                    <CompoundTextBox>
                        <AllInput placeholder="Username"></AllInput>
                        <span style={{ borderLeft: "1px solid", paddingLeft: "5px", height: "100%", display: "flex", alignItems: "center" }}>@</span>
                        <TeamNumberInput placeholder="0000"></TeamNumberInput>
                    </CompoundTextBox>
                    <Label style={{ alignSelf: "flex-start" }}>Password</Label>
                    <CompoundTextBox>
                        <AllInput type="password"></AllInput>
                    </CompoundTextBox>
                </Container>
                <button style={{ alignSelf: "flex-end", backgroundColor: "#4E4ACA", color: "#ffffff" }}>Sign in</button>
            </LoginForm>
        </Background>
    )
};

export default SignIn;
