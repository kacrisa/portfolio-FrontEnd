export class Proyectos {

    id? : number;
	nombreP : string;
	fechaP : string;
	descripcionP : string;
	imagenP : string;

    constructor(nombreP: string, fechaP: string, descripcionP: string, imagenP: string){
        this.nombreP = nombreP;
        this.fechaP = fechaP;
        this.descripcionP = descripcionP;
        this.imagenP = imagenP;

    }

}
