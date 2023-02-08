import { request } from './axios'

// 请求技能的示例
export const getSkillData = async () => {
  return await request({ method: 'get', url: '/skill' })
}
