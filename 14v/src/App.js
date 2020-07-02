import React from 'react';
import Fcomp from './Fcomp';

function App() {
  const users = [
    {
      name: 'John',
      age: 36
    },
    {
      name:'Jane',
      age:36
    }
  ]
  return (
    <div className="App">
      Hy
      <Fcomp users={users} />
    </div>

  );
}

export default App;
