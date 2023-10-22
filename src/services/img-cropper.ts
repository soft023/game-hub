import React from 'react'

const imgCropper = (imgurl:string) => {
 if (!imgurl) return '';
const target = 'media/';
const startIndex =  imgurl.indexOf(target) + target.length ;
return imgurl.slice(0,startIndex) + 'crop/600/400/' + imgurl.slice(startIndex);
     
}

export default imgCropper