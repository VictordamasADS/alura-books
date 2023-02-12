import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    width: 10rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    gap: 0.2rem;
    padding: 2rem;
    background: linear-gradient(97.54deg, #002F52 53.49%, #326589 165.37%);
    border-radius: 0.8rem;
    border: #002F52;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
`

export const MenuCar = styled.div`
    background-color: #FFF;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    align-items: center;
    display: flex;
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
    overflow: hidden;
    overflow-y: scroll;
    height: 100vh;
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

export const ViewCar = styled.div`
    display: flex;
    position: absolute;
    right: 1rem;
    top: 2rem;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    padding: 1rem;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    @media screen and (min-width: 600px) {
        width: 2.5rem;
    }
`