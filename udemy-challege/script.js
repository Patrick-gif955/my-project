/*const firstName = "Patrick"
/*const lastName = "Noel"
const age = 2007
const year = 2025
console.log ("I'm"+ " " + firstName + " " + lastName + ", and I'm" + " " + (year-age) + " years old" );*/

/*
const maxAge = 12;
const yearsLeft = 22-maxAge;
if (maxAge >=19){
    console.log("You can create an account");
}else{
    console.log(`You cannot create an account, wait for ${yearsLeft} years`);
}

const year = 2012;
let century;
if (year <= 2000){
    century = 20;
}else{
    century = 21;
}
console.log(century);

const favourite = 26;
/*
if (favourite<=23){
    console.log("You made a right choice")
}else{
    console.log("change your mind")
}if (favourite=="23") {
    console.log("wow congrats👏")
} else {
    console.log("try again")
}if (favourite!==26) {
    console.log("cool")
} else {
    console.log("😢🎶😒👀🤦‍♀️")
}*/
/*
const markMass = 78;
const johnMass = 92;
const markHeight = 1.69;
const johnHeight = 1.95;
const markBMI = markMass/(markHeight*markHeight);
const johnBMI = johnMass/(johnHeight*johnHeight)
console.log(markBMI,johnBMI)
if (markBMI>johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`)
}
console.log(markBMI>johnBMI)
console.log(markBMI!==johnBMI)
console.log(markBMI===johnBMI)
console.log(markBMI<johnBMI)

const dolphinsAverage = (97+112+101)/3;
const koalasAverage = (109+95+123)/3;
console.log(dolphinsAverage, koalasAverage)
console.log(dolphinsAverage>koalasAverage)
if(dolphinsAverage>=100){
    console.log("Team Dolphins wins the trophy 🏆")
}
if (koalasAverage>=100){
    console.log("Team Koalas wins the the trophy 🏆")
}
else {
    console.log("none wins the trophy 😢")
}
if (dolphinsAverage===koalasAverage){
    console.log("It's a draw")
}
if (dolphinsAverage>=100 && koalasAverage>=100){
    console.log("Both teams wins")
}else{
    console.log("no team wins the trophy")
}
 const snacks = prompt("what's your favourite snacks?");
 console.log(`I like ${snacks}`);
 console.log("My favourite snacks is"+" " + snacks)

 if (snacks === "Burger "){
    console.log("Nice choice")
 }else if(snacks == "milkshake"){
    console.log("Really tasty")
 }else if(snacks !== "Burger"){
    console.log("Why not burger?😒")
 }else{
    console.log("Try getting something nice")
 }

 const notDrunk = true;
 const notSpeeding = false;
 const goodVision = true;
 const drivingLicense = true;

 if(notDrunk || notSpeeding || goodVision || drivingLicense){
    console.log("You are permitted to drive")
 }else{
    console.log("You are not permitted to drive")
 }

 if (notDrunk && !notSpeeding && goodVision && drivingLicense) {
    console.log("You are permitted to drive")
 } else {
    console.log("You are not permitted to drive")
 }
*/
/*
 const day= prompt("Enter a day").toLowerCase();
 if(day==="monday"){
    console.log("plan study schedule");
 }else if(day==="tuesday"){
    console.log("watch educational videos");
 }else if(day==="wednesday" || day==="thursday"){
    console.log("do assignments");
 }else if(day==="friday"){
    console.log("revise Your books")
 }else if(day==="saturday" || day==="sunday"){
    console.log("Enjoy and chill");
 }else{
    console.log("Not a valid day");
 }
*//*
 const day = prompt("Enter a day").toLowerCase();
 switch (day) {
    case "monday":
        console.log("plan study schedule");
        break;
        case "tuesday":
            console.log("watch educational videos");
            break;
            case "wednesday":
            case "thursday":
                console.log("do assignments");
                break;
                case "friday":
                    console.log("revise Your books")
                    break;
                    case "saturday":
                    case "sunday":
                        console.log("Enjoy and chill");
                        break;
                        default:
                            console.log("Not a valid day");
 }
 const  year = 1998
 console.log(year>=2000 ?21:20 + " " + "century") ;

 let century;
    year>=2000 ? century=21 : century=20;
    console.log(century);

    if(year>=2000){
        century=21
    }else{
        century=20
    }
    console.log(century);*/
const bill= 275;
const tip = bill>=50 && bill<=300 ? bill*0.15 : bill*0.20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`)
 if (bill>=50 && bill<=300) {
    console.log("The bill was" + " " + bill + "," + "the tip was" + " " + tip +" "+ "and the total was"+" "+ Number(bill+tip));
 } else {
    
 }