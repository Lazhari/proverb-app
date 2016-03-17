var Excel = require('exceljs');

var workbook = new Excel.Workbook();

workbook.creator = "Me";
workbook.lastModifiedBy = "Her";
workbook.created = new Date(1985, 8, 30);
workbook.modified = new Date();

workbook.addWorksheet("My Sheet", "FFC000");

var worksheet = workbook.getWorksheet(1);
worksheet.mergeCells("A1:C1");
worksheet.getCell("C1").value = "Hello, World!";
worksheet.columns = [
    { header: "Id", key: "id", width: 10 },
    { header: "Name", key: "name", width: 32, style: { font: { name: "Arial Black", color: "FFFC000" } } },
    { header: "D.O.B.", key: "DOB", width: 10, style: { numFmt: "dd/mm/yyyy" } }
];

worksheet.addRow({id: 1, name: "John Doe", dob: new Date(1970,1,1)});
worksheet.addRow({id: 2, name: "Jane Doe", dob: new Date(1965,1,7)});

worksheet.getCell("A2").alignment = { vertical: "middle", horizontal: "center" };
worksheet.getCell("B2").alignment = { vertical: "middle", horizontal: "center" };
worksheet.getCell("C2").alignment = { vertical: "middle", horizontal: "center" };


worksheet.getCell("A2").fill = {
    type: "pattern",
    pattern:"darkTrellis",
    fgColor:{argb:"FFFFFF"},
    bgColor:{argb:"FF0000FF"}
};worksheet.getCell("B2").fill = {
    type: "pattern",
    pattern:"darkTrellis",
    fgColor:{argb:"FFFFFF"},
    bgColor:{argb:"FF0000FF"}
};worksheet.getCell("C2").fill = {
    type: "pattern",
    pattern:"darkTrellis",
    fgColor:{argb:"FFFFFF"},
    bgColor:{argb:"FF0000FF"}
};
workbook.xlsx.writeFile('text.xls')
    .then(function() {
        console.log('Done'); 
    });

