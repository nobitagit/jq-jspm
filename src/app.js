import $ from 'jquery';
import scrollTo from 'jquery.scrollto';

let el = $('#btn'),
    box = $('.box');

let testScroll = evt => {
  box.scrollTo('li:last-child', 0);
}

el.on('click', testScroll);
