import { AUPredictor } from "@quarkworks-inc/avatar-webkit"

const videoStream = await navigator.mediaDevices.getUserMedia({
  audio: false,
  video: {
    width: { ideal: 640 },
    height: { ideal: 360 },
    facingMode: "user",
  },
})

console.log(`using auth token ${AVATAR_WEBKIT_AUTH_TOKEN}`)

const predictor = new AUPredictor({
  apiToken: AVATAR_WEBKIT_AUTH_TOKEN,
  srcVideoStream: videoStream,
})

predictor.onPredict = (results) => {
  console.log(results)
}

await predictor.start()
console.log("Predictor started...")
