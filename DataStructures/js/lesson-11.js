// Бенчмаркинг
var arr = [];
for (var i = 0; i < 1000; i++) arr[i] = 0;

function walkIn(arr) {
    for (var key in arr) arr[key]++;
}

function walkLength(arr) {
    for (var i = 0; i < arr.length; i++) arr[i]++;
}
// function bench(f) {
//     // var date = new Date();
//     var date = performance.now();
//     for (var i = 0; i < 10000; i++) f(arr);
//     return performance.now() - date;
// }
function bench(f) {
    for (var i = 0; i < 10000; i++) f(arr);
}

// // bench для каждого теста запустим много раз, чередуя
// var timeIn = 0,
//     timeLength = 0;
// for (var i = 0; i < 100; i++) {
//     timeIn += bench(walkIn);
//     timeLength += bench(walkLength);
// }
console.time('all benchmarks')
console.time("walkIn");
bench(walkIn);
console.timeEnd("walkIn");
console.time("walkLength");
bench(walkLength);
console.timeEnd("walkLength");

console.timeEnd("all benchmarks");
