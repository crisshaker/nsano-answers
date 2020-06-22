function getReport(list) {
  const numCount = {};
  for (const num of list) {
    numCount[num] = numCount[num] + 1 || 1;
  }

  const smallest = Math.min.apply(null, list);
  const largest = Math.max.apply(null, list);
  const mean = list.reduce((sum, num) => sum + num, 0) / list.length;

  let closestMean;
  if (mean in numCount) {
    closestMean = mean;
  } else {
    currentClosest = Infinity;
    for (const num of list) {
      const difference = Math.abs(num - mean);
      if (difference < currentClosest) {
        currentClosest = difference;
        closestMean = num;
      }
    }
  }

  console.log(`Smallest number & count: ${smallest}, ${numCount[smallest]}`);
  console.log(`Largest number & count: ${largest}, ${numCount[largest]}`);
  console.log(
    `Closest mean number & count: ${closestMean}, ${numCount[closestMean]}`
  );
}

// Example
getReport([1, 2, 39, 9, 8, 1, 8.78, 21.5]);
