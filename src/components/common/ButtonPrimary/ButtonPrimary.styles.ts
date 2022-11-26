import styled from "styled-components"
import {colors} from '../../../theme'

interface Props {
    disabled: boolean
}

export const Button = styled.button<Props>`
    color: ${colors.lightPrimary};
    background-color: ${({disabled}) => disabled ? colors.graySecondary : colors.bluePrimary};
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: ${({disabled}) => disabled ? 'not-allowed' : 'pointer'};
`