/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your Products ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery','ojs/ojcomposite', 
'jet-composites/demo-memory-game/loader', 'ojs/ojinputnumber', 'ojs/ojpopup'],
  function (oj, ko, $) {

    function ProductsViewModel() {
      var self = this;

      self.attempts = ko.observable(0);
      var imageRoot = "http://www.oracle.com/webfolder/technetwork/jet/demo/"
      self.chartImages = [
        {value: 'donut chart', url: imageRoot+'images/componentcategories/donutchart_list.png'}, 
        {value: 'pie chart', url:  imageRoot+'images/componentcategories/piechart_list.png'},
        {value: 'scatter chart', url:  imageRoot+'images/componentcategories/scatterchart_list.png'},
        {value: 'bubble chart', url:  imageRoot+'images/componentcategories/bubblechart_list.png'},
        {value: 'pyramid chart', url:  imageRoot+'images/componentcategories/pyramidchart_list.png'},
        {value: 'funnel chart', url:  imageRoot+'images/componentcategories/funnelchart_list.png'},
        {value: 'stock chart', url:  imageRoot+'images/componentcategories/stockchart_list.png'},
        {value: 'box plot', url:  imageRoot+'images/componentcategories/boxplot_list.png'}
      ];

      // Property change listeners for demo-memory-game's attempts and hasWon properties
      // See the API doc Events section for more information on property change events
      self.updateAttempts = function(event) {
        self.attempts(event.detail.value);
      }

      self.showWinnerPopup = function(event) {
        if (event.detail.value)
          document.getElementById("popup1").open("#game1");
      }

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
      self.handleActivated = function (info) {
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
      self.handleAttached = function (info) {
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
      self.handleBindingsApplied = function (info) {
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
      self.handleDetached = function (info) {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new ProductsViewModel();
  }
);
