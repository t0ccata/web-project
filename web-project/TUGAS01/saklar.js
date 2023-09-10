function saklar(action, lamp){
    let toggle1 = document.getElementById("default-toggle1")
    let toggle2 = document.getElementById("default-toggle2")
    let toggle3 = document.getElementById("default-toggle3")
    let toggle4 = document.getElementById("default-toggle4")
    let toggleKeluarga = document.getElementById("default-toggle-keluarga")
    let toggleTamu = document.getElementById("default-toggle-tamu")

    let lampu1 = document.getElementById("lampu1")
    let lampu2 = document.getElementById("lampu2")
    let lampu3 = document.getElementById("lampu3")
    let lampu4 = document.getElementById("lampu4")

    if(toggle1.checked || toggleKeluarga.checked){
        lampu1.src = "asset/images/on.png"
    }else{
        lampu1.src = "asset/images/off.png"
    }

    if(toggle2.checked || toggleKeluarga.checked){
        lampu2.src = "asset/images/on.png"
    }else{
        lampu2.src = "asset/images/off.png"
    }

    if(toggle3.checked || toggleTamu.checked){
        lampu3.src = "asset/images/on.png"
    }else{
        lampu3.src = "asset/images/off.png"
    }

    if(toggle4.checked || toggleTamu.checked){
        lampu4.src = "asset/images/on.png"
    }else{
        lampu4.src = "asset/images/off.png"
    }
}
