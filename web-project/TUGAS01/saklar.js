function saklar(action, lamp){
    let toggle1 = document.getElementById("default-toggle1")
    let toggle2 = document.getElementById("default-toggle2")
    let toggle3 = document.getElementById("default-toggle3")
    let toggle4 = document.getElementById("default-toggle4")
    let toggle5 = document.getElementById("default-toggle5")
    let toggle6 = document.getElementById("default-toggle6")
    let toggle7 = document.getElementById("default-toggle7")
    let toggle8 = document.getElementById("default-toggle8")
    let toggleKeluarga = document.getElementById("default-toggle-keluarga")
    let toggleTamu = document.getElementById("default-toggle-tamu")
    let toggleTidur1 = document.getElementById("default-toggle-tidur1")
    let toggleTidur2 = document.getElementById("default-toggle-tidur2")
    let toggleSpecial1 = document.getElementById("default-toggle-special1")
    let toggleSpecial2 = document.getElementById("default-toggle-special2")

    let lampu1 = document.getElementById("lampu1")
    let lampu2 = document.getElementById("lampu2")
    let lampu3 = document.getElementById("lampu3")
    let lampu4 = document.getElementById("lampu4")
    let lampu5 = document.getElementById("lampu5")
    let lampu6 = document.getElementById("lampu6")
    let lampu7 = document.getElementById("lampu7")
    let lampu8 = document.getElementById("lampu8")

    if(toggle1.checked || toggleKeluarga.checked || toggleSpecial1.checked){
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

    if(toggle4.checked || toggleTamu.checked || toggleSpecial2.checked){
        lampu4.src = "asset/images/on.png"
    }else{
        lampu4.src = "asset/images/off.png"
    }

    if(toggle5.checked || toggleTidur1.checked){
        lampu5.src = "asset/images/on.png"
    }else{
        lampu5.src = "asset/images/off.png"
    }

    if(toggle6.checked || toggleTidur1.checked || toggleSpecial2.checked){
        lampu6.src = "asset/images/on.png"
    }else{
        lampu6.src = "asset/images/off.png"
    }

    if(toggle7.checked || toggleTidur2.checked){
        lampu7.src = "asset/images/on.png"
    }else{
        lampu7.src = "asset/images/off.png"
    }

    if(toggle8.checked || toggleTidur2.checked || toggleSpecial1.checked){
        lampu8.src = "asset/images/on.png"
    }else{
        lampu8.src = "asset/images/off.png"
    }

}
