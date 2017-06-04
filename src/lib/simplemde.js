require('simplemde/dist/simplemde.min.css');
const Simplemde = require('simplemde/dist/simplemde.min');

const defaultOpt = {
    autoDownloadFontAwesome: false,
    spellChecker: false,
    status: false
}

export default createSimplemde = options => {
    const config = Object.assign({}, defaultOpt, typeof options === 'object' && options);
}

