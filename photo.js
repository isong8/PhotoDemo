class Photo {
    constructor(width =8, height=10){
        this.width = width;
        this.height = height;
    }
    price(){
        let finalPrice;

        if ((this.width == 8) && (this.height == 10)){
            finalPrice =4;
        } else {
            if ((this.width == 10) && (this.height == 12)){
                finalPrice = 6;
            } else {
                finalPrice = 10;
            }
        }
        return finalPrice;
    }
    toString(){
        return `This is a ${this.width} by ${this.height} photo and it costs ${this.price()}`;
    }
}

class MattedPhoto extends Photo {
    constructor(width, height, color) {
        super(width,height);
        this.color = color;
    }
    
    price() {
        const addedPrice = 10;
        return super.price() + addedPrice;
    }

    toString(){
        return `This is a ${this.width} by ${this.height} matted ${this.color} photo and it costs ${this.price()}`;
    }
}

class FramedPhoto extends Photo {
    constructor(width, height, material, style) {
        super(width,height);
        this.material = material;
        this.style = style;
    }
    price() {
        const addedPrice = 25;
        return super.price() + addedPrice;
    }

    toString(){
        return `This is a ${this.width} by ${this.height} with ${this.material}framed photo. The style is ${this.style} and it costs ${this.price()}`;
    }
}

let photo1 = new Photo();
console.log(photo1.toString());

let photo2 = new Photo(10,12);
console.log(photo2.toString());

let mattedPhoto = new MattedPhoto(10,12,"red");
console.log(mattedPhoto.toString());

let framedPhoto = new FramedPhoto(8,12,"silver","modern")