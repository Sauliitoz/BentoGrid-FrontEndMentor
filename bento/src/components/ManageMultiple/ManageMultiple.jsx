import styled from "styled-components";
import instagram from "../../assets/img/social/InstagramLogo.svg";
import Xlogo from "../../assets/img/social/XLogo.svg";

const ManageMultiple = () => {
	return (
		<Main>
			<Section>
				<Div>
					<Div1>
						<Img src={instagram} alt="Instagram logo" />
						<Div2>
							<H3>@YourCo</H3>
							<P>12K Followers</P>
						</Div2>
					</Div1>
					<Div1>
						<Img src={Xlogo} alt="X logo" />
						<Div2>
							<H3>@YourCo</H3>
							<P>8K Followers</P>
						</Div2>
					</Div1>
				</Div>
				<H2>Manage multiple accounts and platforms.</H2>
			</Section>
		</Main>
	);
};

const Main = styled.main`
	display: flex;
	padding: 16px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	background: #fff;
	margin: 32px 16px;
	min-width: 345px;
`;

const Section = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
	max-width: 320px;
`;

const Div = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

const Div1 = styled.div`
	background-color: aliceblue;
	display: flex;
	padding: 12px 24px 12px 12px;
	justify-content: center;
	align-items: center;
	gap: 8px;
	border-radius: 34.235px;
	background-color: #fff;
	box-shadow: -9.781px 11.738px 24.454px 0px rgba(98, 26, 123, 0.05);
`;
const Img = styled.img`
	background-color: #ffcc6a;
	width: 42.5px;
	border-radius: 50%;
	padding: 4px;
`;
const Div2 = styled.div`
	color: #121212;
	font-size: 26px;
	font-weight: 500;
	line-height: 24px;
	letter-spacing: -1.56px;
`;
const H3 = styled.h3`
	font-size: 16px;
	font-weight: 500;
	line-height: 14px;
	letter-spacing: -0.96px;
	margin-bottom: 8px;
`;

const P = styled.p`
	color: #9e9e9e;
	font-size: 11px;
	font-weight: 400;
	line-height: normal;
	letter-spacing: -0.36px;
`;

const H2 = styled.h3`
	font-size: 26px;
	font-weight: 500;
	line-height: 24px;
	letter-spacing: -1.56px;
`;

export default ManageMultiple;
