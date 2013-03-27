The code that generates [dev.tunewiki.com](http://dev.tunewiki.com)

Uses [ruhoh](http://ruhoh.com) to generate the static files.

See our [blog post](http://dev.tunewiki.com/ruhoh-+-s3-you-re-looking-at-it/) for more information about how this site was created.

**requires ruby - we use 1.9**

The following instructions are how to get ruhoh running so you can see this site locally.

## Getting Started

#### Get Bundler

Do you have bundler?

    $ bundle -v
    
If it's not found, install it:

    $ gem install bundler
    
More info on bundler: http://gembundler.com/

#### Bundle Install

This blog ships with its own [Gemfile][]. All you need to do is install the bundle.

Navigate to the root of this repository and execute:

    $ bundle install

#### Run Ruhoh from the Bundle

Once the bundle is completed, run:

    $ bundle exec rackup -p 9292

This starts a web server that hosts your blog here: [http://localhost:9292](http://localhost:9292)

To access the bundled ruhoh (2.0.alpha) you'll need precede your commands with `bundle exec`:

    $ bundle exec ruhoh help

## License

Released under the [MIT License](http://www.opensource.org/licenses/MIT)

