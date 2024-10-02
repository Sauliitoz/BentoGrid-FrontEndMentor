import styled from "styled-components";
import star from "../../../../src/assets/img/star/Star.svg";

const Post1 = () => {
	return (
		<Section>
			<H2>
				Social Media <Span10>10x</Span10> <SpanF>Faster</SpanF> with AI
			</H2>
			<Div>
				<Img src={star} alt="star1" />
				<Img src={star} alt="star2" />
				<Img src={star} alt="star3" />
				<Img src={star} alt="star4" />
				<Img src={star} alt="star5" />
			</Div>

			<P>Over 4,000 5-star reviews</P>
		</Section>
	);
};

const Section = styled.section`
	text-align: center;
	line-height: 42px;
`;
const SpanF = styled.span`
	font-style: italic;
`;
const H2 = styled.h2`
	color: #fff;
	font-size: 46px;
	width: 279px;
	height: 126px;
	margin-bottom: 24px;
	word-spacing: -5px;
`;
const Span10 = styled.span`
	color: #ffcc6a;
	font-size: 46px;
`;
const Div = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
`;
const Img = styled.img`
	width: 32px;
	height: 32px;
	margin-bottom: 8px;
`;
const P = styled.p`
	color: #fff;
	font-size: 18px;
	font-weight: 400;
	line-height: 20px;
`;

export { Post1 };
