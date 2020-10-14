# woocommerce-free-gifts-table
Move the gifts display in Free Gifts for WooCommerce to above the WordPress cart table.

Free Gifts for WooCommerce is a plugin that allows you to offer various types of gifts/free products within WooCommerce.
https://woocommerce.com/products/free-gifts-for-woocommerce/

On the cart page, if someone has qualified for a free gift, the table appears either below the main shopping cart table or in a popup triggered by a click. On mobile devices, many users don't see the Free Gift option because they don't realize they need to scroll down to see it. This snippet will look for the element being present in the DOM and move it to just inside the WooCommerce cart form.

This code is based upon Chris Houghton's waitForEl function:
https://gist.github.com/chrisjhoughton/7890303
