module.exports = async (req, res, next) => {
  try {
    // TODO: Check req.user to ensure the user's email is 'admin'
    if (!req.user || req.user.email !== 'admin')
      throw new Error('You do not have access to view this page');

    next();
  } catch (e) {
    e.status = 403;
    next(e);
  }
};
