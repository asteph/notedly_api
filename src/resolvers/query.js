module.exports = {
  me: async (parent, { username }, { models, user }) => {
    // find a user given the current user context
    return await models.User.findById(user.id);
  },
  note: async (parent, args, { models }) => {
    return await models.Note.findById(args.id);
  },
  notes: async (parent, args, { models }) => {
    return await models.Note.find();
  },
  user: async (parent, { username }, { models }) => {
    // find a user given their username
    return await models.User.findOne({ username });
  },
  users: async (parent, { username }, { models }) => {
    // find all users
    return await models.User.find({});
  }
};
