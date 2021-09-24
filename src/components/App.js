
import '../styles/App.scss';
import '../styles/page.scss';
import initialData from '../data/data.json';


function App() {




  return (
    <div className="App">
      <h1>Mis clubs</h1>
      <ul></ul>
      <h2>Añadir un nuevo club</h2>
      <form action="">
        <label htmlFor="name">Nombre del club</label>
        <input type="text" name="name" />
        <label htmlFor="daily">¿Abre entre semana?</label>
        <input type="checkbox" name="daily" />
        <label htmlFor="weekend">¿Abre los fines de semana?</label>
        <input type="checkbox" name="weekend" />
        <input type="button" name="add" value="Añadir un nuevo club" />
      </form>
    </div>
  );
}

export default App;
