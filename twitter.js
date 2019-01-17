

let tweet = [];


// event listener on button that grabs input and inserts input into array

var button= document.getElementById("button");
button.addEventListener("click" , function(){
    
    let input= document.getElementById("input").value;
    var tweets = {text: input, 
                 Like: false,
                 repeat: input,
                };

tweet.push(tweets);

updateTweets();

});


function toggleLike(i){
    tweet[i].Like= !tweet[i].Like;
    updateTweets();
}

//create function that loops through array and prints as <li> with on click links to retweet and like 

function updateTweets() {
    let html=" ";
    for(var i =0; i < tweet.length; i++){
        let done= tweet[i].Like;
        let status= done ? 'unlike' : 'like';
        html += `<li class="new"><span class="name"><b>@CoderSchool</b> </span><span class="${done && "done"}">${tweet[i].text}</span>
        <a href="#" class="retweet"  onclick='retweet(${i})'><i>retweet</i></a>
        <a href="#" onclick='toggleLike(${i})'>${status}</a>`;
        
    }
    document.getElementById("new").innerHTML= `${html}`;

}



//function that shows number of characters and reduces by each time a character is entered. 

document.getElementById("input").addEventListener("keypress",function(){
var max=140;
var number = document.getElementById("input").value.length;
var integer=parseInt(number);
var total= max-integer;

if (total > 0){
document.getElementById("count").innerHTML=total+" characters remaining";
}
else if (total<0) {
document.getElementById("count").innerHTML="Sorry you've run out of characters";
stopPropagation();

}

});

// function that loops through array but repeats items selected


// function retweet(i){
//     let html=" ";
//     for(var i =0; i < tweet.length; i++){
//         let done= tweet[i].Like;
//         let status= done ? 'unlike' : 'like';
//         html += `<li class="styling"><span class="name">@Hasan </span><span class="${done && "done"}">${tweet[i].repeat}</span>
//         <a href="#" class="retweet"  onclick='retweet(${i})'>Retweet</a>
//         <a href="#" onclick='toggleLike(${i})'>${status}</a>
       

//         `;
   
//     }
//     document.getElementById("repeated").innerHTML= `${html}`;



// }


