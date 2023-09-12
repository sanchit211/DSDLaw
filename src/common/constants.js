import {WD} from './responsive';

// local storage
export const store_key_userToken = '@userToken';
export const store_key_fcmToken = '@fcmToken';
export const store_key_userDetails = '@userDetails';
export const store_key_firstName = '@userFirstName';
export const store_key_lastName = '@userLastName';
export const store_key_userEmail = '@userEmail';
export const store_key_userPic = '@userPic';
export const store_key_userID = '@userID';
export const store_key_userRole = '@userRole';

//Icons Bottom Tab
export const icon_colorHome = require('../assets/icons/colorHome.png');
export const icon_grayHome = require('../assets/icons/grayHome.png');

export const icon_colorShop = require('../assets/icons/colorShop.png');
export const icon_grayShop = require('../assets/icons/grayShop.png');

export const icon_colorReels = require('../assets/icons/colorReels.png');
export const icon_grayReels = require('../assets/icons/grayReels.png');

export const icon_colorCommunity = require('../assets/icons/colorCommunity.png');
export const icon_grayCommunity = require('../assets/icons/grayCommunity.png');

export const icon_add_wishlist = require('../assets/icons/add_wishlist.png');

export const hitSlop = {
  top: WD(10),
  bottom: WD(10),
  left: WD(10),
  right: WD(10),
};

// APIs constants

// Authentication APIs
export const api_name_requestOTP = 'auth/request-otp';
export const api_name_verifyOTP = 'auth/verify-otp';
export const api_name_register = 'auth/register';
export const api_name_login = 'auth/login';
export const api_name_forgotPasswordRequestOTP =
  'auth/forget-password-request-otp';
export const api_name_resetPassword = 'auth/reset-password';
export const api_name_logout = 'auth/logout';

export const api_name_updateProfile = 'user';
export const api_name_get_profile = 'user';

// social login
export const api_name_google_login = 'auth/google/clientDetails';
export const api_name_facebook_login = 'auth/facebook/clientDetails';

// banner and videos
export const api_name_banner = 'banner';
export const api_name_videos = 'video/list';
export const api_name_like_video = 'video/likeVideo/';
export const api_name_dislike_video = 'video/dislikeVideo/';

// category
export const api_name_get_category = 'category';
export const api_name_get_subcategory = 'subcategory/category/';
export const api_name_get_style = 'style';
export const api_name_get_state = 'state';

// products
export const api_name_products = 'product/list';
export const api_name_productDetails = 'product/';
export const api_name_crazy_deals = 'crazydeals';
export const api_name_trendingProducts = 'product/trendingProducts';
export const api_name_topSellingProducts = '/product/topSelling';

// search suggestion
export const api_name_search_suggestion = 'product/search-sugggestion';

// address
export const api_name_get_address = 'address';
export const api_name_add_address = 'address';
export const api_name_update_address = 'address/';
export const api_name_remove_address = 'address/';
export const api_name_get_address_by_id = 'address/';

// wishlist
export const api_name_add_to_wishlist = 'user/wishlist';
export const api_name_get_wishlist = 'user/wishlist';
export const api_name_remove_wishlist = 'user/wishlist';

// product reviews
export const api_name_submit_review = 'reviews';
export const api_name_get_product_review = 'reviews/';
export const api_name_update_review = 'reviews';
export const api_name_delete_review = 'reviews/';
export const api_name_product_review_count = '/reviews/reviewsCount/';

// cart
export const api_name_add_to_cart = 'cart/add';
export const api_name_get_cart = 'cart';
export const api_name_update_cart = 'cart/update';
export const api_name_delete_product_from_cart = 'cart/delete';
export const api_name_get_product_count = 'cart/count';
export const api_name_get_cart_similar_products = 'cart/similarProducts';
export const api_name_cart_count = 'cart/count';

// checkout
export const api_name_create_order = 'order/create';
export const api_name_order = 'order/list';

// admin community
export const api_name_get_all_posts = 'community/allFeeds';
export const api_name_post_by_admin = 'community/post/admin';
export const api_name_edit_post_by_admin = 'community/editPost/admin/';
export const api_name_pin_post_by_admin = 'community/pinPost/'; //id at last
export const api_name_unpin_post_by_admin = 'community/unpinPost/'; //id at last

// user community
export const api_name_post_by_user = 'community/post/user';
export const api_name_edit_post_by_user = 'community/editPost/user/';
export const api_name_delete_post = 'community/post/delete/';

// user community vendor
export const api_name_image_post_by_vendor = 'community/imagePost/vendor';
export const api_name_video_post_by_vendor = 'community/videoPost/vendor';
export const api_name_dislike_post = '/community/post/dislike/';
export const api_name_like_post = 'community/post/like/';

export const api_name_edit_image_post_by_vendor =
  'community/editPost/vendor/image/';

export const api_name_edit_video_post_by_vendor =
  'community/editPost/vendor/video/';
// comments
export const api_name_get_all_comments = 'community/post/comments/';
export const api_name_add_comments = 'community/post/comments/';
export const api_name_edit_comments = 'community/post/comments/';
export const api_name_delete_comment = 'community/post/comments/deleteComment/';
export const api_name_nested_comments =
  'community/post/comments/nestedComment/';

export const api_name_get_all_nested_comments =
  'community/post/comments/nestedComment/all/';

export const api_name_delete_nested_comment =
  'community/post/comments/deleteNestedComment/';

export const api_name_wish_to_buy = 'community/wishToBuy';
export const api_name_get_post_details = 'community/postDetails/';
//end community apis

//base states
export const api_name_get_base_state = 'admin/baseStates';
export const api_name_get_vendor_product_list = 'vendor/products/list';
export const VendorRegister = 'vendor/initiateVendorRegistration';
export const VendorRegisterComplete = 'vendor/completeVendorRegistration';
export const api_name_check_seller = 'user/checkSeller';