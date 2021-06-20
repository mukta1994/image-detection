import SearchSpaceInvador from '../../src/lib/SearchSpaceInvador'
import InputImage from '../../src/lib/inputs/InputImage'
import RadarImage from '../../src/lib/inputs/RadarImage'
import InvadorImage from '../../src/lib/inputs/InvadorImage'
import ConvertToMatrix from '../../src/lib/ConvertToMatrix'

const matrix1 = new ConvertToMatrix()

const exmpleRadarImage = matrix1.processImage('src/imagefiles/radarimage.txt')
const invador1 = matrix1.processImage('src/imagefiles/invador1.txt')
const invador2 = matrix1.processImage('src/imagefiles/invador2.txt')

const exmpleRadarImage2 = matrix1.processImage('src/imagefiles/test.txt')

const radarImg = new RadarImage(new InputImage(exmpleRadarImage))
const invadorImg = new InvadorImage(new InputImage(invador1))

const radarImg2 = new RadarImage(new InputImage(exmpleRadarImage2))
const invadorImg2 = new InvadorImage(new InputImage(invador2))

describe('validate inputs', () => {
  it("when image inputs are invalid", () => {
    const searchInvador = new SearchSpaceInvador(100)
    jest.spyOn(searchInvador, 'areValidImages')
    const t = () => {
      searchInvador.areValidImages(invador1, exmpleRadarImage)
    };
    expect(t).toThrow();
    expect(searchInvador.areValidImages).toHaveBeenCalledTimes(1)
  });

  it('when image inputs are valid', () => {
    const searchInvador = new SearchSpaceInvador(100)
    jest.spyOn(searchInvador, 'areValidImages')
    expect(searchInvador.areValidImages(exmpleRadarImage, invador1)).toBe(true)
    expect(searchInvador.areValidImages).toHaveBeenCalledTimes(1)
  });
});


describe('match invadors with different accuracy', () => {
  it('number of invador matches with 80% accuracy', () => {
    const searchInvador = new SearchSpaceInvador(80)
    jest.spyOn(searchInvador, 'getNumOfInvadorsFound')
    expect(searchInvador.getNumOfInvadorsFound(radarImg, invadorImg)).toEqual(3)
    expect(searchInvador.getNumOfInvadorsFound).toHaveBeenCalledTimes(1)
  });

  it('number of invador matches with 90% accuracy', () => {
    const searchInvador = new SearchSpaceInvador(90)
    jest.spyOn(searchInvador, 'getNumOfInvadorsFound')
    expect(searchInvador.getNumOfInvadorsFound(radarImg, invadorImg)).toEqual(1)
    expect(searchInvador.getNumOfInvadorsFound).toHaveBeenCalledTimes(1)
  });

  it('number of invador matches with 100% accuracy', () => {
    const searchInvador = new SearchSpaceInvador(100)
    jest.spyOn(searchInvador, 'getNumOfInvadorsFound')
    expect(searchInvador.getNumOfInvadorsFound(radarImg, invadorImg)).toEqual(0)
    expect(searchInvador.getNumOfInvadorsFound).toHaveBeenCalledTimes(1)
  });

  it('number of invador(different test image is passes) matches with  100% accuracy', () => {
    const searchInvador = new SearchSpaceInvador(100)
    jest.spyOn(searchInvador, 'getNumOfInvadorsFound')
    expect(searchInvador.getNumOfInvadorsFound(radarImg2, invadorImg2)).toEqual(3)
    expect(searchInvador.getNumOfInvadorsFound).toHaveBeenCalledTimes(1)
  });
});



describe.skip('test with small radars', () => {

  const smallradar = matrix1.processImage('src/imagefiles/smallradar.txt')
  const smallinv = matrix1.processImage('src/imagefiles/smallinv.txt')

  const radarImgSmall = new RadarImage(new InputImage(smallradar))
  const invadorImgSmall = new InvadorImage(new InputImage(smallinv))

  // testing with small radars
  it('number of invador matches with 100% accuracy', () => {
    const searchInvador = new SearchSpaceInvador(100)
    jest.spyOn(searchInvador, 'getNumOfInvadorsFound')
    expect(searchInvador.getNumOfInvadorsFound(radarImgSmall, invadorImgSmall)).toEqual(1)
    expect(searchInvador.getNumOfInvadorsFound).toHaveBeenCalledTimes(1)
  });

  it('number of invador matches with 95% accuracy', () => {
    const searchInvador = new SearchSpaceInvador(95)
    jest.spyOn(searchInvador, 'getNumOfInvadorsFound')
    expect(searchInvador.getNumOfInvadorsFound(radarImgSmall, invadorImgSmall)).toEqual(2)
    expect(searchInvador.getNumOfInvadorsFound).toHaveBeenCalledTimes(1)
  });

})






