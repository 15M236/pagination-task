let i = 0 ;

let details = [
    {id : 201, name : "Abinesh" , email : "abinesh@gmail.com"},
    {id : 202, name : "Ajith N" , email : "ajith@gmail.com"},
    {id : 203, name : "Ajith V" , email : "ajithv@gmail.com"},
    {id : 204, name : "Akilan" , email : "akil@gmail.com"},
    {id : 205, name : "Arjun" , email : "arjun@gmail.com"},
    {id : 206, name : "Abin" , email : "abin@gmail.com"},
    {id : 207, name : "Balaji" , email : "balaji@gmail.com"},
    {id : 208, name : "Barath" , email : "barath@gmail.com"},
    {id : 209, name : "Chan" , email : "chan@gmail.com"},
    {id : 210, name : "Deepak" , email : "deepak@gmail.com"}
];

function forward(){
    if(i < details.length){
        i++
        document.getElementsByClassName("display-id")[0].innerHTML = details[i].id;
        document.getElementsByClassName("display-name")[0].innerHTML = details[i].name;
        document.getElementsByClassName("display-email")[0].innerHTML = details[i].email;
    }
}

function previous(){
    if(i > 0){
        i--;
        document.getElementsByClassName("display-id")[0].innerHTML = details[i].id;
        document.getElementsByClassName("display-name")[0].innerHTML = details[i].name;
        document.getElementsByClassName("display-email")[0].innerHTML = details[i].email;
    }
}

function parameterPrint(index){
    i = index;
    document.getElementsByClassName("display-id")[0].innerHTML = details[index].id;
    document.getElementsByClassName("display-name")[0].innerHTML = details[index].name;
    document.getElementsByClassName("display-email")[0].innerHTML = details[index].email;
}

