function callMe() {
    console.log("Called");
}

function exec(arr, cb) {
    arr.forEach((v, i) => {
        console.log(i, v)
    })

    cb();
}

exec(["a", "b", "c"], callMe);