const spreadsheetId = import.meta.env.VITE_SHEET_ID; // ใช้ Spreadsheet ID ที่เก็บใน .env
const range = "sheet1!A:E"; // เปลี่ยนเป็นช่วงที่คุณต้องการ
const apiKey = import.meta.env.VITE_API_KEY; // ใช้ API Key ที่เก็บใน .env
const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;
export const fetchData = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return transformData(data.values);
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

function transformData(data) {
  if (!data || data.length === 0) {
    return [];
  }
  const headers = data[0];
  return data.slice(1).map(row => {
    const obj = {};
    row.forEach((cell, index) => {
      obj[headers[index]] = cell;
    });
    return obj;
  });
}