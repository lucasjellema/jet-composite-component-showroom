/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your application specific code will go here
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojrouter', 'ojs/ojknockout', 'ojs/ojarraytabledatasource', 'ojs/ojmenu'],
  function (oj, ko) {
    function ControllerViewModel() {
      var self = this;

      // Media queries for repsonsive layouts
      var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
      self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);

      // Router setup
      self.router = oj.Router.rootInstance;
      self.router.configure({
        'dashboard': { label: 'Dashboard', isDefault: true },
        'products': { label: 'Memory Game' },
        'orders': { label: 'Orders' },
        'customers': { label: 'Customers' },
        'finance': { label: 'Financial Statements' },
        'loyalty': { label: 'Loyalty Program' },
        'country': { label: 'Country Selection' }
      });
      oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();

      // Navigation setup
      var navData = [
        {
          name: 'Home', id: 'dashboard', loggedInOnly: false,
          iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-chart-icon-24'
        },
        {
          name: 'Memory Game', id: 'products',
          iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-fire-icon-24'
        },
        {
          name: 'Departments Overview', id: 'orders',
          iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-download-icon-24'
        },
        {
          name: 'Contact Form', id: 'customers',
          iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-info-icon-24'
        },
        {
          name: 'Oracle Park Zoo', id: 'loyalty',
          iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-people-icon-24'
        },
        {
          name: 'Contact Cards', id: 'finance',
          iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-catalog-icon-24'
        },
        {
          name: 'Country Selection', id: 'country',
          iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-catalog-icon-24'
        }

      ];
      self.navDataSource = new oj.ArrayTableDataSource(navData, { idAttribute: 'id' });

      // Header
      // Application Name used in Branding Area
      self.appName = ko.observable("Oracle JET Composite Components - Showroom of reusable components");

      // Footer
      function footerLink(name, id, linkTarget) {
        this.name = name;
        this.linkId = id;
        this.linkTarget = linkTarget;
      }
      self.footerLinks = ko.observableArray([
        new footerLink('GitHub Repo', 'gitHub', 'https://github.com/lucasjellema/jet-composite-component-showroom'),
        new footerLink('Contact Us', 'contactUs', 'http://www.oracle.com/us/corporate/contact/index.html'),
      ]);
    }

    return new ControllerViewModel();
  }
);
