import InputImage from '../../src/lib/inputs/InputImage'
import ConvertToMatrix from '../../src/lib/ConvertToMatrix'

const matrix1 = new ConvertToMatrix()

const exmpleRadarImage = matrix1.processImage('src/imagefiles/radarimage.txt')
const invador1 = matrix1.processImage('src/imagefiles/invador1.txt')
const invalidImage = matrix1.processImage('src/imagefiles/invalidimage.txt')


  it('test to return number of rows and cols of input image', () => {  
    const radarImg = new InputImage(exmpleRadarImage)
    jest.spyOn(radarImg, 'getSize')
    expect(radarImg.getSize()).toEqual({rows:50,cols:100})  
    expect(radarImg.getSize).toHaveBeenCalledTimes(1)
  });
  

  it('test when image is valid', () => {  
    const radarImg = new InputImage(invador1)
    jest.spyOn(radarImg, 'validateImage')
    expect(radarImg.validateImage()).toEqual(true)  
    expect(radarImg.validateImage).toHaveBeenCalledTimes(1)
  });


  it('test when image is invalid', () => {  
    const radarImg = new InputImage(invalidImage)
    jest.spyOn(radarImg, 'validateImage')
    const t = () => {
      radarImg.validateImage()
    };
    expect(t).toThrow();
    expect(radarImg.validateImage).toHaveBeenCalledTimes(1)
  });