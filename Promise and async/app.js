
const promise = new Promise((resolved, rejected) => {
    console.log('Promise works')
    if(1 + 2 === 2) {
        resolved("Success")
    } else {
        rejected("Reject")
    }
})

promise.then((dataFromResolve) => {
    console.log("Pomise " + dataFromResolve)
}, (dataFromReject) => {
    console.log("Promise" + dataFromReject)
})