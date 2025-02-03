// Function to calculate the maximum height to the left of each bar
const PrefMax = (arr) => {
    let n = arr.length;
    let pref = new Array(n);
    pref[0] = arr[0]; 

    for (let i = 1; i < n; i++) {
        pref[i] = Math.max(pref[i - 1], arr[i]);
    }

    return pref;
}

const SuffMax = (arr) => {
    let n = arr.length;
    let suff = new Array(n);
    suff[n - 1] = arr[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        suff[i] = Math.max(suff[i + 1], arr[i]);
    }

    return suff;
}

// Main function to calculate the trapped rainwater
const RainWaterTrapping = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) {
        console.log("Invalid input: Please provide a non-empty array.");
        return 0;
    }

    let n = arr.length;
    if (n <= 2) return 0; // No water can be trapped if less than 3 bars

    let pref = PrefMax(arr);  // Get the max heights to the left of each bar
    let suff = SuffMax(arr);  // Get the max heights to the right of each bar

    let totalWater = 0;

    // Loop to calculate the water trapped for each bar
    for (let i = 0; i < n; i++) {
        // The trapped water above the current bar is determined by the smaller
        // of the maximum heights to the left and right, minus the height of the bar itself.
        let waterAtBar = Math.min(pref[i], suff[i]) - arr[i];
        if (waterAtBar > 0) {
            totalWater += waterAtBar;  // Add to the total trapped water
        }
    }

    return totalWater;  // Return the total water trapped
}

// Example usage
const arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(RainWaterTrapping(arr));  // Output: 6

