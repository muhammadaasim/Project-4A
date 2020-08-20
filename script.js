var rc=document.querySelector('#redcar');
var bc=document.querySelector('#bluecar')
var bus=document.querySelector('#bus');

var redcar=rc.animate([
    {transform:'translate:(0,0)'},
    {transform:'translate(1500px,0)'},
],{
duration:3500,
iteration:Infinity
});

var busv=bus.animate([
    {transform:'translate:(0,0)'},
    {transform:'translate(1500px,0)'},
],{
    duration:4500,
iteration:Infinity

})

var redcar=bc.animate([
    {transform:'translate:(0,0)'},
    {transform:'translate(1500px,0)'},
],{
duration:5500,
iteration:Infinity
});
