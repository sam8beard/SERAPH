/* import * as FileSaver from 'file-saver';
import XLSX from 'sheetjs-style';

const ExportExcel = ({ excelData, fileName }) => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.x1sx';

    const exportToExcel = async () => {
    const ws = XLS.utils.json_to_sheet (excelData);
    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver. saveAs(data, fileName + fileExtension);
     */