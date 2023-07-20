let n =prompt('entrer n');
let tab =[10,5,3,2,9];
let pos=0;
for (let i=0; i<tab.length; i++){
    if(n== tab[i]){

        pos++;
        break;
    }
    if(pos!=0){
        console.log("misy");
    }
else{
    console.log("TSY misy");
}

}