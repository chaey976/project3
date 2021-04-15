// console.log("is our script file working?");

// load the airtable library, call it "Airtable";
var Airtable = require("airtable");
// console.log(Airtable);

// use airtable library, connect to  our base using API key
var base = new Airtable({ apiKey: "keyM8jbrhXsDNSWGg" }).base(
  "appkFeLueZUVB4NAT"
);

base("table").select({
  view: 'Grid 5'
}).eachPage(gotPageOfSeasons, gotAllSeasons);

const seasons = [];

function gotPageOfSeasons(records, fetchNextPage) {
  console.log("gotPageOfSeasons()");
  console.log("There are "+records.length+" items in records");
  seasons.push(...records);
  fetchNextPage();
}

function gotAllSeasons(err) {
  console.log("gotAllSeasons()");
  if (err) {
    console.log("error loading page");
    console.error(err);
    return;
  }
  showSeasons();
}


function showSeasons() {
  console.log("showSeasons()");

  const seasonContainer = document.querySelector("#container");

  seasons.forEach((season, index) => {
    console.log("\nSeason data fields:")
    console.log(season.fields);

    console.log(index);
    console.log(seasons[index+1]);
    
    seasons.indexOf(season);
    console.log(seasons.indexOf(season));

    // const seasonImg = document.createElement("img");
    // seasonImg.src = season.fields.images[0].url;
    // seasonContainer.appendChild(seasonImg);

    var imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    imageContainer.style.backgroundImage  = "url(" + season.fields.images[0].url + ")";
    document.querySelector("#container").append(imageContainer);

    // Background-image: url(“image.png”);
    // “url(“ +  ourURLHere + “)”;

    // var seasonImages = document.createElement("p");
    // seasonImages.classList.add("seasonImg");
    // imageContainer.append(seasonImages);

    imageContainer.addEventListener("click", function(){
      imageContainer.classList.toggle("popup");

    //   // imgDetail.getElementsByClassName("popup-img")[0].src = season.fields.images[0].url;
    })

    // function myFunction()  {
    //   var popup = document.getElementById("myPopup");
    //   popup.classList.toggle("show");
    // }
    
  });
  

}


