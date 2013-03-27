---
title: 'Couchbase: Better NoSQL'
titlecase: false
date: '2013-03-27'
description:
tags: [nosql, data, couchbase]
---

Here at TuneWiki we have to store a lot of data.  We originally started off with the traditional
LAMP stack that so many start with.  We started to get more traffic and MySQL was having
a harder time keeping up, so, like so many others out there, we introduced a caching layer
using memcached and things got faster overnight.  

Things were running smooth, that is unless one of our memcached nodes failed.  As you probably
know memcached is ephemeral storage -- if the server or process crashes the entire cache
is lost.  When we would lose a memcached node we would put additional strain on our MySQL cluster.
Additional memcached nodes would mitigate the problem to a point but this was still a pretty
big problem for us to solve.  We didn't want to have to maintain an ever-larger MySQL cluster just
as protection from memcached node failures.

Additionally, trying to shard and replicate a very large and very active MySQL cluster is tough --
not to mention the challenge of making schema changes. We found ourselves thinking WAY too
much about MySQL and conversations like the following could be heard more and more regularly.
> **Developer**: "Hey Mr. DBA - I need a new column added to the `foo` table"  
> **DBA**: "Oh, well that table has 100 million rows in it.  That's going to take a while"  
> **Developer**: "Oh but we want to launch this new feature today"  
> **DBA**: "Try next week - I have to babysit the servers and roll this change out from the slaves backward"  
> **Developer**: ![Capt. Kirk Yells MySQLLLL]({{urls.media}}/posts/mysql-kirk.jpg)  
  
<br/><br/>
### There had to be a better way ###
Enter [Couchbase](http://www.couchbase.com)

Couchbase was perfect for us for the following reasons:

1.  It's schema-less - no more table changes needed. (no more tables!)
1.  It speaks "memcached" and our application was already using memcached (what doesn't?!)
1.  It can persist your key-value data to disk so you don't lose your data if the server dies
1.  It scales every way - no more sharding or replication required
1.  It's *blazingly* fast

Today we are handling 10x the amount of data with far fewer headaches than ever.
The couchbase engineers are a great help to us when we do have an issue and have even made
changes based on our requirements or suggestions.

I'm fairly active in the [couchbase community](https://groups.google.com/group/couchbase) and recently 
did an interview with Couchbase about how we use their product.  [Check it out!](http://blog.couchbase.com/couchbase-nosql-tunewiki-billion-records-and-counting)

