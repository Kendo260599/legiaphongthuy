function getCungPhi(year, gender) {
  const nam = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const nu = [5, 6, 7, 8, 9, 1, 2, 3, 4];

  let tong = 0;
  const digits = year.toString().split("").map(Number);
  digits.forEach((d) => (tong += d));

  while (tong > 9) {
    tong = tong.toString().split("").reduce((a, b) => a + parseInt(b), 0);
  }

  let cungSo;
  if (gender === "nam") cungSo = nam[tong - 1];
  else cungSo = nu[tong - 1];

  const cungMap = {
    1: { ten: "Khảm", hanh: "Thủy", huongTot: ["Bắc", "Đông", "Nam", "Đông Nam"] },
    2: { ten: "Khôn", hanh: "Thổ", huongTot: ["Tây", "Tây Nam", "Tây Bắc", "Đông Bắc"] },
    3: { ten: "Chấn", hanh: "Mộc", huongTot: ["Bắc", "Đông", "Nam", "Đông Nam"] },
    4: { ten: "Tốn", hanh: "Mộc", huongTot: ["Bắc", "Đông", "Nam", "Đông Nam"] },
    5: { ten: gender === "nam" ? "Cấn" : "Khôn", hanh: "Thổ", huongTot: gender === "nam" ? ["Tây", "Tây Nam", "Tây Bắc", "Đông Bắc"] : ["Tây", "Tây Nam", "Tây Bắc", "Đông Bắc"] },
    6: { ten: "Càn", hanh: "Kim", huongTot: ["Tây", "Tây Nam", "Tây Bắc", "Đông Bắc"] },
    7: { ten: "Đoài", hanh: "Kim", huongTot: ["Tây", "Tây Nam", "Tây Bắc", "Đông Bắc"] },
    8: { ten: "Cấn", hanh: "Thổ", huongTot: ["Tây", "Tây Nam", "Tây Bắc", "Đông Bắc"] },
    9: { ten: "Ly", hanh: "Hỏa", huongTot: ["Bắc", "Đông", "Nam", "Đông Nam"] },
  };

  return cungMap[cungSo];
}