const currentYear = new Date().getFullYear();
console.log(currentYear);
document.getElementById("currentyear").innerText = currentYear;
document.getElementById('lastModified').innerText = document.lastModified;

const windChill = document.getElementById('windchill');

const calculateWindChill = (t, v) => {
    let val = 0;
    if (t <= 10 && v > 4.8) {
        val = 35.74 + (.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * (Math.pow(v, 0.16)))
        console.log(val);
        let nWindChill = (val.toFixed(1) + "&#8451;");
        return nWindChill;
    } else {
        return 'N/A';
    }
}

windChill.innerHTML = calculateWindChill(2, 5);
