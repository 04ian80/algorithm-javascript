## Description

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return _the merged string._

## Pseudo code

1. Get the longest length of string of two given words.
2. Declare the variable and intiate it with the empty string.
3. Iterate for the longest legnth of two words, and get the nth alphabet from the given word in order.
4. Get the first alphabet of word1 and concat to the empty string that we declared before, and then concat the first alphabet of word2. Repeat it until we got the last alphabet.
5. If we don't have the nth alphabet in the word1 or word2, we have to concat nothing.
6. We get to return the result when we concat all the alphbet of two given strings.

## Submission

```tsx
function mergeAlternately(word1: string, word2: string): string {
  let result = "";
  const longestLength =
    word1.length > word2.length ? word1.length : word2.length;

  for (let i = 0; i < longestLength; i++) {
    if (!!word1[i]) result += word1[i];
    if (!!word2[i]) result += word2[i];
  }

  return result;
}
```
