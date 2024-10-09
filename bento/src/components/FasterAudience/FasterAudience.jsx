import styled from "styled-components";
import girlHeart from "../../assets/img/memoji/girlHeart.svg";
import mask from "../../assets/img/memoji/mask.svg";
import hangLose from "../../assets/img/memoji/hangLose.svg";

const FasterAudience = () => {
	return (
		<Main>
			<Div>
				<H1> &gt;56% </H1>
				<P>faster audience growth</P>
				<Section>
					<Img src={girlHeart} alt="Girl make a heart of hands" />
					<Img1 src={mask} alt="Man with mask on face" />
					<Img2 src={hangLose} alt="Man making a hang lose" />
				</Section>
			</Div>
		</Main>
	);
};
const Main = styled.main`
	background-color: #fff;
	display: flex;
	flex-direction: column;
	min-width: 343px;
	margin: 32px 16px;
	padding: 24px;
	border-radius: 10px;
`;
const Div = styled.div`
	max-width: 200px;
`;
const H1 = styled.h1`
	font-size: 46px;
	font-weight: 500;
	line-height: 42px;
	letter-spacing: -1.84px;
	margin-bottom: 15px;
`;
const P = styled.p`
	font-size: 18px;
	font-weight: 400;
	line-height: 20px;
	margin-bottom: 25px;
`;
const Section = styled.section`
	position: sticky;
`;
const Img = styled.img`
	position: relative;
	background-color: #dbd1fc;
	border-radius: 50%;
	width: 66px;
`;
const Img1 = styled.img`
	position: relative;
	right: 13px;
	border-radius: 50%;
	background-color: #ffd9a2;
	width: 66px;
`;
const Img2 = styled.img`
	position: relative;
	right: 23px;
	border-radius: 50%;
	background-color: #dbd1fc;
	width: 66px;
`;

export { FasterAudience };
