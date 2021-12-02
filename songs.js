// 0/100 само първите 3 теста в Judge минават  
function solve(arr){
let n = Number(arr.shift());

for(let i = 0; i< n; i++){
let line = arr[i];

let pattern = /[A-Za-z]+_[A-Z][a-z]+([A-Z][a-z]+)? ?_?([A-Z][a-z]+)? ?([A-Z][a-z]+)? ?([A-Z][a-z]+)? ?([A-Z][a-z]+)? ?_?\d:\d+/g

let match = line.match(pattern);;

//for(let line of match
    if(match.join('').includes(arr[arr.length-1]) || arr[arr.length-1] == 'all'){
    let index = line.indexOf('_');
let lastIndex = line.lastIndexOf('_');
    console.log(line.slice(index+1,lastIndex));
//}
    }
}
}


solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )

    solve([4,
        'favourite_DownTown_3:14',
        'listenLater_Andalouse_3:24',
        'favourite_In To The Night_3:58',
        'favourite_Live It Up_3:48',
        'listenLater']
        )

       solve([2,
        'like_Replay_3:15',
        'ban_Photoshop_3:48',
        'all']
        ) 