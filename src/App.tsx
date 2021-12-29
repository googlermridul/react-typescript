import './App.css';
import Button from './components/Button';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';

function App() {
  const user = {
    first: 'John',
    last: 'Doe',
    age: 12
  }

  const users = [
    {
      first: 'pushpa',
      last: 'raj',
      age: 12
    },
    {
      first: 'samantha',
      last: 'akkhineni',
      age: 15
    },
    {
      first: 'allu',
      last: 'arjun',
      age: 17
    },
  ]

  return (
    <div className="App">
      <Greet name="Peter" isLoggedIn={true} />
      <Person user={user} />
      <PersonList users={users} />
      <Status status="error" />
      <Heading>children props</Heading>
      <Oscar>
        <Heading>passing component</Heading>
      </Oscar>
      <Button handleClick={(event) => console.log("clicked on button", event)} />
    </div>
  );
}

export default App;
