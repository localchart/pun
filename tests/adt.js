(function() {
  var $, List, from, pun, to;
  pun = require('../lib/pun').pun;
  $ = pun.$;
  List = pun.ADT({
    Cons: ['value', 'next'],
    Nil: []
  });
  to = pun.match([], function() {
    return List.Nil();
  }, $, function(xs) {
    return List.Cons(xs[0], to(xs.slice(1)));
  });
  from = pun.match(List.Nil(), function() {
    return [];
  }, List.Cons($, $), function(x, xs) {
    return [x].concat(from(xs));
  });
  console.log(from(to([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])));
  /*<<
  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
  >>*/
}).call(this);
