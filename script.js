document.getElementByid('imgInput').addEventlinstener('change', function (e) {
  conts file = e.target.files[0};
const previewImg = document.getElementByid('previewImg);
if (file) {
  const reader = new FileReader();
reader.onload = function (ev) {
}
