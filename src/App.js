import './App.css';
import Navbar from './components/misc/Navbar/Navbar';
import Counter from './components/misc/Counter/Counter';
import List from './components/misc/List/List';

function App() {
  const data = [
    {
      id: "1",
      title: "Termomix",
      img: "https://picsum.photos/id/230/200/125",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      id: "2",
      title: "PS5",
      img: "https://picsum.photos/id/220/200/125",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      id: "3",
      title: "PS3",
      img: "https://picsum.photos/id/210/200/125",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      id: "4",
      title: "Mango",
      img: "https://picsum.photos/id/211/200/125",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    }
  ]

  return (
    <div className="App">
      <Navbar />

      <h1 className="title">Counters</h1>
      <div className="container d-flex align-items-center justify-content-around">
        <Counter initialCount={0}/>
        <Counter initialCount={10}/>
        <Counter initialCount={10000}/>
      </div>
      
      <h1 className="title mt-5">List</h1>
      <div>
        <List data={data}/>
      </div>
    </div>
  );
}

export default App;
