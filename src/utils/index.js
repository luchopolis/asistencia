const institution_initials = 'CSLH'
const teacher_initials = 'TEACH'
const randomstring = require('randomstring')
const randomLenght = 6


const generateCode = (teacher = false) => {
    const sufix = (new Date().getFullYear()).toString().slice(2)
    const getRandom = (Math.floor(Math.random() * (9999 - 0)) + 0).toString().padStart(4,'0');
    const prefi = (teacher) ? teacher_initials : institution_initials
    const code = prefi + getRandom + sufix
    return code
}

const convertToBoolean = (value) => (value == 0) ? false : true

const generateRegisterCode = () => {
    const code = randomstring.generate(randomLenght)
    return code
}

/*
* @param {Date} expiration
*/
const codeExpiration = (expiration) => {
    const today = new Date().getHours()
    const codeDate = new Date(expiration)
    console.log(codeDate);
 
    if(codeDate.getHours() > today ){
        return { expired: false }
    }
    return { expired: true } // the code expired
}

module.exports = { generateCode, convertToBoolean, generateRegisterCode, codeExpiration }