CREATE TABLE donaciones (
    id_donacion       INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_tipo_donacion  INTEGER NOT NULL,
    id_donador        INTEGER NOT NULL,
    id_campania       INTEGER,
    fecha_creacion    TIMESTAMP NOT NULL DEFAULT NOW(),
    state             TEXT NOT NULL DEFAULT 'Pendiente',
    checker           INTEGER NOT NULL DEFAULT 0
);
