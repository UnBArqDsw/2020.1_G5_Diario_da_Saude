module.exports = (app) => {
    const group = require('../controllers/group.controller.js');

    // Create a new Group
    app.post('/group', group.create);

    // Retrieve all Groups
    app.get('/group', group.findAll);

    // Retrieve a single Group with groupId
    app.get('/group/:groupId', group.findOne);

    // Update a Group with groupId
    app.put('/group/:groupId', group.update);

    // Delete a Group with groupId
    app.delete('/group/:groupId', group.delete);

  // Add Member
  app.post('/group/member', group.addMember);
  // Add Form
  app.post('/group/form', group.addForm);

  // List member
  app.get('/members', group.listMember)
}
