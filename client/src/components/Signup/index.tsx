import {
    Container,
    FormContainer,
    AppInfoContainer,
    AppTitle,
    AppDescription,
    Form,
    Wrapper,
    Input,
    SignupLink,
} from "./StyledSignup"
import Button from '../Button'
import { useRef } from "react"
import axios from "axios";
import { useNavigate } from "react-router";
import { SIGNUP } from "../../constants";

type Props = {}

function Signup({ }: Props) {
    const username = useRef<any>();
    const email = useRef<any>();
    const password = useRef<any>();
    const confirmPassword = useRef<any>();

    const navigate = useNavigate();


    const handleSignup = async (e: any) => {
        e.preventDefault();
        
        if (password.current.value !== confirmPassword.current.value) {
            password.current.setCustomValidity("Passwords don't match");
            password.current.reportValidity();
        }
        else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }

            try {
                await axios.post(SIGNUP, user);
                navigate('/login');
            } catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <Container>
            <Wrapper>
                <AppInfoContainer>
                    <AppTitle>Gracias</AppTitle>
                    <AppDescription>Signup and connect to friends to be grateful</AppDescription>
                </AppInfoContainer>

                <FormContainer>
                    <Form onSubmit={handleSignup}>
                        <Input
                            placeholder="Username"
                            ref={username}
                            required
                        />
                        <Input
                            placeholder="Email"
                            ref={email}
                            required
                            type="email"
                        />
                        <Input
                            placeholder="Password"
                            ref={password}
                            required
                            type="password"
                            minLength={6}
                        />
                        <Input
                            placeholder="Password Confirmation"
                            ref={confirmPassword}
                            required
                            type="password"
                        />

                        <Button
                            title="Sign up"
                            type="submit"
                        />

                        <SignupLink to="/login">
                            Login to your Account
                        </SignupLink>
                    </Form>
                </FormContainer>
            </Wrapper>
        </Container>
    )
}

export default Signup