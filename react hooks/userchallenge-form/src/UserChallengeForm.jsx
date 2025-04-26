import { useState } from "react";

const UserChallengeForm = () => {
  const [users,setusers]= useState([])
  const [name,setname] = useState('')
  const handleSubmit =(e) =>{
    e.preventDefault()
    console.log(name)
    setusers((user)=>[...user,name])
    console.log(users)
    setname('')
  }
  const RemoveUser = (name) =>{
    console.log(name)
    const newusers = users.filter((person)=>(person !== name))
    console.log(newusers)
    setusers(newusers)
  }
    return (
      <div>
        <form className='form'>
          <h4>Add User</h4>
          <div className='form-row'>
            <label htmlFor='name' value={name} className='form-label'>
              name
            </label>
            <input type='text' className='form-input' id='name' onChange={(e)=>setname(e.target.value)} />
          </div>
  
          <button type='submit' className='btn btn-block' onClick={handleSubmit} >
            submit
          </button >
        </form>
        {/* render users below */}
        <h1>Users</h1>
        <ul className="Users">
            {users.map((user)=>{
                
                return (
                    <div>
                    <li key={user.name} className="user">{user}</li>
                    <button onClick={()=>RemoveUser(user)}>Remove</button>
                    </div>

                )
            })}
        </ul>
      </div>
    );
  };
  export default UserChallengeForm;