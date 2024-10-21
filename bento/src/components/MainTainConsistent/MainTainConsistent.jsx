import styled from "styled-components";
import ilustrations from "../../assets/img/Ilustrations/month.svg";

const MainTainConsistent = () => {
	return (
		<Main>
			<section>
				<H2>Maintain a consistent posting schedule.</H2>
				<Img src={ilustrations} alt="illustration of the month" />
			</section>
		</Main>
	);
};
const Main = styled.main`
	display: flex;
	min-width: 343px;
	height: 216.25px;
	padding: 16px 16px 0 16px;
	flex-direction: column;
	border-radius: 10px;
	background-color: #ffcc6a;
	margin: 32px 16px;
	gap: 16px;
	align-self: stretch;
	align-items: center;
`;

const H2 = styled.h2`
	font-size: 26px;
	font-weight: 500;
	line-height: 24px;
	letter-spacing: -1.56px;
	max-width: 311px;
`;

const Img = styled.img`
	width: 208px;
	height: 157px;
	position: relative;
	top: -5px;
`;

export default MainTainConsistent;
