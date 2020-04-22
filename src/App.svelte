<script>
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import CreatePollForm from './components/CreatePollForm.svelte';
  import Tabs from './shared/Tabs.svelte';

  let items = ['Current Polls', 'Add New Poll'];
  let activeItem = items[0];

  const handleOnTabChange = (event) => {
    activeItem = event.detail;
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
    <p>
      Current polls tab...
    </p>
  {:else if activeItem === 'Add New Poll'}
    <CreatePollForm />
  {/if}
</main>
<Footer />

