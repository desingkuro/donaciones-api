CREATE TABLE donaciones (
    id_donacion      TEXT PRIMARY KEY,
    id_tipo_donacion TEXT NOT NULL,
    id_donador       INTEGER NOT NULL,
    id_campania      INTEGER,
    fecha_creacion   TIMESTAMP NOT NULL DEFAULT NOW()
);

