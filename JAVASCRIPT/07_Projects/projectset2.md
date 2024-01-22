# Projects related to Events

## project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-uzd9bn?file=6-unlimitedColors%2Fchaiaurcode.js,5-keyboard%2Fchaiaurcode.js)

# solution Code
## Project-5

```
const insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
  insert.innerHTML = ` 
  <div class = 'color'>
    <table>
    <tr>
      <th>Key</th>
      <th>KeYcode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </table>
  </div>
  `;
});

```

## Project-6
```
const randomcolor = function () {
  hex = '0123456ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;
const colorChange = function () {
  if (!intervalId) {
    intervalId = setInterval(colorchanging, 500);
  }
  function colorchanging() {
    document.body.style.backgroundColor = randomcolor();
  }
};
const stopChange = function () {
  clearInterval(intervalId);
  intervalId = null;
};
document.querySelector('#start').addEventListener('click', colorChange);
document.querySelector('#stop').addEventListener('click', stopChange);

```