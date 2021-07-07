function solve() {
  // Select Elements
  let textElement = document.querySelector('#text');
  let namingConventionElement = document.querySelector('#naming-convention');

  // Parse Data
  let text = textElement.value;
  let namingConvention = namingConventionElement.value;

  // Main Logic
  let result = applyNamingConvention(text, namingConvention)
  
  //Display result i DOM
  let spanElement = document.getElementById('result');
  spanElement.textContent = result;

  function applyNamingConvention(text, convention) {
    const conventions = {
      'Pascal Case': () => text
      .toLowerCase()
      .split(' ')
      .map(x => x = x[0].toUpperCase() + x.slice(1))
      .join(''),

      'Camel Case': () => text
      .toLowerCase()
      .split(' ')
      .map((x, i) => x = i !== 0 ? x[0].toUpperCase() + x.slice(1) : x)
      .join(''),
      'Default': () => 'Error!'
    }

    return (conventions[convention] || conventions.Default)();
  }

}
