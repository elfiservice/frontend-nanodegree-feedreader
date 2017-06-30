/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('all url are defined and Not empty', function () {
            //test url is defined
            for (var i = 0; i < allFeeds.length; i++) {
                var testSpec = allFeeds[i];
                expect(testSpec.url).toBeDefined();
                expect(testSpec.url).not.toBe('');
             }
        });
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('all Names are defined and not empty', function () {
            //test url is defined
            for (var i = 0; i < allFeeds.length; i++) {
                var testSpec = allFeeds[i];
                expect(testSpec.name).toBeDefined();
                expect(testSpec.name).not.toBe('');
             }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The Menu', function() {
        var bodyElemnt,
            hasClassHidden;
        beforeEach(function() {
            bodyElemnt = $('body');
            hasClassHidden = bodyElemnt.hasClass('menu-hidden');            
        });
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
            it('menu element is hidden by default', function() {
                expect(hasClassHidden).toBe(true);
            });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
            it('display menu after click', function() {
                $('.menu-icon-link').trigger('click');
                hasClassHidden = bodyElemnt.hasClass('menu-hidden');
                expect(hasClassHidden).toBe(false);
            });
            it('display menu after click Again', function() {
                $('.menu-icon-link').trigger('click');
                hasClassHidden = bodyElemnt.hasClass('menu-hidden');
                expect(hasClassHidden).toBe(true);
            });
    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initital Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        it('Load feed completely with least a single entry', function(done) { //this test makes sure the load feed completes its work
            expect($('.feed .entry')[0]).toBeDefined();
            done();
        });
        
    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
       var feed1, feed2;
       beforeEach(function(done) { //this makes sure the feed is loaded before each test
            loadFeed(0, function() { //loading of first feed
                feed1 = $('.feed').html();

                loadFeed(1, function() { //loading the second feed
                    feed2 = $('.feed').html();
                    done();
                });
            });
        });
        it('is loaded', function(done) { //this test makes sure the new newsfeed is loaded
            expect(feed1).not.toBe(feed2); //making sure the first feed is not equal to second feed
            done();
        });
        
    });

}());
