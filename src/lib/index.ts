import SearchSpaceInvador from '../lib/SearchSpaceInvador';
import ConvertToMatrix from '../lib/ConvertToMatrix';
import RadarImage from './inputs/RadarImage';
import InvadorImage from './inputs/InvadorImage';


const exmpleRadarImage = ConvertToMatrix.processImage('src/imagefiles/radarimage.txt')
const invadorImage = ConvertToMatrix.processImage('src/imagefiles/invador1.txt')

let search = new SearchSpaceInvador(90);

search.getNumOfInvadorsFound(new RadarImage(exmpleRadarImage),new InvadorImage(invadorImage));
