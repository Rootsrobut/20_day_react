

const div=document.createElement('div');

const heading=document.createElement('h1');
heading.textContent="Hello";
heading.className='header';


const para=document.createElement('p');
para.textContent='welcome tot he session';
para.className='para';



const btn=document.createElement('button');
btn.textContent='Click me';
btn.className='btn';

div.append(heading);
div.append(para);
div.append(btn);

document.getElementById("root").append(div);


