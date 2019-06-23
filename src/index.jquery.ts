/**
 * Filterizr is a jQuery plugin that sorts, shuffles and applies stunning filters over
 * responsive galleries using CSS3 transitions and custom CSS effects.
 *
 * @author Yiotis Kaltsikis
 * @see {@link http://yiotis.net/filterizr}
 * @license MIT
 */

import Filterizr from './Filterizr';

(function($: any) {
  Filterizr.installAsJQueryPlugin($);
})((<any>window).jQuery);

export default Filterizr;
