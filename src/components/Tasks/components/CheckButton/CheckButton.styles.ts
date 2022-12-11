import { CheckOutlined } from "@ant-design/icons";
import styled from "styled-components";
import {colors} from '@/theme'

interface Props {
    isChecked?: boolean
    disabled?: boolean
}

export const Button = styled(CheckOutlined)<Props>`
    color: ${({isChecked}) => isChecked && colors.greenPrimary};

    &:hover {
         cursor: ${({disabled}) => disabled ? 'not-allowed' : 'pointer'};
    }
`