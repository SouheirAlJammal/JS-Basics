
const stringSize = (text) => {

    let resut = text.length;
    return resut;
}
const replaceCharacterE = (text) => {
    return text.replace("e", " ");
}
const concatString = (text1, text2) => {
    let result = text1.concat(text2);
    return result;

}
const showChar5 = (text) => {

    let Char = text[4];
    return Char

}
const showChar9 = (text) => {

    return text.substring(0, 9)
}
const toCapitals = (text) => {
    return text.toUpperCase();

}
const toLowerCase = (text) => {
    return text.toLowerCase();

}
const removeSpaces = (text) => {
    return text.trim();
}
const IsString = (text) => {
    if (typeof text == "string") return true;
    else return false
}

const getExtension = (text) => {
    let i = text.indexOf('.');
    return text.substring(i + 1, text.length)

}
const countSpaces = (text) => {

    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") count++;
    }

    return count;

}
const InverseString = (text) => {
    let result = text.split('').reverse().join('');
    return result;

}

const power = (x, y) => {
let result=Math.pow(x,y);
return result;
}


const absoluteValue = (num) => {
let absoluteNbr=Math.abs(num);
return absoluteNbr;

}
const absoluteValueArray = (array) => {
    let absoluteArray=[];
    array.forEach(element => {
        absoluteArray.push(Math.abs(element));
        
    });
    return absoluteArray;

}
const circleSurface = (radius) => {
let circle_surface=Math.PI*radius*radius;
circle_surface=Math.round(circle_surface);
return circle_surface;

}
const hypothenuse = (ab, ac) => {
    let bc=Math.sqrt(Math.pow(ab,2) + Math.pow(ac,2));
    return bc;

}
const BMI = (weight, height) => {
    let bmi=weight / (height * height);
    bmi=Math.round(bmi*100)/100;
    return bmi;

}

const createLanguagesArray = () => {

}

const createNumbersArray = () => {

}

const replaceElement = (languages) => {

}

const addElement = (languages) => {

}

const addNumberElement = (numbers) => {

}

const removeFirst = (languages) => {

}

const removeLast = (languages) => {

}

const convertStrToArr = (social_arr) => {

}

const convertArrToStr = (languages) => {

}

const sortArr = (social_arr) => {

}

const invertArr = (social_arr) => {

}