let root=document.getElementById("root")


let input1= document.querySelector("#input1")
let click= document.querySelector("#clickhere")
let result= document.querySelector(".result")



const stateAndCapital= ()=> {
    
    switch (input1.value){
            case 'abia':
             root.innerHTML= "Umuahia";
             break;
             case 'adamawa':
                root.innerHTML="yola";
             break;
                case 'akwa-ibom':
                 root.innerHTML= "uyo"
                break;
                case 'anambara':
                 root.innerHTML="awka"
                break;
                case 'Bauchi':
                 root.innerHTML= "Bauchi";
                break;
                case 'Bayelsa':
                 root.innerHTML= "Yenagoa";
                break;
                case 'Benue':
                 root.innerHTML= "Makurdi"
                break;
                case 'Borno':
                    root.innerHTML= "Maiduguri"
                break;
                case 'Cross River':
                 root.innerHTML= "Calabar";
                break;
                case 'Delta':
                 root.innerHTML= "Asaba";
                break;
                case 'Ebonyi':
                    root.innerHTML= "Abakaliki";
                break;
                case 'Edo':
                    root.innerHTML= "Benin city";
                break;
                case 'Ekiti':
                 root.innerHTML= "Ado-Ekiti";
                break;
                case 'Enugu':
                 root.innerHTML= "Enugu";
                break;
                case 'Gombe':
                 root.innerHTML= "Gombe";
                break;
                case 'Imo':
                 root.innerHTML= "Owerri";
                break;
                case 'Jigawa':
                 root.innerHTML= "Duste";
                break;
                case 'Kaduna':
                    root.innerHTML= "Kaduna";
                break;
                case 'Kano':
                 root.innerHTML= "Kano";
                break;
                case 'Kastina':
                    root.innerHTML= "Kastina";
                break;
                case 'Kebbi':
                    root.innerHTML= "Birnin Kebbi";
                break;
                case 'Kogi':
                 root.innerHTML= "Lokoja";
                break;
                case 'Kwara':
                    root.innerHTML= "Illorin";
                break;
                case 'Lagos':
                    root.innerHTML= "Ikeja";
                break;
                case 'Nasarawa':
                 root.innerHTML= "Lafia";
                break;
                case 'Niger':
                 root.innerHTML= "Minna";
                break;
                case 'Ogun':
                    root.innerHTML= "Abeokuta";
                break;
                case 'Ondo':
                    root.innerHTML= "Akure";
                break;
                case 'Osun':
                    root.innerHTML= "Oshogbo";
                break;
                case 'Oyo':
                    root.innerHTML= "Ibadan";
                break;
                case 'Plateau':
                    root.innerHTML= "Jos";
                break;
                case 'Rivers':
                    root.innerHTML= "Port Harcourt";
                break;
                case 'Sokoto':
                    root.innerHTML= "Sokoto";
                break;
                case 'Taraba':
                 root.innerHTML= "Jalingo";
                break;
                case 'Yobe':
                    root.innerHTML= "Damaturu";
                break;
                case 'Zamfara':
                    root.innerHTML= "Gasau";
                break;
                default:
                    root.innerHTML="FCT" 
    }
    
}

click.addEventListener('click',stateAndCapital )
