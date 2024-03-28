function setup(){
    createCanvas(1500,1000);
}

function draw(){
    drawShapes();
}

function drawShapes(){
    drawCircle();
    drawStar();
    drawGalaxy();
}


function drawStar(){
    //fill(random(225), random(235), random (220), random(166));
    fill("yellow");
    circle(650,325, 150)
    triangle(620, 245, 650, 170, 675, 245)  
    triangle(685, 250, 740, 240, 725, 287)
    triangle(730, 360, 820, 325, 730, 300)
    triangle(740, 430, 725, 367, 675, 410)
    triangle(620, 490, 663, 410, 600, 398)
    triangle(530, 415, 570, 360, 595, 395)
    triangle(570, 350, 480, 315, 570, 290)
    triangle(620, 250, 555, 230, 570, 285)
}
/*
function drawSun() {
    let radius = 50; // Raza cercului
    let distance = 15; // Distanța față de cerc
    
    // Desenarea cercului în centru
    fill(255, 255, 0); // Galben
    ellipse(650, 325, radius * 1.5);
    
    // Calcularea coordonatelor centrului cercului
    let centerX = 650 ;
    let centerY = 325 ;  
    // Desenarea triunghiurilor către punctele cardinale
    drawTriangle(centerX + radius + distance, centerY, PI/2, 20, 25); // Triunghiul orientat către est
    drawTriangle(centerX - radius - distance, centerY, -PI/2, 20, 25); // Triunghiul orientat către vest
    drawTriangle(centerX, centerY - radius - distance, 0, 20, 25); // Triunghiul orientat către sud
    drawTriangle(centerX, centerY + radius + distance, PI, 20, 25); // Triunghiul orientat către nord
    
    // Desenarea triunghiului către exteriorul cercului (Nord-Est)
    drawTriangle(centerX + radius * sqrt(1), centerY - radius * sqrt(0.5) - distance, -PI/-3.5, 20, 25);
    
    // Desenarea triunghiului către exteriorul cercului (Nord-Vest)
    drawTriangle(centerX - radius * sqrt(1), centerY - radius * sqrt(0.5) - distance, -PI/-1.3 + PI, 20, 25);
    
    // Desenarea triunghiului către exteriorul cercului (Sud-Vest)
    drawTriangle(centerX - radius * sqrt(1), centerY + radius * sqrt(0.5) + distance, PI/3.5 + PI, 20, 25);
    
    // Desenarea triunghiului către exteriorul cercului (Sud-Est)
    drawTriangle(centerX + radius * sqrt(1), centerY + radius * sqrt(0.5) + distance, PI/1.3, 20, 25);
  }
*/
function drawCircle(){
    ellipse(600, 325, 1600, 700)
    ellipse(620, 325, 1400, 600)
    ellipse(620, 325, 1200, 500)
    ellipse(635, 325, 1000, 400)
    ellipse(650, 325, 800, 310)
}

function drawGalaxy(){
    fill("pink")
    circle(480,187, 45)
    fill("brown");
    circle(340, 545, 90)
    fill('purple')
    circle(110, 120, 70)
    fill("blue")
    circle(1000, 190, 80)
    fill('rgb(95, 194, 111)')
    circle(1360, 220, 110)
    fill(255);
}
