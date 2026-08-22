import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faGlobe } from '@fortawesome/free-solid-svg-icons';

export default function NationsPage() {
  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2><FontAwesomeIcon icon={faGlobe} className="me-2" /> Mantenimiento de Naciones</h2>
        <button className="btn btn-primary d-flex align-items-center gap-2">
          <FontAwesomeIcon icon={faPlus} /> Crear Nación
        </button>
      </div>
      <table className="table table-striped border">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Argentina</td>
            <td>
              <button className="btn btn-sm btn-warning me-2">Editar</button>
              <button className="btn btn-sm btn-danger">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}