import { Container } from "@/styles/globals.styles";
import { Navbar } from "@/components";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<main>
				<Navbar />
				<Container>{children}</Container>
			</main>
		</>
	);
}
