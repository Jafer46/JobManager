import { Role } from "@/types/data.types";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const getRoles = async () =>
  axios
    .get<Role[]>(`${apiUrl}/api/v1/roles`)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });

export const getRole = async (id: string) =>
  axios
    .get<Role>(`${apiUrl}/api/v1/roles/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });

/**
 * Creates a new role
 * @param {Partial<Role>} role The role to be created
 * @returns {Promise<Role>} The created role
 */
export const createRole = async (role: Partial<Role>) =>
  axios
    .post<Role>(`${apiUrl}/api/v1/roles`, role)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });

/**
 * Updates an existing role
 * @param {string} id The id of the role to be updated
 * @param {Partial<Role>} role The role to be updated
 * @returns {Promise<Role>} The updated role
 */
export const updateRole = async (id: string, role: Partial<Role>) =>
  axios
    .put<Role>(`${apiUrl}/api/v1/roles/${id}`, role)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });

/**
 * Deletes a role
 * @param {string} id The id of the role to be deleted
 * @returns {Promise<void>} A promise that resolves when the role is deleted
 */
export const deleteRole = async (id: string) =>
  axios
    .delete(`${apiUrl}/api/v1/roles/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
