import Layout from "@/components/Layout/Layout";
import type { AppProps } from "next/app";
import { DefaultTheme, ThemeProvider } from "styled-components";
import GlobalStyle from "@/styles/globals.styles";

export const theme: DefaultTheme = {
	colors: {
		primary: " #093e1a",
		secondary: "#fff7ee",
	},
};

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />

			<ThemeProvider theme={theme}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	);
}
