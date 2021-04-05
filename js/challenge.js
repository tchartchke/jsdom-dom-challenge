document.addEventListener("DOMContentLoaded", function() {
  let count = parseInt(document.querySelector("h1#counter").innerText, 10);
  const likes = []
  const comments = document.querySelector('div#list')

  let pause = document.querySelector("button#pause")

  let increment = setInterval(() => {
    count++
    document.querySelector("h1#counter").innerText = `${count}`
  }, 1000);

  pause.addEventListener("click", (e) => {
    if (pause.innerText === "pause"){
      clearInterval(increment)
      pause.innerText = 'resume'
      document.querySelector('button#minus').disabled = true;
      document.querySelector('button#plus').disabled = true;
      document.querySelector('button#heart').disabled = true;
      document.querySelector('button#submit').disabled = true;
    } else {
      increment = setInterval(() => {
        count++
        document.querySelector("h1#counter").innerText = `${count}`
      }, 1000);
      pause.innerText = 'pause'
      document.querySelector('button#minus').disabled = false;
      document.querySelector('button#plus').disabled = false;
      document.querySelector('button#heart').disabled = false;
      document.querySelector('button#submit').disabled = false;
    }
  });

  document.querySelector('button#minus').addEventListener("click", (e) => {
    count--
    document.querySelector("h1#counter").innerText = `${count}`
  });

  document.querySelector('button#plus').addEventListener("click", (e) => {
    count++
    document.querySelector("h1#counter").innerText = `${count}`
  });

  document.querySelector('button#heart').addEventListener("click", (e) => {
    const array = likes.find(element => element[0] == count)
    if (array) {
      array[1]++
    } else {
      likes.push([count, 1])
    }
    
    listLikes();
  });

  function listLikes() {
    const ul = document.querySelector("ul.likes")
    ul.innerHTML = ""
    likes.forEach(element => {
      li = document.createElement("li")
      if (element[1] === 1) {
        li.innerText = `${element[0]} has been liked ${element[1]} time`
      } else {
        li.innerText = `${element[0]} has been liked ${element[1]} times`
      }
      ul.appendChild(li)
    });
  }

  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    p = document.createElement("p")
    p.innerText = document.querySelector("input#comment-input").value
    comments.appendChild(p)
    document.querySelector("input#comment-input").value = ""
  });

}); 
