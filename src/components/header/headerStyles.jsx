import styled, { css } from 'styled-components'

const isDisplay = css`
    display: flex;
    position: absolute;
    border: 1px solid black;
    flex-direction: column;
    right: 20px;
    overflow: hidden;
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
    padding: 16px 32px;
    display: flex;
    flex-direction: row;
`

export const Title = styled.h1`
    font-size: 1.3rem;
    font-weight: 400;
    margin: 0 auto 0 0;
`

export const UserOptions = styled.div`
    ${getDisplay}
`

export const User = styled.div`
    
`

export const OptionsToggle = styled.p`

`

export const Option = styled.p`
    padding: 10px 16px;
    width: 100%;
    margin: 0;
    transition: 300ms ease-in-out;
    &:hover{
        background: #ddd;
        cursor: pointer;
    }
`