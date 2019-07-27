function updateImage(event){
  let fileName = event.srcElement.elements.fileName.value;
  if(!fileName || !(/.*\.png/).test(fileName))
  return;
  document.getElementById('testImage').src = `../../imgs/${fileName}`;
}
