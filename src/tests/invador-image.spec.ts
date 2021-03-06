import InvadorImage from '../../src/lib/inputs/InvadorImage'
import ConvertToMatrix from '../../src/lib/ConvertToMatrix'

const invador1 = ConvertToMatrix.processImage('src/imagefiles/invador1.txt')
const invador3 = ConvertToMatrix.processImage('src/imagefiles/invador3.txt')
const invador4 = ConvertToMatrix.processImage('src/imagefiles/invador4.txt')


describe('test subimage(sub matrix) compared with invador', () => {

    it('sub image comparison with invador with 100% accuracy(to be returned false)', () => {
      const invador = new InvadorImage(invador1)
      jest.spyOn(invador, 'compareWithSubImg')
      expect(invador.compareWithSubImg(invador4, 0)).toBe(false)
      expect(invador.compareWithSubImg).toHaveBeenCalledTimes(1)
    });
  
    it('sub image comparison with invador 100% accuracy', () => {
      const invador = new InvadorImage(invador1)
      jest.spyOn(invador, 'compareWithSubImg')
      expect(invador.compareWithSubImg(invador1, 0)).toBe(true)
      expect(invador.compareWithSubImg).toHaveBeenCalledTimes(1)
    });
  
    it('sub image comparison with invador when 3 mismatches are allowed', () => {
      const invador = new InvadorImage(invador1)
      jest.spyOn(invador, 'compareWithSubImg')
      expect(invador.compareWithSubImg(invador3, 3)).toBe(true)
      expect(invador.compareWithSubImg).toHaveBeenCalledTimes(1)
    });
    
    it('sub image comparison with invador when 2 mismatches are allowed(to be returned false)', () => {
      const invador = new InvadorImage(invador1)
      jest.spyOn(invador, 'compareWithSubImg')
      expect(invador.compareWithSubImg(invador3, 2)).toBe(false)
      expect(invador.compareWithSubImg).toHaveBeenCalledTimes(1)
    });
  });