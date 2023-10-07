const data = new Date();
let dat = data.getDate();
let mn = data.getMonth();
let yr = data.getFullYear();
let day = data.getDay();
console.log(mn, yr, day, dat);


dayexhaust = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function datechange(month, year) {
    let mydata = new Date(year, month, '1');
    let daydata = mydata.getDay();
    if (daydata == 0)
        daydata = 7;
    console.log("sadas", mydata.getFullYear(), mydata.getDate(), mydata.getDay());
    for (let j = 1; j <= 42; j++) {
        let dayl1 = document.querySelector(`.dates:nth-child(${7+j})`);
        dayl1.innerHTML = ('');
    }
    for (let i = 0; i < dayexhaust[month]; i++) {
        let dayl = document.querySelector(`.dates:nth-child(${7+i+daydata})`);
        dayl.innerHTML = (`${i+1}`);
    }

}

const hy1 = document.querySelector('.but1');
const hy2 = document.querySelector('.but2');



datechange(mn, yr);


const inp1 = document.querySelector('.year');
const imp2 = document.querySelector('.month');

const monthname = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

inp1.value = (`${yr}`);
imp2.value = (`${monthname[mn]}`);
lastmon = imp2.value;



let lastvalue = inp1.value;
inp1.addEventListener('change', fn1);

function fn1() {
    if (!isNaN(this.value) && this.value > 1000 && this.value < 10000) {
        lastvalue = this.value;

        lastmonind = imp2.value.toLowerCase();
        lastmonind = lastmonind[0].toUpperCase() + lastmonind.slice(1);

        const ind = monthname.indexOf(lastmonind);

        console.log(this.value);
        datechange(ind, this.value);
        console.log(this.value);

    } else {
        alert('Moron This is Not a Valid Year');
        inp1.value = (
            `${lastvalue}`);
    }

}
imp2.addEventListener('change', fn);


let yrs = inp1.value;
hy1.addEventListener('click', () => {

    let ind11 = monthname.indexOf(imp2.value);
    if (ind11 == 11) {
        ind11 -= 12;
        yrs++;
        inp1.value = yrs;

    }
    imp2.value = monthname[ind11 + 1];
    datechange(ind11 + 1, yrs);
});
hy2.addEventListener('click', () => {
    {
        let ind11 = monthname.indexOf(imp2.value);
        if (ind11 == 0) {
            ind11 += 12;
            yrs--;
            inp1.value = yrs;
        }
        imp2.value = monthname[ind11 - 1];
        datechange(ind11 - 1, yrs);
    }
});

function fn() {
    thisref = this.value.toLowerCase();
    thisref = thisref[0].toUpperCase() + thisref.slice(1);
    // console.log(thisref);

    let cntr = 0;


    // console.log(lastmon);
    monthname.forEach((element, index) => {
        if (thisref === element) {
            console.log('found');
            console.log(element, inp1.value);
            imp2.value = element;
            datechange(index, inp1.value); // Pass the index to datechange
            lastmon = element;
            console.log(lastmon);
            cntr = 1;
            return;
        }
    });
    if (cntr == 0) {
        imp2.value = lastmon;
    }




}