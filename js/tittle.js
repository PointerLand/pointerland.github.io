function Tittle(selector) {
	this.domElement = document.querySelector(selector).querySelector('#target');
	this.tittle = document.createElement('div');
	this.styleTittle();
	this.positionTittle();
}

Tittle.prototype.styleTittle = function(width) {
	if (width == undefined)
		width = '.3rem';

	this.tittle.classList.add('tittle');
	this.tittle.style.position = 'absolute'
	this.tittle.style.top = '0';
	this.tittle.style.width = width;
	this.tittle.style.height = width;
	this.tittle.style.borderRadius = '50%';
	this.tittle.style.background = '#FFF';
	this.tittle.style.transform = 'translate(-50%,-50%)';
	this.tittle.style.webkitTransform = 'translate(-50%, -50%)';

	document.body.appendChild(this.tittle);
}

Tittle.prototype.positionTittle = function() {
	var position = this.domElement.getBoundingClientRect().left;
	var targetWidth = this.domElement.getBoundingClientRect().width;
	var centerPoint = position + (targetWidth / 2);

	this.tittle.style.left = centerPoint + 'px';
}