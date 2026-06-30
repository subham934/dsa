function shipWithinDays(weights, days) {
  let first = -Infinity;
  let last = 0;
  let ans = -1;

  for (let i = 0; i < weights.length; i++) {
    first = Math.max(first, weights[i]);
    last += weights[i];
  }

  while (first <= last) {
    let mid = Math.floor((first + last) / 2);

    if (isValid(weights, mid, days)) {
      ans = mid;
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }
  return ans;
}

function isValid(weights, capacity, days) {
  let currentWeight = 0;
  let dayCount = 1;

  for (let i = 0; i < weights.length; i++) {
    currentWeight += weights[i];

    if (currentWeight > capacity) {
      dayCount++;
      currentWeight = weights[i];

      if (dayCount > days) {
        return false;
      }
    }
  }
  return true;
}

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));



function minEatingSpeed(piles, h) {
  
  let first = 1;
  let last = Math.max(...piles);
  let ans = 0;
  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    let hours = 0;
    for (let i = 0; i < piles.length; i++) {
      hours += Math.ceil(piles[i] / mid);
    }
    if (hours <= h) {
      ans = mid;
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }
  return ans;

}

console.log(minEatingSpeed([3, 6, 7, 11], 8));
