import { request } from '@/utils/request'

export type Gender = 'Male' | 'Female'

export interface UpdateUserRequest {
  name: string
  gender: Gender
}

export const userApi = {
  update(updateUserRequest: UpdateUserRequest) {
    return request.put('/user', updateUserRequest)
  }
}
