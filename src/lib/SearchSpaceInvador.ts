import RadarImage from '../lib/inputs/RadarImage'
import InvadorImage from '../lib/inputs/InvadorImage'

export default class SearchSpaceInvador {

    accuracy: number

    constructor(accuracyPerc: number) {
        this.accuracy = accuracyPerc
    }

    /**
     * checks whether images are valid. If spaceInv is greater than radar image, it thorws arror
     * @param radarImg - used to get size of radarImg
     * @param spaceInv - used to get size of spaceInv
     */
    areValidImages(radarImg: string[][], spaceInv: string[][]) {
        if (radarImg.length <= spaceInv.length - 1 || radarImg[0].length <= spaceInv[0].length - 1) {
            throw new Error("Radar image should be grater than invador")
        }
        else {
            return true
        }
    }


    /**
     * returns no. of invadors found in the radar image.
     * @param radar - image where invadors are searched
     * @param invador -  detected(searched) in radar image depending on the percentage of accuracy
     */
    getNumOfInvadorsFound(radar: RadarImage, invador: InvadorImage) {
        let radarImg = radar.valid ? radar.radarImage : [[]]
        let spaceInv = invador.valid ? invador.invadorImage : [[]]

        if (this.areValidImages(radarImg, spaceInv)) {
            let count = 0

            //which stores starting point of matched image
            let invadorsPosition: any = {}

            let ignoreMismatches = this.mismatchesTobeIgnored(spaceInv)

            let lengthOfRows = radar.rows - invador.rows + 1
            let lengthOfCols = radar.cols - invador.rows + 1

            for (let i = 0; i < lengthOfRows; i++) { //O(n)
                for (let j = 0; j < lengthOfCols; j++) {  //O(n)

                    let subimage = radar.createSubMatrix({ 'rowStart': i, 'colStart': j, 'rowEnd': invador.rows, 'colEnd': invador.cols})

                    //compareSubImg which checks whether subimage (sub matrix) matches with invador.
                    //Pictorial representation of how sub matrix and sub image is compared is shown in InvadorImage class
                    if (invador.compareWithSubImg(subimage, ignoreMismatches)) {
                        count++;
                        invadorsPosition[count] = { 'i': i, 'j': j }
                    }
                }
            }
            console.log("Position of invadors:", invadorsPosition)
            return count;
        }
    }

    /**
    * returns number of mismatches to be allowed and is calculated by using percentage of accuracy
    *  @param {string[]} spaceInv - mismatches to be ignored is calculated using spaceInv
    */
    mismatchesTobeIgnored(spaceInv: string[][]) {
        //comparisons - gets total number of comparisons to be made with subimage and invador 
        let comparisons = spaceInv[0].length * spaceInv.length

        //mismatchesIgnore - number of mismatches can be ignored when searching for invadors
        let mismatchesIgnore: number = ((100 - this.accuracy) / 100) * comparisons;

        return mismatchesIgnore;
    }


}


