import InputImage from './InputImage'

export default class InvadorImage {

    invadorImage : string[]
    rows : number
    cols : number
    valid : boolean

    constructor(invador: InputImage) {
        this.invadorImage = invador.image;
        this.rows = invador.getSize().rows  
        this.cols = invador.getSize().cols
        this.valid = invador.validateImage()
    }

    // compare subimage(sub matrix) with invador returns true if it matches else returns false.
    //While loop is used 
    compareSubImg(subimage:string[], ignoreMismatches:number):any {
        let count = 0
        let i = 0

        while (i < subimage.length) {
            let j = 0;
            while (j < subimage[0].length) {
                if (subimage[i][j] != this.invadorImage[i][j]) {
                    count++
                }
                if (count > Math.floor(ignoreMismatches))
                    return false
                j++;
            }
            i++;
        }
        return true
    }

    //another logic using for loop to compare subimage(sub matrix) with invador returns true if it matches else returns false.
    compareSubImageUsingForLoop(subimage:string[], ignoreMismatches:number):any {
        let count = 0
        for (let i = 0; i < subimage.length; i++) {
            for (let j = 0; j < subimage[0].length; j++) {
                if (subimage[i][j] != this.invadorImage[i][j]) {
                    count++
                }
                if (count > Math.floor(ignoreMismatches))
                    return false
            }
        }
        return true
    }
}