import styled from "styled-components";
import { Post2 } from "./Post2/post-2";

export const SquareWhite = () => {
	return (
		<Section>
			<Post2/>
		</Section>
	);
};

const Section = styled.section`
	display: flex;
	padding: 40px 32px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	background: #fff;
	margin: 32px 16px;
	align-self: stretch;
	min-width: 343px;
`;
