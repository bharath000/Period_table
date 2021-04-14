import rdflib

g = rdflib.Graph()
g.parse("PeriodicTable.owl")
print("graph has %s statements." % len(g))


## Query 1: Find element name, element symbol, atomic weight and color of
## all elements from the group with group name "Halogen"

def get_states():
    qres = g.query(
    """
    PREFIX table:<http://www.daml.org/2003/01/periodictable/PeriodicTable#>
    PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX xsd:<http://www.w3.org/2001/XMLSchema#>

    SELECT DISTINCT (str(?n) as ?standardState)
    { 
    ?g rdf:type table:Group;
    table:element ?e.
    ?e table:standardState ?n;
    
    
    }""")

    # print(qres)
    states = []
    for row in qres:
        row = "%s" % row
        states.append(row.split("#")[-1])

    result = {"states":states}
    return result
    


def get_elements_by_states(state):
    qres = g.query(
    """
    PREFIX table:<http://www.daml.org/2003/01/periodictable/PeriodicTable#>
    PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX xsd:<http://www.w3.org/2001/XMLSchema#>

    SELECT DISTINCT (str(?n) as ?NAME)
    { 
    ?g rdf:type table:Element;
    table:standardState table:"""+state+""";
    table:name ?n;
  
    }""")

    # print(qres)
    ele = []
    for row in qres:
        row = "%s" % row
        ele.append(row.split("#")[-1])

    result = {"ele":ele}
    return result

def get_classifications():
    qres = g.query(
    """
    PREFIX table:<http://www.daml.org/2003/01/periodictable/PeriodicTable#>
    PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX xsd:<http://www.w3.org/2001/XMLSchema#>

    SELECT DISTINCT (str(?n) as ?classification)
    { 
    ?g rdf:type table:Group;
    table:element ?e.
    ?e table:classification ?n;
    
    
    }""")

    # print(qres)
    clss =[]
    for row in qres:
        row = "%s" % row
        clss.append(row.split("#")[-1])

    result = {"classes":clss}
    return result


def get_elements_by_class(_class):
    qres = g.query(
    """
    PREFIX table:<http://www.daml.org/2003/01/periodictable/PeriodicTable#>
    PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX xsd:<http://www.w3.org/2001/XMLSchema#>

    SELECT DISTINCT (str(?n) as ?NAME)
    { 
    ?g rdf:type table:Element;
    table:classification table:"""+_class+""";
    table:name ?n;
  
    }""")

    # print(qres)
    ele = []
    for row in qres:
        row = "%s" % row
        ele.append(row.split("#")[-1])

    result = {"ele":ele}
    return result

def get_blocks():
    qres = g.query(
    """
    PREFIX table:<http://www.daml.org/2003/01/periodictable/PeriodicTable#>
    PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX xsd:<http://www.w3.org/2001/XMLSchema#>

    SELECT DISTINCT (str(?n) as ?block)
    { 
    ?g rdf:type table:Group;
    table:element ?e.
    ?e table:block ?n;
    
    
    }""")

    # print(qres)
    blk = []
    for row in qres:
        row = "%s" % row
        blk.append(row.split("#")[-1])
    result = {"blocks":blk}
    return result
def get_elements_by_block(block):
    qres = g.query(
    """
    PREFIX table:<http://www.daml.org/2003/01/periodictable/PeriodicTable#>
    PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX xsd:<http://www.w3.org/2001/XMLSchema#>

    SELECT DISTINCT (str(?n) as ?NAME)
    { 
    ?g rdf:type table:Element;
    table:block table:"""+block+""";
    table:name ?n;
  
    }""")

    # print(qres)
    ele = []
    for row in qres:
        row = "%s" % row
        ele.append(row.split("#")[-1])

    result = {"ele":ele}
    return result

def get_groups():
    qres = g.query(
    """
    PREFIX table:<http://www.daml.org/2003/01/periodictable/PeriodicTable#>
    PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX xsd:<http://www.w3.org/2001/XMLSchema#>

    SELECT DISTINCT (str(?n) as ?group)
    { 
    ?g rdf:type table:Group;
    table:element ?e.
    ?e table:group ?n;
    
    
    }""")

    # print(qres)
    grp = []
    for row in qres:
        row = "%s" % row
        grp.append(row.split("#")[-1])
    result = {"groups":grp}
    return result


def get_elements_by_group(group):
    qres = g.query(
    """
    PREFIX table:<http://www.daml.org/2003/01/periodictable/PeriodicTable#>
    PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX xsd:<http://www.w3.org/2001/XMLSchema#>

    SELECT DISTINCT (str(?n) as ?NAME)
    { 
    ?g rdf:type table:Element;
    table:group table:"""+group+""";
    table:name ?n;
  
    }""")

    # print(qres)
    ele = []
    for row in qres:
        row = "%s" % row
        ele.append(row.split("#")[-1])

    result = {"ele":ele}
    return result

def get_periods():
    qres = g.query(
    """
    PREFIX table:<http://www.daml.org/2003/01/periodictable/PeriodicTable#>
    PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX xsd:<http://www.w3.org/2001/XMLSchema#>

    SELECT DISTINCT (str(?n) as ?period)
    { 
    ?g rdf:type table:Group;
    table:element ?e.
    ?e table:period ?n;
    
    
    }""")

    # print(qres)
    per = []
    for row in qres:
        row = "%s" % row
        per.append(row.split("#")[-1])
    print(per)
    result = {"periods":per}
    return result

def get_elements_by_period(period):
    qres = g.query(
    """
    PREFIX table:<http://www.daml.org/2003/01/periodictable/PeriodicTable#>
    PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX xsd:<http://www.w3.org/2001/XMLSchema#>

    SELECT  (str(?n) as ?NAME)
    { 
    ?g rdf:type table:Element;
    table:period table:"""+period+""";
    table:name ?n;
  
    }""")

    # print(qres)
    ele = []
    for row in qres:
        row = "%s" % row
        ele.append(row.split("#")[-1])

    result = {"ele":ele}
    return result


def get_element_by_name(name):
    qres = g.query(
    """
    PREFIX table:<http://www.daml.org/2003/01/periodictable/PeriodicTable#>
    PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX xsd:<http://www.w3.org/2001/XMLSchema#>

    SELECT  (str(?n) as ?NAME) (str(?s) as ?Symbol) (str(?at) as ?AtomicNumber) (str(?aw) as ?AtomicWeight) (str(?gr) as ?Group) (str(?pd) as ?Period) 
    (str(?bl) as ?Block) (str(?ss) as ?StandardState) (str(?col) as ?Color) (str(?class) as ?Class) (str(?cr) as ?CaseRegister)
    { 
    ?g rdf:type table:Element;
    table:name """+'"'+name+'"'+"""^^xsd:string;
    table:name ?n;
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

  
    re = {}
    for row in qres:
        re["name"] = str(row["NAME"])
        re["symbol"] = str(row["Symbol"])
        re["atomicweight"] = str(row["AtomicWeight"])
        re["atomicnumber"] = str(row["AtomicNumber"])
        re["group"] = str(row["Group"]).split("#")[-1]
        re["period"] = str(row["Period"]).split("#")[-1]
        re["block"] = str(row["Block"]).split("#")[-1]
        re["StandardState"] = str(row["StandardState"]).split("#")[-1]
        re["color"] = str(row["Color"])
        re["class"] = str(row["Class"]).split("#")[-1]
        re["CaseRegister"] = str(row["CaseRegister"])
        


        



        
        
    
    return re



# get_states()
# get_elements_by_states("solid")

# get_classifications()
# get_elements_by_class("Semi-metallic")

# get_blocks()
# get_elements_by_block("d-block")

# get_groups()
# get_periods()

# get_elements_by_period("period_1")
# get_elements_by_group("group_1")

# get_element_by_name("nitrogen")


