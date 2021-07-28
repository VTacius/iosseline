import { Usuario } from './../GridUsuarios/Usuario';
import { TicketProps } from "./../ListaTickets/Ticket";

type GridUsuariosProps = {
	ticketes: Array<TicketProps>
}

function GridUsuarios({ticketes}: GridUsuariosProps) {
    return (
        <div className="max-h-full overflow-y-scroll grid grid-cols-3 gap-5 px-8">
            <Usuario displayName="Tamara Abigaíl Ordoñez" usuario="alortiz" ticketes={ticketes.slice(20, 31)}></Usuario>
            <Usuario displayName="Tamara Abigaíl Ordoñez" usuario="alortiz" ticketes={ticketes.slice(20, 31)}></Usuario>
            <Usuario displayName="Tamara Abigaíl Ordoñez" usuario="alortiz" ticketes={ticketes.slice(20, 31)}></Usuario>
            <Usuario displayName="Tamara Abigaíl Ordoñez" usuario="alortiz" ticketes={ticketes.slice(20, 31)}></Usuario>
            <Usuario displayName="Tamara Abigaíl Ordoñez" usuario="alortiz" ticketes={ticketes.slice(20, 31)}></Usuario>
            <Usuario displayName="Tamara Abigaíl Ordoñez" usuario="alortiz" ticketes={ticketes.slice(20, 31)}></Usuario>
        </div>
    )
}

export { GridUsuarios };
