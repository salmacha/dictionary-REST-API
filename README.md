# Kamioun Interview Process

## The project 

The mission, should you choose to accept it, is to develop a dictionary-like REST API in the programming environment
of your choice.
 
The API lists the 10 sorted words of the specified language and page (first page starts at 1).

>Depending on what the client supports, you must either return a JSON, or the appropriate error if 
the client does not support the aforementioned format. 
>
>You are strongly advised to use the standard HTTP content negotiation mechanism here.
>
>We should be able to retrieve the response using GET request, with the specific language as argument.

To keep things simple, the English and French language datasets are provided to you.

Use only the provided dataset files (i.e. the provided English and French words).

You are free to implement the response you see fit for other languages (for which there is no data).

## Response examples

> The following example does not reflect the actual dataset. It is only here to detail the expected structure of the responses.

### List of word API

```json
[
  "Capitaine",
  "Dock",
  "Ennemi"
]
```

## Guidelines

You should not spend more than **two hours** on this. 
We are not looking for a complete solution so do not stress if you cannot get everything done under two hours.

You do not have to implement everything from scratch, you are free to pick any language/library/framework you like.

You are expected to provide the source code **- (as a git project) -** as well as accurate instructions on how to deploy and run **- (using docker would be nice) -** your code, you don't have to host your work anywhere, as long as it works locally, it's fine. 

Send us the source code, and the (hopefully short) instructions on how to run it when you're done.

As you might have seen, the project is deliberately underspecified.
You should document your important implementation choices (no need for a novel, short inline phrases are usually enough).
