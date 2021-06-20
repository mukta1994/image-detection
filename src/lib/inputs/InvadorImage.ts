import InputImage from './InputImage'

export default class InvadorImage {

    invadorImage : string[]
    rows : number
    cols : number
   
    constructor(radar: InputImage) {
        this.invadorImage = radar.image;
        this.rows = radar.getSize().rows  
        this.cols = radar.getSize().cols
        radar.validateImage()
    }

}