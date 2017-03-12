
		var world = new world_atom();

		world.dev_mode = true;
		
		world.create();

		world.start();


		for (var i = 0; i < 30; i++) {
			var elem = new Object();

			elem.pos_y = getRandomInt(0, 1000);
			elem.pos_x = getRandomInt(0, 1000);

			elem.speed_x = getRandomInt(0, 10);
			elem.speed_y = getRandomInt(0, 10);

			elem.width = getRandomInt(10, 30);
			elem.height = elem.width;

			world.add_element( elem );
		}

console.log(world);
