export const sql_accesos = {
  getAll: `SELECT * FROM donaciones`,
  getById: `SELECT * FROM donaciones WHERE id_donacion = $1`,
  create: `INSERT INTO donaciones (id_donacion, id_tipo_donacion, id_donador, id_campania, fecha_creacion) VALUES ($1, $2, $3, $4, $5)`,
  update: `UPDATE donaciones SET id_tipo_donacion = $2, id_donador = $3, id_campania = $4, fecha_creacion = $5 WHERE id_donacion = $1`,
  delete: `DELETE FROM donaciones WHERE id_donacion = $1`,
  getByCorreo: `SELECT * FROM donaciones WHERE id_donacion = $1`,
  getByUuid: `SELECT * FROM donaciones WHERE id_donacion = $1`, 
};