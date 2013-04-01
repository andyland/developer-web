---
title: 
description: TuneWiki API Lyrics Resource
layout: resource
resource:
  name: lyrics
  endpoint: /lyrics/{artist}/{title}
  verbs: [GET, POST]

---

## <a class="anchor" id="GET"></a>GET
Use the `GET` verb to get lyrics for an artist and title.

#### Example request:

    {{ data.api_url_prefix }}/lyrics/Of%20Montreal/An%20Eluardian%20Instance?ts=<current timestamp>&amp;apiKey=<apikey>&amp;apiPass=<apipass>
**_\*note the artist and title are URL Encoded_**


#### Example response:

    {
      "1": {
          "ts": 0,
          "text": "Does she know?"
      },
      "2": {
          "ts": 18571,
          "text": "You should know that I"
      },
      "3": {
          "ts": 20538,
          "text": "Am not just searching for some first time high"
      },
      ...
      "38": {
        "ts": 267524,
        "text": "Don't you pimp out my heart"
      },
      "39": {
          "ts": 272998,
          "text": "Don't you pimp out my heart"
      }
    }


#### Properties:
1. **text** the text of the lyric
1. **ts** the timestamp when this lyric line should start to be displayed

    Milliseconds for JSON output<br/>[mm:ss.xx] for LRC format where **mm** is minutes, **ss** is seconds, and **xx** is hundreths of a second. [More info on the LRC format](http://en.wikipedia.org/wiki/LRC_(file_format\))


#### Notes:
1. You can get lyrics in a different language by specifying the `Accept-Language` header.

    Example: `Accept-Language: zh-CN` for Chinese (Simplified)

2. You can get lyrics in the developer friendly JSON format (Default) or in the standard LRC format.  To get LRC format specify `text/plain` as your `Accept` header.

    Example: `Accept: text/plain` for LRC format

- - -

## <a class="anchor" id="POST"></a>POST
Use the `POST` verb to update lyrics for an artist and title.  This includes both lyric text and timing information (Resync functionality).

#### Example request:

    {{ data.api_url_prefix }}/lyrics/Of%20Montreal/An%20Eluardian%20Instance
**_\*note the artist and title are URL Encoded_**

#### Example post body:
The post body content-type must be json encoded and use the following format. **Please Note:** If you omit the ts property the lyrics will only be updated.  If the line count matches the previous version the timing information will be maintained.

_Frequent error-prone updates may result in a ban of your API Key_

    {
      "1": {
          "ts": 0,
          "text": "Does she know?"
      },
      "2": {
          "ts": 18571,
          "text": "You should know that I"
      },
      "3": {
          "ts": 20538,
          "text": "Am not just searching for some first time high"
      },
      ...
      "38": {
        "ts": 267524,
        "text": "Don't you pimp out my heart"
      },
      "39": {
          "ts": 272998,
          "text": "Don't you pimp out my heart"
      }
    }



#### Response
The response generated will match our standard response format for posts and may include an error message if something went wrong.

#### Notes:
1. If you are updating lyrics in a different language you *must* specify the proper `Accept-Language` header.  Failing to do so will result in your lyrics being rejected.

    Example: `Accept-Language: zh-CN` for Chinese (Simplified)

- - -

