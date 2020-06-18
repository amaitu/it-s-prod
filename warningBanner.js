var htmlString = '<div style="background-image: linear-gradient(45deg, #fff700 25%, #ff0000 25%, #ff0000 50%, #fff700 50%, #fff700 75%, #ff0000 75%, #ff0000 100%);\n' +
    'background-size: 56.57px 56.57px; color: white; font-size: 24px; font-weight: bold;">' +
    '<marquee><p style="background-color: black">⚠️ IT\'S PROD ⚠️</p></marquee>' +
    '</div>'

var div = document.createElement('div');
div.innerHTML = htmlString.trim();

document.body.insertBefore(div, document.body.firstChild);
