\w === [a-zA-z0-9_]; matches any word character;
/./ === any character except new line;
\W === [^a-zA-z0-9_]; matches any non-word character; oposit of \w;
\s === matches any white space character, including tabs;
\S === matches any non-white space character, including tabs;
\d === [0-9]; matches any decimal digit;
\D === [^0-9]; matches any non-decimal digit;


Quantifiery
* = \d* === matches the previous element zero or more times;
+ = \d+ === matches the previous element one or more times;
? = \d? === matches the previous element zero or one times;
{3} = \d{3} === matches the previous element exactly three times;
      \d{3,4} === matches the previous element exactly three or four times;
      \d{3,} === matches the previous element exactly three or more times;      