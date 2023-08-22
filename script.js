// wait for all resouces to load before executing the JS, avoiding race conditions
window.onload = function () {
    const canvas = document.getElementById("canvas1")
    const ctx = canvas.getContext("2d")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height)
}

class FlowFieldEffect {
    // use the private class syntax for proper encapsulation
    // restricting access to data from outside the object
    #ctx;
    #width;
    #height;
    constructor(ctx, width, height) {
        this.#ctx = ctx;
        this.#width = width;
        this.#height = height;
        console.log("effect loaded")
    }
}