import * as tf from '@tensorflow/tfjs-node-gpu';
const { Image, createCanvas, loadImage } = require('canvas')
loadImage('images/test.jpg').then(img => {
    let canvas = createCanvas(416, 416)
    var ctx = canvas.getContext("2d");

    ctx.drawImage(img, 10, 10);

    getModel(canvas)

})

const getModel = async (canvas) => {
    const model = await tf.loadLayersModel(
        'file://./model_data/yolo-tiny/model.json');
    var output = model.predict(tf.browser.fromPixels(canvas).expandDims(0))

    console.log(output)

}