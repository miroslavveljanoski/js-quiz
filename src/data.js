/* Suggested Initial State

  this file contains a suggestion of what your initial state should include
  feel free to modify, add or remove properties as your team's project evolves

*/

const state = {
  quiz: {
    // computed at the beginning of the quiz using the length of .questions
    questions: 0,
    // how many questions has the user answered?
    //  you can calculate this value by iterating through the questions
    //  is selected === -1?
    answered: 0,
    // how many correct answers has the user submitted?
    //  you can calculate this value by iterating through the questions
    //  is selected === correct?
    correct: 0,
    // how do you want to measure score?
    //  that's up to you!
    score: 0,
  },
  // the questions in the quiz
  questions: [
    {
      text: 'What are the different ways to declare a JS variable?',
      answers: ['constant, let, variable', 'var, const, let, function', 'var, let, const'],
      correct: 2,
      selected: -1,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
      ],
    },
    {
      text: 'What does `typeof` do?',
      answers: [
        'changes the type of a primitive value',
        'returns a string describing the type of a value',
        'determines if a value is primitive',
      ],
      correct: 1,
      selected: -1,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
      ],
    },
    {
      text: 'How can you create an object in JavaScript?',
      answers: ['Using curly brackets{}', 'Using square brackets[]', 'Using the magic word Object'],
      correct: 0,
      selected: -1,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/object',
        },
      ],
    },
    {
      text: 'Who is the best teacher for web development?',
      answers: ['Evan Cole', 'Mosh Hamedani', 'Wes Bos', 'Brad - Traversy Media'],
      correct: 0,
      selected: -1,
      links: [
        {
          text: 'github.com/colevandersWands',
          href: 'https://github.com/colevandersWands',
        },
      ],
    },
    {
      text: 'Which is the best coding school for web development in Europa?',
      answers: ['HackYourFuture Amsterdam', 'HackYourFuture Belgium', 'HackYourFuture Copenhagen'],
      correct: 1,
      selected: -1,
      links: [
        {
          text: 'github.com/colevandersWands',
          href: 'https://github.com/colevandersWands',
        },
      ],
    },
  ],
};
