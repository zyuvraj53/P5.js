var maxRange = 2; //we suppose that it will
var minRange = -2; //diverge beyond this point
var bailOutValue = 50;

function setup() {
    createCanvas(1536, 1536); //1536, 759 //1536, 864
    pixelDensity(1);
}

function draw() {
    loadPixels();
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {

            let real = map(x, 0, width, minRange, maxRange); //we create an x-axis
            let imag = map(y, 0, height, minRange, maxRange);//we create a  y-axis

            let c_real = real;
            let c_imag = imag;

            let no_of_iterations; //something to keep track of how many times we're iterating
            let max_iterations = 1000;
            let z = 0; //z from the function f(z) = z² + c;

            for (no_of_iterations = 0; no_of_iterations < max_iterations; no_of_iterations++) {
                let aa_minus_bb = real * real - imag * imag + c_real; //if z² = a² - b² + 2ab
                let two_ab = 2 * real * imag + c_imag;                //these are the above values

                real = aa_minus_bb;
                imag = two_ab;

                if (sqrt(real * real + imag * imag) <= 2) { // this is just an imagined inf 
                    break;
                }

                var bright = map(no_of_iterations, 0, max_iterations, 0, 255);
                //bright = map(sqrt(bright), 0, 1, 0, 255);//investigate

            }

            let pix = (x + y * width) * 4;
            pixels[pix + 0] = bright;
            pixels[pix + 1] = bright;
            pixels[pix + 2] = bright;
            pixels[pix + 3] = 255;
        }
    }
    updatePixels();
    noLoop();
}