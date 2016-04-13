import Ember from 'ember';

export default Ember.Route.extend({

	model(){
		return [
			{ text: "Mow the grass" },
			{ text: "Rake the database" },
			{ text: "Fix the television" }
		]
	}
});
