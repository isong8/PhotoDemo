import {Photo, MattedPhoto, FramedPhoto} from './photo.js';

let photo1 = new Photo();
console.log(photo1.toString());

let photo2 = new Photo(10,12);
console.log(photo2.toString());

let mattedPhoto = new MattedPhoto(10,12,"red");
console.log(mattedPhoto.toString());

let framedPhoto = new FramedPhoto(8,12,"silver","modern");
console.log(framedPhoto.toString());