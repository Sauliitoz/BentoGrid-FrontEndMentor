import styled from "styled-components";
import instagram from "../../../assets/img/social/InstagramLogo.svg";
import Xlogo from "../../../assets/img/social/XLogo.svg";

const Post2 = () => {
	return (
		<Div1>
			<Main>
				<Section>
					<Img src={instagram} alt="Instagram logo" />
					<Div>
						<H3>@YourCo</H3>
						<P>12K Followers</P>
					</Div>
				</Section>
				<Section>
					<Img src={Xlogo} alt="X logo" />
					<Div>
						<H3>@YourCo</H3>
						<P>8K Followers</P>
					</Div>
				</Section>
			</Main>
			<Div2>
				<H2>Manage multiple accounts and platforms.</H2>
			</Div2>
		</Div1>
	);
};
const Div1 = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;
const Main = styled.main`
	display: flex;
	justify-content: space-between;
`;
const Section = styled.section`
	display: flex;
	background-color: #fff;
	border-radius: 34px;
	padding: 12px 24px 12px 12px;
	box-shadow: -9.781px 11.738px 24.454px 0px rgba(98, 26, 123, 0.05);
	flex-direction: row;
	align-items: center;
	gap: 8px;
`;
const Div = styled.div`
	display: flex;
	flex-direction: column;
	width: 65px;
	height: 38px;
`;
const H3 = styled.h3`
	color: #121212;
	font-size: 16px;
	letter-spacing: -0.96px;
	font-weight: 500;
`;
const P = styled.p`
	color: #9e9e9e;
	font-size: 11px;
	font-weight: 400;
	letter-spacing: -0.36px;
`;

const Img = styled.img`
	width: 44px;
	height: 44px;
	background-color: #ffcc6a;
	background-size: 42.5px;
	border-radius: 50%;
	padding: 5px;
	gap: 8px;
	
`;
const Div2 = styled.div`
	width:311px;
`;
const H2 = styled.h2`
	font-size: 26px;
	font-weight: 500;
	line-height: 24px; 
	letter-spacing: -1.56px;
`;

export { Post2 };
