import React from 'react'
import {useEffect, useRef} from "react";
import styles from "../css/CanvasHome.module.css";

 const CanvasHome = (props) => {

let width = props.width;
let height = props.height;
let canvasRef = useRef(null);


useEffect(() => {

    let ctx = canvasRef.current.getContext("2d");
    const colors = [
        "rgb(174,187,255)",
        "rgb(146,178,255)",
        "rgb(138,211,255)",
        "rgb(182,255,253)",
       " rgb(113,255,241)"
    
    ]
    let circles;
    
    window.addEventListener("resize", ()=>{
        canvasRef.current.width= window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        init();
    
    })
    
    const chooseColors = (colors) =>{
    return colors[Math.floor(Math.random() * colors.length)];
    }
    
    const getDistance  = (x1, y1, x2 , y2) =>{
        let xDistance = x2 - x1;
        let yDistance =  y2 - y1;
    
        return Math.sqrt(Math.pow(xDistance,2) + Math.pow(yDistance, 2))
    }
    
    const resolveCollision = (c1, c2) =>{
        //declare the variables
        let c1FinalVelocityX, c2FinalVelocityX, c1FinalVelocityY,c2FinalVelocityY;
    
        const xVelocityDiff = c1.x - c2.x;
        const yVelocityDiff = c1.y - c2.y;
    
        const xDist = c2.x - c1.x;
        const yDist = c2.y - c1.y;
    
        // Prevent accidental overlap of particles
        if (xVelocityDiff * xDist + yVelocityDiff * yDist <= 0) {
    
     //get the final x-velocity of the second object
     //to get that we use the final x-velocity of first object from above(circleFinalVelocityX)
    c2FinalVelocityX = (2 * (c1.mass * c1.dx) + c2.dx * ( c2.mass - c1.mass))/(c1.mass + c2.mass )
    
    // c2FinalVelocityX =( 2 * (c1.mass * c1.dx) + (c2.mass * c2.dx) - (c1.mass * c2.dx)) / (c2.mass + c1.mass);
    
    
    //get the final y-velocity of the second object
     //to get that we use the final y-velocity of firstl object from above (circleFinalVelocityY)
     c2FinalVelocityY = (2 * (c1.mass * c1.dy) + 
         c2.dy * (c2.mass - c1.mass)) / (c1.mass + c2.mass);
    
    //  c2FinalVelocityY = ( 2 * (c1.mass * c1.dy) + (c2.mass * c2.dy) - (c1.mass * c2.dy)) / (c2.mass + c1.mass);
     
    
     //get the final x-velociy of first object
     c1FinalVelocityX = c2.dx + c2FinalVelocityX - c1.dx;
     
    
     //get the final y-velocity of first object
     c1FinalVelocityY =   c2.dy + c2FinalVelocityY - c1.dy;

    
     
    //new x and  y velocity after collision for first circle;
    c1.dx = c1FinalVelocityX;
    c1.dy = c1FinalVelocityY;
    
     //new x and y velocity after collision for second circle;
    c2.dx = c2FinalVelocityX;
    c2.dy = c2FinalVelocityY;  
      
    }
    
    }
    
    class Circle{
        constructor(x, y, radius){
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.dx = (Math.random() -  0.5) * 1.5 ;
            this.dy = (Math.random() - 0.5 )  * 1.5 ;
            this.mass = 2;
           
            this.update = circles=>{
            this.drawCircle();
            ctx.font = "italic 20px Courier New";
            ctx.textAlign = "center";
    ctx.fillStyle = "rgba(52, 152, 219,1.0)";
    ctx.fillText("Website without visitors is like a ship lost in the horizon", (canvasRef.current.width/2), (canvasRef.current.height/2));
    ctx.fillStyle = "rgba(255,255,255,1.0)";
    ctx.fillText("- Dr. Christopher Dayagdag", (canvasRef.current.width/2)+170, (canvasRef.current.height/2)+20)
    ctx.font = "bold 30px Courier New";
    ctx.fillText("Full Stack Developer", (canvasRef.current.width/2), (canvasRef.current.height) -10);

            for(let i = 0; i<circles.length; i++){
                if(this === circles[i]) continue;
                if(getDistance(this.x, this.y, circles[i].x, circles[i].y) - this.radius *2 <0){
                    
                    resolveCollision(this, circles[i]);
                   ctx.fillStyle = chooseColors(colors);
                   ctx.fill(); 
                }
                
               
                
            }
            if(this.x + this.radius > canvasRef.current.width|| this.x-this.radius <0 ){
                this.dx = -this.dx;
                
            }
            if(this.y + this.radius > canvasRef.current.height || this.y - this.radius <0){
                this.dy = -this.dy;
            }
           
                this.x += this.dx;
                this.y += this.dy;
             
        };
    
         this.drawCircle = () =>{  
        ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    // ctx.save();
    
    ctx.fillStyle = "black";
    ctx.fill();
    //ctx.restore();
    ctx.strokeStyle = "rgb(255, 255, 255)";
    ctx.stroke();
    ctx.closePath();
        };
    }
    };
    
    function init(){
        circles = [];
    for(let i=0; i<200; i++){
    let radius = 1;
    let x = Math.random()* (canvasRef.current.width - radius *2) +radius;
    let y = Math.random()* (canvasRef.current.height -radius * 2) + radius;
    
    
    if(i !== 0){
     for(let j=0; j<circles.length; j++){
         if(getDistance(x,y, circles[j].x, circles[j].y) - (radius * 2) < 0){
         x = Math.random()* (canvasRef.current.width - radius *2) +radius;
         y = Math.random()* (canvasRef.current.height -radius * 2) + radius;
         j=-1;
         }
          
     }
    }
      
          circles.push(new Circle(x, y , radius));
    }
    
    }
    function animate(){
        requestAnimationFrame(animate)
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        for(let j=0; j<circles.length; j++){
            circles[j].update(circles);
           
        }
    }
    init();
    animate();
    
    

},[]);




    return (
        <div>
            <canvas className={ styles.main }ref={canvasRef} width={width} height={height} />
              
            
        </div>
    )
}
export default CanvasHome;
