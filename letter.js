var Letter = function(lett) {
	//make a charac property and set it to what you think it should be
	this.character = lett;
	//make an appear property and set it to what makes sense
	this.appear = false;
	//make a letterRender property and set it to a function that does what you think makes sense
	this.letterRender = function(){
		return this.character;
	}
};

module.exports = Letter;

//export the Letter constructor here