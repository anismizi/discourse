import Presence from 'discourse/mixins/presence';

const Model = Ember.Object.extend(Presence);

Model.reopenClass({
  extractByKey: function(collection, klass) {
    var retval = {};
    if (Ember.isEmpty(collection)) { return retval; }

    collection.forEach(function(item) {
      retval[item.id] = klass.create(item);
    });
    return retval;
  }
});

export default Model;
