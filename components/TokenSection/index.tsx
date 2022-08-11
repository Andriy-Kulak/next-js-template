import Image from 'next/image'
import styled from 'styled-components'
import { Main, TitleH3, FlexRow, TitleH4, StyledP } from '../sharedstyles'

import { Divider, Select, StyledSwitch, MintBtn } from '../'

import { images, tokenSection } from '../../content'
import { weight } from '../utils/fontConfigs'
import { black } from '../utils/colors'
import { laptopSmallBr, tabletBr } from '../../utils/breakpoints'
import {
  DesktopView,
  ImageContainer,
  LiveSpan,
  MobileStyledP,
  MobileTextC,
  MobileTitleH3,
  MobileView,
  StyledBackground,
  Test,
  TextContainer,
} from './styles'
const { bold } = weight

const { title, artist, description, mintPrice, type } = tokenSection

const imageContainer = (
  <ImageContainer>
    {/* <div> */}
    <StyledP weight={700}>
      <LiveSpan>LIVE</LiveSpan>
      04/28/1983 4:40PM PST
    </StyledP>
    {/* </div> */}

    <Image alt="art image 1" width={500} height={500} src={images.artImg} />
  </ImageContainer>
)

const remainingText = (
  <>
    <TitleH4>REMAINING</TitleH4>
    <StyledP weight={bold}>100 / 100</StyledP>
  </>
)

const mintText = (
  <TitleH4 color={black} weight={bold}>
    {mintPrice}
  </TitleH4>
)

const mintSection = (
  <div style={{ display: 'flex' }}>
    <Select />
    <MintBtn />
  </div>
)

const TokenSection = () => (
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
          <Divider />

          <FlexRow>
            <div style={{ width: '33%' }}>
              {mintText}
              <br />
              <StyledSwitch />
            </div>
            <div style={{ width: '33%' }}>{remainingText}</div>
            <div style={{ width: '33%' }}>
              <TitleH4>ASSET TYPE</TitleH4>
              <StyledP weight={bold}>{type}</StyledP>
            </div>
          </FlexRow>
          <Divider thick={1} />
          {mintSection}
        </TextContainer>
      </FlexRow>
    </DesktopView>
    <MobileView>
      <MobileTextC>
        <MobileTitleH3>{title}</MobileTitleH3>
        <MobileStyledP weight={bold}>{artist}</MobileStyledP>
      </MobileTextC>
      {imageContainer}
      <Test>
        <div>
          {mintText}
          <StyledSwitch />
        </div>
        {remainingText}
      </Test>
      {mintSection}
    </MobileView>
  </StyledBackground>
)

export default TokenSection
