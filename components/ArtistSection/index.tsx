import styled from 'styled-components'
import Image from 'next/image'
import { Main100h, StyledP, TitleH3 } from '../sharedstyles'
import { weight } from '../utils/fontConfigs'
import imgSample from '../../public/assets/brickMaxiSample.png'

const { bold } = weight

const FlexBox = styled.div`
  display: flex;

  > div {
    margin: 20px 25px 0px;
  }
`

const content = [
  {
    key: 1,
    name: 'Artist 1',
  },
  {
    key: 2,
    name: 'Artist 2',
  },
  {
    key: 3,
    name: 'Artist 3',
  },
] as const

const ArtistSection = () => (
  <Main100h>
    <TitleH3 color="white">BUILDING THE FUTURE OF NFTs</TitleH3>
    <TitleH3 color="white">WITH OUR INCREDIBLE PARTNERS</TitleH3>
    <StyledP color="white" style={{ width: '40%', textAlign: 'center' }}>
      We&apos;re a boutique marketplace, carefully curating drops with the most
      hyped artists of our time. To be eligible for upcoming mints you must hold
      at least one token from each of our past mints.
    </StyledP>
    <FlexBox>
      {content.map((x) => (
        <div key={x.key}>
          <Image alt="img-sample" width={365} height={365} src={imgSample} />
          <StyledP color="white" weight={bold} style={{ textAlign: 'left' }}>
            {x.name}
          </StyledP>
        </div>
      ))}
    </FlexBox>
  </Main100h>
)

export default ArtistSection