function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

{
    async function solve() {
        console.log("featching Data-1");
        await setTimeoutPromisified(3000);
        console.log("Data-1");
        console.log("featching Data-2");
        await setTimeoutPromisified(3000);
        console.log("Data-2");
        console.log("featching Data-3");
        await setTimeoutPromisified(5000);
        console.log("Data-3");
    }
    solve();
}