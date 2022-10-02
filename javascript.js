let iconButton = document.getElementById("iconButton");

let int=0;

iconButton.onclick = function(){
    int+=1;
    if (int%2!=0){
    for (i=1;i<8;) {
        let li = document.getElementById(`l${i}`);
        li.setAttribute("class","slide");
        i+=1;
    }}
    else {
        for (i=1;i<8;) {
            let li = document.getElementById(`l${i}`);
            li.setAttribute("class","slide-off");
            i+=1;
        } 
    }

}