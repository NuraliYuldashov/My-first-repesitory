const e = document.querySelector('.first')
const end = document.querySelector('.end')
const se = document.querySelector('.se')
const m = document.querySelector('.m')
const day = document.querySelector('.d')
const w = document.querySelector('.w')
let a = 3600
let b = 60
let d = 24
let c = 168
end.onclick = ()=>{
    se.innerHTML = a * Number(e.value)
    m.innerHTML = b * Number(e.value)
    day.innerHTML = Number(e.value) / d
    w.innerHTML = Number(e.value) / c
}