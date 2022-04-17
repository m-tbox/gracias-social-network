import Button from "../Button"
import {
    Container,
    FormContainer,
    AppInfoContainer,
    AppTitle,
    AppDescription,
    FormBoxContainer,
    Wrapper,
    Input,
    ForgotPassword,
    SignupLink
} from "./StyledLogin"

type Props = {}

function Login({ }: Props) {
    return (
        <Container>
            <Wrapper>
                <AppInfoContainer>
                    <AppTitle>Gracias</AppTitle>
                    <AppDescription>Connecting people with Gracias</AppDescription>
                </AppInfoContainer>

                <FormContainer>
                    <FormBoxContainer>
                        <Input placeholder="Email" />
                        <Input placeholder="Password" />
                        <Button
                            title="Login"
                        />

                        <ForgotPassword>Forgot Password? </ForgotPassword>
                        <SignupLink>Create a new Account</SignupLink>
                    </FormBoxContainer>
                </FormContainer>
            </Wrapper>
        </Container>
    )
}

export default Login