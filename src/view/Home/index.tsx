import styled from "styled-components"
import { Accordion, AccordionSummary, Typography, AccordionDetails, createStyles, makeStyles } from "@material-ui/core"
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';

import { FlexCCBox, FlexSACBox } from "../../components/BaseCom"
import PriceList from "./components/PriceList"

import thsDao1 from "../../asstes/home/thsDao1@2x.png"
import thsDao2 from "../../asstes/home/thsDao2@2x.png"
import thsDao1Mobile from "../../asstes/home/thsDao1Mobile@2x.png"
import thsDao2Mobile from "../../asstes/home/thsDao2Mobile@2x.png"
import discord from "../../asstes/home/discord-black@2x.png"
import discordPc from "../../asstes/home/discord@2x.png"
import telegram from "../../asstes/home/telegram-black@2x.png"
import telegramPc from "../../asstes/home/telegram@2x.png"
import twitter from "../../asstes/home/svgexport-black@2x.png"
import twitterPc from "../../asstes/home/svgexport@2x.png"
import faqItem from "../../asstes/home/faqItem.jpg"
import faqItemActive from "../../asstes/home/faqItemActive.jpg"
import Email from "../../asstes/home/email-black@2x.png"
import EmailPc from "../../asstes/home/email@2x.png"
import LanuchRight from "../../asstes/home/lanuchRight@2x.png"

import ElePng from "../../asstes/home/ele@2x.png"
import BannerGif from "../../asstes/home/banner.gif"
import banner1Mobile from "../../asstes/home/banner1Mobile@2x.jpg"
// import banner2Mobile from "../../asstes/home/banner2Mobile@2x.png"
import cPng from "../../asstes/home/c@2x.png"
// requires a loader
import { HeaderLogo } from "../../components/Header";
import { useEffect, useCallback, useState } from "react";
import client from "../apollo";
import { gql } from "@apollo/client";

const Bg = styled.div<{ bgUrl: string }>`
	margin:0 auto;
	width: 164px;
	height: 164px;
	background-image: ${({ bgUrl }) => `url(${bgUrl})`};
	background-size: 100% 100%;
	background-repeat: no-repeat;
	@media (max-width: 750px) {
		width: 124px;
		height: 114px;
	}
`
const useStyles = makeStyles(() =>
	createStyles({
		root: {
			width: '100%',
			background: "transparent",
			marginTop: "20px"
		},
		typographyColor: {
			color: "#333",
			padding: "0",
			lineHeight: 2,
			background: "transparent",
			opacity: ".5",
			fontSize: "12px"
		}
	}),
);

const Faq = [{
	title: "What is the point of Themis DAO?",
	des: "Our goal is to build a policy-controlled currency system, in which the behavior of the THS token is controlled at a high level by the DAO. In the long term, we believe this system can be used to optimize for stability and consistency so that THS can function as a global unit-of-account and medium-of-exchange currency. In the short term, we intend to optimize the system for growth and wealth creation."
},
{
	title: "How do I participate in Themis DAO?",
	des: "There are two main strategies for market participants: staking and bonding. Stakers stake their THS tokens in return for more THS tokens, while bonders provide LP or USDT-BEP20 tokens in exchange for discounted THS tokens after a fixed vesting period. Governance participants can get involved on our forum and through discussions on our community Telegram and DAO discord servers respectively.We are always looking for new community members to contribute!"
}, {
	title: "How to obtain THS staking income？",
	des: "When the participant is staking THS, the compound interest THS income obtained by the stake continues to accumulate and cannot be obtained. When the user releases the staking, the THS income obtained by the compound interest will begin to be released gradually."
}, {
	title: "What is APY?",
	des: "APY stands for annual percentage yield. It measures the real rate of return on your principal by taking into account the effect of compounding interest. In the case of Themis DAO, your staked THS represents your principal, and the compound interest is added periodically on every epoch ( around 8 hours) thanks to the rebase mechanism."
}, {
	title: "How is the APY calculated?",
	des: "The APY is calculated from the reward yield (a.k.a rebase rate) using the following equation: It raises to the power of 1095 because a rebase happens 3 times daily.Consider there are 365 days in a year, this would give a rebase frequency of 365 * 3 = 1095.Reward yield is determined by the following equation: "
}, {
	title: "What is SC used for?",
	des: "SC is the DAO management token and the protocol contribution token. First of all, destroying SC can speed up the release of THS staking income. Secondly, SC will run through the entire ecology of Themis DAO.Whoever contributes more to the protocol will profit more in the subsequent ecology."
}, {
	title: "How to get SC?",
	des: ``
}]

const bannerText =
{
	title: "THEMIS DAO IS DEFI2.0 UPGRADE PROTOCOL",
	des: "Themis is the creator and guardian of order"
}

const HomeMain = styled.div`
	width: 100%;
`

const Banner = styled.div`
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
  /* padding-top: 300px; */
	/* height: 500px; */
	text-align: left;
	background: transparent;
  z-index: 10;
	@media (max-width: 750px) {
		width: 100%;
	}
`

const EarthBox = styled.div`
	position: absolute;
	top: -20px;
	right: 50px;
	width: 300px;
	height: 375px;
	zoom: 1.5;
	@media (max-width: 750px) {
		width: 100%;
		right: 50px;
		height: 500px;
		zoom: 1.5;
	}
`

const Box3D = styled.canvas`
	position: absolute;
	top:0;
	right:0;
	width:100%;
	height: 500px;
`


const BannerImg = styled.img`
	width: 100%;
	height: auto;
	z-index: 10;
	display: block;
	@media (max-width: 750px) {
		display: none;
	}
`

const BannerMobileImg = styled.img`
	width: 100%;
	height: auto;
	z-index: 10;
	display: none;
	@media (max-width: 750px) {
		display: block;
	}
`

const BannerMobileBox = styled(FlexCCBox)`
	position: absolute;
	width: 100%;
	top: 0;
	left: 0;
	display: none;
	/* height: 500px; */
	text-align: center;
	@media (max-width: 750px) {
		display: block;
	}
`

const BannerMobileBox2 = styled(FlexCCBox)`
	position: absolute;
	width: 100%;
	bottom: 0;
	left: 0;
	display: none;
	/* height: 500px; */
	text-align: center;
	@media (max-width: 750px) {
		display: block;
	}
`

const BannerMobileBoxMain = styled.div`
	position: absolute;
	width: 100%;
	bottom: 0;
	left: 0;
`

const BannerText = styled.div`
	width: 80%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	/* padding-right: 300px; */
	/* text-align: left; */
	@media (max-width: 750px) {
		top: 40%;
		width: 100%;
		display: none;
	}
`


const MainViceTitle = styled.div`
	font-size: 24px;
	color: #FFF;
	margin: 32px 0;
	line-height: 1.5;
	@media (max-width: 750px) {
		font-size: 20px;
		margin: 16px 0 8px;
		width: 100%;
		padding: 0;
		& div {
			width: 300px;
		}
	}
`


const MainTitle = styled.div`
	font-size: 56px;
	color: #F8CE86;
	font-weight: 700;
	@media (max-width: 750px) {
		color: #FFF;
		font-size: 32px;
		width: 100%;
	}
`


const Card = styled.div<{ bg?: { pc?: string, mobile?: string } }>`
	width: 100%;
		background: ${({ bg }) => bg?.pc ?? "transparent" };
	padding: 60px 60px 0;
	@media (max-width: 980px) {
		padding: 24px;
		background: ${({ bg }) => bg?.mobile ?? "transparent" };
	}
`

export const Title = styled.div`
	font-weight: 700;
	font-size: 48px;
	width: 100%;
	color: #F8CE86;
	text-align: center;
	& .tips {
		color: #FFF;
	}
	@media (max-width: 750px) {
		font-size: 24px;
		color: #000;
		& .tips {
			color: #000;
		}
	}
`

const Container = styled.div`
	position: absolute;
	top: 30px;
	left: 0;
	width: 100%;
`

const Container2 = styled.div`
	margin-top: 40px;
	padding: 16px;
	text-align: left;
	width: 100%;
	background: rgba(0, 0, 0, .35);
`

const Lanuch = styled(FlexSACBox)`
	color: #000;
	padding: 8px;
	width: 92%;
	margin: 0 4% 0 4%;
	background: #83879E;
	background: #F8F0FF;
	border-radius: 16px;
	box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.16);
`

const LanuchCenter = styled.div`
	text-align: left;
	color: #000;
	font-weight: 500;
	margin: 0 8px;
`

const LanuchCenterTitle = styled.div`
	color: #000;
	font-weight: 700;
`

const LanuchCenterContent = styled.div`
	font-size: 14px;
	color: #83879E;
	font-weight: 500;
`

const LanuchBtn = styled(FlexSACBox)`
	font-size: 14px;
	background: #FAC678;
	border-radius: 8px;
	font-weight: 700;
	padding: 8px 4px;
	min-width: 72px;
`

const LanuchRightBtn = styled.img`
	width: 28px;
	height: 28px;
`

const Detail = styled(FlexCCBox)`
	margin-top: 60px;
	@media (max-width: 750px) {
		margin-top: 32px;
	}
`

const ThsDao = styled.img`
	width: 80%;
	height: auto;
	@media (max-width: 750px) {
		width: 100%;
		display: none;
	}
`

const ThsDaoMobile = styled.img`
	width: 100%;
	height: auto;
	display: none;
	@media (max-width: 750px) {
		display: block;
	}
`

const MediaRight = styled.div`
`

const MediaRightTitle = styled.div`
	width: 100%;
	text-align: center;
	font-size: 20px;
	@media (max-width: 750px) {
		color: #000;
	}
`

const MediaList = styled(FlexCCBox)`
	justify-content: start;
	align-items: center;
	margin-top: 24px;
	@media (max-width: 750px) {
		justify-content: space-between;
	}
`


const Item = styled.div`
	font-size: 20px;
	font-weight: 400;
	margin-right: 32px;
	text-align: center;

	@media (max-width: 750px) {
		margin-right: 0;
		width: 64px;
	}
`

const MediaIcon = styled(Bg) <{ flag?: boolean }>`
	width: 80px;
	height: 80px;
	cursor: pointer;
	display: none;
	@media (max-width: 750px) {
		width: 40px;
		height: 40px;
		display: block;
	}
`

const MediaIconPc = styled(Bg) <{ flag?: boolean }>`
	width: 80px;
	height: 80px;
	cursor: pointer;
	display: block;
	@media (max-width: 750px) {
		width: 40px;
		height: 40px;
		display: none;
	}
`

const Text = styled.div`
	margin-top: 16px;
	text-align: center;
	@media (max-width: 750px) {
		font-size: 14px;
		color: #000;
	}
`

const Footer = styled(FlexCCBox) <{ bg?: { pc?: string, mobile?: string } }>`
	color: #FFFFFF;
	padding: 16px;
	background: ${({ bg }) => bg?.pc ?? "#101019"};
	@media(max-width: 750px) {
		background: ${({ bg }) => bg?.mobile ?? "#101019"};
	}
`

const FooterText = styled(FlexCCBox) <{ opacity: string }>`
	@media(max-width: 750px) {
		opacity: ${({ opacity }) => opacity ?? "1"};
	}
`

const C = styled.img`
	width: 14px;
	height: 14px;
	margin: 0 4px;
`

const FooterLogo = styled(HeaderLogo)`
	@media (max-width: 750px) {
		display: none;
	}
`

const AccordionSummaryOptions = styled(AccordionSummary)`
	width: 100%;
	height: 50px;
	padding: 0;
`

const TypographyTitle = styled(Typography)`
	position: relative;
	top: 0;
	left: 0;
	font-size: 20px;
	width: 100%;
	padding: 0;
	@media (max-width: 750px) {
		font-size: 12px;
	}
`

const TypographyTitleSpan = styled.span`
	position: relative;
	top: 0;
	left: 20px;
	font-size: 20px;
	width: 100%;
	padding: 0;
	@media (max-width: 750px) {
		font-size: 12px;
	}
`

const FaqItemLeft = styled.img`
	height: 50px;
	width: 67px;
`

const TypographyContent = styled(Typography)`
	background-color: #1D1E36;
	@media (max-width: 750px) {
		font-size: 12px;
		background-color: transparent;
	}
`

const Universe = styled.div`
  position: relative;
	top: 0;
	left: 0;
	width: 100%;
`
const Star = styled.canvas`
  width: 1024px;
  height: 1024px;
`

interface IProtocolMetrics {
	readonly timestamp: string;
	readonly thsCirculatingSupply: string;
	readonly sThsCirculatingSupply: string;
	readonly totalSupply: string;
	readonly thsPrice: string;
	readonly marketCap: string;
	readonly totalValueLocked: string;
	readonly treasuryMarketValue: string;
	readonly nextEpochRebase: string;
	readonly nextDistributedOhm: string;
	readonly currentAPY: string;
	readonly treasuryRiskFreeValue: string;
}

export default function Home() {

	// const earthRef = useRef(null)
	// const box3DRef = useRef(null);

	// const [canvasConfig, setCanvasConfig]: any = useState({
	// 	width: window.innerWidth,
	// })

	// const [isH5, setIsH5]: any = useState(false)


	const classes = useStyles();

	const [state, setState] = useState<null | number>(null);

	const [thsPrice, setThsPrice] = useState("0.00")
	const [currentAPY, setCurrentAPY] = useState("0.00")
	const [preThs, setPreThs] = useState("0.00")
	const [marketCap, setMarketCap] = useState("0.00")
	const [totalValueLocked, setTotalValueLocked] = useState("0.00")
	const [treasuryRiskFreeValue, setTreasuryRiskFreeValue] = useState("0.00")

	const getData = useCallback(
		async () => {
			const protocolMetricsQuery = `
 query MyQuery {
   protocolMetrics(first: 1, orderBy: timestamp, orderDirection: desc) {
            timestamp
            thsCirculatingSupply
            sthsCirculatingSupply
            totalSupply
            thsPrice
            marketCap
            totalValueLocked
            treasuryMarketValue
            nextEpochRebase
            nextDistributedThs
						currentAPY
						treasuryRiskFreeValue
        }
    }
`;

			const graphData = await client().query<{ protocolMetrics: IProtocolMetrics[] }>({ query: gql(protocolMetricsQuery) });
			const thsPriceGraph = parseFloat(graphData?.data?.protocolMetrics[0]?.thsPrice ?? 0).toFixed(4);
			const currentAPYGraph = parseFloat(graphData?.data?.protocolMetrics[0]?.currentAPY ?? 0).toFixed(4);
			const marketCapGraph = parseFloat(graphData?.data?.protocolMetrics[0]?.marketCap ?? 0).toFixed(4);
			const treasuryRiskFreeValueGraph = parseFloat(graphData?.data?.protocolMetrics[0]?.treasuryRiskFreeValue ?? 0).toFixed(4);
			const circSupply = parseFloat(graphData?.data?.protocolMetrics[0]?.thsCirculatingSupply ?? 0)
			const treasuryMarketValueGraph = parseFloat(graphData?.data?.protocolMetrics[0]?.treasuryMarketValue ?? 0);
			const preThsGraph = (treasuryMarketValueGraph / circSupply).toFixed(4)
			setThsPrice(thsPriceGraph)
			setCurrentAPY(currentAPYGraph)
			setPreThs(preThsGraph)
			setMarketCap(marketCapGraph)
			setTotalValueLocked(treasuryMarketValueGraph.toFixed(4))
			setTreasuryRiskFreeValue(treasuryRiskFreeValueGraph)
		},
		[],
	)

	useEffect(() => {
		getData()
	}, [])

	// useLayoutEffect(() => {
	// 	console.log("earthRef", earthRef.current)
	// 	if (earthRef.current) {
	// 		// @ts-ignore
	// 		new Earth(earthRef.current)
	// 	}
	// 	if (box3DRef.current) {
	// 		starSky(box3DRef.current);
	// 	}

	// 	function onload() {
	// 		reSize();
	// 		if (navigator.userAgent.match(/Mobi/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i)) {
	// 			setIsH5(true)
	// 		}
	// 	}

	// 	window.addEventListener('resize', reSize);
	// 	window.addEventListener('load', onload)

	// 	return () => {
	// 		window.removeEventListener('resize', reSize)
	// 		window.removeEventListener('load', onload)
	// 	}
	// }, [])

	// function reSize() {
	// 	setCanvasConfig({
	// 		width: window.innerWidth,
	// 	})
	// }

		// window.addEventListener('resize', reSize);
		// window.addEventListener('load', onload)

	// @ts-ignore
	return (
		<HomeMain>
			<Banner
			>
				{/* <EarthBox style={{ zoom: "1.5" }} ref={earthRef} ></EarthBox>
				<Box3D ref={box3DRef} {...canvasConfig} /> */}
				<BannerImg src={BannerGif} />
				<BannerMobileImg src={banner1Mobile} />
				<BannerText>
					<MainTitle>
						<div >{bannerText.title}</div>
					</MainTitle>
					<MainViceTitle>
						<div>{bannerText.des}</div>
					</MainViceTitle>
				</BannerText>
				{/* <BannerMobileBox>
					<Container>
						<MainTitle>
							<div >{bannerText.title}</div>
						</MainTitle>
						<MainViceTitle>
							<div>{bannerText.des}</div>
						</MainViceTitle>
					</Container>
				</BannerMobileBox> */}
				<BannerMobileBox2>
					<BannerMobileBoxMain>
						<Lanuch>
							<LanuchBtn>Buy Now</LanuchBtn>
							<LanuchCenter>
								<LanuchCenterTitle>LP Bond</LanuchCenterTitle>
								<LanuchCenterContent>
									Buy THS and add liquidity, Then sell LP to the protocol. Get more THS!
								</LanuchCenterContent>
							</LanuchCenter>
							<LanuchRightBtn src={LanuchRight} onClick={() => {
								globalThis.open("https://app.themis.capital/bonds")
							}} />
						</Lanuch>
						<Container2>
							<MainTitle>
								<div >{bannerText.title}</div>
							</MainTitle>
							<MainViceTitle>
								<div>{bannerText.des}</div>
							</MainViceTitle>
						</Container2>
					</BannerMobileBoxMain>
				</BannerMobileBox2>
			</Banner>
			<Card key="PriceList" style={{ paddingTop: 0 }}>
				<PriceList thsPrice={thsPrice} currentAPY={currentAPY} preThs={preThs} marketCap={marketCap} totalValueLocked={totalValueLocked} treasuryRiskFreeValue={treasuryRiskFreeValue} />
			</Card>
			<Card key="ele" >
				<Title>Themis Dao DeFi2.0 upgrade protocol developed based on Binance Smart Chain</Title>
				<Detail><ThsDao src={ElePng}></ThsDao></Detail>
				<Detail><ThsDaoMobile src={ElePng}></ThsDaoMobile></Detail>
			</Card>
			<Card bg={{ mobile: '#E8E8ED' }} key="Themis1" >
				<Title>Themis DAO <span className={"tips"}>Economic</span> Model</Title>
				<Detail><ThsDao src={thsDao1}></ThsDao></Detail>
				<Detail><ThsDaoMobile src={thsDao1Mobile}></ThsDaoMobile></Detail>
			</Card>
			<Card bg={{ mobile: "#F5F5F8" }} key="Themis2" >
				<Title>Themis DAO <span className={"tips"}>Economic</span> Model</Title>
				<Detail><ThsDao src={thsDao2}></ThsDao>	</Detail>
				<Detail><ThsDaoMobile src={thsDao2Mobile}></ThsDaoMobile>	</Detail>
			</Card>
			<Card bg={{ mobile: "#EFEFEF" }} key="faq" id="faq" style={{ padding: "28px" }}>
				<Title>F<span className={"tips"}>A</span>Q´s</Title>
				{Faq.map((item, idx) => <Accordion
					onChange={(_event, isExpanded) => {
						if (isExpanded) {
							setState(idx)
						} else {
							setState(null)
						}
					}}
					className={classes.root}>
					<AccordionSummaryOptions
						expandIcon={<ArrowDropDown fontSize={"medium"} htmlColor="#777" />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<TypographyTitle >
							{/* <FaqItemLeft src={state === idx ? faqItemActive : faqItem} /> */}
							<TypographyTitleSpan>{item.title}</TypographyTitleSpan></TypographyTitle>
					</AccordionSummaryOptions>
					<AccordionDetails>
						<TypographyContent className={classes.typographyColor}>
							{idx !== (Faq.length - 1) ? item.des : <>
								<div>Participants who staking THS and invite to staking THS are considered to contribute to the protocol, and they can all receive SC rewards.</div>
								<div>(1)THS staking to obtain SC</div>
								<div>staking THS is less than 1000USDT, 0SC can be obtained every day;</div>
								<div>{"If 1000USDT≤staking THS amount<2000USDT, 1SC can be obtained every day;"}</div>
								<div>{"If 2000USDT≤staking THS amount<3000USDT, 2SC can be obtained every day;"}</div>
								<div>{"If 3000USDT≤staking THS amount<4000USDT, 3SC can be obtained every day;"}</div>
								<div>......</div>
								<div>And so on;</div>
								<div>The upper limit of SC users can obtain by staking THS is 300. After reaching this value, the account cannot obtain SC by staking THS.</div>
								<div>(2)Staking invitation to obtain SC</div>
								<div>User A is a valid user (the value of staking THS is more than 1000 USDT) and invites user B to staking THS</div>
								<div>	If B's staking THS amount is less than 1000USDT, A can get 0SC every day;</div>
								<div>{"If 1000USDT≤B's stakingTHS amount <2000USDT, A can get 0.3SC per day;"}</div>
								<div>{"If 2000USDT≤B's stakingTHS amount <3000USDT, A can get 0.6SC per day;"}</div>
								<div>{"If 3000USDT≤B's stakingTHS amount <4000USDT, A can get 0.9SC per day;"}</div>
								<div>......</div>
								<div>And so on;</div>
								<div>User A can get 365 times SC rewards due to user B staking.</div>
							</>}
						</TypographyContent>
					</AccordionDetails>
				</Accordion>)}
			</Card>
			<Card key="join" bg={{ mobile: "#EFEBEC", pc: "rgba(135, 137, 242, .2)" }} style={{ display: "flex", justifyContent: "space-around", alignItems: "center", padding: "36px" }}>
				<FooterLogo width={"364px"} height={"150px"} />
				<MediaRight>
					<MediaRightTitle>Join Themis Community</MediaRightTitle>
					<MediaList>
						<Item key="twitter">
							<MediaIcon bgUrl={twitter} onClick={() => {
								globalThis.open("https://twitter.com/ThemisDAO")
							}}></MediaIcon>
							<MediaIconPc bgUrl={twitterPc} onClick={() => {
								globalThis.open("https://twitter.com/ThemisDAO")
							}}></MediaIconPc>
							<Text>Twitter</Text>
						</Item>
						<Item key="disord">
							<MediaIcon flag={true} bgUrl={discord} ></MediaIcon>
							<MediaIconPc flag={true} bgUrl={discordPc} ></MediaIconPc>
							<Text>Discord</Text>
						</Item>
						<Item key="telegram">
							<MediaIcon flag={true} bgUrl={telegram} onClick={() => {
								globalThis.open("https://t.me/ThemisDAO_offlcial")
							}}></MediaIcon>
							<MediaIconPc flag={true} bgUrl={telegramPc} onClick={() => {
								globalThis.open("https://t.me/ThemisDAO_offlcial")
							}}></MediaIconPc>
							<Text>Telegram</Text>
						</Item>
						<Item key="email">
							<a style={{ color: "#FFF", textDecoration: "none" }} href="mailto:ThemisDAO@outlook.com">
								<MediaIcon flag={true} bgUrl={Email} ></MediaIcon>
								<MediaIconPc flag={true} bgUrl={EmailPc} ></MediaIconPc>
								<Text>Email</Text>
							</a>
						</Item>
					</MediaList>
				</MediaRight>
			</Card>

			<Footer bg={{ mobile: "#A5A5A5" }} key="footer" >
				<FooterText opacity=".3"
				>Copyright <C src={cPng} /> 2022</FooterText>
			</Footer>
		</HomeMain >
	)
}
