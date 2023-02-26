export class Educacion {

    id? : number;
	escuelaE : string;
	tituloE : string;
	dataE : string;
	descripcionE : string;
	imagenE : string;

    constructor(escuelaE: string, tituloE: string, dataE: string, descripcionE: string, imagenE: string){
        this.escuelaE = escuelaE;
        this.tituloE = tituloE;
        this.dataE = dataE;
        this.descripcionE = descripcionE;
        this.imagenE = imagenE

    }
}

