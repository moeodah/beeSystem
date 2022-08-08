import Api from '@/services/Api'

export default {
  index () {
    return Api().get('Employees')
  },
  show (employeeId) {
    return Api().get(`Employees/${employeeId}`)
  },
  post (employee) {
    return Api().post('Employees', employee)
  },
  del (employeeId) {
    return Api().delete(`Employees/${employeeId}`)
  },
}
