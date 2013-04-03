---
title: 
description: TuneWiki API Search Resource
layout: resource
resource:
  name: search 
  endpoint: /search
  verbs: [GET]

---

## <a class="anchor" id="GET"></a>GET
Use the `GET` verb to get search results based on a query.

#### Example request:

    {{ data.api_url_prefix }}/search?type=lyrics&q=hear+jerusalem_bells+ts=<current timestamp>&amp;apiKey=<apikey>&amp;apiPass=<apipass>


#### Example response:


    {
        "type": "lyrics",
        "hasMore": "true",
        "results": [
            {
                "playcount": 648167,
                "score": 5.2134,
                "artist": {
                    "id": "16019",
                    "name": "Coldplay"
                },
                "song": {
                    "id": "915214",
                    "artist_id": "16019",
                    "name": "Viva La VIda"
                },
                "line": "sand I hear Jerusalem bells a'ringing Roman Cavalry choirs are sing…"
            }
        ]
    }

- - -

#### Types of searches you can perform:
The following are valid values for the `type` parameter on the request  

1. `lyrics` - match a phrase from the lyrics of a song
1. `songs` - match a song name (do not include the artist name in your query)
1. `artistsongs` - match a song name (DO include the artist name in your query).  This is more accurate than a bare `songs` search.
1. `artists` - match an artist by name
1. `hashtags` - match shares based on a hashtag (example #templatetuesday)
1. `shares` - match shares based on any word in the comment.

- - -

#### Response Properties:
Response properties change depending on the type of search you are performing:  

1. **type** echoes back the type you requested
1. **hasMore** indicates if there are more search results beyond the page you received.
1. **score** indicates the accuracy of the match
1. **playcount** the number of times this song has been played
1. **artist** the artist associated with this match or share
1. **song** the song associated with this match or share
1. **line** the snippet of lyrics including the match 
1. **user** the user associated with the share or comment

- - -
