import RadarImage from '../../src/lib/inputs/RadarImage'
import ConvertToMatrix from '../../src/lib/ConvertToMatrix'

const invador1 = ConvertToMatrix.processImage('src/imagefiles/invador1.txt')

describe('create sub matrix from radar', () => {
  const expected = [['-', '-', 'o', 'o'], ['-', 'o', 'o', '-'], ['o', 'o', 'o', 'o']];
  const radar = new RadarImage(invador1)
  it('test sub matrix created', () => {
    let data = { 'rowStart': 2, 'colStart': 0, 'rowEnd': 3, 'colEnd': 4 }
    expect(radar.createSubMatrix(data)).toEqual(expect.arrayContaining(expected));
  });
})