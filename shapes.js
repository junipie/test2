exports.Shape = function(name) {
	this.name = name;
}

exports.Shape2d = function(name, color){
	exports.Shape.call(this, name);
	this.color = color;
	this.getColor = function(){
		return color;
	}
}
exports.Shape2d.prototype = Object.create(exports.Shape.prototype);
exports.Shape2d.prototype.constructor = exports.Shape2d;


exports.Circle = function(name, color, radius){
	exports.Shape2d.call(this, name, color);
	this.radius = radius;
	this.getRadius = function(){
		return radius;
	}
	this.getDiameter = function(){
		return 2*radius;
	}
	this.getArea = function(){
		return Math.PI*(radius+radius);
	}
}
exports.Circle.prototype = Object.create(exports.Shape2d.prototype);
exports.Circle.prototype.constructor = exports.Circle;


exports.Shape3d = function(name, color){
	exports.Shape.call(this, name);
	this.color = color;
	this.getColor = function(){
		return color;
	}
}
exports.Shape3d.prototype = Object.create(exports.Shape.prototype);
exports.Shape3d.prototype.constructor = exports.Shape3d;


exports.Cube = function(name, color, sideLength){
	exports.Shape3d.call(this, name, color);
	this.sideLength = sideLength;
	this.getVolume = function (){
		return sideLength*sideLength*sideLength;
	}
}
exports.Cube.prototype = Object.create(exports.Shape3d.prototype);
exports.Cube.prototype.constructor = exports.Cube;
