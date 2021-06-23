export default class InputImage {

    image: string[][]
    rows: number
    cols: number
    valid: boolean

    constructor(img: string[][]) {
        this.image = img
        this.rows = this.getRows()
        this.cols = this.getCols()
        this.valid = this.validateImage()
    }

    //gets size of input image(2dimensional array number of rows and columns)
    getSize() {
        if (!this.image.length || !this.image[0].length)
            throw Error()
        else {
            return { rows: this.image.length, cols: this.image[0].length }
        }
    }

    getRows() {
        if (!this.image.length)
            throw Error()
        else {
            return this.image.length
        }
    }

    getCols() {
        if (!this.image[0].length)
            throw Error()
        else {
            return this.image[0].length
        }
    }

    //validate image. The image should contain only 'o' and '-'. If not return false
    validateImage() {
        let size = this.getSize()
        for (let i = 0; i < size.rows; i++) {
            if (this.image[i].length > size.cols)
                return false
            for (let j = 0; j < size.cols; j++) {
                if (this.image[i][j] != 'o' && this.image[i][j] != '-')
                    return false
            }
        }
        return true;
    }
}