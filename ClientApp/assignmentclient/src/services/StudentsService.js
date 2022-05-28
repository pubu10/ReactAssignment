import http from "../common/http-common";

const create = (data) => {
  return http.post("Student/Add", data);
};

const update = (data) => {
  return http.put("Student/Edit", data);
};

const getAll = () => {
  return http.get("Student/GetAll");
};

const get = (id) => {
  return http.get(`Student/GetById/${id}`);
};

var isExists = new Boolean(false);
isExists = (classificationID) => {
  return http.get(`Student/IsExists/${classificationID}`);
};

const remove = (id) => {
  return http.delete(`Student/Delete/${id}`);
};

const BulkRemove = (data) => {
  return http.post("Student/BulkRemove", data);
};

const getAllComboModel = () => {
  return http.get("Student/GetAllComboModel");
};

// eslint-disable-next-line
export default {
  create,
  update,
  getAll,
  get,
  remove,
  getAllComboModel,
  BulkRemove,
  isExists,
};
