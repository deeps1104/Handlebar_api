function render(d, data) {
  // Prepare template
  var templateSource = d.getElementById('myTemplate').innerHTML;
  var template = Handlebars.compile(templateSource);
  var html = template(data);

  // Add the result to the DOM
  d.getElementById('renderedContent').innerHTML = html;
}
