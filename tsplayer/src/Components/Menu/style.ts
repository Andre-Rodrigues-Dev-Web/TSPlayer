import style from 'styled-components'

const Container_Menu = style.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    @media(min-width: 700px){
        flex-direction: column;
        width: 80%;
    }
`;

const Container_Links = style.ul`
    background-color: #333;
    @media(min-width: 700px){
        width: 80%;
    }
`;

export{
    Container_Menu,
    Container_Links
}