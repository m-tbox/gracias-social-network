import { ButtonComponent } from "./StyledButton"

type Props = {
    title: string
}

function Button({ title }: Props) {
    return (
        <ButtonComponent>
            {title}
        </ButtonComponent>
    )
}

export default Button