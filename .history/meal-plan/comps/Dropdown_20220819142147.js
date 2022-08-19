const Dropdown = (props) => {
    const ingredientList = props.ingredients.map((ingredient, index) => {
        return (
            <div key={index}>
                <p>{ingredient.name}</p>
            </div>
        )
    }
    )
    return (
        <div className="flex">
            
}
export default Dropdown;