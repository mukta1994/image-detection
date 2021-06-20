export default class InputImage {

    image : string[] 
   
    constructor(img:string[]) {
         this.image = img
    }

    //gets size of input image(2dimensional array)
    getSize() {
        if(!this.image.length || !this.image[0].length) 
            throw  Error()
        else{
            return {rows:this.image.length, cols:this.image[0].length}  
        }
    }

    //validate image. The image should contain only 'o' and '-'. If not return false
    validateImage() {
        let size = this.getSize()  
        for(let i = 0; i < size.rows; i++) {
            if(this.image[i].length > size.cols)
                return false
            for(let j = 0;j < size.cols; j++) {
                if(this.image[i][j] != 'o' && this.image[i][j] != '-')
                    throw new Error("image should contain only 'o' and '-' ")
            }
        }
        return true;
    }
}