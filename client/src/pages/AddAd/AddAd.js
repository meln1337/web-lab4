const AddAd = () => {

    return (
        <div className="container">
        <h2>Create ad</h2>
        <form>
            <div className="form-group">
              <label>Title</label>
              <input type="text" className="input" placeholder="Some title" />
            </div>
            <div className="form-group">
              <label>Example select</label>
              <select className="select">
                <option>Public</option>
                <option>Local</option>
              </select>
            </div>
            <div className="form-group">
              <label>Text</label>
              <textarea className="textarea" rows="9"></textarea>
            </div>
			<button type="submit" className="btn submit">Submit</button>
          </form>
    </div>
    )
}

export default AddAd