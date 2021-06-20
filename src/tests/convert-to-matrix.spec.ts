import ConvertToMatrix from '../../src/lib/ConvertToMatrix'

const matrix1 = new ConvertToMatrix()

describe('convert text file data to array', () => {

      test("Test empty file", () => {
        const t = () => {
            matrix1.processImage('src/imagefiles/empty.txt')
        };
        expect(t).toThrow();
      });
})
