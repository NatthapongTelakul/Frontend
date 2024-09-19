function showdata(){
    const vstd = document.getElementById("std").value;
    let s = "สวัสดีคุณ "
    s = s + vstd;

    const vgender = document.getElementsByName("gendername");
    console.log(vgender);
    vgender.forEach((choice) => {
        if(choice.checked){
            s = s + " เพศ " + choice.value
        }
    })

    const vfundid = document.getElementById("fundid");
    if(vfundid.checked){
        s = s + " ทุนการศึกษา " + vfundid.value;
    }
    else{
        s = s + " ทุนการศึกษา " + "ไม่มีทุน";
    }

    
    const vfaculty = document.getElementById("faculty").value;
    s = s + " คณะ " + vfaculty;
    
    const vresult = document.getElementById("result");

    vresult.value = s;
}