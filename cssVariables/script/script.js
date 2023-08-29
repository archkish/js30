const  inputs = document.querySelectorAll(".controls input");

function handleUpdate () {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))


var str = "HTML JavaScript PHP";

function insert_dash(str) {


str.splice("_").toUpperCase()
}

document.writeln(insert_dash(str));
