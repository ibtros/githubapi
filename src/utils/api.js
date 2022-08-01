import axios from 'axios';

const GITHUB_API = "https://api.github.com";

// Gets all users that match with the search parameter taking it as login
export function getUsersByLogin(path, login) {
  return axios.get(`${GITHUB_API}${path}`)
      .then((result) => result.data.filter(user => user.login.toLowerCase().includes(login)));
}

// Gets a user by login
export function getUserByLogin(path) {
  return axios.get(`${GITHUB_API}${path}`)
      .then((result) => result.data);
}

// Gets user's repos by login
export function getUserReposByLogin(path) {
  return axios.get(`${GITHUB_API}${path}`)
      .then((result) => result.data);
}

// Gets all repositories that match with the search parameter taking it as the repo name
export function getRepositoriesByName(path, name) {
  return axios.get(`${GITHUB_API}${path}`)
      .then((result) => result.data.filter(repository => repository.name.toLowerCase().includes(name)));
}

// Gets a repo by name
export function getRepositoryByName(path) {
  return axios.get(`${GITHUB_API}${path}`)
      .then((result) => result.data);
}