console.time("a")
for (let index = 0; index < 1_00_000; index++) {
    console.log(index+1);
    
}
console.timeEnd("a")