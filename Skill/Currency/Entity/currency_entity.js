/**
 * Currency Entity
 */
const Entity = girequire('src/Entity/entity');

const _ = require('underscore');

module.exports = class CurrencyEntity extends Entity {

	setup() {
		this.name = "Currency";
		this.import = {
			file: "Data.Basics.currencies",
			type: "csv"
		};
	}

}
