console.log('Nkosi Ngiphile'[5]);
console.log('Hello World'.length);

let str = 'Nkosi123';
console.log(str[str.length-1]);

let fullName = 'Nkosi Tukuse';

const isRaining = true;
let temp = 20;
let planet= 'Earth';

temp= temp + 5;

console.log(temp);

let celius = 10
let fah = celius*1.8 +32;

console.log(fah);

let equility = '1' === 1;

console.log(equility);

let subscribe = false
let loggedIn = true

if (subscribe === true){
    console.log('Show the video')
}

else if (loggedIn === true){
    console.log('Upgrade subscrtion')
}

else {
    console.log('log in to account')
}

let cash = 25 
let price = 40
let amout = cash - price

if (cash > price){
    console.log('You paid extra - here\'s ' +amout+ ' change')
}

else if (cash === price){
 console.log('You paid exact amount')   
}

else{
    console.log('Not enough money - You owe ' + amout * -1+ ' dollars')
}


let money = 50 
let value = 40
let Storeisopen = true

if (money >= value && Storeisopen ===true) {
    console.log('Print receipt')
}

let hot = true 

hot? console.log('Wheater is hot'): console.log('Wheater is cold')



let sub = true
let login = true

let stri = sub && login? 'show video' : 'hide video'
console.log(stri);


let smoney = 50 
let svalue = 40
let samount = smoney - svalue
let sStoreisopen = true

let strin = sStoreisopen && samount
