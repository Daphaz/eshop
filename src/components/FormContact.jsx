import React, { useState } from "react";
import { AiFillInfoCircle, AiOutlineCheck } from "react-icons/ai";

const initialState = {
	firstname: "",
	lastname: "",
	phone: "",
	email: "",
	objet: "",
	agree: false,
	agreePick: "tel",
	message: "",
	touched: {
		firstname: {
			status: "",
			error: "",
		},
		lastname: {
			status: "",
			error: "",
		},
		phone: "",
		email: "",
		objet: "",
		message: "",
	},
};

export const FormContact = () => {
	const [state, setState] = useState(initialState);

	const handleChange = (e) => {
		const target = e.target;
		const name = target.name;

		if (name === "agree") {
			setState({
				...state,
				[name]: target.checked,
			});
		} else {
			setState({
				...state,
				[name]: target.value,
			});
		}
	};

	const handleFocus = (field, e) => {
		e.target.style.borderBottomColor = "var(--black-color)";
		setState({
			...state,
			touched: {
				...state.touched,
				[field]: { status: "", error: "" },
			},
		});
	};

	const errorCharactere = (field, target) => {
		if (state[field].length < 3) {
			target.style.borderBottomColor = "var(--red-color)";
			setState({
				...state,
				[field]: "",
				touched: {
					...state.touched,
					[field]: { status: true, error: "minimum 3 caractères" },
				},
			});
		} else {
			target.style.borderBottomColor = "var(--green-color)";
			setState({
				...state,
				touched: { ...state.touched, [field]: { status: false } },
			});
		}
	};

	const handleBlur = (field) => (e) => {
		e.preventDefault();
		const target = e.target;
		if (state[field] === "") {
			target.style.borderBottomColor = "var(--red-color)";
			setState({
				...state,
				touched: { ...state.touched, [field]: { status: true } },
			});
		} else {
			target.style.borderBottomColor = "var(--green-color)";
			setState({
				...state,
				touched: { ...state.touched, [field]: { status: false } },
			});
		}
		switch (field) {
			case "firstname":
				errorCharactere(field, target);
				break;
			case "lastname":
				errorCharactere(field, target);
				break;

			default:
				target.style.borderBottomColor = "var(--black-color)";
				break;
		}
	};

	const FormError = ({ status, error }) => {
		return (
			<>
				{status === true && (
					<>
						<div className="form_validate">
							<AiFillInfoCircle style={{ color: "var(--red-color)" }} />
						</div>
						<div className="form_error">{error}</div>
					</>
				)}
				{status === false && (
					<div className="form_validate">
						<AiOutlineCheck style={{ color: "var(--green-color)" }} />
					</div>
				)}
			</>
		);
	};

	return (
		<form className="form_contact">
			<div className="row_form">
				<div className="form_group">
					<FormError
						status={state.touched.firstname.status}
						error={state.touched.firstname.error}
					/>
					<label htmlFor="firstname">Prenom</label>
					<input
						type="text"
						name="firstname"
						id="firstname"
						value={state.firstname}
						onChange={handleChange}
						onBlur={handleBlur("firstname")}
						onFocus={(e) => handleFocus("firstname", e)}
						required
					/>
				</div>
				<div className="form_group">
					<FormError
						status={state.touched.lastname.status}
						error={state.touched.lastname.error}
					/>
					<label htmlFor="lastname">Nom</label>
					<input
						type="text"
						name="lastname"
						id="lastname"
						value={state.lastname}
						onChange={handleChange}
						onBlur={handleBlur("lastname")}
						onFocus={(e) => handleFocus("lastname", e)}
						required
					/>
				</div>
			</div>
			<div className="row_form">
				<div className="form_group">
					<label htmlFor="phone">Tel</label>
					<input
						type="tel"
						name="phone"
						id="phone"
						value={state.phone}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form_group">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						value={state.email}
						onChange={handleChange}
						required
					/>
				</div>
			</div>
			<div className="form_group">
				<label htmlFor="objet">Objet</label>
				<input
					type="text"
					name="objet"
					id="objet"
					value={state.objet}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="row_form">
				<div className="form_control">
					<input
						type="checkbox"
						name="agree"
						id="agree"
						value={state.agree}
						onChange={handleChange}
					/>
					<label htmlFor="agree">pouvons nous vous contactez ?</label>
				</div>
				<div className="form_group">
					<select
						name="agreePick"
						id="pick"
						value={state.agreePick}
						onChange={handleChange}>
						<option value="tel">Tél</option>
						<option value="mail">Email</option>
					</select>
				</div>
			</div>
			<div className="form_group">
				<label htmlFor="message">message</label>
				<textarea
					value={state.message}
					onChange={handleChange}
					name="message"
					id="message"
					minLength="1"
					maxLength="510"
					required></textarea>
			</div>
			<div className="row_form">
				<button type="submit" className="btn valid_form">
					valider
				</button>
			</div>
		</form>
	);
};
