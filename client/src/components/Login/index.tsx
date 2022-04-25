import { AuthConetext } from "context/auth/context";
import { useContext, useRef } from "react"
import { callLoginApi } from "services/api";
import Button from "../Button"
import {
    Container,
    FormContainer,
    AppInfoContainer,
    AppTitle,
    AppDescription,
    Form,
    Wrapper,
    Input,
    ForgotPassword,
    SignupLink,
    CircularProgress
} from "./StyledLogin"

type Props = {}

function Login({ }: Props) {

    const email = useRef<any>();
    const password = useRef<any>();
    const { state, dispatch } = useContext(AuthConetext);


    const handleLogin = (e: any) => {
        e.preventDefault();
        
        callLoginApi({
            email: email?.current?.value,
            password: password?.current?.value
        }, dispatch)
    }

    return (
        <Container>
            <Wrapper>
                <AppInfoContainer>
                    <AppTitle>Gracias</AppTitle>
                    <AppDescription>Connecting people with Gracias</AppDescription>
                </AppInfoContainer>

                <FormContainer>
                    <Form onSubmit={handleLogin}>
                        <Input
                            type="email"
                            placeholder="Email"
                            ref={email}
                            required
                        />
                        <Input
                            type="password"
                            placeholder="Password"
                            ref={password}
                            required
                        />
                        <Button
                            title={state.fetching ? <CircularProgress size="20px" /> : "Login"}
                            type="submit"
                            disabled={state.fetching}
                        />

                        <ForgotPassword>Forgot Password? </ForgotPassword>
                        <SignupLink>Create a new Account</SignupLink>
                    </Form>
                </FormContainer>
            </Wrapper>
        </Container>
    )
}

export default Login