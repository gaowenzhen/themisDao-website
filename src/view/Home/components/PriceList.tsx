import styled from "styled-components"

import CurrentAPY from "../../../asstes/home/CurrentAPY@2x.png"
import RiskFree from "../../../asstes/home/riskFree@2x.png"
import TotalValue from "../../../asstes/home/totalValue@2x.png"
import Themis from "../../../asstes/home/themis@2x.png"
import Ths from "../../../asstes/home/ths@2x.png"
import Locked from "../../../asstes/home/locked@2x.png"
import CurrentAPYMobile from "../../../asstes/home/CurrentAPYMobile@2x.png"
import RiskFreeMobile from "../../../asstes/home/riskFreeMobile@2x.png"
import TotalValueMobile from "../../../asstes/home/totalValueMobile@2x.png"
import ThemisMobile from "../../../asstes/home/themisMobile@2x.png"
import ThsMobile from "../../../asstes/home/thsMobile@2x.png"
import LockedMobile from "../../../asstes/home/lockedMobile@2x.png"
import { FlexCCBox } from "../../../components/BaseCom"
import ItemPng from "../../../asstes/home/item@2x.png"
import ItemActivePng from "../../..//asstes/home/itemActive@2x.png"
import { useEffect, useState } from "react"

const list = [{
	id: 0,
	url: {
		pc: Themis,
		mobile: ThemisMobile
	},
	text: "THS Price",
	value: "--"
}, {
	id: 1,
	url: {
		pc: Ths,
		mobile: ThsMobile
	},
	text: "Backing per THS ",
	value: "--"
	}, {
	id: 2,
	url: {
		pc: CurrentAPY,
		mobile: CurrentAPYMobile
	},
	text: "Current  APY",
	value: "--"
	}, {
	id: 3,
	url: {
		pc: Locked,
		mobile: LockedMobile
	},
	text: "Total-Value Locked of THS ",
	value: "--"
	}, {
	id: 4,
	url: {
		pc: TotalValue,
		mobile: TotalValueMobile
	},
	text: "Total Value of Treasury",
	value: "--"
	}, {
	id: 5,
	url: {
		pc: RiskFree,
		mobile: RiskFreeMobile
	},
	text: "Risk-Free Value of Treasury",
	value: "--"
}]

const Main = styled.div`
	width: 100%;
	text-align: center;
	@media (max-width: 750px) {
		margin-top: 40px;
	}
`

export const Bg = styled.div<{ bgUrl: { pc: string, mobile: string } }>`
	margin:0 auto;
	width: 164px;
	height: 164px;
	background-image: ${({ bgUrl }) => `url(${bgUrl.pc})`};
	background-size: 100% 100%;
	background-repeat: no-repeat;
	@media (max-width: 750px) {
		background-image: ${({ bgUrl }) => `url(${bgUrl.mobile})`};
		width: 124px;
		height: 114px;
	}
`

const RowList = styled(FlexCCBox)`
	width: 100%;
	@media (max-width: 750px) {
		margin-top: 0;
	}
`


const Item = styled(FlexCCBox) <{ isActive?: boolean }>`
	width: 330px;
	height: 330px;
	margin: 16px;
	background-image: ${({ isActive }) => isActive ? `url(${ItemActivePng})` : `url(${ItemPng})`};
	background-size: 100% 100%;
	background-repeat: no-repeat;
	@media (max-width: 750px) {
		color: #000;
		width: 80%;
		height: 240px;
		margin: 20px 6px;
		background-image: url('');
		border-bottom: 2px solid #000;
	}
`

const Container = styled.div`
	padding: 0 8px 8px;
`

const W980 = styled.div`
	width: 100%;
	@media (max-width: 980px) {
		display: none;
	}
`

const W750 = styled.div`
	width: 100%;
	display: none;
	@media (max-width: 980px) {
		display: block;
	}
`

const Text = styled.div`
	font-size: 20px;
	font-weight: 700;
	margin: 16px 8px 8px;
	@media (max-width: 750px) {
		margin: 0;
		min-height: 40px;
	}
`

const Value = styled.div`
	font-size: 32px;
	font-weight: 700;
`

interface PriceListType {
	thsPrice: string
	currentAPY: string
	preThs: string
	marketCap: string
	totalValueLocked: string
	treasuryRiskFreeValue: string

}

export default function PriceList({
	thsPrice,
	currentAPY,
	preThs,
	marketCap,
	totalValueLocked,
	treasuryRiskFreeValue
}: PriceListType) {
	const [dataList, setDataList] = useState(list)
	useEffect(() => {
		dataList[0].value = "$" + thsPrice
		dataList[1].value = "$" + preThs
		dataList[2].value = currentAPY + "%"
		dataList[3].value = "$" + marketCap
		dataList[4].value = "$" + totalValueLocked
		dataList[5].value = "$" + treasuryRiskFreeValue

		setDataList(dataList.concat([]))
	}, [thsPrice, currentAPY, preThs, marketCap, totalValueLocked, treasuryRiskFreeValue])
	return (
		<Main>
			<W980>
				<RowList>
					{
						dataList.filter((_item, idx) => idx < 3).map((item) => <Item
							// onClick={() => {
							// 	setActiveNum(item.id)
							// }}
							// isActive={activeNum === item.id}
							key={item.text}>
							<Container>
								<Bg bgUrl={item.url} ></Bg>
								<Text>{item.text}</Text>
								<Value>{item.value}</Value>
							</Container>
						</Item>)
					}
				</RowList>
				<RowList>
					{
						list.filter((_item, idx) => idx > 2).map(item => <Item
							key={item.text}
							// onClick={() => {
							// 	setActiveNum(item.id)
							// }}
							// isActive={activeNum === item.id}
						>
							<Container>
								<Bg bgUrl={item.url} ></Bg>
								<Text>{item.text}</Text>
								<Value>{item.value}</Value>
							</Container>
						</Item>)
					}
				</RowList>
			</W980>
			<W750>

					{
					list.map((item) => <RowList>
						<Item
							key={item.text}>
							<Container>
								<Bg bgUrl={item.url} ></Bg>
							<Text>{item.text}</Text>
								<Value>{item.value}</Value>
							</Container>
						</Item>
					</RowList>)
				}
			</W750>
		</Main>
	)
}
