import styled from 'styled-components'
import {fonts, colors} from '../../../../theme'

interface Props {
    error?: boolean
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const Label = styled.label`
    font-size: ${fonts.textXL.fontSize};
    line-height: ${fonts.textXL.lineHeight};
    margin-bottom: 16px;
`

export const Input = styled.input`
    border: none;
    margin-left: 12px;
    outline: none;
`

export const InputContainer = styled.div<Props>`
    padding: 24px;
    border-radius: 12px;
    border: 1px solid;
    border-color: ${({error}) => error ? `${colors.redPrimary}` : `${colors.grayPrimary}`};
    color: ${colors.grayPrimary};
    font-size: ${fonts.textL.fontSize};
    line-height: ${fonts.textL.lineHeight};
    display: flex;
    align-items: center;
`