<script>
  let fields = {
    question: '',
    answerA: '',
    answerB: '',
  };

  const handleSubmit = () => {
    console.log(fields);
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
</style>

<form on:submit|preventDefault={handleSubmit}>
  <div class="form-field">
    <label for="question">Poll Question:</label>
    <input type="text" name="question" bind:value={fields.question} />
  </div>

  <div class="form-field">
    <label for="answer-a">Answer A:</label>
    <input type="text" name="answer-a" bind:value={fields.answerA} />
  </div>

  <div class="form-field">
    <label for="answer-b">Answer B:</label>
    <input type="text" name="answer-b" bind:value={fields.answerB} />
  </div>

  <button type="submit">Add Poll</button>
</form>
