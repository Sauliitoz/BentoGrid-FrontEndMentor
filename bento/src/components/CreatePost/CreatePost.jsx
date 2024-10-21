import styled from "styled-components";
import star from "../../assets/img/createpost/star.svg";
import mouse from "../../assets/img/createpost/vetor.svg";

const CreatePost = () => {
	return (
		<Main>
			<Div>
				<H2>
					Create and schedule content <Span>quicker.</Span>
				</H2>

				<Div1>
					<P>Create Post</P>
					<img src={star} alt="star of 4 points" />
					<Img1 src={mouse} alt="mouse icon" />
				</Div1>
			</Div>
		</Main>
	);
};
const Main = styled.main`
	background-color: #f9eee2;
	display: flex;
	padding: 32px;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	min-width: 343px;
	margin: 32px 16px;
	border-radius: 10px;
`;

const H2 = styled.h2`
	font-size: 32px;
	font-weight: 500;
	line-height: 28px;
	letter-spacing: -1.92px;
	width: 284px;
`;
const Span = styled.span`
	font-size: 32px;
	font-style: italic;
	font-weight: 500;
	line-height: 28px;
	letter-spacing: -1.92px;
	color: #7551dc;
`;

const Div = styled.div`
	max-width: 370px;
	margin: 0 auto;
`;
const Div1 = styled.div`
	display: flex;
	padding: 17px 26px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	background-color: #ffcc6a;
	border-radius: 42px;
	position: relative;
	margin-top: 24px;
	max-width: 190px;
`;
const P = styled.p`
	color: #7551dc;
	font-size: 19px;
	font-weight: 600;
`;

const Img1 = styled.img`
	position: absolute;
	left: 82px;
	top: 50px;
`;

export default CreatePost;
