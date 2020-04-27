<script>
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import CreatePollForm from './components/CreatePollForm.svelte';
  import Polls from './components/Polls.svelte';
  import Tabs from './shared/Tabs.svelte';

  let items = ['Current Polls', 'Add New Poll'];
  let activeItem = items[0];

  const handleOnTabChange = (event) => {
    activeItem = event.detail;
  };
  const handleOnAddPoll = (event) => {
    polls = [event.detail, ...polls];
    activeItem = items[0];
  };
  const handleOnVote = (event) => {
    const { detail: { option, questionId } } = event;

    let copiedPolls = [...polls];
    let upvotedPoll = copiedPolls.find(({ id }) => id === questionId);

    const key = option === 'a' ? 'voteA' : 'voteB';
    upvotedPoll[key]++;

    polls = copiedPolls;
  };
</script>

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>

<Header />
<main>
  <Tabs {items} {activeItem} on:tabChange={handleOnTabChange} />
  {#if activeItem === 'Current Polls'}
    <Polls on:vote={handleOnVote} />
  {:else if activeItem === 'Add New Poll'}
    <CreatePollForm on:add={handleOnAddPoll}/>
  {/if}
</main>
<Footer />

