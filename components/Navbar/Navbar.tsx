import { MarqueeContainer, Nav, SliderNav, Logo, Ul } from "./Navbar.styles";
import { LinkItem } from "@/common";
import { Routes } from "@/models";
import { BsFillCartFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { Container } from "@/styles/globals.styles";
const Navbar = () => {
	return (
		<>
			<SliderNav>
				<Marquee direction='right' speed={80} gradient={false}>
					<MarqueeContainer>
						<p>Todos los medios de pago</p>
						<p>Las mejores ofertas</p>
						<p>20% OFF todos los Lunes</p>
					</MarqueeContainer>
				</Marquee>
			</SliderNav>
			<Container>
				<Nav>
					<Logo>Ecommerce</Logo>
					<Ul>
						<LinkItem pathNames={[Routes.HOME]} />
						<LinkItem pathNames={[Routes.PRODUCTS]} />
						<LinkItem pathNames={[Routes.SALE]} />
						<LinkItem pathNames={[Routes.CONTACT]} />
					</Ul>
					<Ul>
						<BsFillCartFill />
						<FaUserAlt />
					</Ul>
				</Nav>
			</Container>
		</>
	);
};

export default Navbar;
