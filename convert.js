function convert() {
    // B1: lấy amount
    let amount = document.getElementById("amount").value;
    // B2: Lấy from, to
    let from = document.getElementById("form").value;
    let to = document.getElementById("to1").value;
    // B3: Tính tỷ giá rate=from/to
    let rate = from/to;
    // B4: tính kết quả result = amount*rate
    let result = amount*rate;
    // B5: Hiển thị kết quả
    document.getElementById("kq").innerText = result;
}
