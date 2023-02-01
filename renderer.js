function render(d, data,data1) {
  // Prepare template
  var templateSource = d.getElementById('myTemplate').innerHTML;
  var template = Handlebars.compile(templateSource);
  var html = template(data ,data1);

  // Add the result to the DOM
  d.getElementById('renderedContent').innerHTML = html;
}
