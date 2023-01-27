import styled from "styled-components";

export const Button = styled.button`
	background-color: transparent;
	color: ${(props) => props.theme.colors.primary};
	border: none;
	margin: 0 0.5rem;
	cursor: pointer;
	font-size: 1.8rem;
	border-radius: 100%;
`;
