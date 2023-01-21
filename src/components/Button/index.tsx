import { ButtonProps, IconProps } from "@mui/material";
import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    startIcon?: IconProps;
}

export default function Button({
    children,
    ...props
}: IButtonProps & ButtonProps) {
    return (
        <S.Button
            fullWidth
            {...props}
        >
            {children}
        </S.Button>
    );
}
