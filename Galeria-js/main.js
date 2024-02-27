const fulImgBox = document.getElementById('fulImgBox')
const fulImg = document.getElementById('fulImg')

function abrirFulImg(ref){
    fulImgBox.style.display = 'flex';
    fulImg.src = ref
}

function closeImg(){
    fulImgBox.style.display = 'none';
}
