import styled from "styled-components";

export const P = styled.p`
	color: #000;
	text-decoration: none;
	&:hover {
		color: ${(props) => props.theme.colors.primary};
		text-decoration: underline;
		text-decoration-color: ${(props) => props.theme.colors.primary};
		text-decoration-style: solid;
	}
`;
