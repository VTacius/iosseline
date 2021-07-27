import { Ticket, TicketProps } from "./Ticket";

type ListaTicketsTypes = {
	ticketes: Array<TicketProps>
}

function ListaTickets({ ticketes }: ListaTicketsTypes) {
	return (
		<div className="max-h-full overflow-y-scroll">
			{ticketes.map(ticket => <Ticket key={ticket.id} {...ticket}></Ticket>)}
		</div>
	);
}

export { ListaTickets };