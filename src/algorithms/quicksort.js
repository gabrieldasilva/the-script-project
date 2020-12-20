
// Source:  https://medium.com/predict/implementing-quicksort-in-javascript-1874569ffaea

const defaultComparator = (a, b) => {
    if (a < b)
    {
        return -1;
    }
    if (a > b)
    {
        return 1;
    }
    return 0;
};

const quicksort = (unsortedArray, comparator = defaultComparator) =>
{
    // create a sortable array to return
    const sortedArray = [...unsortedArray];

    // recursively sort sub arrays
    const recursiveSort = (start, end) => {
        // if this sub array is empty, it's sorted
        if (end - start < 1)
        {
            return;
        }
        const pivotValue = sortedArray[end];
        let splitIndex = start;

        for (let i = start; i < end; i++)
        {
            const sort = comparator(sortedArray[i], pivotValue);

            // this value is less than the pivot value.
            if (sort === -1)
            {
                // if the element just to the right of the split index,
                // isn't this element, swap them.
                if (splitIndex !== i)
                {
                    const temp = sortedArray[splitIndex];
                    sortedArray[splitIndex] = sortedArray[i];
                    sortedArray[i] = temp;
                }

                // Move the split index to the right by one,
                // denoting an increase in the less-than sub-array size.
                splitIndex++;
            }

            // leave the values that are greater than or equal to
            // the pivot value where they are
        }

        // move the pivot value to between the split
        sortedArray[end] = sortedArray[splitIndex];
        sortedArray[splitIndex] = pivotValue;

        // recursively sort the less-than and greater-than arrays.
        recursiveSort(start, splitIndex - 1);
        recursiveSort(splitIndex + 1, end);
    };

    // sort the entire array
    recursiveSort(0, unsortedArray.length - 1);
    return sortedArray;
};
