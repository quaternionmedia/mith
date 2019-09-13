from fastapi import FastAPI, Form
from starlette.staticfiles import StaticFiles
from starlette.requests import Request
from uvicorn import run
from sys import argv

app = FastAPI()

apiPrefix = '/api'
api = FastAPI(openapi_prefix=apiPrefix)

@api.get('/cover')
def cover():
    return '/images/elsuit.jpg'

@api.post('/contact')
async def contact(
        name: str = Form(...),
        email: str = Form(...),
        message: str = Form(...)):
    print(f'message from {name} at {email} saying: {message}')
    return 'ok!'

app.mount(apiPrefix, api)
app.mount("/images", StaticFiles(directory='images'))
app.mount("/", StaticFiles(directory='dist', html=True), name="static")



if __name__ == '__main__':
    run(app, host="0.0.0.0")
