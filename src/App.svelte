<script>
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import CreatePollForm from './components/CreatePollForm.svelte';
  import Polls from './components/Polls.svelte';
  import Tabs from './shared/Tabs.svelte';

  let items = ['Current Polls', 'Add New Poll'];
  let activeItem = items[0];
  let polls = [
    {
      id: 1,
      question: 'python or javascript',
      answerA: 'python',
      answerB: 'javascript',
      voteA: 9,
      voteB: 15,
    }
  ];

  const handleOnTabChange = (event) => {
    activeItem = event.detail;
  };
  const handleOnAddPoll = (event) => {
    polls = [event.detail, ...polls];
    activeItem = items[0];
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
    <Polls data={polls} />
  {:else if activeItem === 'Add New Poll'}
    <CreatePollForm on:add={handleOnAddPoll}/>
  {/if}
</main>
<Footer />

