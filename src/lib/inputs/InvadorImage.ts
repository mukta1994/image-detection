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

}