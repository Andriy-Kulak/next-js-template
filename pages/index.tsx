import Image from 'next/image'
import {
  Main,
  TitleH3,
  TitleH2,
  BlackContainer,
  ColorBackground,
  TitleH1,
  FlexRow,
  TitleH4,
  StyledP,
  TitleH2Small,
  Main100h,
  WhiteContentBox,
  LiveSpan,
} from '../components/sharedstyles'

import {
  Divider,
  FaqAcccordion,
  Nav,
  Select,
  ShadedTextBox,
  StyledSwitch,
  MintBtn,
  ArtistSection,
} from '../components'

import { artistSection, faqAccordion, images } from '../content'
import { weight } from '../components/utils/fontConfigs'
const { bold } = weight

export default function Home() {
  return (
    <>
      <Nav />
      <div
        style={{
          position: 'relative',
          height: '90vh',
        }}
      >
        <Image
          alt="bg-art-1"
          priority
          src={images.bgArt1}
          objectFit="cover"
          objectPosition="center"
          layout="fill"
        />
        <Main100h>
          <Image
            alt="Brick Maxi Logo"
            src={images.brickMaxiLogo}
            height={200}
            width={200}
          />
          <TitleH2 style={{ position: 'relative', zIndex: 1 }}>
            ART THAT PAYS DIVIDENS.
          </TitleH2>
        </Main100h>
      </div>
      <ColorBackground color="white">
        <Main>
          <FlexRow>
            <div style={{ margin: '0px 60px' }}>
              <FlexRow justifyContent="space-between">
                <div>
                  <StyledP weight={700}>
                    04/28/1983 4:40PM PST
                    <LiveSpan>LIVE</LiveSpan>
                  </StyledP>
                </div>
                <div>
                  <TitleH4 color="black">EDITION 1/5</TitleH4>
                </div>
              </FlexRow>

              <Image
                alt="art image 1"
                width={500}
                height={500}
                src={images.artImg}
              />
            </div>
            <div style={{ width: '40%' }}>
              <TitleH3>TOKEN NAME</TitleH3>
              <div>
                <TitleH4>ARTIST</TitleH4>
                <StyledP weight={bold}>bottoproject</StyledP>
                <br />
              </div>

              <TitleH4>DESCRIPTION</TitleH4>
              <StyledP>
                This is the info that goes here that is the info that people
                want to know when they are looking for all the info about what
                they are looking at.
              </StyledP>
              <Divider />

              <FlexRow>
                <div style={{ width: '33%' }}>
                  <TitleH4 color="black" weight={bold}>
                    MINT PRICE 1.5Ξ
                  </TitleH4>
                  <StyledSwitch />
                </div>
                <div style={{ width: '33%' }}>
                  <TitleH4>REMAINING</TitleH4>
                  <StyledP weight={bold}>100 / 100</StyledP>
                </div>
                <div style={{ width: '33%' }}>
                  <TitleH4>ASSET TYPE</TitleH4>
                  <StyledP weight={bold}>Residential</StyledP>
                </div>
              </FlexRow>
              <Divider thick={1} />
              <div style={{ display: 'flex' }}>
                <Select />
                <MintBtn />
              </div>
            </div>
          </FlexRow>
        </Main>
      </ColorBackground>
      <BlackContainer>
        <div
          style={{
            width: '100%',
            padding: '0px 50px',
          }}
        >
          <br />
          <TitleH2Small>ART THAT PAYS DIVIDENDS.</TitleH2Small>
          <Divider thick={1} color="white" />
        </div>
        <Main>
          <TitleH1>You collect art.</TitleH1>
          <TitleH1>We purchase real estate.</TitleH1>
          <TitleH1>You earn USDC rewards.</TitleH1>
        </Main>
      </BlackContainer>
      <div
        style={{
          position: 'relative',
          height: '200vh',
          backgroundColor: 'black',
        }}
      >
        <Image
          alt="bg-art-2"
          src={images.bgArt2}
          objectFit="cover"
          objectPosition="center"
          layout="fill"
        />
        <ShadedTextBox />
      </div>
      <ColorBackground height="90vh">
        <ArtistSection content={artistSection} />
      </ColorBackground>
      <div
        style={{
          position: 'relative',
          height: '90vh',
        }}
      >
        <Image
          alt="bg-art-2"
          src={images.bgArt1}
          objectFit="cover"
          objectPosition="center"
          layout="fill"
        />
        <Main100h>
          <WhiteContentBox>
            <FaqAcccordion content={faqAccordion} />
          </WhiteContentBox>
        </Main100h>
      </div>
    </>
  )
}
