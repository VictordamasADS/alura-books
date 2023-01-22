import * as S from "./styles";

export interface IButtonProps {
    text?: string;
    tipo?: "primary" | "secondary";
    onClick?: () => void;
}

export default function Button({
    text,
    tipo = "primary",
    onClick
}: IButtonProps ) {
    return (
        <S.Button
            onClick={onClick}
            tipo={tipo}
        >
            {text}
        </S.Button>
    );
}
