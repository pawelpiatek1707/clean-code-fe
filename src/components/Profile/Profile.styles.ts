import styled from "styled-components";
import { Typography } from 'antd'
import { colors } from '@/theme'

const { Text } = Typography

export const Container = styled.div`
  padding: 32px;
  max-width: 1600px;
  margin: 0 auto;
`

export const LoaderContainer = styled.div`
  margin-top: 64px;
`

export const ContentContainer = styled.div``

export const TopContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 32px;
`

export const UserLogo = styled.div`
    background-color: ${colors.bluePrimary};
    width: 64px;
    height: 64px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const UserLogoText = styled(Text)`
    color: ${colors.lightPrimary};
    font-size: 32px;
    margin-top: -4px;
`

export const UserName = styled(Text)`
    margin-left: 16px;
    font-size: 24px;
`

export const DescriptionContainer = styled.div``

export const DataContainer = styled.div``

export const Bold = styled.span`
    font-weight: 700;
`

export const ActionContainer = styled.div`
    display: flex;
`

export const ButtonWrapper = styled.div`
    margin-left: 16px;
`
