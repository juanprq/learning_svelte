import { writable } from 'svelte/store';

const pollStore = writable(
  [
    {
      id: 1,
      question: 'python or javascript',
      answerA: 'python',
      answerB: 'javascript',
      voteA: 9,
      voteB: 15,
    },
  ],
);

export default pollStore;
