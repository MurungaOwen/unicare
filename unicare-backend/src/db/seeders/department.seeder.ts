import { db } from "../index";
import { DepartmentsTable } from "../schema"; // your department table schema
import { eq } from "drizzle-orm";

export const seedDepartment = async () => {
  const departmentId = "e6df73a8-dcf6-402e-bce0-0961c5c12a3c";
  const name = "Admin Department";

  try {
    // Check if department exists
    const existing = await db
      .select()
      .from(DepartmentsTable)
      .where(eq(DepartmentsTable.id, departmentId));

    if (existing.length > 0) {
      console.log("Department already exists. Skipping seed.");
      return;
    }

    // Insert department
    await db.insert(DepartmentsTable).values({
      id: departmentId,
      name,
    });

    console.log("Department seeded.");
  } catch (error) {
    console.error("Error seeding department:", error);
  }
};
