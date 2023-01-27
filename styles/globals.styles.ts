import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	*, body, html {
		margin: 0;
		padding: 0;
		font-family: 'Poppins', sans-serif;
		box-sizing: border-box;
	}
`;
export const Container = styled.div`
	margin-right: auto;
	margin-left: auto;
	@media (max-width: 576px) {
		width: 100%;
		padding-right: 0;
		padding-left: 0;
	}
	@media (min-width: 576px) {
		width: 540px;
		padding-right: 0;
		padding-left: 0;
	}
	@media (min-width: 768px) {
		width: 720px;
		padding-right: 0;
		padding-left: 0;
	}
	@media (min-width: 992px) {
		width: 960px;
		padding-right: 0;
		padding-left: 0;
	}
	@media (min-width: 1200px) {
		width: 1140px;
		padding-right: 0;
		padding-left: 0;
	}
	@media (min-width: 1400px) {
		width: 100%;
		padding-right: 4rem;
		padding-left: 4rem;
	}
`;

export default GlobalStyle;
