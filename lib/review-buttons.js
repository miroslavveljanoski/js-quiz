// When deployed, this script injects a div at the top of your body with testing/review buttons

{
  const validateContainer = document.createElement('div');
  validateContainer.style = 'text-align: center;';

  const monkeyTest = document.createElement('button');
  monkeyTest.innerHTML = 'unleash the gremlins';
  const buttonClickingGremlin = ({ logger, randomizer, window }) => {
    return () => {
      const buttons = document.querySelectorAll('button');
      if (buttons.length > 0) {
        const randomButton = buttons[Math.floor(Math.random() * buttons.length)];
        randomButton.dispatchEvent(new Event('focus'));
        randomButton.dispatchEvent(new Event('click'));
        randomButton.dispatchEvent(new Event('blur'));
      }
    };
  };
  monkeyTest.onclick = () => {
    document.body.removeChild(validateContainer);
    const horde = gremlins.createHorde({
      species: [
        gremlins.species.clicker(),
        gremlins.species.formFiller(),
        buttonClickingGremlin,
        gremlins.species.typer(),
        gremlins.species.scroller(),
      ],
      strategies: [gremlins.strategies.distribution({
        distribution: [
          0.35,
          0.27,
          0.17,
          0.1,
          0.01,
        ],
        delay: 10,
        nb: 200,
      })]
    });
    horde.unleash();
    setTimeout(() => {
      horde.stop();
      document.body.insertBefore(validateContainer, document.body.firstChild);
    }, 2000);
  };
  validateContainer.appendChild(monkeyTest);
  document.body.insertBefore(validateContainer, document.body.firstChild);

  if (window.location.href.indexOf('http') !== -1) {

    const validateHTML = document.createElement('button');
    // how would you label this button with ARIA?
    validateHTML.innerHTML = 'validate HTML';
    validateHTML.onclick = () => window.open('https://validator.w3.org/nu/?doc=' + encodeURIComponent(window.location.href), '_blank');
    validateContainer.appendChild(validateHTML);

    const validateCSS = document.createElement('button');
    // how would you label this button with ARIA?
    validateCSS.innerHTML = 'validate CSS';
    validateCSS.onclick = () => window.open('https://jigsaw.w3.org/css-validator/validator?uri=' + encodeURIComponent(window.location.href), '_blank');
    validateContainer.appendChild(validateCSS);

    const developmentStrategyButton = document.createElement('button');
    // how would you label this button with ARIA?
    developmentStrategyButton.innerHTML = 'development strategy';
    const developmentStrategyA = document.createElement('a');
    developmentStrategyA.href = './development-strategy';
    developmentStrategyA.target = '_blank';
    developmentStrategyA.appendChild(developmentStrategyButton);
    validateContainer.appendChild(developmentStrategyA);

  }
}
