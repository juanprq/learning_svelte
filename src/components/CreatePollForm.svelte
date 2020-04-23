<script>
  import { createEventDispatcher } from 'svelte';
  import Button from '../shared/Button.svelte';

  const dispatch = createEventDispatcher();

  let fields = {
    question: '',
    answerA: '',
    answerB: '',
  };
  let errors = {
    question: '',
    answerA: '',
    answerB: '',
  }
  let valid = false;

  const handleSubmit = () => {
    valid = true;

    if (fields.question.trim().length < 5) {
      valid = false;
      errors.question = 'question must be at least 5 characters.';
    } else {
      errors.question = '';
    }

    if (fields.answerA.trim().length < 1) {
      valid = false;
      errors.answerA = 'answer A cannot be empty';
    } else {
      errors.answerA = '';
    }

    if (fields.answerB.trim().length < 1) {
      valid = false;
      errors.answerB = 'answer A cannot be empty';
    } else {
      errors.answerB = '';
    }

    if (valid) {
      const poll = { ...fields, voteA: 0, voteB: 0, id: Math.random() };
      dispatch('add', poll);
    }
  };
</script>
<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .form-field {
    margin: 18px auto;
  }
  input {
    width: 100%;
    border-radius: 6px;
  }
  label {
    margin: 10px auto;
    text-align: left;
  }
  .error {
    font-weight: bold;
    font-size: 12px;
    color: #d91b42;
  }
</style>

<form on:submit|preventDefault={handleSubmit}>
  <div class="form-field">
    <label for="question">Poll Question:</label>
    <input type="text" name="question" bind:value={fields.question} />
    <div class="error">{errors.question}</div>
  </div>

  <div class="form-field">
    <label for="answer-a">Answer A:</label>
    <input type="text" name="answer-a" bind:value={fields.answerA} />
    <div class="error">{errors.answerA}</div>
  </div>

  <div class="form-field">
    <label for="answer-b">Answer B:</label>
    <input type="text" name="answer-b" bind:value={fields.answerB} />
    <div class="error">{errors.answerB}</div>
  </div>

  <Button type="secondary" flat>Add Poll</Button>
</form>
