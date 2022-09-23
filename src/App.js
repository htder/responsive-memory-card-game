import './App.css';
import Header from "./components/Header"
import Card from "./components/Card"

function App() {
  return (
    <div className="container">
      <Header/>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 rows-cols-lg-4 row-cols-xl-5'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
