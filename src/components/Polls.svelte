<script>
  export let data;
</script>
<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>

<div class="poll-list">
  {#each data as poll (poll.id)}
    <div>{poll.question}</div>
  {/each}
</div>
