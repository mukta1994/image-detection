import InputImage from './InputImage'

export default class RadarImage {

    radarImage : string[]
    rows : number
    cols : number
    valid: boolean
   
    constructor(radar: InputImage) {
        this.radarImage = radar.image;
        this.rows = radar.getSize().rows  
        this.cols = radar.getSize().cols
        this.valid = radar.validateImage()
    }

    createSubMatrix(rowStart:number,colStart:number, rowEnd:number,colEnd:number):string[]{
        return this.radarImage.slice(rowStart, rowStart + rowEnd).
                               map((i: any) => i.slice(colStart, colStart + colEnd))
    }

}