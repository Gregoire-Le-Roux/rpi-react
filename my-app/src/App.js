import './App.css';
import BlueButton from './components/BlueButton';
import Button from './components/Button';
import ShowData from './components/ShowData';

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
      title: "Troisième Titre",
      description: "Troisième description"}
  ]

  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <p><BlueButton></BlueButton></p>
      <p><Button></Button></p>
      <ShowData data={data}></ShowData>
    </div>
  );
}

export default App;
