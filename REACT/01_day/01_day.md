```
 what is CDNs?
 Difference between Async and Differ ?
 what is CrossOrigin?
```


### Structure : It is not used because it is complex so we use JSX.(Just For Knowledge)
```
    const heading = React.createElement("h1", {}, "Namaste React !!");
    heading (React Element ) is an Object 
    React also works with HTML tags and maintains the order 
    .render() is used to modify the element it will override the dom.

```

```
       <h1 id = "title">Heading 1</h1> 
      const heading = React.createElement(
        "h1",
        {
          id: "title",
        },
        "Heading 1"
      );
        <h2 id = "title">Heading 2</h2>
      const heading2 = React.createElement(
        "h2",
        {
          id: "title",
        },
        "Heading 2"
      );
        <div id = "container">
            <h1 id = "title">Heading 1</h1> 
            <h2 id = "title">Heading 2</h2>
        </div>
      const container = React.createElement(
        "div",
        {
            id: "container",   
        },
        [heading,heading2]
      );
```