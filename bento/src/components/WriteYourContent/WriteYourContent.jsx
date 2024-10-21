import givMe from "../../assets/img/writeyourcontent/giveMe.svg";
import arrow from "../../assets/img/writeyourcontent/arrow.svg";
import styled from "styled-components";

const WriteYourContent = () => {
	return (
		<Main>
			<H2>Write your content using AI.</H2>
			<Div>
				<img src={givMe} alt="Messages looks like a messenger" />
				<Img2 src={arrow} alt="Arrow up" />
			</Div>
		</Main>
	);
};

const Main = styled.main`
	background-color: #ffcc6a;
	display: flex;
	padding: 24px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	margin: 32px 16px;
`;
const H2 = styled.h2`
	color: #121212;
	font-size: 32px;
	font-weight: 500;
	line-height: 28px;
	letter-spacing: -1.92px;
	width: 300px;
	margin-bottom: 24px;
`;
const Div = styled.div`
	width: 204px;
	border-radius: 15px;
	position: relative;
`;

const Img2 = styled.img`
	position: absolute;
	right: -38px;
	top: -3.8px;
`;

export default WriteYourContent;
