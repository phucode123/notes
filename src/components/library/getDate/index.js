const today = new Date();

// Lấy ngày, tháng và năm
const day = String(today.getDate()).padStart(2, '0');
const month = String(today.getMonth() + 1).padStart(2, '0'); // Lưu ý: Tháng được đánh số từ 0 đến 11
const year = today.getFullYear();

// Tạo chuỗi định dạng "dd/mm/yyyy"
const formattedDate = `${day}/${month}/${year}`;

export default formattedDate;