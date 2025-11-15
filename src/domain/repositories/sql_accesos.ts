export const sql_accesos = {
  getAll: `
    SELECT * FROM donaciones
  `,

  getById: `
    SELECT * FROM donaciones WHERE id_donacion = $1
  `,

  create: `
    INSERT INTO donaciones (
      id_tipo_donacion,
      id_donador,
      id_campania,
      fecha_creacion,
      state,
      checker
    ) VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *
  `,

  update: `
    UPDATE donaciones SET
      id_tipo_donacion = $2,
      id_donador       = $3,
      id_campania      = $4,
      fecha_creacion   = $5,
      state            = $6,
      checker          = $7
    WHERE id_donacion = $1
    RETURNING *
  `,

  delete: `
    DELETE FROM donaciones WHERE id_donacion = $1
    RETURNING *
  `,
};
