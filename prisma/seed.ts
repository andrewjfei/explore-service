import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed(): Promise<void> {
	const user = await prisma.user.upsert({
		where: {
			username: "joebloggs"
		},
		update: {},
		create: {
			username: "joebloggs",
			email: "joe.bloggs@test.com",
			password: "password",
			lists: {
				create: [
					{
					name: "New Zealand",
					locations: {
						create: [
						{
							name: "Mt. Cook",
							latitude: -34.083832,
							longitude: 23.054992
						},
						{
							name: "Tepapa Museum",
							latitude: -34.083832,
							longitude: 23.054992
						},
						{
							name: "Misson Bay",
							latitude: -34.083832,
							longitude: 23.054992
						},
						{
							name: "East India Takeway",
							latitude: -34.083832,
							longitude: 23.054992
						},
						{
							name: "Rainbow's End",
							latitude: -34.083832,
							longitude: 23.054992
						}
						]
					}
				},
				{
					name: "Japan",
					locations: {
						create: [{
							name: "Team Labs",
							latitude: -34.083832,
							longitude: 23.054992
						},
						{
							name: "Bambi Land",
							latitude: -34.083832,
							longitude: 23.054992
						},
						{
							name: "Toyota Factory",
							latitude: -34.083832,
							longitude: 23.054992
						},
						{
							name: "Nintendo World",
							latitude: -34.083832,
							longitude: 23.054992
						}]
					}
				}]
			}
		}
	})

	console.log(user);
}

async function main(): Promise<void> {
	try {
	await seed();
		await prisma.$disconnect();
	} catch (err) {
		console.error(err);
		await prisma.$disconnect();
		process.exit(1);
	}	
}

main();
