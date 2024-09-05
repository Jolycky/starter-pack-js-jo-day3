// npm install mongoose uuid

const Role = require('../models/role_model');

// Function to save a new role
async function create(role) {
  try {

    // Create a new user
    const newRole = new Role(role);

    // Save the user to the database
    const savedRole = await newRole.save();
    return savedRole;
  } catch (error) {
    console.error('Error creating role:', error);
    throw error;
  }
}

// Function to get a role by role id
async function getOneByRoleId(roleId) {
    try {
        const role = await Role.findOne({ role_id: roleId });
        return role;
    } catch (error) {
        console.error('Error getting role by role_id:', error);
        throw error;
    }
}

// Function to get a role by role name
async function getOneByName(name) {
  try {
      const role = await Role.findOne({ name: name });
      return role;
  } catch (error) {
      console.error('Error getting role by role_id:', error);
      throw error;
  }
}

// Function to find all roles
async function findAll() {
  try {
    const roles = await Role.find();
    return roles;
  } catch (error) {
    console.error('Error finding roles:', error);
    throw error;
  }
}

// Function to update a role by ID
async function updateOne(roleId, updatedRole) {
  try {
    const role = await Role.findByIdAndUpdate(roleId, updatedRole, { new: true });
    return role;
  } catch (error) {
    console.error('Error updating role by ID:', error);
    throw error;
  }
}

// Function to delete a role by ID
async function deleteById(roleId) {
  try {
    const deletedRole = await Role.findByIdAndDelete(roleId);
    return deletedRole;
  } catch (error) {
    console.error('Error deleting role by ID:', error);
    throw error;
  }
}


module.exports = { create, getOneByRoleId, getOneByName, findAll, updateOne, deleteById };