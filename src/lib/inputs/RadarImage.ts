import InputImage from './InputImage'

export default class RadarImage {

    radarImage : string[][]
    rows : number
    cols : number
    valid: boolean
   
    constructor(radar: InputImage) {
        this.radarImage = radar.image;
        this.rows = radar.getSize().rows  
        this.cols = radar.getSize().cols
        this.valid = radar.validateImage()
    }

    /**
     * returns submatrix of radar image. It slices rows and columns
     * @param rowStart - index of row of radar image(the start position of slice horizontally)
     * @param colStart - index of column of radar image(the start position of slice verically)
     * @param rowEnd - index of row of radar image(the end position of slice horizontally)
     * @param colEnd - index of column of radar image(the end position of slice verically)
     */
    createSubMatrix(rowStart:number,colStart:number, rowEnd:number,colEnd:number):string[][]{
        return this.radarImage.slice(rowStart, rowStart + rowEnd).
                               map((i: any) => i.slice(colStart, colStart + colEnd))
    }

}