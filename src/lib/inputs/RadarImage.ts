import InputImage from './InputImage'

export default class RadarImage {

    radarImage : string[]
    rows : number
    cols : number
   
    constructor(radar: InputImage) {
        this.radarImage = radar.image;
        this.rows = radar.getSize().rows  
        this.cols = radar.getSize().cols
        radar.validateImage()
    }

}