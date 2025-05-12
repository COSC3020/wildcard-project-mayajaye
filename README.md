# Wildcard Project

You have a cool idea for an algorithms project? Use this repository. Make sure
to explain what problem you're solving, how you're doing it, and that you test
your code.

This algorithm simulates a student who didn't watch the lecture videos. 
It uses a map-reduce function to see how many tries it would take this 
student to get all of your kahoot questions right if they chose the 
longest answer first, then the second longest, then the shortest.

Each answer is a key (1, 2, or 3), and each answer choice is a boolean 
that denotes which answer is correct. The longest answer's key is 1, 
while the shortest answer's key is 3. If two answer lengths are equal, I input 
the correct one as a shorter answer than the incorrect one as a tie breaker in 
your favor. Example:

1 (longest answer): true

2 (next longest): false

3 (shortest): false
 
The map function checks 1, then 2, then 3, then maps the answer key 
since it is is equal to the number of tries it took to find the answer. 
After everything is mapped, the reduce function will sum up all the tries.

If I had more time, I would do more questions than the 53 I included. I 
would also probably use the counting matches example to count the number 
of first, second, and third tries. I can still offer you some fun facts 
however.

Here are the results from the 53 questions I used:

Correct answer is the longest answer overall: 26/53 (49%)

Correct answer is the second longest:         15/53 (28%)

Correct answer is the shortest:               12/53 (23%)

This sample supports our theory that if you choose the longest answer, you are 
more likely to get the kahoot question correct.

## Runtime Analysis (Worst Case $\Theta$)
The factors that contribute to the span are:
1. Map the answers. On the worst case, this should be 3 since it does 3 compares in parallel. $\Theta(1)$
2. Reduce the answers by summing them. Since this is like a join function, it takes $\Theta(logn)$ to reach the result
3. Output the results. This is constant $\Theta(1)$

The runtime equation is: $2 + logn$

Ignoring the asymptotically insignificant terms:

$T_{\inf}(n) \in \Theta(logn)$

#### Sources

I had chatGPT write out the questions so I didn't have to do 
that manually, but I did check the validity of the character counts

"I certify that I have listed all sources used to complete this exercise,
including the use of any Large Language Models. All of the work is my own, except
where stated otherwise. I am aware that plagiarism carries severe penalties and
that if plagiarism is suspected, charges may be filed against me without prior
notice."
