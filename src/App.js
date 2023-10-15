import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  const people = [{id: 12, name: 'Creola Katherine Johnson', profession: 'mathematician'},
                 {id: 1, name: 'Mario José Molina-Pasquel Henríquez', profession: 'chemist'},
                 {id: 2, name: 'Mohammad Abdus Salam', profession: 'physicist'},
                 {id: 3, name: 'Percy Lavon Julian', profession: 'chemist'},
                 {id: 4, name: 'Subrahmanyan Chandrasekhar',profession: 'astrophysicist'}];
  return (
    <div>
      <h1>A Fancy Table</h1>
     <table className="table">
              <th>Id</th>
              <th>Name</th>
              <th>Profession</th>
              {
                people.map((peop)=>
                  <tr className="tr" key={peop.id}>
                  <td>{peop.id}</td>
                  <td>{peop.name}</td>
                  <td>{peop.profession}</td>
                </tr>
                )
              }
            </table>
    </div>
  )
}

export default App;
