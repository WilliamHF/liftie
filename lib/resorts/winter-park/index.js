var select = require('../../select');
var coerce = require('../../tools/coerce');
var debug = require('debug')('liftie:resort:winter-park');

function parse(dom) {
  var liftStatus = {};

  // add parsing code here
  select(dom, '#statusTablesLift .statusTable tbody tr').forEach(function(node) {
    var name = node.children[0].children[1].data,
      status = node.children[2].children[0].data;
    liftStatus[name] = coerce(status);
  });

  debug('Winter Park Lift Status:', liftStatus);
  return liftStatus;
}

module.exports = parse;