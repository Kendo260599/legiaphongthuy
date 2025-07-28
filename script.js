const can = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];
const chi = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];

document.getElementById("birthForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const birthday = new Date(document.getElementById("birthday").value);
  const hour = parseInt(document.getElementById("hour").value);

  const year = birthday.getFullYear();
  const yearCan = can[(year + 6) % 10];
  const yearChi = chi[(year + 8) % 12];

  const lunarYear = `${yearCan} ${yearChi}`;
  const gioChi = chi[Math.floor(hour / 2) % 12];

  const resultBox = document.getElementById("result");
  resultBox.innerHTML = `
    <h2>Kết quả</h2>
    <p><strong>Năm sinh (Can Chi):</strong> ${lunarYear}</p>
    <p><strong>Giờ sinh (Chi):</strong> ${gioChi}</p>
    <p><strong>Tứ trụ (giản lược):</strong><br>
    Năm: ${lunarYear}<br>
    Tháng: (cần xác định qua tiết khí)<br>
    Ngày: (tính từ lịch âm hoặc API)<br>
    Giờ: ${gioChi}</p>
    <p><em>(Đây là bản cơ bản, có thể nâng cấp theo yêu cầu.)</em></p>
  `;
});