{
    function getData(ms) {
        return new Promise((resolve, reject) => setTimeout(resolve, ms));
    }

    console.log("featching Data-1");

    getData(2000).then(() => {
        console.log("Data-1");
        console.log("featching Data-2");
        return getData(3000);
    }).then(() => {
        console.log("Data-2");
        console.log("featching Data-3");
        return getData(5000);
    }).then(() => {
        console.log("Data-3");
    });
}