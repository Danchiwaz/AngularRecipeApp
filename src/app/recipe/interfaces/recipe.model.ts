export class RecipeModel{
    public name:string;
    public description:string;
    public imagePath:string;

    constructor(name:string, descripton:string, imagePath:string){
        this.name = name;
        this.description = descripton;
        this.imagePath = imagePath;
    }
}