<script>
	import { handleSubmit } from '$lib/search';
	import { fields } from '$lib/fields';

	import ButtonControls from './forms/ButtonControls.svelte';
	import { LicenseDraft as G325AIcon } from 'carbon-icons-svelte';

	import { Form, FormGroup, MultiSelect, TextInput, Link } from 'carbon-components-svelte';

	let query = '';
	let results = [];
	let selectedFields = [];

	let yearMin = 1800;
	let yearMax = 1980;

	$: isSearchInvalid = selectedFields.length === 0 && query.length > 0;
</script>

<div class="max-w-[75ch] py-4">
	<p class="py-2">
		<G325AIcon class="inline" size="20" /> <span class="font-bold">G-325 Forms </span> are official forms
		used by INS/USCIS to collect biographical information including country and date of birth, citizenship
		and nationality, marital and family status, previous residences, and employment history and locations.
	</p>
</div>

<Form scope="g325a" on:submit={handleSubmit}>
	<div class="py-4 font-bold">Search Within</div>
	<FormGroup legendText="Fields">
		<div class="flex flex-row flex-wrap justify-start">
			<div class="basis-full md:basis-1/3">
				<MultiSelect
					name="fields"
					label="Select"
					selectionFeedback="fixed"
					itemToInput={(item) => ({ name: 'selectedFields', value: item.id })}
					bind:selectedIds={selectedFields}
					size="lg"
					sortItem={() => {}}
					items={fields['g325a'].filter((field) => field.search)}
				/>
			</div>
			<div class="basis-full md:basis-2/3">
				<TextInput
					name="query"
					placeholder="Search..."
					invalidText="Select 1+ fields for the search"
					bind:value={query}
					invalid={isSearchInvalid}
				/>
			</div>
		</div>
	</FormGroup>

	<ButtonControls bind:isSearchInvalid />
</Form>
