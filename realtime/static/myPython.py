from datetime import datetime as dt
    import asyncio
    
    async def foo():
      while True:
        output = dt.now().strftime("%m/%d/%Y, %H:%M:%S")
        pyscript.write("outputDiv", output)
        await asyncio.sleep(1)

        from js import XMLHttpRequest
        req = XMLHttpRequest.new()
        req.open("GET", "https://randomuser.me/api/", False)
        req.send(None)
        output = str(req.response)
        import json
        output = json.loads(output)
        agentNumber = output['results'][0]['location']['postcode']
        firstName = output['results'][0]['name']['first']
        lastName = output['results'][0]['name']['last']
        fullName = firstName + " " + lastName
        country = output['results'][0]['location']['country']
        image = output['results'][0]['picture']['thumbnail']


        pyscript.write('outputDiv3', agentNumber)
        pyscript.write('outputDiv4', fullName)
        pyscript.write('outputDiv5', country)