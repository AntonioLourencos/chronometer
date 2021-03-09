const Reset = document.getElementById("reset");
const Pause = document.getElementById("pause");
const Start = document.getElementById("start");

let Hour = 0;
let Minute = 0;
let Second = 0;
let Millisecond = 0;

let Chronometer;

Start.addEventListener('click', ChronometerStart)
Pause.addEventListener('click', ChronometerPause)
Reset.addEventListener('click', ChronometerReset)


function ChronometerStart() {
    Chronometer = setInterval(() => { Timer(10) });
}

function ChronometerPause() {
    clearInterval(Chronometer);

}

function ChronometerReset() {
    ChronometerPause();

    Hour = 0;
    Minute = 0;
    Second = 0;
    Millisecond = 0;

    let formatfield = (`${Format(Hour)}:${Format(Minute)}:${Format(Second)}.${Format(Millisecond)}`);
    document.getElementById("formatfield").innerHTML = (formatfield);
}

function Timer(props) {
    Millisecond += props;
    if (Millisecond > 999) {
        Millisecond = 0;
        Second++;
    }
    if (Second === 59) {
        Second = 0;
        Minute++
    } if (Minute === 59) {
        Minute = 0;
        Hour++;
    }

    let formatfield = (`${Format(Hour)}:${Format(Minute)}:${Format(Second)}.${Format(Millisecond)}`);
    document.getElementById("formatfield").innerHTML = (formatfield);

}

function Format(props) {
    return props > 10 ? props : `0${props}`;
}