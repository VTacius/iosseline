import './App.css';
import { ListaTickets } from './componentes/ListaTickets/ListaTickets';
import { useTickets } from './hooks/ListaTickets/useTickets';
import { GridUsuarios } from './componentes/GridUsuarios/GridUsuarios';

function App() {
  let ticketes = useTickets();
  return (
    <div className="w-full h-full grid grid-cols-9">
      <nav className="col-span-9">Menu</nav>
      <div className="col-span-2 max-h-full overflow-hidden flex flex-col">
        <h1 className="px-14 text-lg mb-2 font-muli font-semibold text-ds-texto">Tareas</h1>
        <ListaTickets ticketes={ticketes.slice(0, 19)}></ListaTickets>
      </div>
      <div className="col-span-7 max-h-full overflow-hidden">
        <h1 className="px-14 text-lg mb-2 font-muli font-semibold text-ds-texto">Técnicos</h1>
        <GridUsuarios ticketes={ticketes}></GridUsuarios>
      </div>
    </div>
  );
}

export default App;
