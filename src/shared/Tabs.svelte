<script>
  import { createEventDispatcher } from 'svelte';

  export let items;
  export let activeItem;

  const dispatch = createEventDispatcher();
</script>

<style>
  .tabs {
    margin-bottom: 40px;
  }
  ul {
    display: flex;
    padding: 0;
    justify-content: center;
    list-style-type: none;
    font-size: 18px;
    cursor: pointer;
  }
  li {
    margin: 0 16px;
    color: #555;
  }
  .active {
    color: #d91b42;
    border-bottom: 2px solid #d91b42;
    padding-bottom: 8px;
  }
</style>

<div class="tabs">
  <ul>
    {#each items as item}
      <li on:click={() => dispatch('tabChange', item)}>
        <div class:active={activeItem === item}>
          {item}
        </div>
      </li>
    {/each}
  </ul>
</div>
