const Dropdown = (props) => {
    const ingredientList = props.ingredients.map((ingredient, index) => {
        return (

                <option value = {ingredient}>{ingredient}</option>

        )
    }
    )
    return (
      <div className="flex">
        <div className="w-1/2">
          <select defaultMenuIsOpen>{ingredientList}</select>
        </div>
      </div>
    );

}
export default Dropdown;