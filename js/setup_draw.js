// var x_center   = -0.6;
// var y_center   = 0;
// var h          = 0.1;
// var iter       = 20;
// var zoom       = 2;
// var degree     = 2;
// var mousepos   = {
//     x: 0,
//     y: 0
// };

// function mult([a,b],[c,d]) {
//     return [a *c - b * d, a * d + b * c]
// }

// function m(n, a, b) {
//     prods = [a,b]
//     while (n > 1) {
//         prods = mult([a, b], prods)
//         n--
//     }
//     return prods
// }

// window.addEventListener('keydown', (event) => {
//     if (event.key == 'ArrowRight') {
//         x_center = x_center + h*zoom;
//         document.getElementById("center").innerHTML = "Center coordinates: ".concat('(', x_center, ', ', y_center, ')');
//     }

//     if (event.key == 'ArrowLeft') {
//         x_center = x_center - h*zoom;
//         document.getElementById("center").innerHTML = "Center coordinates: ".concat('(', x_center, ', ', y_center, ')');
//     }

//     if (event.key == 'ArrowUp') {
//         y_center = y_center - h*zoom;
//         document.getElementById("center").innerHTML = "Center coordinates: ".concat('(', x_center, ', ', y_center, ')');
//     }

//     if (event.key == 'ArrowDown') {
//         y_center = y_center + h*zoom;
//         document.getElementById("center").innerHTML = "Center coordinates: ".concat('(', x_center, ', ', y_center, ')');
//     }

//     if (event.key == ' ') {
//         iter = floor(iter * 2) ;
//         document.getElementById("iter").innerHTML = "Number of iterations: ".concat(iter);
//     }

//     if (event.key == 'b') {
//         iter = floor(iter * 0.5) ;
//         document.getElementById("iter").innerHTML = "Number of iterations: ".concat(iter);
//     }

//     if (event.key == 'q') {
//         zoom = zoom * 0.9 ;
//         document.getElementById("zoom").innerHTML = "Zoom: ".concat(zoom);
//     }

//     if (event.key == 'w') {
//         zoom = zoom * 10/9;
//         document.getElementById("zoom").innerHTML = "Zoom: ".concat(zoom);
//     }

//     if (event.key == 'o') {
//         degree ++;
//         document.getElementById("degree").innerHTML = "".concat('z^', degree, ' + c');
//     }

//     if (event.key == 'p' && degree > 1) {
//         degree --;
//         document.getElementById("degree").innerHTML = "".concat('z^', degree, ' + c');
//     }
    
// })

function setup() {
    var canvas = createCanvas(360, 360);
    canvas.parent('canvasHere')
    canvas.id = 'canvas-id';
    var rect = document.getElementById('defaultCanvas0').getBoundingClientRect();
    document.getElementById('defaultCanvas0').addEventListener('mousemove', (event) =>{
        if (event.ctrlKey == true) {
            mousepos = {
                x: map(event.clientX - rect.left, 0, width, x_center - zoom, x_center + zoom),
                y: map(event.clientY - rect.top, 0, height, y_center - zoom, y_center + zoom)
            }
            document.getElementById("c").innerHTML = "Constant for the Julia set: ".concat('(', mousepos.x,', ', mousepos.y, ')');
            
        }
    })
    pixelDensity(1);
}

function draw() {

loadPixels();
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {

            var a = map(x, 0, width, x_center - zoom, x_center + zoom);
            var b = map(y, 0, width, y_center - zoom, y_center + zoom);

            var ca = mousepos.x * mousepos.x - mousepos.y * mousepos.y;
            var cb = 2 * mousepos.x * mousepos.y;

            var n = 0;
            if (degree > 2) {
                while (n < iter) {
                    var aa = m(degree, a, b)[0]
                    var bb = m(degree, a, b)[1]
                    a = aa + ca;
                    b = bb + cb;
                    if (a * a + b * b > 8) {
                        break;
                    }
                    n++;
                }
            }

            else {
                while (n < iter) {
                    var aa = a * a - b * b;
                    var bb = 2 * a * b;
                    a = aa + ca;
                    b = bb + cb;
                    if (a * a + b * b > 8) {
                        break;
                    }
                    n++;
                }
            }
            var bright = map(n, 0, iter, 0, 1);
            bright = map(sqrt(bright), 0, 1, 0, 255);

            if (n == iter) {
            bright = 0;
            }

            var pix = (x + y * width) * 4;
            pixels[pix + 0] = bright*2%255;
            pixels[pix + 1] = bright/2%255;
            pixels[pix + 2] = bright*bright % 255;
            pixels[pix + 3] = 255;
        }
    }
    updatePixels();
}