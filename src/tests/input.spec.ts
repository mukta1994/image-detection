import InputImage from '../../src/lib/inputs/InputImage'
import ConvertToMatrix from '../../src/lib/ConvertToMatrix'

const exmpleRadarImage = ConvertToMatrix.processImage('src/imagefiles/file.txt')
const emptyFile = ConvertToMatrix.processImage('src/imagefiles/empty.txt')
const invador1 = ConvertToMatrix.processImage('src/imagefiles/invador1.txt')


 it('when empty txt file is passed it should throw error', () => {  
    const radarImg = new InputImage(emptyFile)
    jest.spyOn(radarImg, 'getSize')
    expect(() => radarImg.getSize()).toThrow()
    expect(radarImg.getSize).toHaveBeenCalledTimes(1)
  });


  it('should return number of rows and cols of input image', () => {  
    const radarImg = new InputImage(exmpleRadarImage)
    jest.spyOn(radarImg, 'getSize')
    expect(radarImg.getSize()).toEqual({rows:50,cols:100})  
    expect(radarImg.getSize).toHaveBeenCalledTimes(1)
  });
  

  it('check whether image is valid', () => {  
    const radarImg = new InputImage(invador1)
    jest.spyOn(radarImg, 'validateImage')
    expect(radarImg.validateImage()).toEqual(true)  
    expect(radarImg.validateImage).toHaveBeenCalledTimes(1)
  });