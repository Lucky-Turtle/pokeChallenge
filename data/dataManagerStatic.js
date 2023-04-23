import fs from 'fs';
import * as crypto from 'crypto';
const userPath = "./data/userList.json"
const pokePath = "./data/pokeList.json"

class DataManagerStatic {
    static userList = [];
    static pokeList = [];
    static uuidv4() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.webcrypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }

    static readFile (){
        this.userList = JSON.parse(fs.readFileSync(userPath, "utf8"))
        this.pokeList = JSON.parse(fs.readFileSync(pokePath, "utf8"))
    }
    static writeFile (){
       fs.writeFileSync(userPath, JSON.stringify(this.userList))
       fs.writeFileSync(pokePath, JSON.stringify(this.pokeList))
    }
}

 export default DataManagerStatic;