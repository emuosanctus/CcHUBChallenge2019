function getNumber(num) {
  var input_var = document.getElementById('input');
  switch (num) {

          }
        }
      function pushBtn(obj) {

          var pushed = obj.innerHTML;

          if (pushed == '=') {
            // Calculate
            inputLabel.innerHTML = eval(inputLabel.innerHTML);

          } else if (pushed =='AC') {
            // All Clear
            inputLabel.innerHTML = '0';

          } else {
            if (inputLabel.innerHTML == '0') {
              inputLabel.innerHTML = pushed;

            } else {
              inputLabel.innerHTML += pushed;

            }
          }
        }
