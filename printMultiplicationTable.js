function printMultiplicationTable() {
    // 乘數
    for (var i = 1; i <= 9; i++) {
        // 被乘數
        for (var j = 1; j <= 9; j++) {
            // 結果
            console.log("".concat(i, " x ").concat(j, " = ").concat(i * j));
        }
        console.log('');
    }
}
// 列印99乘法表
printMultiplicationTable();
