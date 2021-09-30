// #Exercise One
// Part One
const names=["Maria", "Antony", "Joy", "Juan"];
function addName(names, name){
    names.push(name);
    return names;
    
}
console.log(addName(names, "Darrek");

// Part 2

const names=["Maria", "Antony", "Joy", "Juan"];
function find(names, name){
    let f = false;
    names.forEach(element => {
        if (element === name){
            f=true;
        }
    });
    return f;    
    }
find(names, "Joy");

// part 3

names1 =["May", "June", "July", "August"];
names2 = ["Peter", "August", "John", "May"];
const duplicate =[];
function sameName(names1, names2){
  
    names1.forEach(element1 => {
        names2.forEach(element2 => {
            if (element1 === element2){
                duplicate.push(element1);
            }
            
        });
        
    });
    return duplicate;
}

console.log(sameName(names1, names2));

// Part 4

names=[];
function count(names, name){
    names.push(name);
    return names.name.length;

}

console.log(count(names, "Peter"));

// #Exercise 2

false || (true && false);   -- false
true || (11 + 12);          -- true
(31 + 22) || true;          -- 53
true && (1 + 7);            -- 8
false && (3 + 4);           -- false
(1 + 2) && true;            -- true
(32 * 4) >= 129;            -- false
false !== !true;            -- false
true === 4;                 -- false
false === (847 === '847');  -- true
false === (887 == '887');   -- false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; -- true

// #Exercise 3
function checking(input){
    if(input < 0){
        console.log (`${input} is less than 0`);
    }
    else if (input <= 25){
        console.log (`${input} is between 0 and 25`);
    }
    else if (input <=100){
        console.log (`${input} is between 26 and 100`);
    }
    else {
        console.log (`${input} is between greater than 100`);
    }
}

checking(88);

// Addition Ex

var a;
var b = null;
var c = undefined;
var d = 4;
var e = 'five';
var f = a || b || c || d || e;

console.log(f);

// It return 4 and undefined because it return the first truthy value and last if no truthy value is found. 