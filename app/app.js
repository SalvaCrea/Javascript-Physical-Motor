
		var world = new world_atom();

		world.dev_mode = true;

		world.create();

		world.start();

// pour générer deux ball
		var elem = new Array();
		elem[0] = new Object();
		elem[1] = new Object();
		elem[0].pos_y = 400;
		elem[0].pos_x = 400;
		elem[1].pos_y = 450;
		elem[1].pos_x = 450;

		for (var i = 0; i < elem.length; i++) {

			elem[i].speed_x = 0;
			elem[i].speed_y = 0;

			elem[i].width = getRandomInt(10, 30);
			elem[i].height = elem.width;

			world.add_element( elem[i] );
		}

		// pour générer plein de ball
				// for (var i = 0; i < 30; i++) {
				// 	var elem = new Object();
				//
				// 	elem.pos_y = getRandomInt(0, 1000);
				// 	elem.pos_x = getRandomInt(0, 1000);
				//
				// 	elem.speed_x = getRandomInt(0, 10);
				// 	elem.speed_y = getRandomInt(0, 10);
				//
				// 	elem.width = getRandomInt(10, 30);
				// 	elem.height = elem.width;
				//
				// 	world.add_element( elem );
				// }


console.log(world);
