var theirFinestHour = {
    author: "Winston Churchill",
    yearOfSpeech: 1940,
    BCE: false
};

var quitIndia = {
    author: "Mahatma Ghandi",
    yearOfSpeech: 1942,
    BCE: false
};

var theThirdPhilippic = {
    author: "Demosthenes",
    yearOfSpeech: 342,
    BCE: true
};

speeches = [
    theThirdPhilippic, theirFinestHour, quitIndia
];

var difference = (quitIndia.yearOfSpeech - theirFinestHour.yearOfSpeech);


console.log ("Ghandi's speech and Churchill's speech are " + difference + " years apart.");


document.getElementById('BtnDonate').addEventListener('click', function(){
    console.log ("There are " + speeches.length + " speeches on the page.");
});


document.getElementById('BtnChurchill').addEventListener('click', function(){
    console.log("This speech was written by " + theirFinestHour.author + " in " + theirFinestHour.yearOfSpeech + ". It is " + theirFinestHour.BCE + " that this year is B.C.E.");
});


document.getElementById('BtnGhandi').addEventListener('click', function(){
    console.log("This speech was written by " + quitIndia.author + " in " + quitIndia.yearOfSpeech + ". It is " + quitIndia.BCE + " that this year is B.C.E.");});


document.getElementById('BtnDemosthenes').addEventListener('click', function(){
    console.log("This speech was written by " + theThirdPhilippic.author + " in " + theThirdPhilippic.yearOfSpeech + ". It is " + theThirdPhilippic.BCE + " that this year is B.C.E.");});