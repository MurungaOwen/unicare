import { seedAdminUser } from "./admin.seeder";
import { seedStudents } from "./user.seeders";
import { seedDepartment } from "./department.seeder";

const seedDatabase = async () => {
  try {
    console.log("🚀 Starting database seeding...");
    // seeders here
    await seedDepartment();
    await seedAdminUser();
    // await seedStudents();
    process.exit(0);

    console.log("✅ Database seeding complete!");
  } catch (error) {
    console.error("❌ Error while seeding:", error);
  }
};

// Run the seed function
seedDatabase();
