// window.document
    // window.console

    // String(25)

    // Number('25')



    function subscribe() {
      let button = document.body.querySelector('.js-button');

      if (button.innerText === 'Subscribe') {
        button.innerText = 'Subscribed';
        button.classList.add('is-subscribed');
        
        
      } else {
        button.innerText = 'Subscribe';
        
        button.classList.remove('is-subscribed');
      }


    }

    function calculateShipping() {
      let input = document.body.querySelector('.js-input');
      let output = document.body.querySelector('.js-output');
      let shipping = 10

      if (input.value <= 0) {
        output.classList.add('error');
        output.innerHTML = `ERROR: Please enter a value greater than $0`;
      } else if (input.value >= 40) {
        output.innerHTML = `Total cost: $${input.value}`;
        output.classList.remove('error');
      } else {
        output.classList.remove('error');
        output.innerHTML = `Total cost: $${(Number(input.value) + 10).toFixed(2)}`;
      }
    }

    function handleCostKeyDown(event) {
      if (event.key === 'Enter') {
        calculateShipping();
      }
    }

    function submit() {
      const nameInput = document.body.querySelector('.js-input-name');
      const output = document.body.querySelector('.js-output-name');
      output.innerHTML = `Hello ${nameInput.value}!`;
    }

    function handleSubmitKeyDown(event,) {
      if (event.key === 'Enter') {
        submit();
      }
    }

    function handleSubmitOnKeyUp(event) {
      const nameKeyUp = document.body.querySelector('.js-output-up');
      nameKeyUp.innerHTML += event.key;
    }