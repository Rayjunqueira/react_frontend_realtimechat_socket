import styled from "styled-components";

export const Container = styled.div `
`;

export  const InputContainer = styled.div `
    align-items: center;
    text-align: center;
    margin-top: 20vh;

    h2 {
        color: #fff;
        letter-spacing: 0.1rem;
    }

    input {
        border-radius: 6px;
        border: none;
        outline: none;
        height: 3.3vh;
        width: 26vh;
        background-color: #3d3939;
        color: #fff;
    }

    textarea {
        border-radius: 6px;
        border: none;
        outline: none;
        width: 30vh;
        height: 10vh;
        background-color: #3d3939;
        color: #fff;
    }
`;

export const Info = styled.div `
    align-items: center;
    text-align: center;
    letter-spacing: 0.1rem;
    
    button {
        cursor: pointer;
        margin-top: 3.4vh;
        height: 3.4vh;
        width: 10vh;
        border-radius: 4px;
        border: none;
        outline: none;
        background-color: #ff914d;
        color: #fff;
    }
`;