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


    //returns no. of invadors found in the radar image.
    //invador is detected depending on the percentage of accuracy
    //invadorsPosition - which stores starting point of matched image
    //ignoreMismatches - by taking the accuracy of the image to be detected, ignoreMismatches is calcuted(for ex 100% accuracy means mismatches must be 0.)
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

                    //subimage gets sub matrix of radar image of invador size. 
                    let subimage = radarImg.slice(i, i + invador.rows).map((i: any) => i.slice(j, j + invador.cols))

                    //compareSubImg which checks whether subimage (sub matrix) matches with invador
                    if (this.compareSubImg(subimage, spaceInv, ignoreMismatches)) {
                        count++;
                        invadorsPosition[count] = { 'i': i, 'j': j }
                    }
                }
            }
            console.log(invadorsPosition)
            return count;
        }
    }


    //No. of mimatches to be allowed is calculated by using percentage of accuracy
    mismatchesTobeIgnored(spaceInv: string[]) {
        let comparisons = spaceInv[0].length * spaceInv.length
        let mismatchesIgnore: number = ((100 - this.accuracy) / 100) * comparisons;
        return mismatchesIgnore;
    }


    // compare subimage(sub matrix) with invador returns true if it matches else returns false.
    //While loop is used 
    compareSubImg(subimage: string[], spaceInvador: string[], ignoreMismatches: number) {
        let count = 0
        let i = 0

        while (i < spaceInvador.length) {
            let j = 0;
            while (j < spaceInvador[0].length) {
                this.calls++
                if (subimage[i][j] != spaceInvador[i][j]) {
                    count++
                }
                if (count > Math.floor(ignoreMismatches))
                    return false
                j++;
            }
            i++;
        }
        return true
    }


    //another logic using for loop to compare subimage(sub matrix) with invador returns true if it matches else returns false.
    compareSubImageUsingForLoop(subimage: string[], spaceInvador: string[], ignoreMismatches: number) {
        let count = 0
        for (let i = 0; i < subimage.length; i++) {
            for (let j = 0; j < subimage[0].length; j++) {
                if (subimage[i][j] != spaceInvador[i][j]) {
                    count++
                }
                if (count > Math.floor(ignoreMismatches))
                    return false
            }
        }
        return true
    }
}

