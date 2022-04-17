import {
    Container,
    FormContainer,
    AppInfoContainer,
    AppTitle,
    AppDescription,
    FormBoxContainer,
    Wrapper,
    Input,
    SignupLink
} from "./StyledSignup"
import Button from '../Button'

type Props = {}

function Signup({ }: Props) {
    return (
        <Container>
            <Wrapper>
                <AppInfoContainer>
                    <AppTitle>Gracias</AppTitle>
                    <AppDescription>Signup and connect to friends to be grateful</AppDescription>
                </AppInfoContainer>

                <FormContainer>
                    <FormBoxContainer>
                        <Input placeholder="Username" />
                        <Input placeholder="Email" />
                        <Input placeholder="Password" />
                        <Input placeholder="Password Confirmation" />
                        <Input placeholder="Password" />

                        <Button
                            title="Sign up"
                        />

                        <SignupLink>Login to your Account</SignupLink>
                    </FormBoxContainer>
                </FormContainer>
            </Wrapper>
        </Container>
    )
}

export default Signup