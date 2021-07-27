import { useEffect, useState } from "react";
import { TicketProps } from "../../componentes/ListaTickets/Ticket";

function useTickets(): Array<TicketProps>{
	let [contenido, setContenido] = useState([]);
	
	useEffect(() => {
		fetch("data/tickets.json")
			.then(response => response.json())
			.then(data => setContenido(data));
	}, []);

	return contenido;
}

export {useTickets};