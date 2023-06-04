function start() {
    document
      .getElementById("plusBtn")
      .addEventListener("click", add_task, false);
    document.getElementById("txt1").addEventListener(
      "keydown",
      function (event) {
        if (event.keyCode == 13) {
          add_task();
          event.preventDefault();
        }
      },
      false
    );
  }

  // function that add task on the screen
  function add_task() {
    var txt = document.getElementById("txt1").value;
    var table = document.getElementById("table");
    var tr = document.createElement("tr");
    var td = document.createElement("td");

 // checkbox input 
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "check";
//label for the task 
    var label = document.createElement("label");
    label.id = "label";
    label.htmlFor = "check";
    label.appendChild(document.createTextNode(txt));
   


    td.appendChild(checkbox);
    td.appendChild(label);
   

    // adding tick symbol for the task when checked - Chat gpt
    // checkbox.addEventListener('change', function() {
    //   if (this.checked) {
    //     checkbox.inert = '&#x2713;';
    //     checkbox.classList.add('checkbox-tick');
    //   }else{
    //     label.innerHTML = 'Checkbox';
    //     label.classList.remove('checkbox-tick');
    //   }
    // });

    var button = document.createElement("input");
    button.type = "button";
    button.name = "delete";
    button.value = "Delete";
    button.id = "Delete";
    td.appendChild(button);

    tr.appendChild(td);
    table.appendChild(tr);
    button.addEventListener("click", function () {
      table.removeChild(tr);
    });

    checkbox.addEventListener("change", function () {
      label.style.textDecoration = checkbox.checked
        ? "line-through"
        : "none";
      var tfoot = document.createElement("tfoot");
      tfoot.appendChild(tr);
      table.appendChild(tfoot);
      td.removeChild(button);

  
    });


   

    document.getElementById("txt1").value = "";
  }

  window.addEventListener("load", start, false);