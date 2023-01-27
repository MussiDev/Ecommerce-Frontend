import styled from "styled-components";

export const Nav = styled.nav`
	display: flex;
	width: 100%;
	justify-content: space-between;
	height: 6vh;
	align-items: center;
	font-weight: 600;
`;

export const Ul = styled.ul`
	display: flex;
	gap: 2rem;
`;

export const Logo = styled.h1`
	font-weight: bold;
	font-size: 1rem;
	color: ${(props) => props.theme.colors.primary};
`;

export const SliderNav = styled.div`
	background-color: ${(props) => props.theme.colors.primary};
	margin-bottom: 0.5rem;
`;

export const MarqueeContainer = styled.div`
	display: flex;
	color: #fff;
	gap: 20rem;
`;
