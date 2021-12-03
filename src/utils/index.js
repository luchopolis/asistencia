const institution_initials = 'CSLH'


const generateCode = () => {
    const sufix = (new Date().getFullYear()).toString().slice(2)
    const getRandom = (Math.floor(Math.random() * (9999 - 0)) + 0).toString().padStart(4,'0');
    const code = institution_initials + getRandom + sufix
    return code
}

module.exports = { generateCode }