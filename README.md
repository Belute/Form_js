

# Form JS



This project is for **educational** porpuses only. 

Site published at: https://belute.github.io/Form_js/


## Project features


-   CSS
-   JS
-   HTML

## Authors

Justinas: [Github](https://github.com/Belute)

## Code sample



```css
body,
body * {
    margin: 0;
    padding: 0;
    vertical-align: top;
    box-sizing: border-box;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
        sans-serif;
}

body {
    min-height: 100vh;
    


  
}
```
```js
function backgroundColor() {
    let a;
    let b;
    let c;

    a = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    c = Math.floor(Math.random() * 256);
    color = 'rgb(' + a + ',' + b + ',' + c + ')'
    document.getElementById("body").style.background = color;

}

```
```html
    <div class="container">
        <button class="coment" id="btn">Komentaras</button>
        <form class="forma" action="/action_page.php">
            <label for="fname" class="visible" id=label1>Name:</label>
            <input type="text" name="inputText" class="visible" id="inputText"></input>
            <label for="text" class="visible" id=label2>Comment:</label>
            <textarea class="visible" id="text"></textarea>
        </form>

        <button class="visible" id="btn1">Submit</button>
        <button id=btn2 onclick="backgroundColor()">Change background color</button>


    </div>
```
