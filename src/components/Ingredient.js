// src/components/Ingredient.js

function Ingredient({onKeyUp}) {
	return (
		<div className="inputGroup">
			<input type="text" name="ingredients[]" onKeyUp={onKeyUp} onKeyDown={e => e.preventDefault()} />
		</div>
	);
}

export default Ingredient;
