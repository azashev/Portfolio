// const typedWords = document.querySelector('.typed-words');
// if (typedWords) {
//     // Instantiate the Typed library with the desired options.
//     new Typed('.typed-words', {
//         strings: ['Python, Javascript', 'HTML & CSS'],
//         typeSpeed: 50,
//         backSpeed: 50,
//         loop: true,
//     });
// }

document.addEventListener('DOMContentLoaded', function() {
    const typedWords = new Typed('.typed-words', {
        strings: ['Python, JavaScript', 'HTML and CSS'],
        typeSpeed: 40,
        backSpeed: 50,
        backDelay: 1500,
        startDelay: 1000,
        loop: true,
        showCursor: false
    });
});
