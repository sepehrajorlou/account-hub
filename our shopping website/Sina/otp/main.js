//$in@
const puts = document.querySelectorAll('#code input') ;
const submit = document.getElementById('submit');

puts[0].addEventListener('keyup', () => {
    puts[1].focus();
})
puts[1].addEventListener('keyup', () => {
    puts[2].focus();
})
puts[2].addEventListener('keyup', () => {
    puts[3].focus();
})
puts[3].addEventListener('keyup', () => {
    submit.focus();
})