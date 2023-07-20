const imageInput = document.getElementById("image");
const topTextInput = document.getElementById("top-text");
const bottomTextInput = document.getElementById("bottom-text");
const submitInput = document.getElementById("submit");
const memes = document.getElementById('memes');
const form = document.getElementById("form");

function createMeme(imageURL, topText, bottomText){
    //create a div for the meme
    let div = document.createElement('div');
    //create the image 
    let image = document.createElement('img');
    image.src = imageURL;
    
    div.classList.add("meme");
    image.classList.add("memeImg");
    div.style.maxWidth = "500px";
    div.style.maxHeight = "500px";

    image.style.maxWidth = "500px";
    image.style.maxHeight = "500px";
    //create the top text
    let top = document.createElement('h2');
    //create the bottom text
    let bottom = document.createElement('h2');
    //add the text from the inputs
    top.innerText = topText;
    bottom.innerText = bottomText;
    //add the classes for the text
    top.classList.add('top');
    bottom.classList.add('bottom');
    //append the items in order
    div.appendChild(top);
    div.appendChild(bottom);
    div.appendChild(image);
    //return the result
    return div;
}

submitInput.addEventListener('click', function(e){
    //prevent default action
    e.preventDefault();
    //check if the required fields are valid
    if (form.checkValidity()){
        //create the meme and add it to the memes div
        let div = createMeme(imageInput.value, topTextInput.value, bottomTextInput.value);
        memes.appendChild(div);
        //clear the inputs
        imageInput.value = '';
        topTextInput.value = '';
        bottomTextInput.value = '';
    }
});

memes.addEventListener('click', function(e){
    //remove the clicked meme
    if (e.target.classList.contains("memeImg")){
        e.target.parentNode.remove();
    }
});

memes.addEventListener('mouseover', function(e){
    //grow the meme if is hovered over
    if (e.target.classList.contains("memeImg")){
        console.log("YES!");
        e.target.parentNode.classList.toggle("grow");
    }
});

memes.addEventListener('mouseout', function(e){
    //do the opposite of the previous function
    if (e.target.classList.contains("memeImg")){
        console.log("NO!");
        e.target.parentNode.classList.toggle("grow");
    }
});