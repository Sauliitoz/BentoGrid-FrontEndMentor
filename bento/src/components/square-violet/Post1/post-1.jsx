import styled from "styled-components";
import star from "../../../../src/assets/img/star/Star.svg";

const Post1 = () => {
	return (
		<Section>
			<Div1>
				<p> Social Media</p>
				<p>
					<Span10>10x</Span10><Span>Faster</Span> with
				</p>
				<p>AI</p>
			</Div1>
			<Div>
				<Img src={star} alt="star1" />
				<Img src={star} alt="star2" />
				<Img src={star} alt="star3" />
				<Img src={star} alt="star4" />
				<Img src={star} alt="star5" />
			</Div>

			<H3>Over 4,000 5-star reviews</H3>
		</Section>
	);
};

const Section = styled.section`
	text-align: center;
	line-height: 42px;
	
`;
const Span10 = styled.span`
	color: #ffcc6a;
	font-size: 46px;
`;
const Span = styled.span`
	font-style: italic;
`;
const Div1 = styled.div`
	color: #fff;
	font-size: 46px;
	width: 279px;
	height: auto;
	margin-bottom: 24px;
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
const H3 = styled.h3`
	color: #fff;
	font-size: 18px;
	font-weight: 400;
	line-height: 20px;
`;

export { Post1 };
