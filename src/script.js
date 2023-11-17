import onInput from "./components/Validation/FieldValidation"
import { openModal, closeModal } from "./components/Modal/modal"

(function() {
    const openModalBtn = document.querySelector(".btn-open");
    const closeModalBtn = document.querySelector(".btn-close");
    const input = document.querySelector('.email-field');

    input.addEventListener('input', onInput);
    openModalBtn.addEventListener("click", openModal);
    closeModalBtn.addEventListener("click", closeModal);

    function toJSONString(form) {
      var obj = {};
      var elements = form.querySelectorAll("input, select, textarea");
      for (var i = 0; i < elements.length; ++i) {
        var element = elements[i];
        var name = element.name;
        var value = element.value;

        if (name) {
          obj[name] = value;
        }
      }
      return JSON.stringify(obj);
    }
    
    document.addEventListener("DOMContentLoaded", function() {
      var form = document.getElementById("form-contact");
      form.addEventListener(
        "submit",
        function(e) {
          e.preventDefault();
          var json = toJSONString(this);
          console.log(json)

          var newXHR = new XMLHttpRequest();

          newXHR.open("POST", "http://localhost:9090");

          // set the header
          // this lets the server know where/how to expect your data
          newXHR.setRequestHeader("Content-Type", "application/json");

          // this is how form data looks like when you send it with the attributes `action="POST"` on your form
          var formData = json;

          newXHR.onreadystatechange = function() {
            if (newXHR.readyState == XMLHttpRequest.DONE) {
              if (newXHR.status == 200) {
                document.getElementById("err-message").innerHTML = newXHR.responseText;
              } else if (newXHR.status == 400) {
                alert("Ошибка 400");
              } else {
                alert("Что-то пошло не так", newXHR.status);
                document.getElementById("err-message").innerHTML = "Ошибка отправки. Обратитесь в службу поддержки.";
              }
            }
          };

          newXHR.send(formData);
        },
        false
      );
    });
  })();

