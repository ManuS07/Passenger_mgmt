var read = require('readline-sync');
var fs = require('fs');

var passenger = {

}


while(1){
    var n = read.question("Select the operation \n 1.Add \n 2.Delete \n 3.Update \n 4.Search \n 5.Display all users \n 6.Exit \n ");
    if(n == 1)
    {
         var nam = read.question("Enter the name : ");
         var email = read.question("Enter the email : ");
         var username = read.question("Enter the username : ");
         var age = read.question("Enter the age : ");
         var phone1 = read.question("Enter the phone number : ");
         var phone2 = read.question("Enter the alternate phone number : ");
         passenger.name = nam;
         passenger.email = email;
         passenger.username = username;
         passenger.age = age;
         passenger.phone1 = phone1;
         passenger.phone2 = phone2;
         fs.writeFileSync(`./data/${username}.json`,JSON.stringify(passenger));
         console.log("your id is : " + passenger.username);
       
        
        

    }
    if(n == 2){
        var m = read.question("enter your id : ");
        fs.unlinkSync(`./data/${m}.json`);
    }

    if(n == 3){
        var id = read.question("Enter your id : ");
        var readFile = fs.readFileSync(`${id}.json`,'utf-8');
        var newname = read.question("Enter new name : ");
        var newemail = read.question("Enter new email : ");
        var newusername = read.question("Enter new username : ");
        var newage = read.question("Enter new age: ");
        var newphone1 = read.question("Enter new phone number : ");
        var newphone2 = read.question("Enter new alternate phone number : ");
        var objct = JSON.parse(readFile);
        var v = objct.username;
        objct.name = newname;
        objct.email = newemail;
        objct.username = newusername;
        objct.age = newage;
        objct.phone1 = newphone1;
        objct.phone2 = newphone2;
        fs.writeFileSync(`./data/${v}.json`,JSON.stringify(objct));

        
    }
    if(n == 4)
    {
        var email_id = read.question("Mention the emailid you want to search : ");
        var files = fs.readdirSync('./data/');
        for (let i = 0; i < files.length; i++) {
           var data = fs.readFileSync(`./data/${files[i]}`,'utf-8');
           var obj = JSON.parse(data);
           if(obj.email == email_id)
           {
            console.log(obj);
            break;
           }
            
        }




    }
    if(n == 5){
        var files = fs.readdirSync('./data/');
        for (let i = 0; i < files.length; i++) {
            var data = fs.readFileSync(`./data/${files[i]}`,'utf-8');
            var display = JSON.parse(data);
            console.log(display);
            
        }
    }
    if(n == 6)
    {
        process.exit(0);

    }
    
 
}

