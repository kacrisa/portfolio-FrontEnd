export class Persona{

    id?: number;
	nombre:String;
	apellido:String;
	ciudad:String;
    posicion:String;
	bio:String;
	image:String;
	backImage:String;
	
    constructor(nombre:string, apellido:String, ciudad:String, posicion:String, bio:String, image:String, backImage:String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.ciudad = ciudad;
        this.posicion = posicion;
        this.bio = bio;
        this.image = image;
        this.backImage = backImage;
    
    }

} 