import noImage from '../assets/no-image-placeholder-6f3882e0.webp'

const imgCropper = (imgurl:string) => {
 if (!imgurl) return noImage;
const target = 'media/';
const startIndex =  imgurl.indexOf(target) + target.length ;
return imgurl.slice(0,startIndex) + 'crop/600/400/' + imgurl.slice(startIndex);
     
}

export default imgCropper