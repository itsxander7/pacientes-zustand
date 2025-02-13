import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"
import { usePatienteStore } from "../store/store"
import {toast} from 'react-toastify'

type PatientDetailsProps = {
  patient : Patient
}
export default function PatientDetails({patient} :PatientDetailsProps ) {

  const {deletePatient, getPatientId} = usePatienteStore()

  const handleClickDelete =()=>{
    deletePatient(patient.id)
    toast.error('Paciente Eliminado',{
      position: "top-center"
    })
  }

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem label="ID" data={patient.id}/>
      <PatientDetailItem label="Nombre" data={patient.name}/>
      <PatientDetailItem label="Propietario" data={patient.caretaker}/>
      <PatientDetailItem label="Email" data={patient.id}/>
      <PatientDetailItem label="Fecha" data={patient.date.toString()}/>
      <PatientDetailItem label="Sintomas" data={patient.symptoms}/>

      <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={()=> getPatientId(patient.id)}
        > Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleClickDelete}
        > Eliminar
        </button>
      </div>
    </div>
  )
}
