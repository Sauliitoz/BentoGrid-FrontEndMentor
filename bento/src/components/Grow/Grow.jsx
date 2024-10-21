import styled from "styled-components";
import followersG from "../../assets/img/Ilustrations/followersG.svg";
import followers120 from "../../assets/img/Ilustrations/followers120.svg";

const GrowFollowers = () => {
	return (
		<Main>
			<section>
				<Img src={followersG} alt="Followers grow" />
				<Img2 src={followers120} alt="Followers +120%" />
			</section>
			<P>Grow followers with non-stop content.</P>
		</Main>
	);
};
const Main = styled.main`
	background-color: #7551dc;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	padding: 24px;
	justify-content: center;
	align-items: center;
	gap: 40px;
	margin: 16px;
	min-width: 343px;
`;

const Img = styled.img`
	width: 196px;
	position: absolute;
`;

const Img2 = styled.img`
	box-shadow: -9.781px 11.738px 24.454px 0px rgba(98, 26, 123, 0.05);
	position: relative;
	left: 20px;
	top: 120px;
`;

const P = styled.p`
	color: #fff;
	text-align: center;
	font-size: 32px;
	font-style: normal;
	font-weight: 500;
	line-height: 28px;
	letter-spacing: -1.92px;
	margin-top: 80px;
	width: 257px;
	padding: 0 35px;
`;

export default GrowFollowers;
