const btn = document.querySelector('.btn');

btn.addEventListener('click',(e) => {
    document.querySelector('#my-form').style.background = 'red';
})
btn.addEventListener('mouseover',(e) => {
    document.querySelector('#my-form').style.background = 'blue';
})
btn.addEventListener('mouseout',(e) => {
    document.querySelector('#my-form').style.background = 'green';
})
// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');

// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e)
// {
//     e.preventDefault();

//     if(nameInput.value === '' || emailInput === '')
//     {
//         msg.classList.add('error');
//         msg.innerHTML = 'Please enter all the details';
//         setTimeout(() => msg.remove(),3000);

//     }
//     else
//     {
//         console.log(nameInput.value);
//         console.log(emailInput.value);
//     }
// }