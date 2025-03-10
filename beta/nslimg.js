var picPaths = ['https://www.southernliving.com/thmb/dvop11UC2PK2qtGvPvA3rYXL6kA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SL-RomanticMessages--7_perfectcrime-51205df4dc934659ac0736775d97a75d.jpg',
 'https://www.southernliving.com/thmb/YMrwcxtld0MONmkkfRm9tnV2C84=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SL-RomanticMessages--6_NicholasSparks-7ddafc407baf4002bcdcf4f608daab13.jpg',

'https://www.southernliving.com/thmb/7m2nFUE7v7gc0-rQn6MO98e8zeY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SL-RomanticMessages--3_nothing1-58dd9856155140019ba6e2542ef8c218.jpg',

'https://www.southernliving.com/thmb/S4CSGnqdfXY7WDj_rxvc4zDgsGA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SL-RomanticMessages--8_reasontosmile-8b0829b5391e46eebfca742df2ebd465.jpg'];

      var imageIndex = 0;
      var bannerImage; 

      function startInterval() {
        setInterval(displayNextImage, 3000);
      }

      function displayNextImage() {
        bannerImage.src = picPaths[imageIndex];
        if (imageIndex === (picPaths.length - 1)) {
          imageIndex = 0;
        } else {
          imageIndex = imageIndex + 1;
        }
      }

      window.onload = function() {
        bannerImage = document.getElementById('slideshow');
        startInterval();
      }