  export  class Serie{
    id:number;
    nombre: String;
    channel: String;
    seasons:number;
    description:String;
    link:String;
    image:String;
    constructor(id:number, nombre:String, channel:String, seasons:number, description:String, link:String, image:String){
        this.id = id;
        this.nombre = nombre;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.image = image;
    }
}