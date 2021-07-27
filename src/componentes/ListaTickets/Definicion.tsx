import { Estado, EstadoProp, Nivel, NivelProp } from './DefinicionTipos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';


export type DefinicionProps = {
	estado: EstadoProp
	nivel: NivelProp
	mensaje: string
}

function Definicion({ estado, nivel, mensaje }: DefinicionProps) {
	let [status, setStatus] = useState(new Estado(estado));
	let [level, setLevel]  = useState(new Nivel(nivel))
	
	return (
		<div className="">
			<p className="flex items-center w-full text-ds-texto text-base font-muli font-semibold">
				<span className="mr-1 flex-grow-0"><FontAwesomeIcon icon={level.icono} size="lg" fixedWidth></FontAwesomeIcon></span>
				<span className="mr-1 flex-grow-0"><FontAwesomeIcon icon={status.icono} fixedWidth></FontAwesomeIcon></span>
				<span className="flex-1 whitespace-nowrap truncate">{mensaje}</span>
			</p>
		</div>
	);
}

export { Definicion, EstadoProp, NivelProp };