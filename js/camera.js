const botaoiniciarCamera = document.querySelector('[data-video-botao]');
const campoCamera = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');
const botaoTirafoto = document.querySelector('[data-tirar-foto]');
const canvas = document.querySelector('[data-video-canvas]');
const mensagem = document.querySelector('[data-mensagem]');
const botaoEviarFoto = document.querySelector('[data-enviar]');

let imagemURL = '';

botaoiniciarCamera.addEventListener('click', async function(){
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false});

    botaoiniciarCamera.style.display = 'none';
    campoCamera.style.display = 'block';

    video.srcObject = iniciarVideo;
});

botaoTirafoto.addEventListener('click', function(){
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.Width, canvas.Height);

    imagemURL = canvas.toDataURL('image/jpeg');

    campoCamera.style.display = 'none';
    mensagem.style.display = 'block';
})

botaoEviarFoto.addEventListener('click', () =>{
    const receberDadosExistentes = localStorage.getItem('cadastro');
    const converteRetorno = JSON.parse(receberDadosExistentes);

    converteRetorno.imagem = imagemURL;

    localStorage.setItem('cadastro', JSON.stringify(converteRetorno));

    window.location.href = './abrir-conta-form-3.html';
})