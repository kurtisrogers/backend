export default {
  rest: {
    defaultLimit: 25,
    maxLimit: 100,
    withCount: true,
    populate: ['components.inputs', 'components.formConfig'],
  }
};
