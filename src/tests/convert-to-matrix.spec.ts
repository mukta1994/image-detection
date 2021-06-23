import ConvertToMatrix from '../../src/lib/ConvertToMatrix'

describe('convert text file data to array', () => {
      const expected = [['o','-'],['-','-']];

      it("test when empty file is passed ", () => {
        const t = () => {
          ConvertToMatrix.processImage('src/imagefiles/empty.txt')
        };
        expect(t).toThrow();
      });

      it('array created when non-empty txt file is passed', () => {
        expect(ConvertToMatrix.processImage('src/tests/testimage.txt')).toEqual(expect.arrayContaining(expected));
      });
    
})
