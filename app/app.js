
		var world = new world_atom();

		world.create();

		world.start();


		for (var i = 0; i < 30; i++) {
			var elem = new Object();

			elem.pos_y = getRandomInt(0, 100);
			elem.pos_x = getRandomInt(0, 100);

			elem.speed_x = getRandomInt(0, 30);
			elem.speed_y = getRandomInt(0, 30);

			elem.width = getRandomInt(50, 80);
			elem.height = elem.width;

			world.add_element( elem );
		}

console.log(world);
