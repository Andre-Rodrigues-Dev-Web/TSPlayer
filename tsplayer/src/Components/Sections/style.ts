import style from 'styled-components'

const Template = style.div`
    background-color: #242425;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    @media(min-width: 700px){
        flex-direction: row;
    }
`;
const Content = style.div`
    background-color: #333;
    @media(min-width: 700px){
        width: 80%;
    }
`;
const Sidebar = style.div`
    background-color: #29292d;
    color: #fff;
    @media(min-width: 700px){
        min-height: 80vh;
        width: 20%;
    }
`;
export{
    Content,
    Sidebar,
    Template
}