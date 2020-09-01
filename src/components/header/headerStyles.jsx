import styled, { css } from 'styled-components'

const isDisplay = css`
    display: flex;
    position: absolute;
    border: 1px solid black;
    flex-direction: column;
    right: 20px;
    overflow: hidden;
    background: white;
`

const noDisplay = css`
    display: none;
`

const getDisplay = ({display}) => {
    if(display){
        return isDisplay
    }
    return noDisplay
}

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: #1e1f26;
    transition: 300ms ease-in-out;
    width: 100%;
    padding: 16px 0;
    color: white;
`

export const UserOptions = styled.div`
    ${getDisplay}
`

export const User = styled.div`
    margin: auto 32px auto 0;
`

export const OptionsToggle = styled.p`
    &:hover{
        cursor: pointer;
    }
`

export const Option = styled.p`
    padding: 10px 16px;
    width: 100%;
    margin: 0;
    color: black;
    transition: 300ms ease-in-out;
    &:hover{
        background: #ddd;
        cursor: pointer;
    }
`

const isActive = css`
    transform: translateX(-60px) rotate(180deg);
    z-index: 1000;
`

const getActive = ({active}) => {
    if(active){
        return isActive
    }
    return ''
}


export const SidebarToggle = styled.div`
    transition: 300ms ease-in-out;
    position: absolute;
    font-size: 40px;
    font-weight: 600;
    margin-left: 20px;
    color: rgba(255,255,255,.6);
    transform: translateY(-8px);
    ${getActive}
`

export const ToggleText = styled.p`
    padding: 0;
    margin: 0;
`