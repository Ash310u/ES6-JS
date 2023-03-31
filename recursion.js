// recursion---------------------------------------------------------------->

function Hello(pv) {
    debugger;
    
    pv++;
    
    if (pv < 10) {
        Hello(pv);
    }
    
    console.log("pv", pv);
}

let c = 0;
Hello(c);