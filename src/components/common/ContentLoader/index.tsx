import { Spin } from 'antd'
import {ContentLoaderContainer} from './ContentLoader.styles'

interface Props {
    size?: 'small' | 'default' | 'large'
}

export const ContentLoader = ({size = 'large'}: Props) => {
    return (
        <ContentLoaderContainer>
            <Spin size={size}/>
        </ContentLoaderContainer>
    )
}