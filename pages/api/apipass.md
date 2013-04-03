---
title: ApiPass
description:
titlecase: false
---

An ApiPass is required for all api requests.  It is the signature on
a request and tells the api who you are and that you have rights to
access the api content.  

All SDK's that TuneWiki provides will perform this signing process for you automatically.
See our [github](https://github.com/tunewiki) page for a list of all available SDKs.  

- - -

Generating an ApiPass
======================
**all api requests must contain a `ts` querystring parameter that is set to the current unix timestamp.**  
*Note that the unix timestamp should be an integer representing whole seconds since Jan/1/1970.
Java by default returns this value in milliseconds so you must specify you want seconds instead.

To generate your ApiPass you need to use the following steps:

1.  Start with a string containing the uppercase method you are using.  example: "GET"
1.  Append to that string a newline and the uri you are requesting, followed by another newline.  example: "GET\n/lyrics/coldplay/clocks\n"
1.  Append to that string all of your GET (querystring) parameter values together in the order you are sending them (except apiPass of course)
1.  Append to that string all of your POST (form) parameter values together in the order you are sending them
1.  HMAC-MD5 Hash this string using your pre-shared key as the hash key

The result is your ApiPass.

Example:
the uri you are requesting is:  
`/lyrics/coldplay/clocks`  

the querystring you are sending is:  
`?ts=1364859625&apiKey=123456&apiPass=abcdef`  

In addition you are posting the variables `username=chad&password=foo`  

step 1 output: `GET`  
step 2 output: `GET\n/lyrics/coldplay/clocks\n`  
step 3 output: `GET\n/lyrics/coldplay/clocks\n1364859625123456`  
step 4 output: `GET\n/lyrics/coldplay/clocks\n1364859625123456chadfoo`  
step 5 is to simply hash the string `GET\n/lyrics/coldplay/clocks\n1364859625123456chadfoo` using your pre-shared key as the hash key.  

- - -

Testing
=======
An easy way to test if your code is producing the proper apiPass is to use [this online tool](http://www.freeformatter.com/hmac-generator.html).
Make sure to change the digest algorithm to md5 and put your apiSecret in for the Secret Key.

