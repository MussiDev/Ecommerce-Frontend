import React from "react";
import { Button } from "./CustomDot.styles";
import { RxDot, RxDotFilled } from "react-icons/rx";
interface Props {
	onClick?: any;
	active?: any;
	index?: any;
}
const CustomDot = (props: Props) => {
	return (
		<Button onClick={() => props.onClick()}>
			{props.active ? <RxDotFilled /> : <RxDot />}
		</Button>
	);
};

export default CustomDot;
