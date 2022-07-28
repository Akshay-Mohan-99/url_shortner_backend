# URL Shortner Backend Architecture

Full stack app using Node, React, MongoDB atlas

Here I have made a URL shortner which can support upto three trillion five hundred twenty-one billion six hundred fourteen million six hundred six 
thousand two hundred eight (3521614606208). 

Haha...I had to put it words so that you could be amazed of how a very small system can support such a load.

Here, I'm working with a simple architecture with React as frontend and node as backend. I am using a token system to get unique id everytime so that we can get a 
corresponding unique string which can be our small url.

Architecture :
![image](https://user-images.githubusercontent.com/48945975/181539875-506fcde6-a22d-4e6e-b879-427458e32860.png)

Frontend is using simple React and backend is where the logic exists. Backend system is run by Node which is using MongoDB to store the data.

The Tokenizer is a simple table which stores the last used Token(id). We can pass this token to the short url creation function which basically converts this number 
into a base 62 number and provides corresponding small url string from our master string which contains characters 0-9, a-z, A-Z (total 62 chars).

We can easily scale the tokenizer by sending range of numbers so that the indivisual backend processors.

UI : 
![image](https://user-images.githubusercontent.com/48945975/181580229-2aaaec2b-f3a0-40c0-ae1d-ad45771300e0.png)

It has basic features like adding a new long URL and generating its corresponding small url or deleting the same.
For insight about the frontend code you can checkout frontend repo : https://github.com/Akshay-Mohan-99/url_shortner

Hope you learn and got an idea about the overall working of the application.
Cheers !!
