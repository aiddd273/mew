const a=1;
const step=Math.PI/8;
let x = -Math.PI+step;
while(x<Math.PI){
    let y = a*Math.cos(x);
    console.log(y);
    x+=step;
}
