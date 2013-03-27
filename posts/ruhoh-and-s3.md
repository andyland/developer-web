---
title: ruhoh + s3 = you're looking at it
date: '2013-03-23'
description:
tags: [web, aws]
---

If you're reading this and thinking
"wow, this is a nice looking blog -- I wonder what wordpress theme they are using?"
think again!  Wordpress is great.. we know lots of people using it to make cool sites
but like any group of developer nerds we always want something new, different, and even sometimes
better.

Enter [ruhoh](http://ruhoh.com).

### what is ruhoh? ###
Expanding on the popular static site generator
[Jekyll](https://github.com/mojombo/jekyll), ruhoh cleans up some things and makes others better.
For example - instead of jekyll-specific DSL, ruhoh uses a more standard moustache api for it's
templating.  It has a command line interface for adding new posts and pages, supports html or,
what we use for faster dev, [markdown](http://daringfireball.net/projects/markdown) syntax.
Once you're happy with how your site looks you compile it all to static pages and host it anywhere
with a webserver. Or.....

### s3 - a webserver? ###
In addition to the benefits of having no dependencies and no runtime operations, static websites
are extremely portable.  We don't need a database, we don't need any interpreter or preprocessor.
In fact we don't even need a webserver, at least not in the traditional sense.

Amazon Web Services (aws) has a product called "[s3](http://aws.amazon.com/s3/)" which
is short for "simple storage service".  It's a pay-as-you-go content delivery system which
is super easy to setup and super cheap to operate.  If your site starts getting too busy you should
consider adding aws's [CloudFront](http://aws.amazon.com/cloudfront/) product to not only increase
performance but also reduce your bill.

To host your static site on s3 you just create a bucket and turn on static website hosting as shown below


![S3 Static Website Hosting Screenshot]({{urls.media}}/posts/apidocs_bucket_static_website_hosting.png "Enabling static website hosting on your s3 bucket")

So to recap:

1.  build your site with ruhoh
2.  host your site on s3 with static website hosting
3.  ???
4.  profit
