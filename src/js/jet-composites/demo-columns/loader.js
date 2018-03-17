define(['ojs/ojcore', 'text!./view.html', 'text!./component.json', 'css!./styles', 'ojs/ojcomposite'],
  function(oj, view, metadata) {
    oj.Composite.register('demo-columns', {
      view: {inline: view},
      metadata: {inline: JSON.parse(metadata)}
    });
  }
);