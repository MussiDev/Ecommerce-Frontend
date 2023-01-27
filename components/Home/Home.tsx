import Image from "next/image";
import React from "react";
import { Button, H1, Header, Wrapped, SecondWrapped } from "./Home.styles";
import men from "../../public/assets/image/men.png";
const Home = () => {
	return (
		<Header>
			<Wrapped>
				<H1>Hasta Un 50% De Descuento En Buzos Y Remeras </H1>
				<Button>Comprar</Button>
			</Wrapped>
			<SecondWrapped>
				<Image src={men} alt='menw' width={450} height={450} />
			</SecondWrapped>
		</Header>
	);
};

export default Home;
