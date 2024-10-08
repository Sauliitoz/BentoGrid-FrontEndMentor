import styled from "styled-components";
import month2 from "../../assets/img/Ilustrations/month2.svg";

const Schedule = () => {
	return (
		<Main>
			<H2>Schedule to social media.</H2>
			<Img src={month2} alt="chart of the month" />
			<P>
				Optimize post timings to publish content at the perfect time for
				your audience.
			</P>
		</Main>
	);
};

const Main = styled.main`
	display: flex;
	padding: 32px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 24px;
	border-radius: 10px;
	background: #dbd1fc;
	margin: 32px 16px;
`;

const H2 = styled.h2`
	font-size: 26px;
	font-weight: 500;
	line-height: 24px;
	letter-spacing: -1.56px;
`;
const Img = styled.img``;
const P = styled.p``;

export { Schedule };
