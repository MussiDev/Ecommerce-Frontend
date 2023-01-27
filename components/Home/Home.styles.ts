import styled from "styled-components";

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	height: 50vh;
	margin-top: 1rem;
	width: 100%;
	background-color: ${(props) => props.theme.colors.secondary};
`;

export const Wrapped = styled.div`
	margin: auto 10rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
export const SecondWrapped = styled.div`
	display: flex;
	margin: auto 10rem;
`;
export const H1 = styled.h1`
	font-weight: bold;
	font-size: 3rem;
	color: ${(props) => props.theme.colors.primary};
	width: 45rem;
`;

export const Button = styled.button`
	background-color: ${(props) => props.theme.colors.primary};
	color: #fff;
	width: max-content;
	outline: none;
	border: none;
	padding: 0.7rem 2.8rem;
	border-radius: 4rem;
	cursor: pointer;
	&:hover {
		background-color: ${(props) => props.theme.colors.secondary};
		color: black;
	}
`;
