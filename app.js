/*
  DOM là viết tắt của Document Object Model (Mô hình hướng đối tượng tài liệu).
  Dùng để truy xuất các tài liệu HTML/XML.
  DOM đại diện cho một tài liệu như là một cây cấu trúc dữ liệu, còn node thì đại diện cho một phần tử của DOM.
  Mỗi phần tử trên DOM tree là một node, mỗi test là một node, ngay cả comment cũng là một node.
  Lưu ý:
    - DOM không phải của Javascript, có thể dùng với các ngôn ngữ khác, chỉ đối với môi trường trình duyệt dùng javascript.
    - Ở mỗi env sẽ cung cấp các p/thức DOM # nhau. Vd: trình duyệt sẽ c/cấp cho các WEB APIs, còn NodeJS thì có thể dùng jsdom.
*/