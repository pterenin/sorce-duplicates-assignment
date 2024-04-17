## Question
This question should take about 1-2 hours to solve. When you're done, email your source code and solution to us at takehome@moz.com. The easiest way is to send the JS file with a `.txt` extension, e.g. `solution.js.txt`. Even if you don't complete the solution in 2 hours, please email in your progress.

You will be given a large set of data with the following JSON format in `data.json`
```
{
  "idina_response":{
    "sources":[
      {
        "url":"example.com",
        "spam_score": 1,
        "matching_target_indexes":[
          0
        ],
        "matching_source_urls":[
          {
            "url":"example.com/news/current/",
            "page_authority":44
          }
        ],
        "domain_authority":95
      },
      // ...
    ]
  }
}
```
From this data we would like you to write code that produces two lists. The first will be the list of all the URLs that have a duplicate `spam_score`, and the second will be a list of all the URLs with a duplicate `domain_authority`.

Example: The following simplified data would return the following JSON object:

###### Example Data
```
{
  "idina_response":{
    "sources":[
      {
        "url":"example.com",
        "spam_score": 1,
        "domain_authority":95
      },
      {
        "url":"foo.com",
        "spam_score": 2,
        "domain_authority":100
      },
      {
        "url":"bar.com",
        "spam_score": 1,
        "domain_authority":100
      },
      {
        "url":"baz.com",
        "spam_score": 1,
        "domain_authority":12
      },
      {
        "url":"qux.com",
        "spam_score": 2,
        "domain_authority":401
      },
      {
        "url":"moz.com",
        "spam_score": 186,
        "domain_authority":99
      },
    ]
  }
}
```
###### Example output
```
{
  "duplicate_spam_scores": [
    "example.com", 
    "bar.com",
    "foo.com",
    "baz.com",
    "qux.com"
  ],
  "duplicate_domain_authorities": [
    "foo.com",
    "bar.com"
  ]
}
```
