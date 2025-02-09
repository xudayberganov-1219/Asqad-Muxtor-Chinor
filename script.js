window.onload = function() {    
    setTimeout(function() {
        document.querySelector('.loading-screen').style.display = 'none';
        document.querySelector('.main-content').style.display = 'block';
    }, 10000); // 10 seconds
}

function downloadFile() {
    // Yuklab olinadigan fayl manzili va nomi
    var fileUrl = './63ecbc12b931e.pdf'; // Fayl yo'li
    var fileName = 'Chinor romani'; // Yuklab olinadigan fayl nomi

    var a = document.createElement('a');
    a.href = fileUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

