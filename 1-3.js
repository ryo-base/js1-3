"use strict"

//定義
const task = ['掃除' , '買い物', '散歩' ];
const bar = '========================'
const mention = '現在持っているタスクの一覧'

const addTask = () => {
    console.log(bar);
    console.log(mention);
    console.log(bar);

    for (let i = 0; i < task.length; i++) {
        console.log(i + ':'+ task[i]);
    }
    
}

//初めから出てるもの
console.log(bar);
console.log(mention);
console.log(bar);

for (let i = 0; i < task.length; i++) {
    console.log(i + ':' + task[i]);
}

//追加
 let add = prompt('タスクを入力してください');
 task.push(add);

if(add === null){
    location.reload();
    }else{
    addTask();
    alert('タスクを追加しました。');
    prompt('「確認、追加、消去、終了」４つのいずれかを入力してください');
}

