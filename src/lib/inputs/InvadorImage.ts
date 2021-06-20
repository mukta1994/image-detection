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

     /**
     * compare subimage(sub matrix) with invador returns true if it matches else returns false. While loop is used 
     * count - whenever element at 'i' and 'j' position in subimage and invadorImage is mismatched count is incremented by 1
     * @argument {number} ignoreMismatches - number of mismatches allowed. This is compared with count.
     * @argument {string[]} subimage - submatrix of radar image which is to be compared with invador image
     */
    compareWithSubImg(subimage:string[], ignoreMismatches:number) {
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

     /**
     * compare subimage(sub matrix) with invador returns true if it matches else returns false. for loop is used 
     * count - whenever element at 'i' and 'j' position in subimage and invadorImage is mismatched count is incremented by 1
     * @argument {number} ignoreMismatches - number of mismatches allowed. This is compared with count.
     * @argument {string[]} subimage - submatrix of radar image which is to be compared with invador image
     */    compareSubImageUsingForLoop(subimage:string[], ignoreMismatches:number):any {
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