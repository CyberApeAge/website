import { useEffect } from 'react'
import { NextPage } from 'next/types'
import CyberApeRenderer from '../CyberApeRenderer'
import { SingleApeData } from '../../constants/cyberapeage-data'
import RarityButton from './RarityButton'
import RankSection from './RankSection'

import {
    ApeItemContainer,
    HeroRenderWrapper
} from './styles'

const ApeItem: NextPage<SingleApeData> = ({ token, rank, traits }) => {
    return (
        <ApeItemContainer>
            <HeroRenderWrapper>
                <CyberApeRenderer 
                    isLookingRight={false}
                    size="200px"
                    traits={traits}
                />
            </HeroRenderWrapper>
            <RankSection 
                rank={rank}
                angle="121º"/>
            <RarityButton rank={rank} />
        </ApeItemContainer>
    )
}

export default ApeItem;