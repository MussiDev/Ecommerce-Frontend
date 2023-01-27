import Head from "next/head";
import { Home, Sale } from "@/components/index";

export default function Main() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<Home />
				<Sale />
			</main>
		</>
	);
}
