import React from "react";
import styled from "styled-components";

const BotaoEstilizado = styled.button`
    background: #EB9b00;
    padding: 16px 32px;
    border: 2px solid #EB9b00;
    color: #FFF;
    font-size: 20px;
    cursor: pointer;

    &:hover {
        background: #BB7900;
        border: 2px solid #EB9b00;
    }
`

export const Button = () => {
    return (
        <BotaoEstilizado>
            clique aqui
        </BotaoEstilizado>
    )
}