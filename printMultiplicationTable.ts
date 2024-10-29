function printMultiplicationTable(): void {
  // 乘數
  for (let i = 1; i <= 9; i++) {
    // 被乘數
    for (let j = 1; j <= 9; j++) {
      // 結果
      console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log('');
  }
}

// 列印99乘法表
printMultiplicationTable();
