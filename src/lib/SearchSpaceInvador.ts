import RadarImage from '../lib/inputs/RadarImage'
import InvadorImage from '../lib/inputs/InvadorImage'

export default class SearchSpaceInvador {

    accuracy: number
    calls: number = 0
    fcalls: number = 0

    constructor(accuracyPerc: number) {
        this.accuracy = accuracyPerc
    }

    areValidImages(radarImg: string[], spaceInv: string[]) {
        if (radarImg.length <= spaceInv.length - 1 || radarImg[0].length <= spaceInv[0].length - 1) {
            throw new Error("Radar image should be grater than invador")
        }
        else {
            return true
        }
    }


    /**
     * returns no. of invadors found in the radar image.
     * @param {string[]} invador is detected depending on the percentage of accuracy
     * @param {object} invadorsPosition - which stores starting point of matched image
     * @param {number} ignoreMismatches - by taking the accuracy of the image to be detected, ignoreMismatches is calcuted(for ex 100% accuracy means mismatches must be 0)
     */
    getNumOfInvadorsFound(radar: RadarImage, invador: InvadorImage) {
        let radarImg = radar.valid ? radar.radarImage : []
        let spaceInv = invador.valid ? invador.invadorImage : []

        if (this.areValidImages(radarImg, spaceInv)) {
            let count = 0
            let invadorsPosition: any = {}
            let ignoreMismatches = this.mismatchesTobeIgnored(spaceInv)
            let lengthOfRows = radar.rows - invador.rows + 1
            let lengthOfCols = radar.cols - invador.rows + 1

            for (let i = 0; i < lengthOfRows; i++) {

                for (let j = 0; j < lengthOfCols; j++) {

                    let subimage = radar.createSubMatrix(i,j,invador.rows,invador.cols)

                    //compareSubImg which checks whether subimage (sub matrix) matches with invador
                    if (invador.compareWithSubImg(subimage, ignoreMismatches)) {
                        count++;
                        invadorsPosition[count] = { 'i': i, 'j': j }
                    }
                }
            }
            console.log(invadorsPosition)
            return count;
        }
    }

    /**
    * returns number of misatches to be allowed and is calculated by using percentage of accuracy
    *  @param {number} comparisons - gets total number of comparisons to be made with subimage and invador  
    *  @param {number} mismatchesIgnore - number of mismatches can be ignored when searching for invadors
    */
    mismatchesTobeIgnored(spaceInv: string[]) {
        let comparisons = spaceInv[0].length * spaceInv.length
        let mismatchesIgnore: number = ((100 - this.accuracy) / 100) * comparisons;
        return mismatchesIgnore;
    }

}


