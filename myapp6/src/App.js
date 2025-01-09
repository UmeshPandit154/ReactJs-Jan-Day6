//1. Import Area
import logo from './logo.svg';
import './App.css';

//1. import someDefaultImport from somelocation/somelibrary
import AComp1 from './components/AComp1';

//2. import { SomeNamedImport } from somelocation/somelibrary
import { BComp2 } from './components/BComp2';


//2. Function Defination Area
function App() {
  return (
    <div className="App">
       <AComp1 surname="pandit"/>
       <AComp1 surname="prajapati"/>
       <BComp2 surname="Devloper" />
    </div>
  );
}

export default App;

//3. Export Area
