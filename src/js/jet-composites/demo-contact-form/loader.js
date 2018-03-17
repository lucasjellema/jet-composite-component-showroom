define(['ojs/ojcore', 'text!./view.html', 'text!./component.json', 'css!./styles', 
  'ojs/ojcomposite', 'ojs/ojinputtext'],
  function(oj, view, metadata) {
    oj.Composite.register('demo-contact-form', {
      view: {inline: view},
      metadata: {inline: JSON.parse(metadata)}
    });
  }
);