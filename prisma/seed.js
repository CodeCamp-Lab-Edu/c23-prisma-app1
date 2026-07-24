import { faker } from "@faker-js/faker";
import prisma from "../src/lib/prisma.js"

async function main() {
    await prisma.user.createMany({
        data: Array.from({ length: 20}).map(()=>({
            name: faker.person.fullName(),
            email: faker.internet.email()
        }))
    })
}

main()
    .catch((err)=> {
        console.error(err)
        process.exit(1)
    })
    .finally(async ()=> {
        await prisma.$disconnect()
    })