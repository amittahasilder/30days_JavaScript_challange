var cancellable = function(fn, args, t) {
    // Call immediately
    fn(...args);

    // Store interval ID
    const intervalId = setInterval(() => {
        fn(...args);
    }, t);

    // Return cancel function
    return function() {
        clearInterval(intervalId);
    };
};