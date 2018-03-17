/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your about ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojcomposite', 'jet-composites/demo-zoo/loader', 'ojs/ojbutton'],
 function(oj, ko, $) {
  
    function LoyaltyViewModel() {
      var self = this;
     
      var currentAnimals = [
        {'name': 'African Spurred Tortoise', 'exhibit': 'Kalahari Kingdom'},
        {'name': 'Emu', 'exhibit': 'Outback Trail'},
        {'name': 'Ring-Tailed Lemur', 'exhibit': 'Tropical Forest'},
        {'name': 'Red Kangaroo', 'exhibit': 'Outback Trail'},
        {'name': 'Kookaburra', 'exhibit': 'Outback Trail'},
        {'name': 'Capybara', 'exhibit': 'Tropical Forest'}
      ];
      var newAnimals = [
        {'name': 'Zebra', 'exhibit': 'Serengeti Crossing'},
        {'name': 'Ocelot', 'exhibit': 'Tropical Forest'},
        {'name': 'African Lion', 'exhibit': 'Kalahari Kingdom'},
        {'name': 'Warthog', 'exhibit': 'Serengeti Crossing'}
      ];
      this.animals = ko.observableArray(currentAnimals);
      this.btnDisabled = ko.observable(false);
      
      var disableAdd = function() {
        if (newAnimals.length == 0) {
          self.btnDisabled(true);
        }
      };
  
      self.arrayLen = ko.computed(function() {
        return 'The current length of the animals array is: ' + self.animals().length;
      })
  
      this.externalAdd = function(event) {
        // The application can update the demo-zoo composite's animals array property by using the
        // knockout observable array methods. Otherwise, when using the element.animals property setter,
        // the application will need to make a copy of the array before modifying or set the property to
        // a new array reference.
        self.animals.push(newAnimals.pop());
  
        // Disable add buttons once we've added all the available animals
        disableAdd();
        return true;
      };
  
      this.internalAdd = function(event) {
        // See the demo-zoo composite's ViewModel for the addAnimal
        // method implementation to see how the ViewModel would update the
        // animals array property.
        var zoo = document.getElementById('zoo1');
        zoo.addAnimal(newAnimals.pop());
  
        // Disable add buttons once we've added all the available animals
        disableAdd();
        return true;
      };

     
      // Below are a subset of the ViewModel methods invoked by the ojModule binding
      // Please reference the ojModule jsDoc for additional available methods.

      /**
       * Optional ViewModel method invoked when this ViewModel is about to be
       * used for the View transition.  The application can put data fetch logic
       * here that can return a Promise which will delay the handleAttached function
       * call below until the Promise is resolved.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @return {Promise|undefined} - If the callback returns a Promise, the next phase (attaching DOM) will be delayed until
       * the promise is resolved
       */
      self.handleActivated = function(info) {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
       */
      self.handleAttached = function(info) {
        // Implement if needed
      };


      /**
       * Optional ViewModel method invoked after the bindings are applied on this View. 
       * If the current View is retrieved from cache, the bindings will not be re-applied
       * and this callback will not be invoked.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       */
      self.handleBindingsApplied = function(info) {
        // Implement if needed
      };

      /*
       * Optional ViewModel method invoked after the View is removed from the
       * document DOM.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {Array} info.cachedNodes - An Array containing cached nodes for the View if the cache is enabled.
       */
      self.handleDetached = function(info) {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new LoyaltyViewModel();
  }
);
