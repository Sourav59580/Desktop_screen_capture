const videoElem = document.getElementById("video");
        const start = document.getElementById("start");
        const stop = document.getElementById("stop");

        var displayMediaOptions = {
            video: {
                cursor: "always"
            },
            audio: true
        };

        start.addEventListener("click", function (e) {
            startCapture();
        }, false);
        stop.addEventListener("click", function (e) {
            stopCapture();
        }, false);

        async function startCapture() {
            try {
                videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
            } catch (err) {
                console.error("Error" + err);
            }
        }

        function stopCapture() {
            let tracks = videoElem.srcObject.getTracks();

            tracks.forEach(track => track.stop());
            videoElem.srcObject = null;
        }