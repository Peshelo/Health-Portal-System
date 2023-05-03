// modules/createAppointment.js

import axios from 'axios'

export default function ({ $axios }, inject) {
  inject('createAppointment', async (doctorId, start) => {
    const formData = new FormData()
    formData.append('doctorId', doctorId)
    formData.append('start', start)

    const response = await $axios.post('http://localhost:8080/v1/appointments/createAppointment', formData)

    return response.data
  })
}