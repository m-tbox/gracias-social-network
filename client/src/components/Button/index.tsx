import { ButtonComponent } from "./StyledButton"

type Props = {
    title: string | React.ReactNode,
    onClick?: | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined,
    type?: any,
    disabled?: boolean
}

function Button({ title, onClick, type, disabled }: Props) {
    return (
        <ButtonComponent onClick={onClick} type={type} disabled={disabled}>
            {title}
        </ButtonComponent>
    )
}

export default Button