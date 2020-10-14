/*------------------------------------------------------------------------------------*/
/*
/*	Use jQuery to move Free Gifts for WooCommerce table from
/*	below the shopping cart table on the cart page. Utilizes
/*	waitForEl function from https://gist.github.com/chrisjhoughton/7890303
/*
/*------------------------------------------------------------------------------------*/

var waitForEl = function(selector, callback) {
  if (jQuery(selector).length) {
    callback();
  } else {
    setTimeout(function() {
      waitForEl(selector, callback);
    }, 100);
  }
};

waitForEl('body.cart div.fgf_gift_products_wrapper', function() {
  jQuery("body.cart div.fgf_gift_products_wrapper").clone().prependTo( "form.woocommerce-cart-form" ).addClass('gift-above');
});
