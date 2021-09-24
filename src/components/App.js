
import '../styles/App.scss';
import '../styles/page.scss';
import { useState } from "react";
import initialData from '../data/data.json';


function App() {

  const [data, setData] = useState(initialData);
  const [nameClub , setNameClub] = useState('');
  const [openDaily , setOpenDaily] = useState(false);
  const [openWeekend , setOpenWeekend] = useState(false);
  const [searchClub , setSearchClub] = useState ('todos')

  const handleSubmit =(ev)=> ev.preventDefault();

  /*const handleDelete = (ev) => {
    const xButton = ev.currentTarget;
    const motherXButton = xButton.parentElement;
    const idClub =() =>
      data.findIndex((club)=>{
      motherXButton.id === 
    })
    if (motherXButton.id=== data.)
    
    
  }
  */


  const renderData =()=>{
    return data
    .filter((club) =>{
            
      if(searchClub === 'todos'){
        return data;
      }else if(searchClub === 'daily'){
        return club.openOnWeekdays === true;
      } else if(searchClub === 'weekend'){
        return club.openOnWeekend === true;
      }
      
    })
    .map((club, i)=>{
      return(
      <li key={i} id={i} className="grid__card">
        <div className="grid__card--close">X</div>
        <div>
          <h3>{`#${i}`}{club.name}</h3>
          <p>Abierto entre semana: {club.openOnWeekdays ? 'Sí' : 'No'}</p>
          <p>Abierto el fin de semana: {club.openOnWeekend ? 'Sí' : 'No'}</p>
        </div>
      </li>)
    }
    )
  } 

  const handleNewName = (ev) =>{
    setNameClub(ev.currentTarget.value);
  }
  const handleDaily = (ev) =>{
    setOpenDaily(ev.currentTarget.checked);
  }
  const handleWeekend = (ev) =>{
    setOpenWeekend(ev.currentTarget.checked);
  }

  const handleNewClub = () =>{
    const newClub = {
      "name": nameClub,
      "openOnWeekdays": openDaily,
      "openOnWeekend": openWeekend,
      
    };
    setData( [...data, newClub]);

    setNameClub('');
    setOpenDaily(false);
    setOpenWeekend(false);
    
  }
console.log(data);

const handleFilter = (ev) =>{
  setSearchClub(ev.target.value);

  
}
console.log(searchClub);

  return (
    <div className="App">
      <header className="header">
        <h1>Mis clubs</h1>
        <form>
          <label htmlFor='filter'>
            <select className="select" value={searchClub} onChange={handleFilter}>
              <option value="todos">todos</option>
              <option value="daily">los que abren entre semana</option>
              <option value="weekend">los que abren el fin de semana</option>
            </select>
          </label>
        </form>
      </header>
      <main>
        <section>
          <ul className="grid">{renderData()}</ul>
        </section>

        <aside>
          <h2>Añadir un nuevo club</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre del club</label>
            <input type="text" name="name" value={nameClub} onChange={handleNewName}/>
            <label htmlFor="daily">¿Abre entre semana?</label>
            <input type="checkbox" name="daily" checked={openDaily} onChange={handleDaily}/>
            <label htmlFor="weekend">¿Abre los fines de semana?</label>
            <input type="checkbox" name="weekend" checked={openWeekend} onChange={handleWeekend}/>
            <input type="button" name="add" value="Añadir un nuevo club" onClick={handleNewClub} />
        </form>
      </aside>
    </main>
  </div> 
);
}

export default App;
