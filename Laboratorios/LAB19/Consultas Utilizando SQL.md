# Creación de Consultas Utilizando SQL con Funciones Agregadas y Sub-consultas

>La suma de las cantidades e importe total de todas las entregas realizadas durante el 97.

```SQL
SELECT SUM(cantidad) as 'Total_materiales_entregados', 
    SUM(precio) 'Importe_Total' 
FROM entregan, materiales
WHERE YEAR(fecha) = '1997';
```


>Para cada proveedor, obtener la razón social del proveedor, número de entregas e importe total de las entregas realizadas.

```SQL
/* Query to obtain RFC and deliveries */
SELECT p.razonsocial, COUNT(e.rfc) as 'Numero_Entregas', (m.precio + m.impuesto)*SUM(e.cantidad) as 'Importe_Total'
FROM proveedores as p, entregan as e, materiales as m
WHERE p.rfc = e.rfc AND m.clave = e.clave
GROUP BY p.razonsocial;
```

>Por cada material obtener la clave y descripción del material, la cantidad total entregada, la mínima cantidad entregada, la máxima cantidad entregada, el importe total de las entregas de aquellos materiales en los que la cantidad promedio entregada sea mayor a 400.

```SQL
SELECT m.clave, m.descripcion, SUM(e.cantidad) as 'total_entregada', MIN(e.cantidad) as 'minima_entregada', MAX(e.cantidad) as 'maxima-entregada', (m.precio + m.impuesto) * SUM(e.cantidad) as 'Importe_Total'
FROM materiales as m, entregan as e
WHERE m.clave = e.clave 
GROUP BY m.clave
HAVING (AVG(e.cantidad)) > 400
```

>Para cada proveedor, indicar su razón social y mostrar la cantidad promedio de cada material entregado, detallando la clave y descripción del material, excluyendo aquellos proveedores para los que la cantidad promedio sea menor a 500.

```SQL
/*vista materiales*/
SELECT p.razonsocial, m.clave, m.descripcion
FROM materiales as m, entregan as e, proveedores as p 
WHERE e.rfc = p.rfc
GROUP BY m.clave
JOIN
SELECT e.cantidad
FROM entregan as e
```

>Mostrar en una solo consulta los mismos datos que en la consulta anterior pero para dos grupos de proveedores: aquellos para los que la cantidad promedio entregada es menor a 370 y aquellos para los que la cantidad promedio entregada sea mayor a 450. 