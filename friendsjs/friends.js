let friends=[];

const display = () =>{
    let divCtrl=document.getElementById("output");
    for( let friend of friends){
        let L=`<p>${friend}</p>`;
        divCtrl.innerHTML += L;
    }
};
const submit = () =>{
friends.push(document.getElementById("form").value)
display();
}
