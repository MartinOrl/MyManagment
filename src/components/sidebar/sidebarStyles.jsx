import styled, {css, keyframes} from 'styled-components'

const appearAnim = keyframes`
    100%{
        width: 400px;
        font-size: 12px;
    }
`
const disappearAnim = keyframes`
    0%{
        width: 400px;
        font-size: 12px;
    }
    100%{
        width: 0;
        font-size: 0;
        display: none;
    }
`

const isDisplay = css`
    display: block;
    
    animation: ${appearAnim} 300ms forwards ease-in-out;

`
const noDisplay = css`
    animation: ${disappearAnim} 300ms forwards ease-in-out;
`

const BasicStyle = css`
    height: 100vh;
    text-align: center;
    width: 0px;
    overflow: hidden;
    font-size: 0;
    box-shadow: 4px 9px 5px 0px rgba(0,0,0,0.5);
    background: #1e1f26;
    color: whitesmoke;
`



const getStyle = ({display}) => {
    if(display){
        return isDisplay
    }
    return noDisplay
}

export const SidebarContainer = styled.div`
    transition: 300ms ease-in-out;
    ${BasicStyle}
    ${getStyle}
`

export const Title = styled.h1`
`

export const Separator = styled.hr`
    width: 60%;
    color: rgba(255,255,255,.2);
    margin: 5px auto;
`