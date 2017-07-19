# -*- coding: utf-8 -*-

import os
import pickle
import shelve
import json

from bottle import route, run, get, static_file, request, post, delete

CUR_DIR = os.path.dirname(os.path.realpath(__file__))


@get('/example/servicehttp/')
def serve_http_example():
    return {"arrets": [
        "Berault",
        "Saint-Mandé",
        "Porte de Vincennes",
        "Nation"
    ]}

@get('/person/:id')
def person_ressource(id):
    return {"name": "Meryl", "id": id}


@post('/print/headers')
def print_headers():
    for header in request.headers.items():
        print("- %s: %s" % header)
        return dict(request.headers.items())


store = shelve.open(os.path.join(CUR_DIR, 'agenda.db'))


@get('/contacts')
def get_contacts():
    return {"results": [json.loads(k) for k in store.keys()]}

@post('/contacts')
def post_contact():
    print(request.json)
    store[json.dumps(request.json)] = True;

@delete('/contacts/')
def delete_contact():
    
    print("meh", request.json)
    del store[json.dumps(request.json)]

@route('/<path:path>')
def callback(path):
    return static_file(path, root=CUR_DIR)


run(host='0.0.0.0', port=8080,  debug=True, autoreload=True)
