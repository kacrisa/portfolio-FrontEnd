export class Experiencia {

    id? : number;
	posicionE : string;
	empresaE : string;
	dataE : string;
	descripcionE : string;
	imagenE : string;

    constructor(posicionE: string, empresaE: string, dataE: string, descripcionE: string, imagenE: string){
        this.posicionE = posicionE;
        this.empresaE = empresaE;
        this.dataE = dataE;
        this.descripcionE = descripcionE;
        this.imagenE = imagenE

    }
}



