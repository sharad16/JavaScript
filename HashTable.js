/**
* FileName:HashTable.js
* CreatedBy: Vamsee
* Date :27-08-2016
* Purpose : Creating HashTable Prototype in Javascript
*/
function HashTable() {
			this.size = 11;
			this.table = [];
			this.count = 0;
		}
		/**
		 * HashTable prototype insert function
		 * @param {Number} key - The key value
		 * @param {Number} value - The value to be inserted
		 */
		HashTable.prototype.insert = function(key, value) {
			var index = this.hashFunction(key, this.size);
			var bucket = this.table[index];
			if (!bucket) {
				bucket = [];
				this.table[index] = bucket;
			}
			/*if index is already present then we have to override the value */
			var present = false;
			for (var i = 0; i < bucket.length; i++) {
				var pair = bucket[i];
				if (key === pair[0]) {
					pair[1] = value;
					present = true;
				}
			}
			if (!present) {
				//bucket[0] = key;
				//bucket[1] = value;
				bucket.push([key, value]);
				//document.write(bucket.length+"<br>");
				//document.write(bucket instanceof Array);
				this.count++;
			}
			return this;
		}
		/**
		 * HashTable prototype hash function for returning a unique id
		 * @param {Number} key - The key value
		 * @param {Number} max - Maximum number for returning hash
		 */
		HashTable.prototype.hashFunction = function(key, max) {
			var hash = key % max;
			return hash;
		}
		/*HashTable prototype display function to display function*/
		HashTable.prototype.display = function() {
			/*Generating Dynamic Table to display HashTable*/
			var myTable = "<table><tr><td style='width: 100px; color: red;'>Key</td>";
			myTable += "<td style='width: 100px; color: red;'>Value</td>"
				//document.write(ht1.table.length+"<br>");
			for (var i = 0; i < ht1.table.length; i++) {
				var bucket = [];
				bucket = ht1.table[i];
				if (bucket) {
					myTable += "<tr><td style='width: 100px;'> " + bucket[0][0] + " </td>";
					myTable += "<td style='width: 100px;'> " + bucket[0][1] + " </td>";
				}
			}
			document.write(myTable);
		}
		/**
		 * HashTable prototype retrieve function
		 * @param {Number} key - The key value
		 */
		HashTable.prototype.retrive = function(key) {
			var index = this.hashFunction(key, this.size);
			var bucket = this.table[index];
			if (!bucket) {
				return null;
			} else {
				for (var i = 0; i < bucket.length; i++) {
					var pair = bucket[i];
				}
				if (pair[0] === key) {
					return pair[1];
				}
			}
		}
		/**
		 * HashTable prototype remove function
		 * @param {Number} key - The key value
		 */
		HashTable.prototype.remove = function(key) {
			//document.write(this.table.length+"<br>");
			var index = this.hashFunction(key, this.size);
			var bucket = this.table[index];
			if (!bucket) {
				return null;
			}
			for (var i = 0; i <
				bucket.length; i++) {
				var pair = bucket[i];
			}
			if (pair[0] === key) {
				this.table.splice(index, 1);
				return pair[1];
			}
			return null;
		}
		/*Creating HashTable instance*/
		var ht1 = new HashTable();
		ht1.insert(11, "Vamsi");
		ht1.insert(12, "India");
		ht1.insert(13, "cricket");
		ht1.insert(14, "tendulkar");
		ht1.insert(15,"e");
		ht1.insert(16,"f");
		ht1.insert(18, "Mahesh");
		ht1.insert(17,"g");
		ht1.insert(19, "Sachin");
		ht1.insert(20, "Cricket	");
		ht1.insert(21, "Olympics");
		ht1.display();

		var res = ht1.retrive(21);
		var res2 = ht1.retrive(18);
		document.write(res2);
		var res3 = ht1.retrive(11);
		document.write(res3 + "<br>");
		var res4 = ht1.remove(20);
		document.write("element removed is" + res4 + "<br>");
