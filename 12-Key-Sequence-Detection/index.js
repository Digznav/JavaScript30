var pressed = [];
var secrectCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightKeyBKeyAEnter';

window.addEventListener('keyup', event => {
    console.log(event.key);
    pressed.push(event.key);
    pressed.splice(-secrectCode.length - 1, pressed.length - secrectCode.length);
    console.log(pressed);

    if (pressed.join('').includes(secrectCode)) {
        console.log('ding');
        cornify_add();
    }
});
