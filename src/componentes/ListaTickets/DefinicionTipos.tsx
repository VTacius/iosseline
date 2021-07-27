import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faPeopleCarry, faArchive, faAngleRight, faAngleUp, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

enum EstadoProp {
	NUEVO = 0,
	TRABAJANDO = 1,
	CERRADO = 10,
}

enum NivelProp {
	NORMAL = 0,
	ALTO = 1,
	EMERGENCIA = 10,
}

class Nivel {
	_icono: IconDefinition = faAngleRight;
	_valor: NivelProp = NivelProp.NORMAL;
	
	get valor () {
		return this._valor;
	}

	get icono () {
		return this._icono;
	}

	_asignador(valor: NivelProp){
		switch(valor){
			case NivelProp.NORMAL:
				this._icono = faAngleRight;
				this._valor = NivelProp.NORMAL;
				break;
			case NivelProp.ALTO:
				this._icono = faAngleUp;
				this._valor = NivelProp.ALTO;
				break;
			case NivelProp.EMERGENCIA:
				this._icono = faAngleDoubleUp;
				this._valor = NivelProp.EMERGENCIA;
				break;
			
		}
	}

	constructor(valor: NivelProp){
		this._asignador(valor);
	}

	set valor(valor: NivelProp){
		this._asignador(valor);
	}
}

class Estado {
	_icono: IconDefinition = faPlus;
	_valor: EstadoProp = EstadoProp.NUEVO;


	get valor() {
		return this._valor;
	}

	get icono() {
		return this._icono;
	}

	_asignador(valor: EstadoProp) {
		switch (valor) {
			case EstadoProp.NUEVO:
				this._valor = 0;
				this._icono = faPlus;
				break;
			case EstadoProp.TRABAJANDO:
				this._valor = 1;
				this._icono = faPeopleCarry;
				break;
			case EstadoProp.CERRADO:
				this._valor = 10;
				this._icono = faArchive;
				break;
		}

	}
	constructor(valor: EstadoProp) {
		this._asignador(valor);
	}

	set valor(valor: EstadoProp) {
		this._asignador(valor);
	}
}

export {EstadoProp, Estado, NivelProp, Nivel};