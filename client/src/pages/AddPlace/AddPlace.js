const AddPlace = () => {
    return (
        <div className="container">
        <h2>Create place</h2>
        <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="input add-place" placeholder="name" />
            </div>
			<button type="reset" className="btn submit add-place-submit">Submit</button>
          </form>
    </div>
    )
}

export default AddPlace