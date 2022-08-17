import Image from 'next/image'
import styled from 'styled-components'
import { TitleH3, FlexRow, TitleH4, StyledP } from '../sharedstyles'
import FaqAcccordion from '../FaqAcccordion'
import { Divider, Select, StyledSwitch, MintBtn } from '../'

import { images, tokenSection } from '../../content'
import { weight } from '../utils/fontConfigs'
import { black, grey1 } from '../utils/colors'
import {
  DesktopView,
  ImageContainer,
  LiveSpan,
  MintSectionC,
  MobileStyledP,
  MobileTextC,
  MobileTitleH3,
  MobileView,
  SwitchC,
  TextContainer,
} from './styles'
import { BeatLoader } from 'react-spinners'
import { tabletBr } from '../../utils/breakpoints'
const { bold } = weight

const { title, artist, description, type } = tokenSection

export const StyledBackground = styled.div`
  background-color: white;
  padding: 0 20px;

  /* height: 80vh; */
  @media screen and (max-width: ${tabletBr}) {
    height: auto;
  }
  min-height: 80vh;
`

const ApeContainer = styled.div`
  display: flex;
  align-items: center;
  > h4:first-child {
    margin-right: 4px;
  }
`

const imageContainer = (
  <ImageContainer>
    <StyledP weight={700} style={{ lineHeight: '13px' }}>
      <LiveSpan>LIVE</LiveSpan>
      04/28/1983 4:40PM PST
    </StyledP>
    <Image alt="art image 1" width={430} height={430} src={images.artImg} />
  </ImageContainer>
)

const TokenSection = ({
  mint,
  isMintLoading,
  currencySwitch,
  isEth,
  quantity,
  setQuantity,
  mintValues,
}: {
  mint: () => void
  isMintLoading: boolean
  currencySwitch: () => void
  isEth: boolean
  setQuantity: (qty: number) => void
  quantity: number
  mintValues: {
    apePrice: null | string
    ethPrice: null | string
    maxSupply: null | number
    tokensLeft: null | number
  }
}) => {
  const mintSection = () => (
    <MintSectionC>
      <Select quantity={quantity} setQuantity={setQuantity} />
      {isMintLoading === true ? (
        <BeatLoader
          speedMultiplier={0.5}
          cssOverride={{ margin: '30px 0px 0px 20px' }}
        />
      ) : (
        <MintBtn mint={mint} />
      )}
    </MintSectionC>
  )

  const remainingText = (
    <>
      <TitleH4>REMAINING</TitleH4>
      <StyledP weight={bold}>
        {mintValues.tokensLeft} / {mintValues.maxSupply}
      </StyledP>
    </>
  )

  const mintText = isEth ? (
    <TitleH4 color={black} weight={bold}>
      MINT PRICE: {mintValues.ethPrice}Ξ
    </TitleH4>
  ) : (
    <ApeContainer>
      <TitleH4 color={black} weight={bold}>
        MINT PRICE: {mintValues.apePrice}
      </TitleH4>
      <Image
        width={25}
        height={25}
        src={images.apecoinLogo}
        alt="apecoin-logo"
      />
    </ApeContainer>
  )

  return (
    <StyledBackground>
      <DesktopView>
        <FlexRow>
          {imageContainer}
          <TextContainer>
            <TitleH3>{title}</TitleH3>
            <div>
              <TitleH4>ARTIST</TitleH4>
              <StyledP weight={bold}>{artist}</StyledP>
              <br />
            </div>

            <TitleH4>DESCRIPTION</TitleH4>
            <StyledP>{description}</StyledP>
            <Divider thick={0.5} color={grey1} />

            <FlexRow>
              <div style={{ width: '40%' }}>
                {mintText}
                <br />
                <StyledSwitch currencySwitch={currencySwitch} />
              </div>
              <div style={{ width: '30%' }}>{remainingText}</div>
              <div style={{ width: '30%' }}>
                <TitleH4>ASSET TYPE</TitleH4>
                <StyledP weight={bold}>{type}</StyledP>
              </div>
            </FlexRow>
            <Divider thick={0.5} color={grey1} />
            {mintSection()}
          </TextContainer>
        </FlexRow>
      </DesktopView>
      <MobileView>
        <>
          <MobileTextC>
            <MobileTitleH3>{title}</MobileTitleH3>
            <MobileStyledP weight={bold}>{artist}</MobileStyledP>
          </MobileTextC>
          {imageContainer}
          <SwitchC>
            <div>
              {mintText}
              <StyledSwitch currencySwitch={currencySwitch} />
            </div>
            <div>{remainingText}</div>
          </SwitchC>
          <Divider thick={1} color="#D9D9D9" />
          <FaqAcccordion
            content={[
              {
                key: 1,
                title: 'DETAILS',
                p: 'This is the info that goes here that is the info that people want to know when they are looking for all the info about what they are looking at.',
              },
            ]}
          ></FaqAcccordion>
          <Divider thick={1} color="#D9D9D9" />
          {mintSection()}
        </>
      </MobileView>
    </StyledBackground>
  )
}

export default TokenSection
