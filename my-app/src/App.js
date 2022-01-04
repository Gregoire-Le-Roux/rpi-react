import { useState } from 'react';
import './App.css';
import ShowBook from './components/ShowBook';
import FormBook from './components/FormBook';

function App() {
  const [data, setData] = useState([
    {
      title: "Premier Titre",
      description: "Première description"
    },
    {
      title: "Deuxième Titre",
      description: "Deuxième description"},
    {
      title: "Troisième Titre",}
  ])


  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <FormBook data={data} setData={setData}></FormBook>
      {data.map((book, index) => (
        <ShowBook key={index} book={book} bookNumber={index+1}></ShowBook>
      ))}
    </div>
  );
}

export default App;
