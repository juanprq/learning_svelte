<script>
  import { createEventDispatcher } from 'svelte';
  import { tweened } from 'svelte/motion';
  import PollStore from '../stores/poll-store.js';
  import Card from '../shared/Card.svelte';
  import Button from '../shared/Button.svelte';

  export let poll;

  $: totalVotes = (poll.voteA + poll.voteB) || 1;
  $: percentA = Math.ceil(poll.voteA / totalVotes * 100);
  $: percentB = Math.ceil(poll.voteB / totalVotes * 100);

  // tweened percentages
  const tweenedA = tweened(0);
  const tweenedB = tweened(0);
  $: tweenedA.set(percentA);
  $: tweenedB.set(percentB);

  const handleOnVote = (option, questionId) => {
    PollStore.update(previousPolls => {
      let copiedPolls = [...previousPolls];
      let upvotedPoll = copiedPolls.find(({ id }) => id === questionId);

      const key = option === 'a' ? 'voteA' : 'voteB';
      upvotedPoll[key]++;

      return copiedPolls;
    });
  };

  const handleOnDelete = (pollId) => {
    PollStore.update(
      previousPolls => previousPolls
        .filter(({ id }) => id !== pollId));
  };
</script>
<style>
  h3{
    margin: 0 auto;
    color: #555;
  }
  p{
    margin-top: 6px;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
  }
  .answer{
    background: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
  }
  .answer:hover{
    opacity: 0.6;
  }
  span{
    display: inline-block;
    padding: 10px 20px;
  }
  .percent {
    height: 100%;
    position: absolute;
    box-sizing: border-box;
  }
  .percent-a {
    background-color: rgba(217, 20, 66, 0.2);
    border-left: 4px solid #d91b42;
  }
  .percent-b {
    background-color: rgba(69, 196, 150, 0.2);
    border-left: 4px solid #45c496;
  }
  .delete {
    margin-top: 30px;
    text-align: center;
  }
</style>

<Card>
  <div class="poll">
    <h3>
      {poll.question}
    </h3>
    <p>
      Total votes: {totalVotes}
    </p>
    <div class="answer" on:click={() => handleOnVote('a', poll.id)}>
      <div class="percent percent-a" style="width: {$tweenedA}%"></div>
      <span>{poll.answerA} ({poll.voteA})</span>
    </div>
    <div class="answer" on:click={() =>handleOnVote('b', poll.id)}>
      <div class="percent percent-b"style="width: {$tweenedB}%"></div>
      <span>{poll.answerB} ({poll.voteB})</span>
    </div>
    <div class="delete">
      <Button on:click={() => handleOnDelete(poll.id)} flat>Delete</Button>
    </div>
  </div>
</Card>
