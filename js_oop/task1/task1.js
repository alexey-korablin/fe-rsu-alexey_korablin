(function shapes() {
	var shape = {
		type: '',
		getType: function() {
			return this.type;
		},
		getPerimeter: function() {
			var figure = this.getType();
			switch(figure) {
				case 'Triangle':
					return this.a + this.b + this.c;
				case 'Square':
					return this.a + this.b + this.c + this.d;
				case 'Rectangle':
					return (this.a + this.b) * 2;
				default:
					return 'Shape ' + figure + ' is undefined';
			}
		},
		draw: function() {
			return this.getType();
		}
	};

	function Triangle(a, b, c) {
		this.type = 'Triangle';
		this.a = a;
		this.b = b;
		this.c = c;
	}

	function Square(a, b, c, d) {
		this.type = 'Square';
		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
	}

	function Rectangle(width, height) {
		this.type = 'Rectangle';
		this.a = width;
		this.b = height;
	}

	Triangle.prototype = shape;
	Square.prototype = shape;
	Rectangle.prototype = shape;

	var triangle = new Triangle(1, 1, 6);
	var square = new Square(1, 5, 4, 3);

	console.log('Type of figure is ', triangle.getType());
	console.log('Perimeter is ', triangle.getPerimeter());
	console.log(triangle.draw());
	console.log('Type of figure is ', square.getType());
	console.log('Perimeter is ', square.getPerimeter());
	console.log(square.draw());

	Rectangle.prototype = Object.create(Square.prototype);
	Rectangle.prototype.constructor = Rectangle;
	Rectangle.prototype.getArea = function() {
		return this.a * this.b;
	};

	var rectangle = new Rectangle(2, 7);

	console.log('Type of figure is ', rectangle.getType());
	console.log('Perimeter is ', rectangle.getPerimeter());
	console.log('Area is ', rectangle.getArea());
	console.log(rectangle.draw());

}());