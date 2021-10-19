function startClassification()

{
    navigation.mediaDevices.getUserMedia({
        audio: true

    })
}

function modelReady() {
    classifier.classify(gotResults);

}

function gotResults(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.floor() * 255) + 1;
        random_number_r = Math.floor(Math.floor() * 255) + 1;
        random_number_r = Math.floor(Math.floor() * 255) + 1;

        document.grtElementById("result_label").innerHTML = 'I can hear -' + results[0].label;
        document.getElementsById("result_confidence").innerHTML = 'Accuracy' + (result[0].confidence * 100).toFixed(2) + "% ";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";


        img = document.getElementById('alien1')
        img1 = document.getElementById('alien2')
        img2 = document.getElementById('alien3')
        img3 = document.getElementById('alien4')

        if (results[0].label == "clap") {
            img.src = 'aliens-01.gif';
            img1.src = 'alien-02.png';
            img2.src = 'alien-03.png';
            img3.src = 'alien-04.png';

        } else if (results[0].label == "clap") {
            img.src = 'aliens-01.gif';
            img1.src = 'alien-02.png';
            img2.src = 'alien-03.png';
            img3.src = 'alien-04.png';
        } else if (results[0].label == "clap") {
            img.src = 'aliens-01.gif';
            img1.src = 'alien-02.png';
            img2.src = 'alien-03.png';
            img3.src = 'alien-04.png';
        } else {
            img.src = 'aliens-01.png';
            img1.src = 'alien-02.png';
            img2.src = 'alien-03.png';
            img3.src = 'alien-04.gif';
        }
    }

}