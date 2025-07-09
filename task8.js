window.addEventListener("DOMContentLoaded", function () {
  //Task 1, 2
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      let listItems = document.querySelectorAll("li");
      let emailList = document.querySelectorAll("p");
      for (let i = 0; i < listItems.length; i++) {
        listItems[i].innerHTML = data[i].name;
        listItems[i].style.cursor = "pointer";
        listItems[i].addEventListener("click", function () {
          emailList[i].innerHTML = data[i].email;
        });
      }
    })
    .catch((err) => console.error(err));

  //Task3, 4
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let postList = document.querySelectorAll(".posts");
      for (let i = 0; i < postList.length; i++) {
        postList[i].innerHTML = `${data[i].title}<br>${data[i].body}`;
        postList[i].style.cursor = "pointer";

        //Task 5
        postList[i].addEventListener("click", () => {
          fetch(
            `https://jsonplaceholder.typicode.com/comments?postId=${data[i].id}`
          )
            .then((res) => res.json())
            .then((comments) => {
              let comm = document.createElement("div");
              comments.forEach((comment) => {
                comm.innerHTML += `<p><strong>${comm.name}</strong>: ${comm.body}</p>`;
              });

              postList[i].after(comm);
            });
        });
      }
      //Sort Button
      document.getElementById("sort").addEventListener("click", () => {
        let sorted = [];
        for (let i = 0; i < postList.length; i++) {
          sorted.push({ title: data[i].title, body: data[i].body });
        }
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        for (let i = 0; i < postList.length; i++) {
          postList[i].innerHTML = `${sorted[i].title}<br>${sorted[i].body}`;
        }
      });
    })
    .catch((err) => console.error(err));
  //Randomizer
  document.getElementById("random").addEventListener("click", () => {
    let listItems = document.querySelectorAll("li");
    let emailList = document.querySelectorAll("p:not(.posts)");
    let postList = document.querySelectorAll(".posts");
    let names = [];
    let emails = [];
    let posts = [];
    for (let i = 0; i < listItems.length; i++) {
      names.push(listItems[i].innerHTML);
      emails.push(emailList[i].innerHTML);
      posts.push(postList[i].innerHTML);
    }
    let x = [];
    for (let i = 0; i < listItems.length; i++) {
      x.push(i);
    }
    for (let i = x.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = x[i];
      x[i] = x[j];
      x[j] = temp;
    }
    for (let i = 0; i < listItems.length; i++) {
      listItems[i].innerHTML = names[x[i]];
      emailList[i].innerHTML = emails[x[i]];
      postList[i].innerHTML = posts[x[i]];
    }
  });
});
