window.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowRight') {
        x_center = x_center + h*zoom;
        document.getElementById("center").innerHTML = "Center coordinates: ".concat('(', x_center, ', ', y_center, ')');
    }

    if (event.key == 'ArrowLeft') {
        x_center = x_center - h*zoom;
        document.getElementById("center").innerHTML = "Center coordinates: ".concat('(', x_center, ', ', y_center, ')');
    }

    if (event.key == 'ArrowUp') {
        y_center = y_center - h*zoom;
        document.getElementById("center").innerHTML = "Center coordinates: ".concat('(', x_center, ', ', y_center, ')');
    }

    if (event.key == 'ArrowDown') {
        y_center = y_center + h*zoom;
        document.getElementById("center").innerHTML = "Center coordinates: ".concat('(', x_center, ', ', y_center, ')');
    }

    if (event.key == ' ') {
        iter = floor(iter * 2) ;
        document.getElementById("iter").innerHTML = "Number of iterations: ".concat(iter);
    }

    if (event.key == 'b') {
        iter = floor(iter * 0.5) ;
        document.getElementById("iter").innerHTML = "Number of iterations: ".concat(iter);
    }

    if (event.key == 'q') {
        zoom = zoom * 0.9 ;
        document.getElementById("zoom").innerHTML = "Zoom: ".concat(zoom);
    }

    if (event.key == 'w') {
        zoom = zoom * 10/9;
        document.getElementById("zoom").innerHTML = "Zoom: ".concat(zoom);
    }

    if (event.key == 'o') {
        degree ++;
        document.getElementById("degree").innerHTML = "".concat('z^', degree, ' + c');
    }

    if (event.key == 'p' && degree > 1) {
        degree --;
        document.getElementById("degree").innerHTML = "".concat('z^', degree, ' + c');
    }
    
})