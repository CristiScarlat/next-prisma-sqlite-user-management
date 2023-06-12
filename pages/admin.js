


const Admin = () => {

  const handleOnSubmit = (e) => {
      e.preventDefault();

  }

  return(
    <div>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="admin-form-user">Username</label>
          <input type="text" name="username"/>
        </div>
        <div>
          <label htmlFor="admin-form-pass">Password</label>
          <input type="password" name="password"/>
        </div>
      </form>
    </div>
  )
}

export default Admin;