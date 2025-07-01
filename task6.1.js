let arr = new Array();

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    for (var i = 0; i < data.length; i++) {
      arr.push(data[i].title.charAt(0).toUpperCase() + data[i].title.slice(1));
    }
  })
  .catch((err) => console.error(err));

console.log(arr);
