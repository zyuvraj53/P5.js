var a_node;
var b_node;
var c_node;
var d_node;
var e_node;
var f_node;
var g_node;
var h_node;

function setup() {
  createCanvas(460, 600);
  background(0);
  
  strokeWeight(1.5);
  stroke(255);
  line(20, 560, 20, 0);
  line(80, 560, 80, 0);
  line(140, 560, 140, 0);
  line(200, 560, 200, 0);
  line(260, 560, 260, 0);
  line(320, 560, 320, 0);
  line(380, 560, 380, 0);
  line(440, 560, 440, 0);
  
  col = color(0, 0, 0);
  
  a_node = createButton('Alice');
  b_node = createButton('Bob');
  c_node = createButton('Carol');
  d_node = createButton('Dave');
  e_node = createButton('Ellen');
  f_node = createButton('Frank');
  g_node = createButton('Gina');
  h_node = createButton('Hank');
  
  
  a_node.style('background-color', col);
  a_node.style('color:white');
  a_node.position(0, 570);
  a_node.size(45, 30)
  a_node.style('border', 0)
  
  
  
  b_node.style('background-color', col);
  b_node.style('color:white');
  b_node.position(58, 570);
  b_node.size(45, 30)
  b_node.style('border', 0)
  
  
  
  c_node.style('background-color', col);
  c_node.style('color:white');
  c_node.position(118, 570);
  c_node.size(45, 30)
  c_node.style('border', 0)
  
  
  
  d_node.style('background-color', col);
  d_node.style('color:white');
  d_node.position(178, 570);
  d_node.size(45, 30)
  d_node.style('border', 0)
  
  
  
  e_node.style('background-color', col);
  e_node.style('color:white');
  e_node.position(238, 570);
  e_node.size(45, 30)
  e_node.style('border', 0)
  
  
  
  f_node.style('background-color', col);
  f_node.style('color:white');
  f_node.position(297, 570);
  f_node.size(47, 30)
  f_node.style('border', 0)
  
  
  
  g_node.style('background-color', col);
  g_node.style('color:white');
  g_node.position(358, 570);
  g_node.size(45, 30)
  g_node.style('border', 0)
  
  
  
  h_node.style('background-color', col);
  h_node.style('color:white');
  h_node.position(415, 570);
  h_node.size(45, 30)
  h_node.style('border', 0)
  
  
}


function draw() {
  let node_arr = [false, false, false, false, false, false, false, false];
  col = color(0, 0, 0);
  node_col = color(0, 0, 0);
  
  a_node.mousePressed(hashgraph);
  b_node.mousePressed(hashgraph);
  c_node.mousePressed(hashgraph);
  d_node.mousePressed(hashgraph);
  e_node.mousePressed(hashgraph);
  f_node.mousePressed(hashgraph);
  g_node.mousePressed(hashgraph);
  h_node.mousePressed(hashgraph);
  
  
  function hashgraph(){
    node_arr = [false, false, false, false, false, false, false, false];
    // setup();
    switch (this) {
      case a_node:
        node_arr[0] = true;
        node_col = color(255, 0, 128);
        pick_node(20);
        break;

      case b_node:
        node_arr[1] = true;
        node_col = color(0, 255, 128);
        for(i = 0; i < 3; i++){
          pick_node(80);
        }
        
        break;
      
      case c_node:
        node_arr[2] = true;
        node_col = color(0, 128, 255);
        for(i = 0; i < 3; i++){
          pick_node(140);
        }
        
        break;

      case d_node:
        node_arr[3] = true;
        node_col = color(128, 0, 255);
        for(i = 0; i < 3; i++){
          pick_node(200);
        }
        
        break;
      
      case e_node:
        node_arr[4] = true;
        node_col = color(255, 0, 255);
        for(i = 0; i < 3; i++){
          pick_node(260);
        }
        
        break;

      case f_node:
        node_arr[5] = true;
        node_col = color(0, 0, 255);
        for(i = 0; i < 3; i++){
          pick_node(320);
        }
        
        break;
      
      case g_node:
        node_arr[6] = true;
        node_col = color(255, 0, 0);
        for(i = 0; i < 3; i++){
          pick_node(380);
        }
        
        break;

      case h_node:
        node_arr[7] = true;
        node_col = color(0, 255, 255);
        for(i = 0; i < 3; i++){
          pick_node(440);
        }
        break;
    }
  }
  function pick_node(xpos){
    var xpos2, xpos3, xpos4
    for(j = 0; j < 3; j++){
      n_nodes = 0;
      for(i = 0; i < node_arr.length; i++){
        if(node_arr[i] == true){
          n_nodes++;
        }
      }
      if(n_nodes == 1){
        
        while(true){
          r = floor(random(0, 8));
          if(node_arr[r] == false){
        
            break;
          }
        }
        
        
        
        //todo animate line and ellipse later
        stroke(node_col);
        strokeWeight(2);
        animate_line(xpos, 550, (60 * r) + 20, 400 - (r * 2));
        
        fill(node_col);
        //stroke(255);
        ellipse(xpos, 550, 25, 25);
        
        stroke(node_col);
        ellipse((60 * r) + 20, 400 - (r * 2), 25, 25);
        node_arr[r] = true;
        xpos2 = (60 * r) + 20;
        
      }
      else if(n_nodes == 2){
        while(true){
          r = floor(random(0, 8));
          if(node_arr[r] == false){
        
            break;
          }
        }
        
        stroke(node_col);
        strokeWeight(2);
        line(xpos, 500, (60 * r) + 20, 400 - (r * 2));
        ellipse((60 * r) + 20, 400 - (r * 2), 25, 25);
        node_arr[r] = true;
        xpos3 = (60 * r) + 20;
        
        while(true){
          r2 = floor(random(0, 8));
          if(node_arr[r2] == false){
        
            break;
          }
        }
        
        stroke(node_col);
        strokeWeight(2);
        line(xpos2, 390 + r2, (60 * r2) + 20, 250 - (r2 * 2));
        ellipse((60 * r2) + 20, 250 - (r2 * 2), 25, 25);
        
        fill(0);
        ellipse(xpos, 500, 25, 25);
        node_arr[r2] = true;
        xpos4 = (60 * r2) + 20;
        
      }
      
      else if(n_nodes == 4){
        
      }
    }
  }
}