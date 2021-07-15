process.stdin.resume();
process.stdin.setEncoding('utf8');

// 条件式に使う変数の初期化処理
var count = 0;
while (count < 6) {
    // 繰り返し処理
    console.log(count);
    // 条件式に使う変数の値の更新
    count += 1;
}
