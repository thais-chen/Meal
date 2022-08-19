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
            <div className="w-1/2">
                <input

                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                    
}
export default Dropdown;