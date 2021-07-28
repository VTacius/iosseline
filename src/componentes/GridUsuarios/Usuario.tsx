import { ListaTickets } from './../ListaTickets/ListaTickets';
import { TicketProps } from './../ListaTickets/Ticket';

type UsuarioProps = {
    usuario: string,
    displayName: string,
    ticketes: Array<TicketProps>;
}

function Usuario({usuario, displayName, ticketes}: UsuarioProps){
   return (
      <div className="max-h-72 overflow-hidden">
        <figure className="flex items-center border-t-2 border-r-2 border-gray-100 ml-10 mt-4">
          <img className="w-10 -ml-8 -mt-4 rounded-full bg-gray-400" src="avatar/1.user-avatar.png" alt={`${usuario} avatar`} />
          <figcaption className="ml-3 text-bse text-ds-titulo font-muli">{displayName}</figcaption>
        </figure>
        <ListaTickets ticketes={ticketes}></ListaTickets>
      </div>
   ) 
}

export {Usuario};