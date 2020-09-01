import styled from 'styled-components'

export const TaskContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 8px 0;
`

export const CompleteContainer = styled.label`
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 22px;
    user-select: none;
    margin: auto 30px auto 0;
`

export const Tick = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 30px;
    width: 30px;
    background-color: #eee;
    transition: 300ms ease-in-out;
    border-radius: 50%;
    &:after{
        content: '';
        position: absolute;
        display: none;
        left: 10px;
        top: 6px;
        width: 8px;
        height: 13px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
    }
`

export const Complete = styled.input`
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    &:checked ~ ${Tick}{
        background-color: #2196F3;
    }
    &:checked ~ ${Tick}:after{
        display: block;
    }
`

export const TaskInfo = styled.h1`
    margin: auto 0;
    font-size: 1.1rem;
    font-weight: 300;
    margin-right: auto;
`

export const DeleteTask = styled.h1`
    margin: auto 0;
    font-size: 16px;
    &:hover{
        cursor: pointer;
    }
`