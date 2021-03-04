import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

export const Modal = ({ children, isOpen, handleOpen }) => {
	return (
		<div
			className="modal_container"
			onClick={handleOpen}
			style={{ display: !isOpen ? "none" : "flex" }}>
			<div className="modal">
				<button className="btn btn_close">
					<AiFillCloseCircle />
				</button>
				{children}
			</div>
		</div>
	);
};
