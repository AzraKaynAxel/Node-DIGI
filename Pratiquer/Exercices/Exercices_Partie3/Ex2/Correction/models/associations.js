const Task = require('./taskModel');
const List = require('./listModel');
const User = require('./userModel');


// 1:N Relationship
List.hasMany(Task, {
    foreignKey: 'listId',
    as: 'tasks'
});

Task.belongsTo(List, {
    foreignKey: 'listId',
    as: 'list'
});

// User Relationships
User.hasMany(Task, {
    foreignKey: 'userId',
    as: 'tasks'
});

Task.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
});

User.hasMany(List, {
    foreignKey: 'userId',
    as: 'lists'
});

List.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
});

module.exports = { Task, List, User };

