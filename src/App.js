import './App.css';
import { useEffect, useState } from 'react';
import Data from './components/Data';
import AddData from './components/AddData';
import Container from 'react-bootstrap/Container';


function App() {

  var [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => setUsers(data))
    .catch((err) => {
      console.log(err);
    });
    // console.log(users);
  };
 
  const Add = async (id, name, email, username, city, street, zipcode, phone, website) =>{
    console.log(id);
    const data = {
        id: users.length+1,
        name: name,
        email: email,
        username: username,
        address : {
          city: city,
          street: street,
          zipcode: zipcode,
        },
        phone : phone,
        website: website,
    }
    users.push(data);
    console.log(users);
  };

  const Delete = async (id) => {
    await fetch('https://jsonplaceholder.typicode.com/users/{id}', {
      method: "DELETE",
    })
    .then((res) => {
      if(res.status !== 200){
        return;
      }
      else{
        setUsers(
          users.filter((user) => {
            return user.id !== id;
          })
        )
      }
    })
    .catch((err) => {
      console.log(err);
    })
  };

  return (
    <div className="App">
      <h4 style={{color : "white", paddingTop : "50px"}}>API APP</h4><br></br>
      <hr style={{color : "white", marginLeft : "50px", marginRight : "50px"}}></hr>
      <Container style={{paddingBottom : "50px"}}>
        <AddData Add = {Add} users = {users}/>
        <Data id = {users.length} users = {users} Delete = {Delete} />
      </Container>
    </div>
  );
}

export default App;
