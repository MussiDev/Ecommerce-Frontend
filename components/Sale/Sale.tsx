import React from "react";
import Card from "../Card/Card";
import { Wrapped } from "../Sale/Sale.styles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomDot from "@/common/CustomDot";
import { getProducts } from "@/services";

const fetchProducts = async () => {
	return await getProducts();
};

const Sale = () => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 9,
			slidesToSlide: 3,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 6,
			slidesToSlide: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	//const products = use(fetchProducts());
	return (
		<Wrapped>
			<h1>OFERTAS</h1>
			{/*<Carousel
				responsive={responsive}
				infinite
				showDots
				customDot={<CustomDot />}>
				{products &&
					products.map((product) => <Card key={product.id} data={product} />)}
				
			</Carousel>*/}
		</Wrapped>
	);
};

export default Sale;
