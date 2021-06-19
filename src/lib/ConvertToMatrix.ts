import { readFileSync } from 'fs';

export default class ConvertToMatrix {

   //read text file to get data from file and that is converted to array.
    static fs: any = require('fs');
    static processImage( filePath:string): string[] {
        let image:any[] = [];

        const file = readFileSync(filePath, 'utf-8');
        let rows  = file.toString().split("\n");
            
        for (let i = 0; i < rows.length; i++) {
            var cells = rows[i].split("");
            image.push( cells );
          }
        return image;
    }
}