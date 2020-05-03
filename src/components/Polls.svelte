<script>
  import { fade, scale } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import PollDetails from './PollDetails.svelte';
  import PollStore from '../stores/poll-store.js';
</script>
<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>

<div class="poll-list">
  {#each $PollStore as poll (poll.id)}
    <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
      <PollDetails {poll} />
    </div>
  {/each}
</div>
