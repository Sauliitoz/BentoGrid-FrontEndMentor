import styled from "styled-components";
import { Post1 } from "./Post1/post-1";

export const SquareViolet = () => {
	return (
		<Section>
			<Post1 />
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
	background: #7551dc;
	margin: 32px 16px;
	align-self: stretch;
	min-width: 343px;
`;
