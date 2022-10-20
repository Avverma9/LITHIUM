const express = require('express');
const app = express.Router();
const router=express.Router();
/*//Q1.
// -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7]
//: 4 is missing
// Your route code will look like this
app.get('/missingNumber', (req, res) => {
  const arr = [1, 2, 3, 5, 6, 7];
  let missingNumber = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] + 1 !== arr[i + 1]) {
          missingNumber = arr[i] + 1;
          break;
      }
  }
  res.send(`The missing number is ${missingNumber}`);
});
// Q2.
// -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33,
//34, 35, 37, 38]: 36 is missing
// Your route code will look like this
app.get('/missingNumber1', (req, res) => {
  const arr = [33, 34, 35, 37, 38];
  let missingNumber = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] + 1 !== arr[i + 1]) {
          missingNumber = arr[i] + 1;
        break;
      }
       }
  res.send(`The missing number is ${missingNumber}`);
});


let players = [
  {
    name: "Ankit",
    dob: "20/08/1998",
    gender: "male",
    city: "Patna",
    sports: ["Cricket"],
  },
  {
    name: "Akash",
    dob: "10/01/2000",
    gender: "male",
    city: "Patna",
    sports: ["Volleyball"],
  },
  {
    name: "Abhishek",
    dob: "05/11/2002",
    gender: "male",
    city: "Patna",
    sports: ["swimming"],
  }
];
router.post("/players",function (req, res) {
  console.log(players)
  let newplayer = req.body;
  let found=req.body.name;
  console.log("New Players Found :- ",newplayer)
  for (i of players) {
      if (i.name == found) {
          return res.send("name already exists")   
      }
  }
  players.push(newplayer)
  res.send({ msg: players, status: true });
});*/


let persons= [
  {
  name: "PK",
  age: 10,
  votingStatus: false
},
{
  name: "SK",
  age: 20,
  votingStatus: false
},
{
  name: "AA",
  age: 70,
  votingStatus: false
},
{
  name: "SC",
  age: 5,
  votingStatus: false
},
{
  name: "HO",
  age: 40,
  votingStatus: false
}
]
router.post("/persons",function (req, res) {
let votingAge=req.query.votingAge
/*let eligibleAge = persons.filter (ele => ele.age>votingAge)*/
let eligibleAge=[]
for (let i = 0; i < persons.length; i++) {
     if (persons[i].age>votingAge)  eligibleAge.push(persons[i])
}
  res.send({data: eligibleAge ,status: true});
});
module.exports = router;