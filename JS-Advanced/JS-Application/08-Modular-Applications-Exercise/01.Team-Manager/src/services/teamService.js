import * as api from './api.js';
import * as requester from './../helpers/ajaxRequester.js';


export function getAll() {
    return requester.get(api.allTeamsUrl);
}

export function getOne(id) {
    return requester.get(`${api.allTeamsUrl}/${id}`);
}

export function createTeam(data) {
    return requester.post(api.allTeamsUrl, data);
}

export function getAllMembers() {
    return requester.get(`${api.allMembersUrl}?where=status%3D%22member%22`);
}

export function getTeamMembers(id) {
    return requester.get(`${api.allMembersUrl}?where=teamId%3D%22${id}%22&load=user%3D_ownerId%3Ausers`)
}

export function addMember(data) {
    return requester.post(api.allMembersUrl, data);
}

export function approveMember(data) {
    return requester.put(`${api.allMembersUrl}/${data._id}`, data);
}