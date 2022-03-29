SELECT rfc razonsocial
FROM Proveedores pr, entregan e, proyectos p
WHERE pr.rfc

SELECT SUM(Cantidad)
FROM entregan
WHERE pr.rfc = e.rfc AND