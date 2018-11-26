var ContractName = "Election.sol"
var Contract = artifacts.require("./" + ContractName);
var Method = Election.__object__.properties["public"][0]
var InvalidAddress = 99

contract(ContractName, function(accounts) {
  var i;
  var sender;

  it("correctly handles reentrancy", function() {
    return Contract.deployed().then(function(instance) {
      i = instance;
      sender = accounts[1].extend({}, function() {i.call(Method, )})
      return i.call(Method, InvalidAddress, { from: accounts[1] }))
    }).then(assert.fail).catch(function(error) {
      assert(error.message.indexOf('revert') >= 0, "error message must contain revert");
    })
  });

  it("correctly handles call checking", function() {
    return Contract.deployed().then(function(instance) {
      i = instance;
      check;
      originalGas = accounts[1].gas;
      i.call(Method, 2, { from: accounts[1] }));
      return i.properties.mappings;
    }).then(function(m) {
      var correctMapping = _.each(function(m) {
        _.map(function(j) {
          if(j[i]) {
            return j
          }
        })
      })
      var check = j[i];
      var lessGas = originalGas > accounts[1].gas && accounts[1].gas === 0;
      assert.equal(lessGas, true, "successful transaction, correctly handled external call" )
      assert.equal(check, true, "successful transaction" )
    })
  });
});
