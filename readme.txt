Complexity shows how much more resource (like time or memory) an algorithm needs as the amount of data it processes (input size) increases. The two most common types of complexity are time complexity and space complexity.

Time Complexity shows how does the running time increase, as the input grows. It gives us an upper bound on the running time of an algorithm.

Space Complexity represents the amount of memory an algorithm uses based on the size of its input. It gives us an upper bound on the memory required by an algorithm. So, we can understand how much additional memory we'll need if we handle larger inputs.

------------

Big O notation helps us to describe the complexity of the algorithm. There are several common notations (for example for time complexity):
O (1) - Constant. Regardless of the input size, the algorithm takes a constant amount of time.
For example - accessing an array element by its index.

O (N) - Linear. The running time increases linearly with the size of the input.
For example - searching for an element in an unsorted array (In an unsorted array, if we're trying to find a specific element, we can't make any assumptions about the array's structure or the placement of its elements).

O (N^2) Quadratic. Commonly seen in algorithms that have nested loops over the same dataset.
For example - bubble sort, where each item is repeatedly compared with every other item.

O (A * B) Here we have two different collections or datasets (A and B are sizes) and we perform operations on each element of one collection for every element of the other collection.
For example - comparing every element of array A with every element of array B in a nested loop where A and B are of different sizes.

O (log N) Logarithmic. In logarithmic operations, every step cuts the amount of work you have to do significantly.
For example - searching algorithms in sorted datasets, like the binary search - they keep narrowing down the possible locations in a systematic way, reducing the problem size with each step.

O (2^N) Exponential growth. These algorithms can have their running time increase very rapidly for even a small increase in input size.
For example - the straightforward recursive algorithm for calculating the Fibonacci sequence is a classic example. The amount of work doubles with each increment of N.

------------

The dominant term have the most significant impact on growth. For examples:

O (2N + N^2) -> O (N^2). As N becomes large, N^2 grows much faster than 2N. So, the linear term becomes insignificant.

O (1000N) -> O(N). Constants, like 1000 in this case, are disregarded in Big O notation because we're concerned about the growth relative to N, not the exact coefficient.

------------

Complexity review of current assignment.

In case of this assignment, the function ‘removeComments’ (in Output component) processes the input string ‘text’ character by character exactly once. Within the while loop, the operations (like checking characters, updating variables, and concatenating to the ‘output' string) are all constant time operations O(1).
The dominant factor that determine the complexity is how many times the loop runs.
As the loop iterates over the length of the string text, and each iteration involves constant time operations, the time complexity is linear due to the size of the input string.
So, time complexity is O(N), where N is the length of the input string ‘text’.
Regarding space complexity, the function uses a constant amount of space for its variables (isSingleLine, isMultiLine, i, lastCharN) and an amount of space proportional to the size of the input for the ‘output’ string. In the worst case (when there are no comments in the text), the output string will be roughly the same size as the input string text.
So, space complexity is also O(N), where N is also the length of the input string ‘text’.