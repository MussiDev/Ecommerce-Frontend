import Link from "next/link";
import React from "react";
import { Route } from "../models";
import { P } from "./LinkItem.styles";

interface Props {
	pathNames: Route[];
}

const LinkItem = ({ pathNames }: Props) => {
	return (
		<>
			{pathNames.map((pathName, k) => (
				<Link key={k} href={pathName.path} style={{ textDecoration: "none" }}>
					<P>{pathName.name}</P>
				</Link>
			))}
		</>
	);
};

export default LinkItem;
