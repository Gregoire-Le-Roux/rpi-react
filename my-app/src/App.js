import './App.css';
// import BlueButton from './components/BlueButton';
// import Button from './components/Button';
import ShowBook from './components/ShowBook';

function App() {
  const data = [
    {
      title: "Premier Titre",
      description: "Première description"
    },
    {
      title: "Deuxième Titre",
      description: "Deuxième description"},
    {
      title: "Troisième Titre",}
  ]

  return (
    <div className="App">
      <h2>Let's get started!</h2>
      {/* <p><BlueButton></BlueButton></p>
      <p><Button></Button></p> */}
      {data.map((book, index) => (
        <ShowBook key={index} book={book} bookNumber={index+1}></ShowBook>
      ))}
    </div>
  );
}

export default App;
