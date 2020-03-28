<script>
  export let name;

  const insertHelloWorld = () => {
    google.script.run.insertText("Hello World.");
  }
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial" target="_blank">Svelte tutorial</a> to learn how to build Svelte apps.</p>
  <button on:click={insertHelloWorld} class="blue">Insert Hello World.</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
    line-height: initial;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>