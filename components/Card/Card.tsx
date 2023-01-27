import men from "@/public/assets/image/men2.png";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { BsCartPlus, BsFillCartCheckFill } from "react-icons/bs";
import Image from "next/image";
import React, { useState } from "react";
import {
	Add,
	Button,
	Container,
	Description,
	H1,
	H2,
	Icons,
	Img,
	Content,
	Cart,
	Like,
	Info,
} from "./Card.styles";
import { Product } from "@/models";
interface Props {
	data: Product;
}
const Card = ({ data }: Props) => {
	const [addCart, setCart] = useState(true);
	const [fav, setFav] = useState(true);
	return (
		<Container>
			<Img>
				<Image src={men} alt='men' width={240} />
			</Img>
			<Content>
				<Info>
					<H1>{data.product_Name}</H1>
					<H2>{data.price}</H2>
				</Info>
				<Description>{data.description}</Description>
				<Button>
					<Add>Comprar</Add>
					<Icons>
						<Cart>
							{addCart ? (
								<BsCartPlus size={20} onClick={() => setCart(false)} />
							) : (
								<BsFillCartCheckFill size={20} onClick={() => setCart(true)} />
							)}
						</Cart>
						<Like>
							{fav ? (
								<MdFavoriteBorder size={20} onClick={() => setFav(false)} />
							) : (
								<MdFavorite size={20} onClick={() => setFav(true)} />
							)}
						</Like>
					</Icons>
				</Button>
			</Content>
		</Container>
	);
};

export default Card;
