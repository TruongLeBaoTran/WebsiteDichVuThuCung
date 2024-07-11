const countDownSaleOff = document.querySelector('.shop_frame-countdown-saleoff');
const days = document.querySelector('.shop_frame-countdown-timer .days');
const hours = document.querySelector('.shop_frame-countdown-timer .hours');
const minutes = document.querySelector('.shop_frame-countdown-timer .minutes');
const seconds = document.querySelector('.shop_frame-countdown-timer .seconds');

const countDownDate = new Date('2023-05-31T00:00:00').getTime();

let t = setInterval(() => {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let d = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    let s = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');

    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;

    if (distance < 0) {
        clearInterval(t);
        countDownSaleOff.style.display = 'none';
        document.querySelector('.shop_frame-countdown-expired').style.display = 'block';
    }
}, 1000);