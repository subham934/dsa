function factors(n) {
  function solve(i) {
    // base case
    if (i > n) return;

    // factor check
    if (n % i === 0) {
      console.log(i);
    }

    // recursive call
    solve(i + 1);
  }

  solve(1);
}

factors(12);


// =====================================


function kthFactor(n, k) {
  // Helper function to track the current divisor (d) and how many factors (found) we've seen
  const solve = (d, found) => {
    // Base Case 1: If current divisor exceeds n, we've exhausted all possibilities
    if (d > n) return -1;

    if (n % d === 0) {
      // We found a factor! Increment the 'found' count
      const currentFound = found + 1;

      // Base Case 2: If this is the k-th factor, return the divisor
      if (currentFound === k) return d;

      // Otherwise, move to the next number with the updated count
      return solve(d + 1, currentFound);
    }

    // If d is not a factor, move to the next number without incrementing 'found'
    return solve(d + 1, found);
  };

  // Start recursion with divisor 1 and 0 factors found
  return solve(1, 0);
}

console.log(kthFactor(12, 3));
