def get_element_by_name(name):
    qres = g.query(
    """
    PREFIX table:<http://www.daml.org/2003/01/periodictable/PeriodicTable#>
    PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX xsd:<http://www.w3.org/2001/XMLSchema#>

    SELECT  ?s ?at ?aw ?gr ?pd ?bl ?ss ?col ?class ?cr
    { 
    ?g rdf:type table:Element;
    table:name table:"""+name+""" ;
    table:symbol ?s;
    table:atomicNumber ?at;
    table:atomicWeight ?aw;
    table:group ?gr;
    table:period ?pd;
    table:block ?bl;
    table:standardState ?ss;
    table:color ?col;
    table:classification ?class;
    table:casRegistryID ?cr;

  
    }""")

    # print(qres)
    for row in qres:
       print(row)