from flask import Flask, jsonify
from flask import abort
from flask import make_response
from flask import request
import mysql.connector as mysql
from flask_cors import CORS

import quries

app = Flask(__name__)
CORS(app)

@app.route('/periodictable/standard_states/', methods=['GET'])
def states():
    re = quries.get_states()
    return jsonify(re)

@app.route('/periodictable/standard_state/<string:state>', methods=['GET'])
def s_elements(state):
    re = quries.get_elements_by_states(state)
    return jsonify(re)

@app.route('/periodictable/classifications/', methods=['GET'])
def clases():
    re = quries.get_classifications()
    return jsonify(re)
@app.route('/periodictable/classification/<string:clss>', methods=['GET'])
def c_elements(clss):
    re = quries.get_elements_by_class(clss)
    return jsonify(re)
@app.route('/periodictable/blocks/', methods=['GET'])
def blocks():
    re = quries.get_blocks()
    return jsonify(re)
@app.route('/periodictable/block/<string:blk>', methods=['GET'])
def b_elements(blk):
    re = quries.get_elements_by_block(blk)
    return jsonify(re)
@app.route('/periodictable/groups/', methods=['GET'])
def groups():
    re = quries.get_groups()
    return jsonify(re)
@app.route('/periodictable/group/<string:gnum>', methods=['GET'])
def g_elments(gnum):
    re = quries.get_elements_by_group(gnum)
    return jsonify(re)
@app.route('/periodictable/periods/', methods=['GET'])
def periods():
    re = quries.get_periods()
    return jsonify(re)
@app.route('/periodictable/period/<string:pnum>', methods=['GET'])
def p_elemets(pnum):
    re = quries.get_elements_by_period(pnum)
    return jsonify(re)
@app.route('/periodictable/element/<string:sym>',methods=['GET'])
def get_item(sym):
    re = quries.get_element_by_name(sym)

    # for i in range(0,len(re)):
    #     if "http" in re[i]:
    #         re[i] = re[i].split("#")[-1]
    
    # dict1 = {}
    # for i in range(1,len(re)+1):
    #     dict1[i] = re[i-1]
    return jsonify(re)


if __name__ == '__main__':
    # quries.get_states()
    app.run(host='localhost',debug=True)