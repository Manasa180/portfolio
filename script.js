function consoleStyler(color, background, fontsize, txt)
{
    var message="%c" + txt;
    var style = `color: ${color};`;
    style += `background: ${background};`;
    style += `font-size: ${fontsize};`;
    
    console.log(message, style);
}
//task two
function celebrateStyler(reason) {
    var fontStyle = "color:tomoto; font-size:50px ;"
    if (reason == "birthday") {
        console.log(`%cHappy birthday`, fontStyle);

    }
    else if (reason == "champions") {
        console.log(`%Congrats on the title`, fontStyle);
    }
    else {
        console.log(`%cCelebrate!`, fontStyle);
    }
}
//task 3
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');
//task 4
function styleAndCelebrate(){
    consoleStyler(color, background, fontSize, txt);
    celebrateStyler(reason);
}
consoleStyler('ef7c8e', 'fae8e0', '30px', 'you made it!');

celebrateStyler('champians')