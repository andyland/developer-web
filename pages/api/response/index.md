---
title:
description:
---

For `GET` requests, the response will change based on the resource you are accessing.

For `POST` requests, the response will always contain our standard response, but may also contain resource-specific extras.
You can see in the examples below that the `ok` property will be `true` if your request was syntactically correct, or `false` if not.
The `acknowledged` property will be true if your request was successful, and `false` otherwise.
If your request failed, you will also recieve an `error` property.  This will contain a code and a message.  Please see our [Error Codes]({{ urls.base_path }}api/response/errors) for a complete list with descriptions.

<br/>
Our standard `POST` response for success:
    
    {
      "ok" : true,
      "acknowledged" : true
    }

<br/>
Our standard `POST` response for non-syntax errors:
    
    {
      "ok" : true,
      "acknowledged" : false,
      "error" : {
        "code" : 1,
        "message" : "Services are currently unavailable"
      }
    }

<br/>
Our standard `POST` response for syntax errors:
    
    {
      "ok" : false,
      "acknowledged" : false
    }
