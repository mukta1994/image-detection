import InputImage from './InputImage'

export default class RadarImage extends InputImage {
    
    constructor(image:string[][]){
        super(image)
    }

    /**
     * returns submatrix of radar image. It slices rows and columns
     * @param rowStart - index of row of radar image(the start position of slice horizontally)
     * @param colStart - index of column of radar image(the start position of slice verically)
     * @param rowEnd - index of row of radar image(the end position of slice horizontally)
     * @param colEnd - index of column of radar image(the end position of slice verically)
     */
    createSubMatrix(params: submatrix): string[][] {
        const { rowStart, colStart, rowEnd, colEnd } = params
        return this.image.slice(rowStart, rowStart + rowEnd).
            map((i: any) => i.slice(colStart, colStart + colEnd))
    }
 

}