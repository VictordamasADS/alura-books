import styled from "styled-components";
import { IButtonProps } from "..";

export const Button = styled.button<IButtonProps>`
    width: 10rem;
    border-radius: 5px;
    color: #FFF;
    background-color: 
        ${(props: IButtonProps) => props.tipo === 
        "primary" ? "#EB9b00" : "#000"
    };
    border: none;
    padding: 1rem;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
        border: 2px solid ${(props: IButtonProps) => props.tipo === 
        "primary" ? "#EB9b00" : "#FFF"};
    }
`