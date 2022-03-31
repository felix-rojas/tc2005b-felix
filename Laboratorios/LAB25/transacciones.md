# Transacciones 
Las transaccions consisten de 4 propiedades **ACID**

* A. Atomicidad
* C. Coherencia
* I. Aislamiento (isolation)
* D. Durabilidad

>Garantiza con las transacciones todas las propiedades de ACID

# Pruebas
Depositemos 50000 pesos a la cuenta 123 (Petronel Pascual)

![Antes](antes.png)

Ejecutamos:

```SQL
CALL registrarMovimientoBancario (123,1,50000)
```
![Registrado](registra.png)

![Saldo nuevo de usuario](saldousuario.png)

Retiremos 2100 pesos a la cuenta 123 (Petronela Pascual)

![Saldo previo de usuario](saldousuario.png)

Ejecutamos:

```SQL
CALL registrarMovimientoBancario (123,2,2100)
```
![Saldo en usuario](retiro.png)

![Registro en operaciones bancarias](registrotransaccion.png)
