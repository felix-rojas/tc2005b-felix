# Álgebra Relacional

-Tuplas son los elementos que adicionan a la cardinalidad de uno de los operandos de las tablas.
-Las tuplas se entienden como filas de una tabla
-Cardinalidad es el número de columnas
-Grado es el número de columnas
-Dominio es el tipo de datos de las columnas 

## Proyección

Operador binario conmutativo que disminuye el grado de las tablas (quita columnas)

## Selección

Operador binario conmutativo que disminuye la cardinalidad de las tablas (quita filas)

## Teta Join

Permite la union de tablas que no tengan relación pero utiliza una condición para unir las tablas
Es un operador 

## Natural Join ><

Complejidad n²

### Ejercicio 1

"Descripción de materiales con claves mayores a 200 y precio menor a 100"

Sigma [ (Clave > 200 AND Precio < 100) , Materiales ]
Pi [Descripcion, Materiales]

### Ejercicio 2

"Descripción de materiales que han sido entregados para el proyecto Aguascalientes"

Pi {Descripción, Sigma[ Denominacion = "Aguascalientes" ((Entregan >< Materiales) >< Proyectos) ]}