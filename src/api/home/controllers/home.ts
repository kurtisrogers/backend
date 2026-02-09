/**
 * home controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::home.home", ({ strapi }) => ({
  async find() {
    const entity = await strapi.entityService.findMany("api::home.home", {
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
              populate: {
                title: {
                  populate: "*"
                },
                formConfig: {
                  populate: "*"
                },
                inputs: {
                  populate: "*"
                }
              }
            }
          }
        }
      }
    });

    return { data: entity };
  }
}));
