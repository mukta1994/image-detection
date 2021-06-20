import ConvertToMatrix from '../../src/lib/ConvertToMatrix'

const matrix1 = new ConvertToMatrix()

describe('convert text file data to array', () => {
      const expected = [['o','-'],['-','-']];

      it("test when empty file is passed ", () => {
        const t = () => {
            matrix1.processImage('src/imagefiles/empty.txt')
        };
        expect(t).toThrow();
      });

      it('array created when non-empty txt file is passed', () => {
        expect(matrix1.processImage('src/tests/testimage.txt')).toEqual(expect.arrayContaining(expected));
      });
    
})
