window.onload = function () {

    const logo = `<svg class="vshnLogo" viewBox="0 0 554.1 301.3"><g class="vshnEye" style="" data-svg-origin="177.1999969482422 48.5" transform="matrix(1,0,0,1,0,0)"><path d=" M 277 247.6 C 332.1 247.6 376.8 203 376.8 148.1 C 376.8 93.1 332.1 48.6 277 48.6 C 221.9 48.6 177.2 93.2 177.2 148.1 C 177.2 203 221.9 247.6 277 247.6 Z " fill="rgb(64,129,203)"></path></g><path class="leftPart" d=" M 164.2 264.2 L 0 169.3 L 0 128.6 L 163.2 33.2 L 162.5 75.5 L 34.6 149.7 L 164.3 222.5 L 164.2 264.2" fill="rgb(68,68,68)"></path><path class="topPart" d=" M 365.9 28 L 365.9 66.4 C 365.9 66.4 325.1 36.4 275.7 36.4 C 222.3 36.4 162.6 75.5 162.6 75.5 L 162.6 33.3 C 203.8 11.2 240.5 0 276.1 0 C 319.7 0 365.9 28 365.9 28 Z " fill="rgb(64,129,203)"></path><path class="rightPart" d=" M 389.9 36.8 L 554.1 131.7 L 554.1 172.4 L 390.9 267.7 L 391.5 225.5 L 519.4 151.3 L 389.7 78.5 L 389.9 36.8" fill="rgb(68,68,68)"></path><path class="bottomPart" d=" M 188.1 273.3 L 188.1 234.9 C 188.1 234.9 228.9 264.9 278.3 264.9 C 331.7 264.9 391.4 225.8 391.4 225.8 L 391.4 268 C 350.1 290.1 313.5 301.3 277.8 301.3 C 234.3 301.3 188.1 273.3 188.1 273.3 Z " fill="rgb(64,129,203)"></path></svg>`;

    const div = document.createElement('div');
    div.classList.add('vshn-logo')
    div.innerHTML = logo;

    const cardHeader = document.querySelector('.card-header');
    if (cardHeader) {
        cardHeader.prepend(div)
    }

    const email = document.querySelector('#username');
    if (email) {
        email.addEventListener('click', calculateEyeMove);
        email.addEventListener('focus', calculateEyeMove);
        email.addEventListener('blur', reset);
        email.addEventListener('input', calculateEyeMove);
    }

    const password = document.querySelector('#password');
    if (password) {
        password.addEventListener('focus', closeEye);
        password.addEventListener('blur', openEye);
    }

    const beLogin = document.querySelector('.be-login');
    if (beLogin) {
        beLogin.style.visibility = 'visible';
    }

    setTimeout(lookAround, 10000);
}


function calculateEyeMove() {
    const email = document.querySelector('#username');
    TweenMax.killTweensOf('.vshnEye');
    const carPos = email.selectionEnd ?? email.value.length;
    const div = document.createElement('div');
    const span = document.createElement('span');
    const copyStyle = getComputedStyle(email);
    [].forEach.call(copyStyle, function (prop) {
        div.style[prop] = copyStyle[prop];
    });
    div.style.position = 'absolute';
    div.style.top = '0px';
    div.style.left = '0px';
    document.body.appendChild(div);
    div.textContent = email.value.substr(0, carPos);
    span.textContent = '.';
    div.appendChild(span);

    const max = div.getBoundingClientRect().width - 26;
    let left = span.getBoundingClientRect().left - 13;
    if (Math.floor(span.getBoundingClientRect().y - div.getBoundingClientRect().y - 13) > 3) {
        left = max;
    }
    const progress = left / max
    TweenMax.to('.vshnEye', 1, {
        x: -75 + (250 * progress),
        y: 50 + (60 - ((1 + Math.cos(Math.PI * 2 * progress)) / 2) * 60),
        scaleY: 0.5,
        scaleX: 0.5,
        ease: Expo.easeOut
    })

    document.body.removeChild(div);
}

function closeEye() {
    TweenMax.killTweensOf('.vshnEye');
    TweenMax.to('.vshnEye', 1, {scaleY: 0, scaleX: 0, x: 90, y: 90, ease: Expo.easeOut});
    TweenLite.to('.leftPart', 1, {
        attr: {d: 'M 164.2 188.7 L 0 169.3 L 0 128.6 L 163.2 110.7 L 162.5 149.7 L 34.6 149.7 L 164.3 149.7 L 164.2 188.7'},
        ease: Expo.easeOut
    });
    TweenLite.to('.topPart', 1, {
        attr: {d: ' M 365.9 110.7 L 365.9 149.7 C 365.9 149.7 325.1 149.7 275.7 149.7 C 222.3 149.7 162.6 149.7 162.6 149.7 L 162.6 110.7 C 169.087 107.22 253.19 100.7 266.1 100.7 C 309.7 100.7 365.9 110.7 365.9 110.7 Z '},
        ease: Expo.easeOut
    });
    TweenLite.to('.rightPart', 1, {
        attr: {d: 'M 389.9 110.7 L 554.1 131.3 L 554.1 172 L 390.9 188.7 L 391.5 149.7 L 519.4 150.9 L 389.7 149.7 L 389.9 110.7'},
        ease: Expo.easeOut
    });
    TweenLite.to('.bottomPart', 1, {
        attr: {d: 'M 188.1 188.7 L 188.1 149.7 C 188.1 149.7 228.9 149.7 278.3 149.7 C 331.7 149.7 391.4 149.7 391.4 149.7 L 390.9 188.7 C 386.38 191.119 303.6 198.7 287.8 198.7 C 244.3 198.7 188.1 188.7 188.1 188.7 Z '},
        ease: Expo.easeOut
    });
}

function openEye() {
    TweenMax.killTweensOf('.vshnEye');
    TweenMax.to('.vshnEye', 1, {scaleY: 1, scaleX: 1, x: 0, y: 0, ease: Expo.easeOut});
    TweenLite.to('.leftPart', 1, {
        attr: {d: 'M 164.2 264.2 L 0 169.3 L 0 128.6 L 163.2 33.2 L 162.5 75.5 L 34.6 149.7 L 164.3 222.5 L 164.2 264.2'},
        ease: Expo.easeOut
    });
    TweenLite.to('.topPart', 1, {
        attr: {d: ' M 365.9 28 L 365.9 66.4 C 365.9 66.4 325.1 36.4 275.7 36.4 C 222.3 36.4 162.6 75.5 162.6 75.5 L 162.6 33.3 C 203.8 11.2 240.5 0 276.1 0 C 319.7 0 365.9 28 365.9 28 Z'},
        ease: Expo.easeOut
    });
    TweenLite.to('.rightPart', 1, {
        attr: {d: 'M 389.9 36.8 L 554.1 131.7 L 554.1 172.4 L 390.9 267.7 L 391.5 225.5 L 519.4 151.3 L 389.7 78.5 L 389.9 36.8'},
        ease: Expo.easeOut
    });
    TweenLite.to('.bottomPart', 1, {
        attr: {d: 'M 188.1 273.3 L 188.1 234.9 C 188.1 234.9 228.9 264.9 278.3 264.9 C 331.7 264.9 391.4 225.8 391.4 225.8 L 391.4 268 C 350.1 290.1 313.5 301.3 277.8 301.3 C 234.3 301.3 188.1 273.3 188.1 273.3 Z'},
        ease: Expo.easeOut
    });
}

function lookAround() {

    if (document.querySelector('input:focus')) {
        setTimeout(lookAround, 5000 + Math.random() * 10000);
        return;
    }

    TweenMax.killTweensOf('.vshnEye');
    const animation = new TimelineLite()
    animation.to('.vshnEye', 1, {x: -75, y: 50, scaleY: 0.5, scaleX: 0.5, ease: Expo.easeOut})
        .to('.vshnEye', 0.2, {x: -75, y: 50, scaleY: 0.5, scaleX: 0.5, ease: Expo.easeOut})
        .to('.vshnEye', 1, {x: 175, y: 50, scaleY: 0.5, scaleX: 0.5, ease: Linear.none})
        .to('.vshnEye', 0.2, {x: 175, y: 50, scaleY: 0.5, scaleX: 0.5, ease: Linear.none})
        .to('.vshnEye', 1, {x: 0, y: 0, scaleY: 1, scaleX: 1, ease: Expo.easeOut});

    setTimeout(lookAround, 5000 + Math.random() * 10000);
}

function reset() {
    TweenMax.to('.vshnEye', 1, {x: 0, y: 0, scaleY: 1, scaleX: 1, ease: Expo.easeOut})
}
