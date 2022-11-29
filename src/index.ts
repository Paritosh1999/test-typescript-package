export class log{
    static async yellow(message:any){
        console.log(`%c {messgae}`,`color:yellow`);
    }

    static async red(message:any){
        console.log(`%c {message}`,`color:red`);
    }


}

console.log("hi")