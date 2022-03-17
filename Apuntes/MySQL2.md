# MySQL2

Package to manage databases. But why use a package?

We cannot maintain an open session to avoid using memory because they will take resources whenever they make a SQL query

### Advantages

What do we do?
- Open session
- Make query
- End query
- Close session

This allows the databse motor to get more services going and it has better performance

### Disadvantages

Each query implies opening and closing session so it will take *forever*

## Why this pkg then?

We can just create a pool so it optimizes the queries

## Avoiding SQL injections

Put a ? to showcase that the attribute is just an attribute and NOT a command for SQL