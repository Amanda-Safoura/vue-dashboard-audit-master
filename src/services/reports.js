import axios from 'axios'
import { API_URL, config } from '@/services/auth'
import { getAuditSubsectionById } from './auditSubsections'

export const getReports = async (auditId) => {
  try {
    const response = await axios.get(`${API_URL}/audits/reports/${auditId}`, config)

    const reports = await Promise.all(response.data.map(async (report) => {
      const subsectionOpenAPI = report.audit_subsection.split('/')
      const subsection = await getAuditSubsectionById(subsectionOpenAPI[subsectionOpenAPI.length - 1])

      const reportDate = new Date(report.createdAt)
      report.createdAt = reportDate.toLocaleString()

      return {
        ...report,
        name: subsection.name
      }
    }))

    console.log(reports) // Maintenant, c'est bien un tableau de données et non de promesses
    return reports
  } catch (error) {
    throw new Error('Erreur lors de la récupération des rapports')
  }
}


// export const createReport = async (auditId, subsectionId, reportData) => {
//   try {
//     const response = await axios.post(`${API_URL}/audits/${auditId}/subsections/${subsectionId}/reports`, reportData, config);
//     return response.data;
//   } catch (error) {
//     throw new Error('Erreur lors de la création du rapport');
//   }
// };

// export const updateReport = async (auditId, subsectionId, reportId, reportData) => {
//   try {
//     const response = await axios.patch(`${API_URL}/audits/${auditId}/subsections/${subsectionId}/reports/${reportId}`, reportData, config);
//     return response.data;
//   } catch (error) {
//     throw new Error('Erreur lors de la mise à jour du rapport');
//   }
// };

// export const deleteReport = async (auditId, subsectionId, reportId) => {
//   try {
//     await axios.delete(`${API_URL}/audits/${auditId}/subsections/${subsectionId}/reports/${reportId}`, config);
//   } catch (error) {
//     throw new Error('Erreur lors de la suppression du rapport');
//   }
// };
