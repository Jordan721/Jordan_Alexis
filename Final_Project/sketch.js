/*
Final Project - Interactive Orbit Control
Jordan Alexis
*/

// Serial port variables
var serial;
var portName = "COM16";
var sensorValue = 512;
var sensorValue2 = 512;
var inMessage = [0, 0];

// Interactive control variables
var camX = 0;
var camY = 0;
var rotationSpeedMultiplier = 1;
var isPaused = false;
var shapeMode = 'mixed';
var colorScheme = 'default';
var currentColorIndex = 0;
var backgroundMusic;
var isMusicPlaying = false;
var hoverColorEffect = true;
var mouseHue = 0;

// Color schemes
var colorSchemes = {
    default: { color1: 'white', color2: 'teal' },
    neon: { color1: '#ff00ff', color2: '#00ffff' },
    rainbow: { color1: '#ff0080', color2: '#00ff80' },
    monochrome: { color1: '#ffffff', color2: '#888888' }
};

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.parent('canvas-container');
    rectMode(CENTER);
    colorMode(HSB, 360, 100, 100, 100);

    // Try to setup serial port (will fail silently if not available)
    try {
        serial = new p5.SerialPort();
        serial.on('connected', serverConnected);
        serial.on('open', portOpen);
        serial.on('data', serialEvent);
        serial.on('error', serialError);
        serial.on('close', portClose);
        serial.open(portName);
    } catch (e) {
        console.log('Serial port not available, using mouse/keyboard controls');
    }

    setupEventListeners();
}

function setupEventListeners() {
    // Get background music element
    backgroundMusic = document.getElementById('backgroundMusic');

    // Toggle UI visibility
    var toggleUIBtn = document.getElementById('toggleUI');
    var mainContent = document.getElementById('mainContent');
    var isUIVisible = true;

    toggleUIBtn.addEventListener('click', function () {
        isUIVisible = !isUIVisible;
        if (isUIVisible) {
            mainContent.classList.remove('hidden');
            this.textContent = 'Hide UI';
            this.classList.remove('hidden-state');
        } else {
            mainContent.classList.add('hidden');
            this.textContent = 'Show UI';
            this.classList.add('hidden-state');
        }
    });

    // About Project Modal
    var modal = document.getElementById('aboutModal');
    var aboutBtn = document.getElementById('aboutProject');
    var closeBtn = document.getElementsByClassName('close')[0];

    aboutBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Toggle music button
    document.getElementById('toggleMusic').addEventListener('click', function () {
        if (isMusicPlaying) {
            backgroundMusic.pause();
            this.textContent = 'Play Music';
            isMusicPlaying = false;
        } else {
            backgroundMusic.play();
            this.textContent = 'Pause Music';
            isMusicPlaying = true;
        }
    });

    // Toggle rotation button
    document.getElementById('toggleRotation').addEventListener('click', function () {
        isPaused = !isPaused;
        this.textContent = isPaused ? 'Resume Rotation' : 'Pause Rotation';
    });

    // Reset view button
    document.getElementById('resetView').addEventListener('click', function () {
        camX = 0;
        camY = 0;
        sensorValue = 512;
        sensorValue2 = 512;
        rotationSpeedMultiplier = 1;
        document.getElementById('rotationSpeed').value = 2;
        document.getElementById('speedValue').textContent = '2x';
    });

    // Random colors button
    document.getElementById('randomColors').addEventListener('click', function () {
        var schemes = Object.keys(colorSchemes);
        currentColorIndex = (currentColorIndex + 1) % schemes.length;
        colorScheme = schemes[currentColorIndex];
        document.getElementById('colorScheme').value = colorScheme;
    });

    // Rotation speed slider
    document.getElementById('rotationSpeed').addEventListener('input', function () {
        rotationSpeedMultiplier = this.value / 2;
        document.getElementById('speedValue').textContent = this.value / 2 + 'x';
    });

    // Shape type selector
    document.getElementById('shapeType').addEventListener('change', function () {
        shapeMode = this.value;
    });

    // Color scheme selector
    document.getElementById('colorScheme').addEventListener('change', function () {
        colorScheme = this.value;
    });
}

// Serial port callback functions
function serverConnected() {
    console.log('Connected to server.');
}

function portOpen() {
    console.log('Serial port opened.');
}

function portClose() {
    console.log('Serial port closed.');
}

function serialError(err) {
    console.log('Serial error:', err);
}

function serialEvent() {
    var currentString = serial.readLine();
    trim(currentString);
    if (!currentString) {
        return;
    }
    inMessage = split(currentString, "&");
    sensorValue = inMessage[0];
    sensorValue2 = inMessage[1];
}

function draw() {
    background(0);

    // Update hover color based on mouse position and change text colors
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        mouseHue = map(mouseX, 0, width, 0, 360);
        updateTextColors();
    }

    // Camera control with mouse
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        camX = map(mouseX, 0, width, -200, 200);
        camY = map(mouseY, 0, height, -200, 200);
    }

    // Alternative camera control with sensor values
    var sensorX = map(sensorValue, 0, 1023, -200, 100);
    var sensorY = map(sensorValue2, 0, 1023, -200, 100);

    // Blend sensor and mouse input
    var finalX = (camX + sensorX) / 2;
    var finalY = (camY + sensorY) / 2;

    // Set camera
    camera(0, 0, 200, finalX, finalY, 0, 0, 1, 0);

    // Lighting
    ambientLight(100);
    pointLight(255, 255, 255, 0, 0, 200);

    // Draw the 3D orbit structure
    translate(0, 0, -600);
    var radius = width * 0.8;

    for (var i = 0; i <= 12; i++) {
        for (var j = 0; j <= 12; j++) {
            push();
            var a = (j / 12) * PI;
            var b = (i / 12) * PI;

            var x = sin(2 * a) * radius * sin(b);
            var y = cos(b) * radius / 2;
            var z = cos(2 * a) * radius * sin(b);

            translate(x, y, z);

            // Rotation animation
            if (!isPaused) {
                rotateZ(frameCount * 0.02 * rotationSpeedMultiplier);
                rotateX(frameCount * 0.02 * rotationSpeedMultiplier);
            }

            // Get colors from current scheme
            var colors = colorSchemes[colorScheme];

            // Draw shapes based on mode
            drawShape(j, i, colors);

            pop();
        }
    }
}

function drawShape(j, i, colors) {
    // Use the selected color scheme
    switch (shapeMode) {
        case 'mixed':
            if (j % 2 === 0) {
                fill(colors.color1);
                cone(40, 60);
            } else {
                fill(colors.color2);
                box(50, 30, 30);
            }
            break;
        case 'cones':
            fill(j % 2 === 0 ? colors.color1 : colors.color2);
            cone(40, 60);
            break;
        case 'boxes':
            fill(j % 2 === 0 ? colors.color1 : colors.color2);
            box(50, 30, 30);
            break;
        case 'spheres':
            fill(j % 2 === 0 ? colors.color1 : colors.color2);
            sphere(30);
            break;
    }
}

// Keyboard controls
function keyPressed() {
    // Space to toggle rotation
    if (key === ' ') {
        isPaused = !isPaused;
        document.getElementById('toggleRotation').textContent = isPaused ? 'Resume Rotation' : 'Pause Rotation';
        return false; // Prevent page scroll
    }

    // R to reset
    if (key === 'r' || key === 'R') {
        camX = 0;
        camY = 0;
        sensorValue = 512;
        sensorValue2 = 512;
    }

    // C to cycle colors
    if (key === 'c' || key === 'C') {
        var schemes = Object.keys(colorSchemes);
        currentColorIndex = (currentColorIndex + 1) % schemes.length;
        colorScheme = schemes[currentColorIndex];
        document.getElementById('colorScheme').value = colorScheme;
    }

    // Arrow keys for fine control
    if (keyCode === LEFT_ARROW) {
        camX -= 10;
    } else if (keyCode === RIGHT_ARROW) {
        camX += 10;
    } else if (keyCode === UP_ARROW) {
        camY -= 10;
    } else if (keyCode === DOWN_ARROW) {
        camY += 10;
    }
}

// Update text colors based on mouse position
function updateTextColors() {
    // Calculate colors based on mouse position
    var hue1 = mouseHue;
    var hue2 = (mouseHue + 120) % 360;
    var hue3 = (mouseHue + 240) % 360;

    var saturation = map(mouseY, 0, height, 60, 100);
    var lightness = map(mouseX, 0, width, 50, 80);

    // Convert HSL to CSS format
    var color1 = 'hsl(' + hue1 + ', ' + saturation + '%, ' + lightness + '%)';
    var color2 = 'hsl(' + hue2 + ', ' + saturation + '%, ' + (lightness + 10) + '%)';
    var color3 = 'hsl(' + hue3 + ', ' + saturation + '%, ' + lightness + '%)';

    // Update text elements
    var h1 = document.querySelector('h1');
    var subtitle = document.querySelector('.subtitle');
    var infoText = document.querySelector('.info-text');
    var instructions = document.querySelectorAll('.instructions li');
    var labels = document.querySelectorAll('.control-group label');

    if (h1) h1.style.color = color1;
    if (subtitle) subtitle.style.color = color2;
    if (infoText) infoText.style.color = color3;

    // Update instruction items
    for (var i = 0; i < instructions.length; i++) {
        instructions[i].style.color = color3;
    }

    // Update labels
    for (var i = 0; i < labels.length; i++) {
        labels[i].style.color = color2;
    }
}

// Responsive canvas
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
