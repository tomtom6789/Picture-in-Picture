const videoElement = document.getElementById('video');
const button =  document.getElementById('button')



// Ask to select the media Stream , pass to video Element, then Play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }

    } catch(error){
        // Catch Error if there is
        console.log("error")
    }
}


button.addEventListener("click", async () => {
    console.log("this is acitve")
    // Disable the button
    button.disabled = true
    // Start picture in picture mode 
    await videoElement.requestPictureInPicture();
    // Reset button 
    button.disabled = false 



})



// Onload 
selectMediaStream()