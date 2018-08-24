const age=parseInt(prompt("Cuantos años tienes?"));

switch (true) {
    case (age>0 && age<3):
        document.write("Estas en la etapa Toddler ");
        break;
    case  age ==3:
        document.write("Estas en medio de la etapa Toddler & Preschool");
        break;
    case  (age>3 && age<5):
        document.write("Estas en la etapa preschool");
        break; 
    case  age ==5:
        document.write("Estas en medio de la etapa Preschool & Gradeschooler");
        break;
    case  (age>5 && age<12):
        document.write("Estas en la etapa Gradeschooler");
        break;         
    case  age ==12:
        document.write("Estas en medio de la etapa Gradeschooler & Teen");
        break;
    case  (age>12 && age<18):
        document.write("Estas en la etapa Teen");
        break;
    case  age ==18:
        document.write("Estas en medio de la etapa Gradeschooler & Teen");
        break;
    case  (age>18 && age<21):
        document.write("Estas en la etapa Young Adult");
        break;
    case  age ==21:
        document.write("Estas en medio de la etapa Young Adult & Adult");
        break;
    case  age>21:
        document.write("Estas en la etapa  Adult");
        break;
    default:
        document.write("Por favor, ingresa una edad valida, en años");
        break;
}



  