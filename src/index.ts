import type { Core } from "@strapi/strapi";

interface AdminUserData {
  email: string;
  password: string;
  username: string;
  firstname: string;
  lastname: string;
  roleCode?: string;
}

interface AdminUser {
  id: number;
  email: string;
  username: string;
  firstname: string;
  lastname: string;
  blocked: boolean;
  isActive: boolean;
}

interface AdminRole {
  id: number;
  code: string;
  name: string;
}

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }): Promise<void> {
    if (process.env.CREATE_DEFAULT_USERS !== "true") {
      strapi.log.info("Default user creation is disabled");
      return;
    }

    strapi.log.info("🚀 Checking for default users...");

    async function createAdminUser(userData: AdminUserData): Promise<AdminUser | null> {
      try {
        const existingUser = (await strapi.db.query("admin::user").findOne({
          where: { email: userData.email }
        })) as AdminUser | null;

        if (existingUser) {
          strapi.log.info(`ℹ️  Admin user already exists: ${userData.email}`);
          return existingUser;
        }

        const authService = strapi.service("admin::auth") as {
          hashPassword: (password: string) => Promise<string>;
        };

        const hashedPassword = await authService.hashPassword(userData.password);

        const user = (await strapi.db.query("admin::user").create({
          data: {
            username: userData.username,
            email: userData.email,
            password: hashedPassword,
            firstname: userData.firstname,
            lastname: userData.lastname,
            blocked: false,
            isActive: true
          }
        })) as AdminUser;

        // Assign role
        const role = (await strapi.db.query("admin::role").findOne({
          where: { code: userData.roleCode || "strapi-super-admin" }
        })) as AdminRole | null;

        if (role) {
          await strapi.db.query("admin::user").update({
            where: { id: user.id },
            data: { roles: [role.id] }
          });
        }

        strapi.log.info(`✅ Created admin user: ${userData.email}`);
        return user;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        strapi.log.error(`❌ Error creating admin user ${userData.email}: ${errorMessage}`);
        return null;
      }
    }

    // Create admin users from environment variables
    if (process.env.DEFAULT_ADMIN_EMAIL && process.env.DEFAULT_ADMIN_PASSWORD) {
      await createAdminUser({
        email: process.env.DEFAULT_ADMIN_EMAIL,
        password: process.env.DEFAULT_ADMIN_PASSWORD,
        username: process.env.DEFAULT_ADMIN_USERNAME || "admin",
        firstname: process.env.DEFAULT_ADMIN_FIRSTNAME || "Admin",
        lastname: process.env.DEFAULT_ADMIN_LASTNAME || "User",
        roleCode: "strapi-super-admin"
      });
    }

    if (process.env.DEFAULT_EDITOR_EMAIL && process.env.DEFAULT_EDITOR_PASSWORD) {
      await createAdminUser({
        email: process.env.DEFAULT_EDITOR_EMAIL,
        password: process.env.DEFAULT_EDITOR_PASSWORD,
        username: process.env.DEFAULT_EDITOR_USERNAME || "editor",
        firstname: process.env.DEFAULT_EDITOR_FIRSTNAME || "Editor",
        lastname: process.env.DEFAULT_EDITOR_LASTNAME || "User",
        roleCode: "strapi-editor" // or 'strapi-super-admin' if needed
      });
    }

    strapi.log.info("✨ Default user check complete");
  }
};
