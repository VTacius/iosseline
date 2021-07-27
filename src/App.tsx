import './App.css';
import { ListaTickets } from './componentes/ListaTickets/ListaTickets';
import { useTickets } from './hooks/ListaTickets/useTickets';

function App() {
  let ticketes = useTickets();
  return (
    <div className="w-full h-full grid grid-cols-5">
      <nav className="col-span-5">Menu</nav>
      <div className="col-span-2 max-h-full overflow-hidden flex flex-col">
        <h1 className="px-14 text-lg mb-2 font-muli font-semibold text-ds-texto">Tareas</h1>
        <ListaTickets ticketes={ticketes}></ListaTickets>
      </div>
      <div className="col-span-3 m">
        <h1 className="px-14 text-lg mb-2 font-muli font-semibold text-ds-texto">Técnicos</h1>

      </div>
    </div>
  );
}

export default App;
