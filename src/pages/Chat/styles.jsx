import styled from "styled-components";

export const Container = styled.div `

`;

export const MessagesChat = styled.div `
    align-items: center;
    text-align: center;

    h2 {
        color: #fff;
    }
`;

export const MessagesContainer = styled.div `
    height: 700px;
    overflow: auto;
    scroll-behavior: smooth;

    ::-webkit-scrollbar-track {
        background-color: grey;
    }
`;

export const Messages = styled.div `
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;

    h4 {
        color: #fff;
    }

    p {
        color: #fff;
        margin-left: 10px;
    }
`;

export const FooterMessage = styled.footer `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 100px;
    margin-bottom: 3vh;
`;

export const MessageText = styled.div `
    align-items: center;
    text-align: center;
    justify-content: center;
    display: flex;
    margin-top: 4vh;

    textarea {
        border-radius: 6px;
        border: none;
        outline: none;
        width: 70vh;
        height: 10vh;
        background-color: #3d3939;
        color: #fff; 
    }

    button {
        height: 10vh;
        width: 10vh;
        background-color: #ff914d;
        color: #fff;
        outline: none;
        border: none;
        cursor: pointer;
        letter-spacing: 0.1rem;
    }
`;

export const Date = styled.div `
    display: inline;

    i {
        color: #fff;
        font-size: 1.4vh;
    }
`;

export const Logout = styled.div `
    align-items: center;
    text-align: center;
    margin-top: 3vh;

    button {
        cursor: pointer;
        height: 5vh;
        letter-spacing: 0.1rem;
        border-radius: 7px;
        border: none;
        color: #fff;
        background-color: red;
        margin: 1.3vh;
    }
`;

export const RemoveChat = styled.div `
    button {
        margin: 10px;
        height: 4vh;
        border-radius: 6px;
        border: none;
        letter-spacing: 0.1rem;
        outline: none;
        color: #fff;
        background-color: red;
        cursor: pointer;
    }
`;