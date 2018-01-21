require([ 
    'node_modules/photoswipe/dist/photoswipe.js', 
    'node_modules/photoswipe/dist/photoswipe-ui-default.js' 
], function( PhotoSwipe, PhotoSwipeUI_Default ) {

    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: 'photos/20180120_115122.jpg',
            w: 600,
            h: 400,
        },
        {
            src: 'photos/20180120_115243.jpg',
            w: 1200,
            h: 900
        },
        {
            src: 'photos/20180120_115414.jpg',
            w: 1200,
            h: 900
        },

    ];
    
    // define options (if needed)
    var options = {
        // optionName: 'option value'
        // for example:
        index: 0 // start at first slide
    };
    
    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
    

    var previousIndex = gallery.getCurrentIndex();

    // Before slides change
    // (before the content is changed, but after navigation)
    // Update UI here (like "1 of X" indicator)
    gallery.listen('beforeChange', function() { 
        var index = gallery.getCurrentIndex();
        
        //if swipe right
        if ((previousIndex + 1) % 3  == index) {
            document.getElementById('loading').style.display = 'block';
            gallery.close();
            window.location.href = 'https://www.youtube.com/watch?v=6hS_RS7H_9Y';
        }
        

        previousIndex = gallery.getCurrentIndex();
    });

});
