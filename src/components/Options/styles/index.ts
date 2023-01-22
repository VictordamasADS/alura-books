import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    width: 10rem;
    gap: 0.2rem;
    padding: 2rem;
    background: linear-gradient(
        97.54deg, #002F52 53.49%, #326589 165.37%
    );
    border-radius: 0.8rem;
    border: #002F52;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
`