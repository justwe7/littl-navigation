import request from '@/utils/request'
import request2 from '@/utils/request2'

const api = {
  user: '/user',
  role: '/role',
  service: '/v1/nav/list',
  update: '/v1/nav/update',
  getlinks: '/v1/tlink/list',
  // service: '/service',
  permission: '/permission',
  permissionNoPager: '/permission/no-pager',
  orgTree: '/org/tree'
}

export default api

export function getUserList (parameter) {
  return request({
    url: api.user,
    method: 'get',
    params: parameter
  })
}

export function getRoleList (parameter) {
  return request({
    url: api.role,
    method: 'get',
    params: parameter
  })
}

export function getShortList (parameter) {
  return request2({
    url: api.getlinks,
    method: 'get',
    params: parameter
  })
}

export function getServiceList (parameter) {
  return request2({
    url: api.service,
    method: 'get',
    params: parameter
  })
}

export function updateItem (parameter) {
  return request2({
    url: api.update,
    method: 'post',
    data: parameter
  })
}

export function getPermissions (parameter) {
  return request({
    url: api.permissionNoPager,
    method: 'get',
    params: parameter
  })
}

export function getOrgTree (parameter) {
  return request({
    url: api.orgTree,
    method: 'get',
    params: parameter
  })
}

// id == 0 add     post
// id != 0 update  put
export function saveService (parameter) {
  return request({
    url: api.service,
    method: parameter.id === 0 ? 'post' : 'put',
    data: parameter
  })
}

export function saveSub (sub) {
  return request({
    url: '/sub',
    method: sub.id === 0 ? 'post' : 'put',
    data: sub
  })
}
