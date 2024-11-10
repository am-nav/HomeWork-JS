const input = document.getElementById("input-numbers");
const bubbleSortBtn = document.getElementById("bubble-sort");
const selectionSortBtn = document.getElementById("selection-sort");
const insertionSortBtn = document.getElementById("insertion-sort");
const mergeSortBtn = document.getElementById("merge-sort");
const result = document.getElementById('result');
const errorText = document.getElementById('error');
const clearBtn = document.getElementById("clear");

// array sorting types
function bubbleSortfunction(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

function selectionSortFunction(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

function insertionSortFunction(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

function mergeSortFunction(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSortFunction(arr.slice(0, mid));
    const right = mergeSortFunction(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let res = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            res.push(left[leftIndex]);
            leftIndex++;
        } else {
            res.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return res.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


function calculateWithCacheFunction(sortFunction) {
    const cache = {};
    return function calculate(input) {
        const cacheKey = input.join(',');
        if (cache[cacheKey]) {
            return cache[cacheKey];
        };
        const result = sortFunction([...input]);
        cache[cacheKey] = result; 
        return result;
    };
}

const cachedBubbleSort = calculateWithCacheFunction(bubbleSortfunction);
const cachedSelectionSort = calculateWithCacheFunction(selectionSortFunction);
const cachedInsertionSort = calculateWithCacheFunction(insertionSortFunction);
const cachedMergeSort = calculateWithCacheFunction(mergeSortFunction);

function handleSort(cachedSort) {
    const inputValue = input.value.trim();
    errorText.innerText = "";

    if (!inputValue) {
        errorText.innerText = "No numbers to sort.";
        result.innerText = "";
        return;
    }

    const filledInputNums = inputValue.split(","); // const filledInputNumbers = inputValue.split(" ")
    const inputArray = [];
    for (let i = 0; i < filledInputNums.length; i++) {
        inputArray.push(Number(filledInputNums[i]));
    }

    if (inputArray.some(isNaN)) {
        errorText.innerText = "Please enter only valid numbers.";
        result.innerText = "";
        return;
    }

    const sortedNumbers = cachedSort(inputArray);

    if (sortedNumbers.length === 0) {
        errorText.innerText = "No numbers to sort.";
    } else {
        result.innerText = "Sorted Numbers: " + sortedNumbers.join(', ');
    }
}

function handleClear() {
    input.value = "";
    result.innerText = "";
    errorText.innerText = "";
} 

bubbleSortBtn.addEventListener("click", () => handleSort(cachedBubbleSort));
selectionSortBtn.addEventListener("click", () => handleSort(cachedSelectionSort));
insertionSortBtn.addEventListener("click", () => handleSort(cachedInsertionSort));
mergeSortBtn.addEventListener("click", () =>  handleSort(cachedMergeSort));
clearBtn.addEventListener("click", handleClear);
