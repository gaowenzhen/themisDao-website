import React from "react";

import styled from "styled-components"
import { FlexCCBox, FlexSACBox, FlexSBCBox } from "../BaseCom"
import HeaderLogoPng from "../../asstes/header/headerLogo@2x.png"
import HeaderLogoMobilePng from "../../asstes/header/headerLogoMobile@2x.png"
import MenuMobilePng from "../../asstes/header/menu@2x.png"
import { Drawer } from "@material-ui/core";
import { useHistory } from "react-router-dom";



const HeaderMain = styled(FlexSACBox)`
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	padding: 0 80px;
	z-index: 1201;
	background: #101019;
	@media (max-width: 750px) {
		padding: 0;
		background: #F8F0FF;
	}
`;


const EmptyBox = styled(FlexSACBox)`
	width: 100%;
	height: 82px;
	@media (max-width: 980px) {
		height: 0px;
	}
`;

export const HeaderLogo = styled(FlexCCBox) <{ width: string, height: string }>`
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	background-image: ${`url(${HeaderLogoPng})`};
	background-size: 100% 100%;
	background-repeat: no-repeat;
	cursor: pointer;
	@media (max-width: 750px) {
		width: 150px;
		height: 36px;
		background-image: ${`url(${HeaderLogoMobilePng})`};
	}
`

const MenuView = styled(FlexSBCBox)`
	font-weight: 500;
	@media (max-width: 750px) {
	font-size: 14px;
	}
`

const MenuOptions = styled(FlexSBCBox)`
	flex: 1;
	@media (max-width: 750px) {
		display: none;
	}
`

const MenuMain = styled(FlexCCBox) <{ open: boolean }>`
	width: 60px;
	height: 60px;
	background-color: ${({ open }) => open ? "#C8CDD3" : "transparent"};
	@media (min-width: 751px) {
		display: none;
	}
`

const MenuMobile = styled.div`
	background-image: ${`url(${MenuMobilePng})`};
	background-size: 100% 100%;
	background-repeat: no-repeat;
	width: 20px;
	height: 18px;

`

const MenuPCItem = styled(FlexSBCBox)`
	padding: 0 16px;
	font-weight: 700;
	cursor: pointer;
`
const EnterDapp = styled(FlexCCBox)`
	padding: 16px 32px;
	border-radius: 16px;
	margin-left: 40px;
	font-weight: 900;
	cursor: pointer;
	color: #000;
	background-color: #FAC678;
	@media (max-width: 840px) {
			margin-left: 20px;
	}
	@media (max-width: 750px) {
			padding: 8px 16px;
			margin-left: 0px;
	}
`

const Item = styled(FlexCCBox)`
	padding: 0 32px;
	margin: 32px 0 0;
	background: transparent;
	font-weight: 700;
	line-height: 1.5;
	color: #FFF;
	cursor: pointer;
`

function Header() {
	const history = useHistory()
	const [state, setState] = React.useState(false);

	const handleClick = (flag: boolean) => {
		setState(!flag)
	};

	const handleClose = () => {
		setState(false);
	};


	return (
		<React.Fragment>
			<EmptyBox />
			<HeaderMain>
				<HeaderLogo width={"198px"} height={"82px"} />
				<MenuMain
					open={state}
				>
					<MenuMobile onClick={() => {
						handleClick(state)
					}} >
						<Drawer
							open={state}
							anchor={"right"}
							// style={{ backgroundColor: "#1D1E36" }}
						>
							<Item onClick={() => {
								globalThis.open("https://app.themis.capital/#/ido")
								handleClose();
							}}>IDO</Item>
							<Item onClick={() => {
								globalThis.location.hash = "#faq"
								handleClose();
							}}>FAQs</Item>
							<Item onClick={() => {
								globalThis.open("https://app.themis.capital/#/bonds")
								handleClose();
							}}>Bond</Item>
							<Item onClick={() => {
								globalThis.open("https://app.themis.capital/#/stake")
								handleClose();
							}}>Stake</Item>
							<Item onClick={() => {
								globalThis.open("/Themis DAO--white paper.pdf")
							}}>White Paper</Item>
						</Drawer>
					</MenuMobile>
				</MenuMain>
				<MenuView>
					<MenuOptions>
						<MenuPCItem onClick={() => {
							globalThis.open("https://app.themis.capital/#/ido")
						}}>IDO</MenuPCItem>
						<MenuPCItem onClick={() => {
							globalThis.location.hash = "#faq"
						}}>FAQs</MenuPCItem>
						<MenuPCItem onClick={() => {
							globalThis.open("https://app.themis.capital/#/bonds")
						}}>Bond</MenuPCItem>
						<MenuPCItem onClick={() => {
							globalThis.open("https://app.themis.capital/#/stake")
						}}>Stake</MenuPCItem>
						<MenuPCItem onClick={() => {
							globalThis.open("/Themis DAO--white paper.pdf")
						}}>White Paper</MenuPCItem>
					</MenuOptions>
					<EnterDapp onClick={() => {
						globalThis.open("https://app.themis.capital/#/")
					}}>Enter Dapp</EnterDapp>
				</MenuView>
			</HeaderMain >
		</React.Fragment>
	)
}
export default Header