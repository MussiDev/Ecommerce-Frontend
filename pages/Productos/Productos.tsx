import { LinkItem } from "@/common";
import Card from "@/components/Card/Card";
import { Routes } from "@/models";
import { getProducts } from "@/services";
import React from "react";
const fetchProducts = async () => {
	return await getProducts();
};

const Products = () => {
	//const products = use(fetchProducts());

	return (
		<>
			<LinkItem pathNames={[Routes.HOME]} />
			{/*products &&
				products.map((product) => <Card key={product.id} data={product} />)}
    */}
		</>
	);
};

export default Products;
