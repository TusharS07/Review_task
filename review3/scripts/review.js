var dataArray = [];
var classCss = ["first", "second", "third"]



function submit(){
    const name = $('#name').val();
    const className = $('input[name="class"]:checked').val();

    let sendData = {
        "name": name,
        "class": className
    }

    console.log(sendData);
    dataArray.push(sendData);
  

    let display = dataArray.map(i => `<span class="${i.class}">${i.name}</span><br>`);
    $('#display').html(display);
}

// function submit() {
//     const name = $('#name').val();
//     dataArray.push(name);
//     console.log(dataArray);

//     let datadd = []
//     for (let i = 0; i < classCss.length; i++) {
//         datadd = dataArray.map(element => `<span class="${classCss[i]}">${element}</span><br>`);
//     }

//     $('#display').html(datadd);
//     console.log(datadd);

// }