const fs = require('fs');
const pdfModule = require('pdf-parse');
const PDFParse = pdfModule.PDFParse;

const dataBuffer = fs.readFileSync('AI_Consulting_Systems_and_Risk.pdf');

const options = {
    data: dataBuffer
};

const parser = new PDFParse(options);
parser.getText().then(function (data) {
    console.log(data.text);
}).catch(function (error) {
    console.error('Error extracting text:', error);
});
