class Drop{
    constructor(){
      this.x = random(width);
      this.y = random(-500,-50); 
      this.z = random(0, 20);
      this.init();
    }

    init(lenHeight = 20, speed =5, lenWidth = 30){
      this.thick = map(this.z, 0, 15, 1, random(lenWidth-10,lenWidth));
      this.ySpeed = map(this.z, 0, 20, 1, speed);
      this.len = map(this.z, 0, 20, 10, lenHeight);
    }
    
    fall(){
      this.y += this.ySpeed;
      let grav = map(this.z, 0, 20, 0, 0.1);
      this.ySpeed += grav;
      
      if( this.y > height){
        
        this.x = random(width);
        this.y = random(-500,-50);
        this.ySpeed = map(this.z, 0, 20, 1, 2);
      }
      
    }
    
    colorGenerate(color = [random(0,255),random(0,255), random(0,255)]){
      this.rgb = color;
      
      let rMax = color[0];
      let gMax = color[1];
      let bMax = color[2];
      let rMin, gMin, bMin;

      let i = 120; 

      if(rMax >= i && gMax >= i && bMax >= i){
        rMin = rMax - i;
        gMin = gMax - i;
        bMin = bMax - i;  
      }else{
        rMin = rMax + i;
        gMin = gMax + i;
        bMin = bMax + i;
      }

      this.rgb = [random(rMin,rMax),random(gMin,gMax), random(bMin,bMax)];

    }

    show(){
      strokeWeight(this.thick);

      stroke(this.rgb[0],this.rgb[1],this.rgb[2]);
      line(this.x, this.y, this.x, this.y+this.len);
    }
  }