const bcrypt = require('bcrypt')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const newsData = [
	{
		title: 'Nuestro Grupo de',
		imageUrl:
			'https://res.cloudinary.com/dwrm1mp0n/image/upload/v1686529182/samples/imagecon-group.jpg',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate est sit amet orci ornare ornare. Suspendisse potenti. Nunc tempus odio ac nisl mollis convallis. Nam egestas justo eu iaculis viverra. Sed ut facilisis nunc. Nunc convallis a metus a tincidunt. Proin in eros eget quam dictum consequat quis at enim. Etiam sit amet scelerisque ipsum, nec aliquet enim. Pellentesque lacus nisl, aliquet ac ornare ac, porta sit amet metus. Maecenas mollis id ipsum ac lobortis. Duis vitae mauris vitae enim consequat varius. Donec vestibulum arcu a tellus consectetur, eu efficitur ipsum tincidunt. Nulla mattis congue ultricies. Donec mattis risus massa. Maecenas nec ultrices lorem, eget ultricies quam. Phasellus sed ullamcorper sapien.',
		published: true,
	},
	{
		title: 'Nuestro Grupo de',
		imageUrl:
			'https://res.cloudinary.com/dwrm1mp0n/image/upload/v1686529183/samples/cloudinary-group.jpg',
		description:
			'Suspendisse gravida justo non lacus viverra, eu mollis dui mattis. Curabitur feugiat scelerisque aliquam. Integer in nisl lobortis, condimentum sem sit amet, sodales tortor. Mauris eu elementum libero. Sed finibus fringilla neque, ut ultrices nisl tincidunt sed. Nullam commodo vel orci at luctus. Aenean id accumsan quam, sodales placerat augue. Praesent at vehicula erat. Quisque faucibus in sem sit amet lacinia. Donec posuere elit arcu, imperdiet ultricies nulla convallis nec. Phasellus dui mauris, ultricies vel erat vitae, viverra condimentum sapien. Sed nec mattis enim. Cras placerat erat non tristique varius. Sed eu enim vitae metus volutpat vehicula.',
	},
	{
		title: 'Nuestro Grupo de',
		imageUrl:
			'https://res.cloudinary.com/dwrm1mp0n/image/upload/v1686529178/samples/people/jazz.jpg',
		description:
			'Phasellus at tincidunt lacus, non efficitur enim. Etiam justo orci, aliquam ac cursus eu, congue vel sapien. Aliquam erat volutpat. Sed eu risus quam. Duis imperdiet odio magna, et placerat justo vehicula in. Integer mauris nisi, iaculis sit amet bibendum et, blandit nec dui. Vestibulum vehicula justo ipsum, sed posuere mi sagittis non. Donec sit amet turpis est. Nunc eget ullamcorper libero.',
	},
]

async function main() {
	console.log(`Start seeding ...`)
	const password = process.env.ADMIN_PASSWORD
	const saltRounds = Number(process.env.SALT_ROUNDS)
	const salt = await bcrypt.genSalt(saltRounds)
	const encryptedPassword = await bcrypt.hash(password, salt)

	await prisma.user.create({
		data: {
			name: process.env.ADMIN_NAME,
			email: process.env.ADMIN_EMAIL,
			password: encryptedPassword,
			role: 'ADMIN',
			// create multiple news at once
			news: {
				create: newsData,
			},
		},
	})

	console.log(`Seeding finished.`)
}

main()
	.catch(async (e) => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
