function addingEventListener() {
    const input = document.getElementById('input');
    function clickAlert() {
        alert('I was clicked!');
    }
    input.addEventListener('click', clickAlert)
}

addingEventListener()

document.querySelectorAll('div')[1].addEventListener(
    'mouseover', e => console.log('hover')
) //= ['div', 'div', 'div', etc...]

// function clickOne() {
//     const one = document.querySelectorAll('div')[1]
//     function clickAlert() {
//         alert('I was clicked!');
//     }
//     one.addEventListener('mouseover', clickAlert)
// }


