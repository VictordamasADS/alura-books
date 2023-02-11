import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: "#FFF";
    width: 10rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    gap: 0.2rem;
    padding: 2rem;
    background: "linear-gradient(97.54deg, #002F52 53.49%, #326589 165.37%)";
    border-radius: 0.8rem;
    border: #002F52;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
`

export const MenuCar = styled.div`
    background-color: #FFF;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: 100%;
`

export const Input = styled.input`
    padding: 2rem;
    background-color: #FFF;
    width: 5rem;
`

export const FormLayout = styled.form`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`