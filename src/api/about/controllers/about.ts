/**
 *  about controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::about.about", ({ strapi }) => ({
  async find() {
    const entity = await strapi.entityService.findMany("api::about.about", {
      populate: {
        components: {
          on: {
            "atoms.heading": {
              populate: "*"
            },
            "organisms.banner": {
              populate: "*"
            },
            "molecules.form": {
              populate: "*"
            }
          }
        }
      }
    });

    return { data: entity };
  }
}));
