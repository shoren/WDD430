export class Document{

    public id: string;
    public name: string;
    public description: any;
    public url: string;
    public children: string;
    
    
    constructor(id: string, name: string, description: any, url: string, children: string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.url = url;
        this.children = children;
    }  
}