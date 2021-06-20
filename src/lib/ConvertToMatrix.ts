import { readFileSync } from 'fs';

export default class ConvertToMatrix {

    constructor() {
    }
    /**
     * read text file to get data from file and that is converted to array.
     * @param {string} filePath - path to the text file, the text file to be converted to array
     */
     processImage( filePath:string):string[]{
        let imageArray:any[] = [];

        const file = readFileSync(filePath, 'utf-8');
        if(file.toString()!=''){
          let rows  = file.toString().split("\n");
          for (let i = 0; i < rows.length; i++) {
            if(rows[i]){
              var cells = rows[i].split("");
              imageArray.push( cells );
            }  
            }
            return imageArray;
        }
        else{
          throw new Error('empty file');
        }  
    }
}