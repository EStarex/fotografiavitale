// Suponiendo que tienes un arreglo de URLs de imágenes para el catálogo
const images = [
    "https://www.bing.com/images/search?view=detailV2&ccid=rOxfKn5J&id=96BC29D0F8D7F6645A38DA6BA0B7431CD5F9DA4A&thid=OIP.rOxfKn5J51foNIwtZ0D0NAHaE8&mediaurl=https%3a%2f%2ffotochitabodas.com%2fwp-content%2fuploads%2f2017%2f02%2ffotochita-fotografia-de-boda-Valladolid-sesion-PostBoda-atardecer-1024px.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.acec5f2a7e49e757e8348c2d6740f434%3frik%3dStr51RxDt6Br2g%26pid%3dImgRaw%26r%3d0&exph=683&expw=1024&q=fotos&simid=608012351517568714&FORM=IRPRST&ck=31807DECCABECCEB94FE17FB2D920327&selectedIndex=1&itb=0&ajaxhist=0&ajaxserp=0",
    "https://www.bing.com/images/search?view=detailV2&ccid=YDvTz%2bSl&id=299D7B841556205908C0A070EC00D14F6853FABF&thid=OIP.YDvTz-SldwKqWsk-Il5ohwHaHa&mediaurl=https%3a%2f%2fwww.dzoom.org.es%2fwp-content%2fuploads%2f2015%2f12%2fretrato-navidad-768x768.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.603bd3cfe4a57702aa5ac93e225e6887%3frik%3dv%252fpTaE%252fRAOxwoA%26pid%3dImgRaw%26r%3d0&exph=768&expw=768&q=fotos&simid=608017780346459009&FORM=IRPRST&ck=36CFDDC15F913022B92A8E53F30FCF95&selectedIndex=17&itb=0&ajaxhist=0&ajaxserp=0",
    "https://www.bing.com/images/search?view=detailV2&ccid=cAj9ARfp&id=2FF55BBF10B9269AADF089D3D80C5659E2D3ACB6&thid=OIP.cAj9ARfpp7rGpFVG_MiV0AHaFm&mediaurl=https%3a%2f%2fwww.printanddream.com%2fwp-content%2fuploads%2f2021%2f06%2ffoto-3_1000x757.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.7008fd0117e9a7bac6a45546fcc895d0%3frik%3dtqzT4llWDNjTiQ%26pid%3dImgRaw%26r%3d0&exph=757&expw=1000&q=fotos+con+cuadro&simid=608023733186663821&FORM=IRPRST&ck=D7252EA7F14C1CBD03E25920E346200F&selectedIndex=10&itb=0&ajaxhist=0&ajaxserp=0",
    // Agrega más URLs de imágenes según sea necesario
];

const gallery = document.getElementById('gallery');

// Iterar sobre las imágenes y crear elementos <img> para cada una
images.forEach(imageUrl => {
    const img = document.createElement('img');
    img.src = imageUrl;
    gallery.appendChild(img);
});
// Este script puede ser utilizado para realizar validaciones adicionales del formulario antes de enviarlo, si es necesario.
// También puede ser utilizado para mostrar mensajes de éxito o error después de enviar el formulario.
// Por ejemplo:
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente
        // Aquí puedes agregar lógica para validar los campos del formulario antes de enviarlo
        // Después de validar, puedes enviar el formulario con JavaScript o usar AJAX para enviarlo sin recargar la página
        // Aquí un ejemplo simple de cómo enviar el formulario con JavaScript
        const formData = new FormData(form);
        // Puedes enviar los datos del formulario a través de fetch, axios u otra librería de tu elección
        fetch('enviar.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            // Aquí puedes manejar la respuesta del servidor después de enviar el formulario
            console.log('Respuesta del servidor:', response);
            // Por ejemplo, si el servidor devuelve un mensaje de éxito, puedes mostrar un mensaje al usuario
            // Si el servidor devuelve un mensaje de error, puedes mostrar un mensaje de error al usuario
        })
        .catch(error => {
            console.error('Error al enviar el formulario:', error);
            // Aquí puedes manejar errores que puedan ocurrir al enviar el formulario
        });
    });
});
function irACatalogo() {
    window.location.href = "catalogo.html";
}