import React from "react";
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaRegEnvelope,
	FaRegCopyright,
} from "react-icons/fa";

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer_container">
				<ul>
					<li>
						<FaFacebookF />
					</li>
					<li>
						<FaTwitter />
					</li>
					<li>
						<FaInstagram />
					</li>
					<li>
						<FaRegEnvelope />
					</li>
				</ul>
				<span>
					<FaRegCopyright />
					&nbsp;{new Date().getFullYear()}&nbsp;Copyright Eshop
				</span>
			</div>
		</footer>
	);
};
