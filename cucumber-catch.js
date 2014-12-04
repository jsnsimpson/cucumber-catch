
module.exports = {

  /**
   *
   * @param {Function} assertions
   * @param {Function} callback
   * @returns {Function}
   */
  execute : function(assertions, callback) {

    return function() {
      try {
        assertions.apply(this, arguments);
      } catch(e) {
        callback.fail(e);
      }
    };
  }

};
