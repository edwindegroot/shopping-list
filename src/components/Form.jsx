const Form = ({name, changeFunction, handleSubmit}) => {
    return(
      <form onSubmit={handleSubmit}>
         <label>
          Add item:
         <input value={name} type="text" name="name" onChange={changeFunction}/>
         </label>
        <input type="submit" value="Add" />
      </form>
    )
  }

export default Form