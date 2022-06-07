import { NextPage } from 'next/types'
import { RankSectionProps } from './types'
import { RankSectionDiv } from './styles'

const RankSection: NextPage<RankSectionProps> = ({rank, angle}) => {
    return (
        <RankSectionDiv>
            <span>#{rank}</span>
            <span>{angle}</span>
        </RankSectionDiv>
    )
}

export default RankSection;