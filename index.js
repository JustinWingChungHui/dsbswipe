require([ 
    'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.2/photoswipe.min.js', 
    'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.2/photoswipe-ui-default.min.js' 
], function( PhotoSwipe, PhotoSwipeUI_Default ) {

    var pswpElement = document.querySelectorAll('.pswp')[0];

    var title ="Swipe left to see next person or swipe right to find out more";
    // build items array
    var items = [
        {
            src: 'photos/20180120_115122.jpg',
            w: 600,
            h: 400,
            matchurl: 'https://www.youtube.com/watch?v=XVdfqEmGb8Y',
            title: title,
        },
        {
            src: 'photos/20180120_115243.jpg',
            w: 1200,
            h: 900,
            matchurl: 'https://www.youtube.com/watch?v=Mjx_GjyXCs4',
            title: title,
        },
        {
            src: 'photos/20180120_115414.jpg',
            w: 1200,
            h: 900,
            matchurl: 'https://www.youtube.com/watch?v=-M1H7mlslfk',
            title: title,
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
   
    

    var previousIndex = gallery.getCurrentIndex();

    document.getElementById("find-match").onclick = function () { 
        gallery.init();
    };


    // Before slides change
    // (before the content is changed, but after navigation)
    // Update UI here (like "1 of X" indicator)
    gallery.listen('beforeChange', function() { 
        var index = gallery.getCurrentIndex();
        
        //if swipe right
        if (previousIndex  == (index + 1) % items.length) {
            document.getElementById('loading').style.display = 'block';
            var url = items[index].matchurl;
            gallery.close();
            window.location = url;
            return false;
        }
        

        previousIndex = gallery.getCurrentIndex();
    });

});
