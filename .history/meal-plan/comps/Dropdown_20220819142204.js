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
                    className="w-5/6 border-b-2 border-gray-400 focus:outline-none focus:border-gray-500"
                    
}
export default Dropdown;