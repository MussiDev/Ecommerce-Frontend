import styled from "styled-components";

export const Container = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 1rem;
	gap: 1rem;
	width: 15rem;
	height: 27rem;
`;

export const H1 = styled.h1`
	font-size: 1rem;
`;
export const H2 = styled.h2`
	font-size: 1rem;
	color: ${(props) => props.theme.colors.primary};
`;
export const Info = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Description = styled.p`
	font-size: 0.9rem;
	color: gray;
`;
export const Img = styled.div`
	background-color: ${(props) => props.theme.colors.secondary};
	padding-top: 1rem;
`;

export const Button = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
`;
export const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	width: 100%;
`;
export const Add = styled.button`
	border: none;
	cursor: pointer;
	font-size: 0.9rem;
	padding: 0.5rem 1.5rem;
	border-radius: 4rem;
	background-color: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.secondary};
`;
export const Icons = styled.div`
	border-radius: 100%;
	display: flex;
	gap: 1rem;
`;
export const Cart = styled.button`
	border: none;
	border-radius: 1rem;
	font-weight: bold;
	cursor: pointer;
	font-size: 0.9rem;
	padding: 0.5rem;
	display: flex;
	align-items: center;
	background-color: ${(props) => props.theme.colors.secondary};
	color: ${(props) => props.theme.colors.primary};
`;
export const Like = styled.button`
	border: none;
	display: flex;
	align-items: center;
	border-radius: 1rem;
	font-weight: bold;
	cursor: pointer;
	font-size: 0.9rem;
	padding: 0.5rem;
	background-color: ${(props) => props.theme.colors.secondary};
	color: ${(props) => props.theme.colors.primary};
`;
