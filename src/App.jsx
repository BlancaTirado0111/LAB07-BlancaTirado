//codigo de la 1ra parte
import './App.css';
import { Button } from './components/Button';

function App() {
  const buttonText = "Count : ";

  return (
    <>
      <h1>HOLA DESDE VITE</h1>
      <Button text={buttonText} />
    </>
  );
}

export default App;

//codigo de la 2da parte

/*import './App.css';
import { List } from './components/List';
import { WapperList } from './components/WapperList';

function App() {
  return (
    <>
      <WapperList>
      <List/>  
      </WapperList>
    </>
  )
}

export default App;
*/