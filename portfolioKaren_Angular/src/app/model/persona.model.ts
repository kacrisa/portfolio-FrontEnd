export class Persona{

    id?: number;
	nombre:string;
	apellido:string;
	ciudad:string;
    posicion:string;
	bio:string;
	image:string;
	backImage:string;
	
    constructor(nombre:string, apellido:string, ciudad:string, posicion:string, bio:string, image:string, backImage:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.ciudad = ciudad;
        this.posicion = posicion;
        this.bio = bio;
        this.image = image;
        this.backImage = backImage;
    
    }

} 