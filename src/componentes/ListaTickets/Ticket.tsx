import { Definicion } from "./Definicion";
import { EstadoProp, NivelProp } from "./DefinicionTipos";

type UsuarioType = {
	mail: string,
	displayName: string
}

export type TicketProps = {
	id: number,
	fecha: String,
	estado: EstadoProp,
	nivel: NivelProp,
	mensaje: string,
	usuario: UsuarioType,
	localidad: string
}

function Ticket({fecha, estado, nivel, mensaje, usuario, localidad}: TicketProps){

  return (
    <div className="group px-2 pt-4 flex flex-col w-full">
      <time className="pl-3 text-sm font-font font-light hidden group-hover:block text-ds-titulo">{fecha}</time>
      <Definicion estado={estado} nivel={nivel} mensaje={mensaje} />
      <div>
        <p className="pl-14 text-sm font-roboto text-ds-titulo"><span className="font-medium">{usuario.displayName}</span> en <span className="italic">{localidad}</span></p>
      </div>
    </div>
  );
}

export { Ticket };