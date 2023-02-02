let c = document.getElementById('c');
let ctx = c.getContext('2d');
c.height = window.innerHeight;
c.width = window.innerWidth;
let array = "012,3456.789$%#!&*^";
array = array.split("");
let font_size = 16;
let columns = c.width/font_size;
let drops = [];
for( let i = 0; i < columns; i++)
drops[i] = 1;
function draw(){
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = "#0F0";
    ctx.font = font_size + "px arial";
        for(let j = 0; j < drops.length; j++)
    {
        let text = array[Math.floor(Math.random()*array.length)];
        ctx.fillText(text, j*font_size, drops[j]*font_size);
        if(drops[j]*font_size > c.height && Math.random() > 0.975)
        drops[j] = 0;
        drops[j]++;
    }
    }

    setInterval(draw, 120);
    



