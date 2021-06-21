import InputImage from './InputImage'

export default class InvadorImage {

    invadorImage: string[]
    rows: number
    cols: number
    valid: boolean

    constructor(invador: InputImage) {
        this.invadorImage = invador.image;
        this.rows = invador.getSize().rows
        this.cols = invador.getSize().cols
        this.valid = invador.validateImage()
    }


    //Representation how elements are compared.Consider we have 4*4 2 matrix. It is traversed as shown below while comparison
    // row wise                   column wise
    //  ---------------
    // |---->     <----|           - - - - -     
    // |               |           ^       ^      
    // |               |
    // |               |
    // |---->     <----|           - - - - -
    //  ---------------            ^       ^

    // ---------------
    // |               |                
    // |---->     <----|           - - - - -           
    // |               |             ^   ^
    // |---->     <----|           - - - - - 
    // |               |             ^   ^      
    //  ---------------

    //  ---------------
    // |               |       
    // |               |       
    // |---->     <----|           - - - - -       
    // |               |               ^     
    // |               |       
    //  ---------------
    /**
     * In this logic outer loop is called n/2 and inner loop is called n/2 times .
     * For each inner loop it compares element from top, bottom, left and right.
     * compare subimage(sub matrix) with invador, returns true if it matches else returns false.
     * @param subimage - submatrix of radar image which is to be compared with invador image
     * @param ignoreMismatches - number of mismatches allowed. This is compared with count.
     * Pictoria representation is shown above.
     */
    compareWithSubImg(subimage: string[], ignoreMismatches: number): any {
        let count: any = 0
        let totalRows = this.rows-1
        let totalCols = this.cols-1
        let midRow = Math.floor(subimage.length / 2)
        let midCol = Math.floor(subimage[0].length / 2)
        let mismatchCount = Math.floor(ignoreMismatches)

        for (let i = 0; i < midRow; i++) {  //O(n/2)
            let args = {'i':i,'subimage':subimage,
                        'count':count,
                        'midCol': midCol,
                        'ignoreMismatches':mismatchCount,
                        'rows':totalRows,
                        'cols':totalCols
                    }
            count = this.compareElements(args)

            if (this.isValidMatch(count, mismatchCount))
                return false
        }

        //this compares middle row elements when radar array has odd row length 
        if (subimage.length % 2 != 0) {
            let args = {'i':midRow,'subimage':subimage,
                        'count':count,
                        'midCol': midCol,
                        'ignoreMismatches':mismatchCount,
                        'rows':totalCols,
                        'cols':totalCols
                        }
            count = this.compareElements(args)

            if (this.isValidMatch(count, mismatchCount))
                return false
        }
        return true
    }

    //For each loop, column is validated from both sides where it can reduce half of loops
    compareElements(args:any) {
        const {i,subimage,midCol,ignoreMismatches,rows,cols} = args

        for (let j = 0; j < midCol; j++) { //O(n/2) 4 loops is reduced to 1 loop

            //compare element from top row and left column
            if (subimage[i][j] != this.invadorImage[i][j]) {
                if (this.isValidMatch(args.count, ignoreMismatches)) break;
                else args.count++
            }

            //compare element from top row and right column
            if (subimage[i][cols - j] != this.invadorImage[i][cols - j]) {
                if (this.isValidMatch(args.count, ignoreMismatches)) break;
                else args.count++
            }

            //compare element from bottom row and left column
            if (subimage[rows - i][j] != this.invadorImage[rows - i][j]) {
                if (this.isValidMatch(args.count, ignoreMismatches)) break;
                else args.count++
            }

            //compare element of bottom row and right column
            if (subimage[rows - i][cols - j] != this.invadorImage[rows - i][cols - j]) {
                if (this.isValidMatch(args.count, ignoreMismatches)) break;
                else args.count++
            }

            //this logic compares middle element of i'th row when invador array has odd column length 
            if (subimage[0].length % 2 != 0 && j == midCol - 1) {
                if (subimage[i][j + 1] != this.invadorImage[i][j + 1]) {
                    if (this.isValidMatch(args.count, ignoreMismatches)) break;
                    else args.count++
                }
            }
        }
        return args.count
    }

    isValidMatch(count: number, mismatches: number) {
        return count > mismatches
    }


    /**
     * Bruteforce approach.
     * compare subimage(sub matrix) with invador returns true if it matches else returns false. for loop is used 
     * count - whenever element at 'i' and 'j' position in subimage and invadorImage is mismatched count is incremented by 1
     * @argument {number} ignoreMismatches - number of mismatches allowed. This is compared with count.
     * @argument {string[]} subimage - submatrix of radar image which is to be compared with invador image
     */
    compareWithSubImg1(subimage: string[], ignoreMismatches: number): any {
        let count = 0
        for (let i = 0; i < subimage.length; i++) {
            for (let j = 0; j < subimage[0].length; j++) {
                if (subimage[i][j] != this.invadorImage[i][j]) {
                    count++
                }
                if (count > Math.floor(ignoreMismatches))
                    return false
            }
        }
        return true
    }


}