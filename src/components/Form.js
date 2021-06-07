// src/components/Form.js

import { useEffect, useState } from "react";
import Ingredient from "./Ingredient";

function Form() {
	var [list, setList] = useState(3);

	function submitForm(event) {
		event.preventDefault();
		var ingredients = [];

		event.target["ingredients[]"].forEach(ingredient => ingredients.push(ingredient.value));

		console.log({
			name: event.target["name"].value, 
			description: event.target["description"].value,
			ingredients
		});
	}

	function enterMagic(event) {
		if (event.code === "Enter") {
			setList(list + 1);
		}
	}

	useEffect(function() {
		var lastInput = [...document.querySelectorAll("fieldset input")].pop();
		lastInput?.focus();
	}, [list]);

	return (
		<form onSubmit={submitForm}>
			<div className="inputGroup">
				<label htmlFor="name">Name</label>
				<input type="text" id="name" name="name" />
			</div>
			<div className="inputGroup">
				<label htmlFor="description">Description</label>
				<textarea id="description" name="description"></textarea>
			</div>

			<fieldset>
				<legend>Ingredients</legend>
				<div>
					<button type="button" onClick={() => setList(list + 1)}>+</button>
					<button type="button" onClick={() => setList(list > 0 ? list - 1 : 0)}>-</button>
				</div>
				{[...Array(list)].map((dims, i) => list === i + 1 ? <Ingredient key={i} onKeyUp={enterMagic}/> : <Ingredient key={i} />)}
			</fieldset>

			<button type="submit">Save recipe</button>
		</form>
	);
}

export default Form;
