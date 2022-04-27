async function test() {
    // You can `await` on a non-promise without getting an error.
    let res = await 'Hello World!';
    console.log(res); // "Hello, World!"
    const promise = new Promise(resolve => {
        // This promise resolves to "Hello, World!" after 1s
        setTimeout(() => resolve('Hello, World!'), 1000);
    });
    res = await promise;
    // Prints "Hello, World!". `res` is equal to the value the
    // promise resolved to.
    console.time('시간')
    console.log(res);

    console.timeEnd('시간')
    // Prints "Hello, World!". You can `await` in function params!
    console.time('시간2')
    console.log(await promise);
    console.timeEnd('시간2')
}
test()