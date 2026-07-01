 

// const student={
//     name:'Ajim Sorkar',
//     age:24,
//     isDeveloper:true,


// }
// console.log(student)


// const subjects = {
//   name: 'Mathe',
//   teacher: 'Robi',
//   exem: '30 Dec',
//   chapter: [
//     'first',
//     'second',
//     'therd'
//   ]
// };

// // console.log(subjects.exem);
// const examDate=subjects.exem;

// console.log(examDate)

// const persone={
//     name:'Ajim',
//     age:24,
//     merrid:true,
//     isDeveloper:true,
//     salary:30000,  
//     'fav places' :['CoxBazar', 'bandorBan', 'kuyacata']
// }

// console.log(persone['fav places']);

// const persone={
//     name:'Ajim',
//     age:24,
//     merrid:true,
//     isDeveloper:true,
//     salary:30000,  
//     'fav places' :['CoxBazar', 'bandorBan', 'kuyacata']
// }

// console.log(persone);


const college={
    name:'VNC',
    class:['11', '12'],
    events:['science fair', 'bijoy dibos', '21 Feb'],
    unique:{
        color:'blue',
        result:{
            gaap:5,

        }

    }
}

// console.log(college.unique.result.gaap)
college.events[1] ='26 march'
college.unique.result.gaap=4
console.log(college.unique.result.gaap)
console.log(college.events[1])
delete college.class;
console.log(college)