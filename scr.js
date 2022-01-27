let add = document.getElementById("add")
let clr = document.getElementById("clr")

let update = function () {
    if (localStorage.getItem("note") == null) {
        noteArr = [];

        localStorage.setItem("note", JSON.stringify(noteArr))
        console.log(JSON.stringify(noteArr))
    }
    else {
        noteStr = localStorage.getItem("note")
        noteArr = JSON.parse(noteStr)

        localStorage.setItem("note", JSON.stringify(noteArr))
        console.log(JSON.stringify(noteArr))

    }
    let str = "";
    noteArr.forEach((element, index) => {
        str += `
    
        <div class="notes_card card m-2 col-12 col-sm-6 col-md-4 col-lg-3" style="width: 18rem;">
      
       <div class="card-body">
         <h5 class="card-title">Note ${index + 1}</h5>
         <p class="card-text">${element}</p>
         <a href="#" class="btn btn-primary" onclick="del(${index})">Delete Note</a>
       </div>
     </div>
     
        
        `
    })


    let b = document.getElementById("notes")
    b.innerHTML = str;
}
update();

add.addEventListener("click", (e) => {
    let note = document.getElementById("noteval");
    let noteStr = localStorage.getItem("note");
    if (noteStr == null) {
        noteArr = [];


    }
    else {

        noteArr = JSON.parse(noteStr)



    }
    noteArr.push(note.value);
    localStorage.setItem("note", JSON.stringify(noteArr))
    note.value="";
    update();
});

del = (index => {
    noteStr = localStorage.getItem("note")
    noteArr = JSON.parse(noteStr)
    noteArr.splice(index, 1);
    localStorage.setItem("note", JSON.stringify(noteArr));
    update();
})
clr.addEventListener("click", (e) => {
    localStorage.clear()
    update();

})


let scr = document.getElementById("scr");
scr.addEventListener("input", (e) => {
    let search = scr.value.toLowerCase();

    let notescard = document.getElementsByClassName("notes_card");
    Array.from(notescard).forEach(element => {
        let a = element.getElementsByTagName("p")[0].innerText;

        if (a == search) {
            element.style.display = "block";

        }
        else {
            element.style.display = "none";

        }



    })



})
document.body.addEventListener("mousemove",(e)=>{
    document.body.style.backgroundColor=`rgb(${e.clientX},${e.clientY},${e.clientY+e.clientX})`
})

    