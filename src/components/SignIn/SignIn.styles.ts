import styled from "styled-components"
import {fonts} from '../../theme'
import backgroundImage from '../../assets/images/signInImage.webp'

export const Container = styled.div`
    display: flex;
    height: 100vh;
`

export const ContainerLeft = styled.div`
    width: 40%;
    height: 100vh;
    background-image: url(${backgroundImage});
    background-position: center;
    background-repeat: no-repeat;
`

export const ContainerRight = styled.div`
    padding: 104px 128px ;
`

export const Header = styled.h1`
    font-size: ${fonts.header1.fontSize};
    line-height: ${fonts.header1.lineHeight};
`

export const Form = styled.form`
    margin-top: 96px;
`

export const PasswordInputContainer = styled.div`
    margin-top: 48px;
`

export const ButtonContainer = styled.div`
    margin-top: 48px;
`