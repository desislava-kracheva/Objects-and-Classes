function solveSecondTime(arr){

let n = Number(arr.shift());
let last = arr.pop()

for(let i =0;i < n; i++){
let line = arr[i].split('_');


 if(last == line[0] || last =='all'){
  console.log(line[1]);
 }


}
}

solveSecondTime([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    )