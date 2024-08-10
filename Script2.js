var variable=-1;
function updateOutput() {
    var names = localStorage.getItem('names');
    if (names) {
        var namesArray = JSON.parse(names);
        var nameValue1 = namesArray[0];
        var nameValue2 = namesArray[1];
        var count1 = new Array(26).fill(0);
        var count2 = new Array(26).fill(0);
        nameValue1 = nameValue1.toLowerCase();
        nameValue2 = nameValue2.toLowerCase();
        for (var i = 0; i < nameValue1.length; i++) {
            var char = nameValue1.charAt(i).toLowerCase();
            if(char ===' ')continue;
            var index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            count1[index]++;

        }
        for (var i = 0; i < nameValue2.length; i++) {
            var char = nameValue2.charAt(i).toLowerCase();
            if(char ===' ')continue;
            var index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            count2[index]++;

        }
        var total=0;
        for(var i=0;i<25;i++)total+=Math.abs(count1[i]-count2[i]);
        console.log(total);
        // console.log(finalArray.length);
        var index=find(6,total);
        variable=index;
        //console.log(index);
        var flames=["Friends","Lovers","Affection","Married","Enemies","Sex"];
        document.getElementById('Output').innerHTML=`<div>${capitalize(nameValue1)} and ${capitalize(nameValue2)} ${flames[index-1]==="Married"?"will get":flames[index-1]==="Sex"?"will have": flames[index-1]==="Affection"?"have":"are"} ${
        flames[index-1]}</div>`;
    }
    }
    document.addEventListener("DOMContentLoaded", updateOutput);
    function find(n,k){
        if(n===1) return 1;
        else{
        return ((find(n-1,k) + k - 1) % n) + 1;
        }
    }
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
console.log(variable);
const animate=document.querySelector("body")
animate.addEventListener('mousemove',(event)=>{
    const x=event.offsetX;
    const y=event.offsetY;
    const span=document.createElement("span");
    span.style.background = variable === 2
        ? 'url("https://cdn4.iconfinder.com/data/icons/twitter-29/512/166_Heart_Love_Like_Twitter-512.png")'
        : variable===1?`url("https://cdn0.iconfinder.com/data/icons/business-and-management-flat-8/24/PARTNER_team_friends_partners-1024.png")`:
        variable===3? `url("https://cdn1.iconfinder.com/data/icons/basic-22/512/1041_boy_and_girl_c-512.png")`:
        variable===4? `url("https://cdn4.iconfinder.com/data/icons/lgbt-illustrations/112/22-_wedding-lesbian-suit-gawn-dance-3-512.png")`:
        variable===5? `url("https://cdn1.iconfinder.com/data/icons/freak-emoji-1/128/_helmet_skull_racer_freak_emoji-512.png")`:
        `url("https://cdn-icons-png.flaticon.com/128/13151/13151802.png")`;
    span.style.backgroundSize="cover";
    span.style.left=x+"px";
    span.style.top=y+"px";
    const size=Math.random()*100;
    span.style.width=size+"px";
    span.style.height=size+"px";
    animate.appendChild(span);
    setTimeout(() => {
        span.remove();
    }, 3000);
})