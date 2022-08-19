const Dropdown = (props) => {
    const ingredientList = props.ingredients.map((ingredient, index) => {
        return (
            <div key={index}>
                <p>{ingredient.name}</p>
            </div>
        )
    }
}
export default Dropdown;