function extractFile(text) {
    let structure = text.split('\\');
    let file = structure[structure.length -1];

    let index = file.lastIndexOf('.');

    let fileName = file.substring(0, index);
    let fileType = file.substring(index + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileType}`);

}

extractFile('C:\\Projects\\Data-Structures\\template.bak.pptx');