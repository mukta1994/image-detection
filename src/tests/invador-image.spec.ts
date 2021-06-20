import InputImage from '../../src/lib/inputs/InputImage'
import InvadorImage from '../../src/lib/inputs/InvadorImage'
import ConvertToMatrix from '../../src/lib/ConvertToMatrix'

const matrix1 = new ConvertToMatrix()

const invador1 = matrix1.processImage('src/imagefiles/invador1.txt')
const invador3 = matrix1.processImage('src/imagefiles/invador3.txt')
const invador4 = matrix1.processImage('src/imagefiles/invador4.txt')


describe('test subimage(sub matrix) compared with invador', () => {

    //test case when subimage is 100% accurately compared with another image
    // but here 2 different images(just one mismatch) are passed. so it should show false.
    it('sub image comparison with invador', () => {
      //const invador = new InvadorImage(new InputImage(invador4))
      const invador = new InvadorImage(new InputImage(invador1))
      jest.spyOn(invador, 'compareWithSubImg')
      expect(invador.compareWithSubImg(invador4, 0)).toBe(false)
      expect(invador.compareWithSubImg).toHaveBeenCalledTimes(1)
    });
  
    //test case when subimage is 100% accurately compared with another image.
    it('sub image comparison with invador', () => {
      const invador = new InvadorImage(new InputImage(invador1))
      jest.spyOn(invador, 'compareWithSubImg')
      expect(invador.compareWithSubImg(invador1, 0)).toBe(true)
      expect(invador.compareWithSubImg).toHaveBeenCalledTimes(1)
    });
  
    //in test images there are 3 mimatches and 3 mismatches are allowed in test case. So it should show true
    it('sub image comparison with invador when 3 mismatches are allowed', () => {
      const invador = new InvadorImage(new InputImage(invador1))
      jest.spyOn(invador, 'compareWithSubImg')
      expect(invador.compareWithSubImg(invador3, 3)).toBe(true)
      expect(invador.compareWithSubImg).toHaveBeenCalledTimes(1)
    });
  
    //in test images there are 3 misatches but only 2 mismatches are allowed. So it should show false
    it('sub image comparison with invador when 2 mismatches are allowed', () => {
      const invador = new InvadorImage(new InputImage(invador1))
      jest.spyOn(invador, 'compareWithSubImg')
      expect(invador.compareWithSubImg(invador3, 2)).toBe(false)
      expect(invador.compareWithSubImg).toHaveBeenCalledTimes(1)
    });
  });