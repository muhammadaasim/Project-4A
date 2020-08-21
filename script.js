var rc = document.querySelector('#redcar');
var bc = document.querySelector('#bluecar')
var bus = document.querySelector('#bus');

var redcar = rc.animate([
    { transform: 'translate:(0,0)' },
    { transform: 'translate(1800px,0)' },
], {
    duration: 3500,
    iteration: Infinity
});

var busv = bus.animate([
    { transform: 'translate:(0,0)' },
    { transform: 'translate(1800px,0)' },
], {
    duration: 4800,
    iteration: Infinity

})

var redcar = bc.animate([
    { transform: 'translate:(0,0)' },
    { transform: 'translate(1800px,0)' },
], {
    duration: 4000,
    iteration: Infinity
});
