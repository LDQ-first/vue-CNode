require('simplemde/dist/simplemde.min.css');
const Simplemde = require('simplemde/dist/simplemde.min');

const defaultOpt = {
    autoDownloadFontAwesome: false,
    spellChecker: false,
    status: false,
}

export default addOpt => {
    const config = Object.assign({}, defaultOpt, typeof addOpt === 'object' && addOpt);
    return new Simplemde(config);
}

