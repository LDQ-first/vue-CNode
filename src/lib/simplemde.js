require('simplemde/dist/simplemde.min.css');
const Simplemde = require('simplemde/dist/simplemde.min');

const defaultOpt = {
    autoDownloadFontAwesome: false,
    autosave: {
        enable: true,
        uniqueId: 'MyUniqueID',
        delay: 1000
    },
    promptURLs: true,
    spellChecker: false,
	status: ["autosave", "lines", "words", "cursor"], 
}

export default addOpt => {
    const config = Object.assign({}, defaultOpt, typeof addOpt === 'object' && addOpt);
    return new Simplemde(config);
}

